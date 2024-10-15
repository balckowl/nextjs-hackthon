import { relations } from 'drizzle-orm'
// ユーザーテーブル（Auth.js）
import { boolean, integer, pgTable, primaryKey, serial, text, timestamp } from 'drizzle-orm/pg-core'
import { drizzle } from 'drizzle-orm/postgres-js'
import type { AdapterAccountType } from 'next-auth/adapters'
import postgres from 'postgres'

const connectionString = 'postgres://postgres:postgres@localhost:5432/drizzle'
const pool = postgres(connectionString, { max: 1 })

export const db = drizzle(pool)

export const users = pgTable('user', {
  id: text('id')
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  name: text('name'),
  email: text('email').unique(),
  emailVerified: timestamp('emailVerified', { mode: 'date' }),
  image: text('image'),
})

export const accounts = pgTable(
  'account',
  {
    userId: text('userId')
      .notNull()
      .references(() => users.id, { onDelete: 'cascade' }),
    type: text('type').$type<AdapterAccountType>().notNull(),
    provider: text('provider').notNull(),
    providerAccountId: text('providerAccountId').notNull(),
    refresh_token: text('refresh_token'),
    access_token: text('access_token'),
    expires_at: integer('expires_at'),
    token_type: text('token_type'),
    scope: text('scope'),
    id_token: text('id_token'),
    session_state: text('session_state'),
  },
  (account) => ({
    compoundKey: primaryKey({
      columns: [account.provider, account.providerAccountId],
    }),
  }),
)

export const sessions = pgTable('session', {
  sessionToken: text('sessionToken').primaryKey(),
  userId: text('userId')
    .notNull()
    .references(() => users.id, { onDelete: 'cascade' }),
  expires: timestamp('expires', { mode: 'date' }).notNull(),
})

export const verificationTokens = pgTable(
  'verificationToken',
  {
    identifier: text('identifier').notNull(),
    token: text('token').notNull(),
    expires: timestamp('expires', { mode: 'date' }).notNull(),
  },
  (verificationToken) => ({
    compositePk: primaryKey({
      columns: [verificationToken.identifier, verificationToken.token],
    }),
  }),
)

export const authenticators = pgTable(
  'authenticator',
  {
    credentialID: text('credentialID').notNull().unique(),
    userId: text('userId')
      .notNull()
      .references(() => users.id, { onDelete: 'cascade' }),
    providerAccountId: text('providerAccountId').notNull(),
    credentialPublicKey: text('credentialPublicKey').notNull(),
    counter: integer('counter').notNull(),
    credentialDeviceType: text('credentialDeviceType').notNull(),
    credentialBackedUp: boolean('credentialBackedUp').notNull(),
    transports: text('transports'),
  },
  (authenticator) => ({
    compositePK: primaryKey({
      columns: [authenticator.userId, authenticator.credentialID],
    }),
  }),
)

export const boxShadows = pgTable('box-shadows', {
  id: serial('id').primaryKey(),
  user_id: text('user_id')
    .notNull()
    .references(() => users.id),
  created_at: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').$onUpdate(() => new Date()),
  is_shared: boolean('is_shared').notNull().default(false),
  offset_x: integer('offset_x').notNull().default(0),
  offset_y: integer('offset_y').notNull().default(0),
  blur_radius: integer('blur_radius').notNull().default(0),
  spread_radius: integer('spread_radius').notNull().default(0),
  color: text('color').notNull(),
  border_radius: integer('border_radius').notNull().default(0),
})

export const waves = pgTable('waves', {
  id: serial('id').primaryKey(),
  user_id: text('user_id').notNull(),
  // TODO：ここに外部キーいれる
  created_at: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').$onUpdate(() => new Date()),
  is_shared: boolean('is_shared').notNull().default(false),
  type: text('type').notNull(),
  direction: text('direction').notNull(),
  complexity: integer('complexity').notNull(),
  color: text('color').notNull(),
})

export const userRelations = relations(users, ({ many }) => ({
  boxShadows: many(boxShadows),
  waves: many(waves),
}))

export const boxRelations = relations(boxShadows, ({ one }) => ({
  author: one(users, {
    fields: [boxShadows.user_id],
    references: [users.id],
  }),
}))

export const wavesRelations = relations(waves, ({ one }) => ({
  author: one(users, {
    fields: [waves.user_id],
    references: [users.id],
  }),
}))

export type SelectBlog = typeof boxShadows.$inferSelect
