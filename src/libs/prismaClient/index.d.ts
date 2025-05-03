
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model TutorProfile
 * 
 */
export type TutorProfile = $Result.DefaultSelection<Prisma.$TutorProfilePayload>
/**
 * Model TeachingLevel
 * 
 */
export type TeachingLevel = $Result.DefaultSelection<Prisma.$TeachingLevelPayload>
/**
 * Model TutorLevel
 * 
 */
export type TutorLevel = $Result.DefaultSelection<Prisma.$TutorLevelPayload>
/**
 * Model BookingTutor
 * 
 */
export type BookingTutor = $Result.DefaultSelection<Prisma.$BookingTutorPayload>
/**
 * Model Experience
 * 
 */
export type Experience = $Result.DefaultSelection<Prisma.$ExperiencePayload>
/**
 * Model Review
 * 
 */
export type Review = $Result.DefaultSelection<Prisma.$ReviewPayload>
/**
 * Model SubjectCategory
 * 
 */
export type SubjectCategory = $Result.DefaultSelection<Prisma.$SubjectCategoryPayload>
/**
 * Model TutorSubject
 * 
 */
export type TutorSubject = $Result.DefaultSelection<Prisma.$TutorSubjectPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  USER: 'USER',
  TUTOR: 'TUTOR',
  ADMIN: 'ADMIN'
};

export type Role = (typeof Role)[keyof typeof Role]


export const TeachingTime: {
  WEEKDAY: 'WEEKDAY',
  WEEKEND: 'WEEKEND',
  EVERYDAY: 'EVERYDAY'
};

export type TeachingTime = (typeof TeachingTime)[keyof typeof TeachingTime]


export const TeachingMethod: {
  ONLINE: 'ONLINE',
  ONSITE: 'ONSITE',
  BOTH: 'BOTH'
};

export type TeachingMethod = (typeof TeachingMethod)[keyof typeof TeachingMethod]


export const SexMethod: {
  MAN: 'MAN',
  WOMAN: 'WOMAN',
  NULL: 'NULL'
};

export type SexMethod = (typeof SexMethod)[keyof typeof SexMethod]


export const Language: {
  THAI: 'THAI',
  ENGLISH: 'ENGLISH',
  BOTH: 'BOTH'
};

export type Language = (typeof Language)[keyof typeof Language]


export const BookingStatus: {
  PENDING: 'PENDING',
  CONFIRMED: 'CONFIRMED',
  CANCELLED: 'CANCELLED',
  COMPLETED: 'COMPLETED'
};

export type BookingStatus = (typeof BookingStatus)[keyof typeof BookingStatus]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type TeachingTime = $Enums.TeachingTime

export const TeachingTime: typeof $Enums.TeachingTime

export type TeachingMethod = $Enums.TeachingMethod

export const TeachingMethod: typeof $Enums.TeachingMethod

export type SexMethod = $Enums.SexMethod

export const SexMethod: typeof $Enums.SexMethod

export type Language = $Enums.Language

export const Language: typeof $Enums.Language

export type BookingStatus = $Enums.BookingStatus

export const BookingStatus: typeof $Enums.BookingStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tutorProfile`: Exposes CRUD operations for the **TutorProfile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TutorProfiles
    * const tutorProfiles = await prisma.tutorProfile.findMany()
    * ```
    */
  get tutorProfile(): Prisma.TutorProfileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.teachingLevel`: Exposes CRUD operations for the **TeachingLevel** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TeachingLevels
    * const teachingLevels = await prisma.teachingLevel.findMany()
    * ```
    */
  get teachingLevel(): Prisma.TeachingLevelDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tutorLevel`: Exposes CRUD operations for the **TutorLevel** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TutorLevels
    * const tutorLevels = await prisma.tutorLevel.findMany()
    * ```
    */
  get tutorLevel(): Prisma.TutorLevelDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.bookingTutor`: Exposes CRUD operations for the **BookingTutor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BookingTutors
    * const bookingTutors = await prisma.bookingTutor.findMany()
    * ```
    */
  get bookingTutor(): Prisma.BookingTutorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.experience`: Exposes CRUD operations for the **Experience** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Experiences
    * const experiences = await prisma.experience.findMany()
    * ```
    */
  get experience(): Prisma.ExperienceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.review`: Exposes CRUD operations for the **Review** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reviews
    * const reviews = await prisma.review.findMany()
    * ```
    */
  get review(): Prisma.ReviewDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.subjectCategory`: Exposes CRUD operations for the **SubjectCategory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SubjectCategories
    * const subjectCategories = await prisma.subjectCategory.findMany()
    * ```
    */
  get subjectCategory(): Prisma.SubjectCategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tutorSubject`: Exposes CRUD operations for the **TutorSubject** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TutorSubjects
    * const tutorSubjects = await prisma.tutorSubject.findMany()
    * ```
    */
  get tutorSubject(): Prisma.TutorSubjectDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    TutorProfile: 'TutorProfile',
    TeachingLevel: 'TeachingLevel',
    TutorLevel: 'TutorLevel',
    BookingTutor: 'BookingTutor',
    Experience: 'Experience',
    Review: 'Review',
    SubjectCategory: 'SubjectCategory',
    TutorSubject: 'TutorSubject'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "tutorProfile" | "teachingLevel" | "tutorLevel" | "bookingTutor" | "experience" | "review" | "subjectCategory" | "tutorSubject"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      TutorProfile: {
        payload: Prisma.$TutorProfilePayload<ExtArgs>
        fields: Prisma.TutorProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TutorProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TutorProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TutorProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TutorProfilePayload>
          }
          findFirst: {
            args: Prisma.TutorProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TutorProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TutorProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TutorProfilePayload>
          }
          findMany: {
            args: Prisma.TutorProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TutorProfilePayload>[]
          }
          create: {
            args: Prisma.TutorProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TutorProfilePayload>
          }
          createMany: {
            args: Prisma.TutorProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TutorProfileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TutorProfilePayload>[]
          }
          delete: {
            args: Prisma.TutorProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TutorProfilePayload>
          }
          update: {
            args: Prisma.TutorProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TutorProfilePayload>
          }
          deleteMany: {
            args: Prisma.TutorProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TutorProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TutorProfileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TutorProfilePayload>[]
          }
          upsert: {
            args: Prisma.TutorProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TutorProfilePayload>
          }
          aggregate: {
            args: Prisma.TutorProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTutorProfile>
          }
          groupBy: {
            args: Prisma.TutorProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<TutorProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.TutorProfileCountArgs<ExtArgs>
            result: $Utils.Optional<TutorProfileCountAggregateOutputType> | number
          }
        }
      }
      TeachingLevel: {
        payload: Prisma.$TeachingLevelPayload<ExtArgs>
        fields: Prisma.TeachingLevelFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TeachingLevelFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeachingLevelPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TeachingLevelFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeachingLevelPayload>
          }
          findFirst: {
            args: Prisma.TeachingLevelFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeachingLevelPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TeachingLevelFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeachingLevelPayload>
          }
          findMany: {
            args: Prisma.TeachingLevelFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeachingLevelPayload>[]
          }
          create: {
            args: Prisma.TeachingLevelCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeachingLevelPayload>
          }
          createMany: {
            args: Prisma.TeachingLevelCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TeachingLevelCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeachingLevelPayload>[]
          }
          delete: {
            args: Prisma.TeachingLevelDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeachingLevelPayload>
          }
          update: {
            args: Prisma.TeachingLevelUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeachingLevelPayload>
          }
          deleteMany: {
            args: Prisma.TeachingLevelDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TeachingLevelUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TeachingLevelUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeachingLevelPayload>[]
          }
          upsert: {
            args: Prisma.TeachingLevelUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeachingLevelPayload>
          }
          aggregate: {
            args: Prisma.TeachingLevelAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTeachingLevel>
          }
          groupBy: {
            args: Prisma.TeachingLevelGroupByArgs<ExtArgs>
            result: $Utils.Optional<TeachingLevelGroupByOutputType>[]
          }
          count: {
            args: Prisma.TeachingLevelCountArgs<ExtArgs>
            result: $Utils.Optional<TeachingLevelCountAggregateOutputType> | number
          }
        }
      }
      TutorLevel: {
        payload: Prisma.$TutorLevelPayload<ExtArgs>
        fields: Prisma.TutorLevelFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TutorLevelFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TutorLevelPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TutorLevelFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TutorLevelPayload>
          }
          findFirst: {
            args: Prisma.TutorLevelFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TutorLevelPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TutorLevelFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TutorLevelPayload>
          }
          findMany: {
            args: Prisma.TutorLevelFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TutorLevelPayload>[]
          }
          create: {
            args: Prisma.TutorLevelCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TutorLevelPayload>
          }
          createMany: {
            args: Prisma.TutorLevelCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TutorLevelCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TutorLevelPayload>[]
          }
          delete: {
            args: Prisma.TutorLevelDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TutorLevelPayload>
          }
          update: {
            args: Prisma.TutorLevelUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TutorLevelPayload>
          }
          deleteMany: {
            args: Prisma.TutorLevelDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TutorLevelUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TutorLevelUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TutorLevelPayload>[]
          }
          upsert: {
            args: Prisma.TutorLevelUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TutorLevelPayload>
          }
          aggregate: {
            args: Prisma.TutorLevelAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTutorLevel>
          }
          groupBy: {
            args: Prisma.TutorLevelGroupByArgs<ExtArgs>
            result: $Utils.Optional<TutorLevelGroupByOutputType>[]
          }
          count: {
            args: Prisma.TutorLevelCountArgs<ExtArgs>
            result: $Utils.Optional<TutorLevelCountAggregateOutputType> | number
          }
        }
      }
      BookingTutor: {
        payload: Prisma.$BookingTutorPayload<ExtArgs>
        fields: Prisma.BookingTutorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BookingTutorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingTutorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BookingTutorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingTutorPayload>
          }
          findFirst: {
            args: Prisma.BookingTutorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingTutorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BookingTutorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingTutorPayload>
          }
          findMany: {
            args: Prisma.BookingTutorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingTutorPayload>[]
          }
          create: {
            args: Prisma.BookingTutorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingTutorPayload>
          }
          createMany: {
            args: Prisma.BookingTutorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BookingTutorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingTutorPayload>[]
          }
          delete: {
            args: Prisma.BookingTutorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingTutorPayload>
          }
          update: {
            args: Prisma.BookingTutorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingTutorPayload>
          }
          deleteMany: {
            args: Prisma.BookingTutorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BookingTutorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BookingTutorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingTutorPayload>[]
          }
          upsert: {
            args: Prisma.BookingTutorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingTutorPayload>
          }
          aggregate: {
            args: Prisma.BookingTutorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBookingTutor>
          }
          groupBy: {
            args: Prisma.BookingTutorGroupByArgs<ExtArgs>
            result: $Utils.Optional<BookingTutorGroupByOutputType>[]
          }
          count: {
            args: Prisma.BookingTutorCountArgs<ExtArgs>
            result: $Utils.Optional<BookingTutorCountAggregateOutputType> | number
          }
        }
      }
      Experience: {
        payload: Prisma.$ExperiencePayload<ExtArgs>
        fields: Prisma.ExperienceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExperienceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperiencePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExperienceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperiencePayload>
          }
          findFirst: {
            args: Prisma.ExperienceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperiencePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExperienceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperiencePayload>
          }
          findMany: {
            args: Prisma.ExperienceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperiencePayload>[]
          }
          create: {
            args: Prisma.ExperienceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperiencePayload>
          }
          createMany: {
            args: Prisma.ExperienceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ExperienceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperiencePayload>[]
          }
          delete: {
            args: Prisma.ExperienceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperiencePayload>
          }
          update: {
            args: Prisma.ExperienceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperiencePayload>
          }
          deleteMany: {
            args: Prisma.ExperienceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ExperienceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ExperienceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperiencePayload>[]
          }
          upsert: {
            args: Prisma.ExperienceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperiencePayload>
          }
          aggregate: {
            args: Prisma.ExperienceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExperience>
          }
          groupBy: {
            args: Prisma.ExperienceGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExperienceGroupByOutputType>[]
          }
          count: {
            args: Prisma.ExperienceCountArgs<ExtArgs>
            result: $Utils.Optional<ExperienceCountAggregateOutputType> | number
          }
        }
      }
      Review: {
        payload: Prisma.$ReviewPayload<ExtArgs>
        fields: Prisma.ReviewFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReviewFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReviewFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          findFirst: {
            args: Prisma.ReviewFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReviewFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          findMany: {
            args: Prisma.ReviewFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          create: {
            args: Prisma.ReviewCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          createMany: {
            args: Prisma.ReviewCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReviewCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          delete: {
            args: Prisma.ReviewDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          update: {
            args: Prisma.ReviewUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          deleteMany: {
            args: Prisma.ReviewDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReviewUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReviewUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          upsert: {
            args: Prisma.ReviewUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          aggregate: {
            args: Prisma.ReviewAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReview>
          }
          groupBy: {
            args: Prisma.ReviewGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReviewGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReviewCountArgs<ExtArgs>
            result: $Utils.Optional<ReviewCountAggregateOutputType> | number
          }
        }
      }
      SubjectCategory: {
        payload: Prisma.$SubjectCategoryPayload<ExtArgs>
        fields: Prisma.SubjectCategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SubjectCategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectCategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SubjectCategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectCategoryPayload>
          }
          findFirst: {
            args: Prisma.SubjectCategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectCategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SubjectCategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectCategoryPayload>
          }
          findMany: {
            args: Prisma.SubjectCategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectCategoryPayload>[]
          }
          create: {
            args: Prisma.SubjectCategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectCategoryPayload>
          }
          createMany: {
            args: Prisma.SubjectCategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SubjectCategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectCategoryPayload>[]
          }
          delete: {
            args: Prisma.SubjectCategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectCategoryPayload>
          }
          update: {
            args: Prisma.SubjectCategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectCategoryPayload>
          }
          deleteMany: {
            args: Prisma.SubjectCategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SubjectCategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SubjectCategoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectCategoryPayload>[]
          }
          upsert: {
            args: Prisma.SubjectCategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectCategoryPayload>
          }
          aggregate: {
            args: Prisma.SubjectCategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubjectCategory>
          }
          groupBy: {
            args: Prisma.SubjectCategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubjectCategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.SubjectCategoryCountArgs<ExtArgs>
            result: $Utils.Optional<SubjectCategoryCountAggregateOutputType> | number
          }
        }
      }
      TutorSubject: {
        payload: Prisma.$TutorSubjectPayload<ExtArgs>
        fields: Prisma.TutorSubjectFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TutorSubjectFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TutorSubjectPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TutorSubjectFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TutorSubjectPayload>
          }
          findFirst: {
            args: Prisma.TutorSubjectFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TutorSubjectPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TutorSubjectFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TutorSubjectPayload>
          }
          findMany: {
            args: Prisma.TutorSubjectFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TutorSubjectPayload>[]
          }
          create: {
            args: Prisma.TutorSubjectCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TutorSubjectPayload>
          }
          createMany: {
            args: Prisma.TutorSubjectCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TutorSubjectCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TutorSubjectPayload>[]
          }
          delete: {
            args: Prisma.TutorSubjectDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TutorSubjectPayload>
          }
          update: {
            args: Prisma.TutorSubjectUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TutorSubjectPayload>
          }
          deleteMany: {
            args: Prisma.TutorSubjectDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TutorSubjectUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TutorSubjectUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TutorSubjectPayload>[]
          }
          upsert: {
            args: Prisma.TutorSubjectUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TutorSubjectPayload>
          }
          aggregate: {
            args: Prisma.TutorSubjectAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTutorSubject>
          }
          groupBy: {
            args: Prisma.TutorSubjectGroupByArgs<ExtArgs>
            result: $Utils.Optional<TutorSubjectGroupByOutputType>[]
          }
          count: {
            args: Prisma.TutorSubjectCountArgs<ExtArgs>
            result: $Utils.Optional<TutorSubjectCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    tutorProfile?: TutorProfileOmit
    teachingLevel?: TeachingLevelOmit
    tutorLevel?: TutorLevelOmit
    bookingTutor?: BookingTutorOmit
    experience?: ExperienceOmit
    review?: ReviewOmit
    subjectCategory?: SubjectCategoryOmit
    tutorSubject?: TutorSubjectOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    reviews: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reviews?: boolean | UserCountOutputTypeCountReviewsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
  }


  /**
   * Count Type TutorProfileCountOutputType
   */

  export type TutorProfileCountOutputType = {
    tutorSubjects: number
    experiences: number
    reviews: number
    levels: number
    BookingTutor: number
  }

  export type TutorProfileCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tutorSubjects?: boolean | TutorProfileCountOutputTypeCountTutorSubjectsArgs
    experiences?: boolean | TutorProfileCountOutputTypeCountExperiencesArgs
    reviews?: boolean | TutorProfileCountOutputTypeCountReviewsArgs
    levels?: boolean | TutorProfileCountOutputTypeCountLevelsArgs
    BookingTutor?: boolean | TutorProfileCountOutputTypeCountBookingTutorArgs
  }

  // Custom InputTypes
  /**
   * TutorProfileCountOutputType without action
   */
  export type TutorProfileCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TutorProfileCountOutputType
     */
    select?: TutorProfileCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TutorProfileCountOutputType without action
   */
  export type TutorProfileCountOutputTypeCountTutorSubjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TutorSubjectWhereInput
  }

  /**
   * TutorProfileCountOutputType without action
   */
  export type TutorProfileCountOutputTypeCountExperiencesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExperienceWhereInput
  }

  /**
   * TutorProfileCountOutputType without action
   */
  export type TutorProfileCountOutputTypeCountReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
  }

  /**
   * TutorProfileCountOutputType without action
   */
  export type TutorProfileCountOutputTypeCountLevelsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TutorLevelWhereInput
  }

  /**
   * TutorProfileCountOutputType without action
   */
  export type TutorProfileCountOutputTypeCountBookingTutorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingTutorWhereInput
  }


  /**
   * Count Type TeachingLevelCountOutputType
   */

  export type TeachingLevelCountOutputType = {
    tutors: number
  }

  export type TeachingLevelCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tutors?: boolean | TeachingLevelCountOutputTypeCountTutorsArgs
  }

  // Custom InputTypes
  /**
   * TeachingLevelCountOutputType without action
   */
  export type TeachingLevelCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeachingLevelCountOutputType
     */
    select?: TeachingLevelCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TeachingLevelCountOutputType without action
   */
  export type TeachingLevelCountOutputTypeCountTutorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TutorLevelWhereInput
  }


  /**
   * Count Type SubjectCategoryCountOutputType
   */

  export type SubjectCategoryCountOutputType = {
    tutors: number
    BookingTutor: number
  }

  export type SubjectCategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tutors?: boolean | SubjectCategoryCountOutputTypeCountTutorsArgs
    BookingTutor?: boolean | SubjectCategoryCountOutputTypeCountBookingTutorArgs
  }

  // Custom InputTypes
  /**
   * SubjectCategoryCountOutputType without action
   */
  export type SubjectCategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubjectCategoryCountOutputType
     */
    select?: SubjectCategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SubjectCategoryCountOutputType without action
   */
  export type SubjectCategoryCountOutputTypeCountTutorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TutorSubjectWhereInput
  }

  /**
   * SubjectCategoryCountOutputType without action
   */
  export type SubjectCategoryCountOutputTypeCountBookingTutorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingTutorWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    role: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    email: string
    password: string
    role: $Enums.Role
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tutorProfile?: boolean | User$tutorProfileArgs<ExtArgs>
    reviews?: boolean | User$reviewsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "role" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tutorProfile?: boolean | User$tutorProfileArgs<ExtArgs>
    reviews?: boolean | User$reviewsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      tutorProfile: Prisma.$TutorProfilePayload<ExtArgs> | null
      reviews: Prisma.$ReviewPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      password: string
      role: $Enums.Role
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tutorProfile<T extends User$tutorProfileArgs<ExtArgs> = {}>(args?: Subset<T, User$tutorProfileArgs<ExtArgs>>): Prisma__TutorProfileClient<$Result.GetResult<Prisma.$TutorProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    reviews<T extends User$reviewsArgs<ExtArgs> = {}>(args?: Subset<T, User$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.tutorProfile
   */
  export type User$tutorProfileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TutorProfile
     */
    select?: TutorProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TutorProfile
     */
    omit?: TutorProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TutorProfileInclude<ExtArgs> | null
    where?: TutorProfileWhereInput
  }

  /**
   * User.reviews
   */
  export type User$reviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    cursor?: ReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model TutorProfile
   */

  export type AggregateTutorProfile = {
    _count: TutorProfileCountAggregateOutputType | null
    _avg: TutorProfileAvgAggregateOutputType | null
    _sum: TutorProfileSumAggregateOutputType | null
    _min: TutorProfileMinAggregateOutputType | null
    _max: TutorProfileMaxAggregateOutputType | null
  }

  export type TutorProfileAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    pricePerHour: number | null
  }

  export type TutorProfileSumAggregateOutputType = {
    id: number | null
    userId: number | null
    pricePerHour: number | null
  }

  export type TutorProfileMinAggregateOutputType = {
    id: number | null
    userId: number | null
    tutorName: string | null
    province: string | null
    image: string | null
    pricePerHour: number | null
    languageTaught: $Enums.Language | null
    sex: $Enums.SexMethod | null
    description: string | null
    phoneNumber: string | null
    verifyed: boolean | null
    technique: string | null
    teachingMethod: $Enums.TeachingMethod | null
    teachingTime: $Enums.TeachingTime | null
    timeStart: string | null
    timeEnd: string | null
    availableTimes: $Enums.TeachingTime | null
  }

  export type TutorProfileMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    tutorName: string | null
    province: string | null
    image: string | null
    pricePerHour: number | null
    languageTaught: $Enums.Language | null
    sex: $Enums.SexMethod | null
    description: string | null
    phoneNumber: string | null
    verifyed: boolean | null
    technique: string | null
    teachingMethod: $Enums.TeachingMethod | null
    teachingTime: $Enums.TeachingTime | null
    timeStart: string | null
    timeEnd: string | null
    availableTimes: $Enums.TeachingTime | null
  }

  export type TutorProfileCountAggregateOutputType = {
    id: number
    userId: number
    tutorName: number
    province: number
    image: number
    pricePerHour: number
    languageTaught: number
    sex: number
    description: number
    phoneNumber: number
    verifyed: number
    technique: number
    teachingMethod: number
    teachingTime: number
    timeStart: number
    timeEnd: number
    availableTimes: number
    _all: number
  }


  export type TutorProfileAvgAggregateInputType = {
    id?: true
    userId?: true
    pricePerHour?: true
  }

  export type TutorProfileSumAggregateInputType = {
    id?: true
    userId?: true
    pricePerHour?: true
  }

  export type TutorProfileMinAggregateInputType = {
    id?: true
    userId?: true
    tutorName?: true
    province?: true
    image?: true
    pricePerHour?: true
    languageTaught?: true
    sex?: true
    description?: true
    phoneNumber?: true
    verifyed?: true
    technique?: true
    teachingMethod?: true
    teachingTime?: true
    timeStart?: true
    timeEnd?: true
    availableTimes?: true
  }

  export type TutorProfileMaxAggregateInputType = {
    id?: true
    userId?: true
    tutorName?: true
    province?: true
    image?: true
    pricePerHour?: true
    languageTaught?: true
    sex?: true
    description?: true
    phoneNumber?: true
    verifyed?: true
    technique?: true
    teachingMethod?: true
    teachingTime?: true
    timeStart?: true
    timeEnd?: true
    availableTimes?: true
  }

  export type TutorProfileCountAggregateInputType = {
    id?: true
    userId?: true
    tutorName?: true
    province?: true
    image?: true
    pricePerHour?: true
    languageTaught?: true
    sex?: true
    description?: true
    phoneNumber?: true
    verifyed?: true
    technique?: true
    teachingMethod?: true
    teachingTime?: true
    timeStart?: true
    timeEnd?: true
    availableTimes?: true
    _all?: true
  }

  export type TutorProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TutorProfile to aggregate.
     */
    where?: TutorProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TutorProfiles to fetch.
     */
    orderBy?: TutorProfileOrderByWithRelationInput | TutorProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TutorProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TutorProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TutorProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TutorProfiles
    **/
    _count?: true | TutorProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TutorProfileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TutorProfileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TutorProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TutorProfileMaxAggregateInputType
  }

  export type GetTutorProfileAggregateType<T extends TutorProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateTutorProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTutorProfile[P]>
      : GetScalarType<T[P], AggregateTutorProfile[P]>
  }




  export type TutorProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TutorProfileWhereInput
    orderBy?: TutorProfileOrderByWithAggregationInput | TutorProfileOrderByWithAggregationInput[]
    by: TutorProfileScalarFieldEnum[] | TutorProfileScalarFieldEnum
    having?: TutorProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TutorProfileCountAggregateInputType | true
    _avg?: TutorProfileAvgAggregateInputType
    _sum?: TutorProfileSumAggregateInputType
    _min?: TutorProfileMinAggregateInputType
    _max?: TutorProfileMaxAggregateInputType
  }

  export type TutorProfileGroupByOutputType = {
    id: number
    userId: number
    tutorName: string
    province: string
    image: string
    pricePerHour: number
    languageTaught: $Enums.Language
    sex: $Enums.SexMethod
    description: string | null
    phoneNumber: string
    verifyed: boolean
    technique: string | null
    teachingMethod: $Enums.TeachingMethod
    teachingTime: $Enums.TeachingTime
    timeStart: string
    timeEnd: string
    availableTimes: $Enums.TeachingTime
    _count: TutorProfileCountAggregateOutputType | null
    _avg: TutorProfileAvgAggregateOutputType | null
    _sum: TutorProfileSumAggregateOutputType | null
    _min: TutorProfileMinAggregateOutputType | null
    _max: TutorProfileMaxAggregateOutputType | null
  }

  type GetTutorProfileGroupByPayload<T extends TutorProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TutorProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TutorProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TutorProfileGroupByOutputType[P]>
            : GetScalarType<T[P], TutorProfileGroupByOutputType[P]>
        }
      >
    >


  export type TutorProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    tutorName?: boolean
    province?: boolean
    image?: boolean
    pricePerHour?: boolean
    languageTaught?: boolean
    sex?: boolean
    description?: boolean
    phoneNumber?: boolean
    verifyed?: boolean
    technique?: boolean
    teachingMethod?: boolean
    teachingTime?: boolean
    timeStart?: boolean
    timeEnd?: boolean
    availableTimes?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    tutorSubjects?: boolean | TutorProfile$tutorSubjectsArgs<ExtArgs>
    experiences?: boolean | TutorProfile$experiencesArgs<ExtArgs>
    reviews?: boolean | TutorProfile$reviewsArgs<ExtArgs>
    levels?: boolean | TutorProfile$levelsArgs<ExtArgs>
    BookingTutor?: boolean | TutorProfile$BookingTutorArgs<ExtArgs>
    _count?: boolean | TutorProfileCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tutorProfile"]>

  export type TutorProfileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    tutorName?: boolean
    province?: boolean
    image?: boolean
    pricePerHour?: boolean
    languageTaught?: boolean
    sex?: boolean
    description?: boolean
    phoneNumber?: boolean
    verifyed?: boolean
    technique?: boolean
    teachingMethod?: boolean
    teachingTime?: boolean
    timeStart?: boolean
    timeEnd?: boolean
    availableTimes?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tutorProfile"]>

  export type TutorProfileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    tutorName?: boolean
    province?: boolean
    image?: boolean
    pricePerHour?: boolean
    languageTaught?: boolean
    sex?: boolean
    description?: boolean
    phoneNumber?: boolean
    verifyed?: boolean
    technique?: boolean
    teachingMethod?: boolean
    teachingTime?: boolean
    timeStart?: boolean
    timeEnd?: boolean
    availableTimes?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tutorProfile"]>

  export type TutorProfileSelectScalar = {
    id?: boolean
    userId?: boolean
    tutorName?: boolean
    province?: boolean
    image?: boolean
    pricePerHour?: boolean
    languageTaught?: boolean
    sex?: boolean
    description?: boolean
    phoneNumber?: boolean
    verifyed?: boolean
    technique?: boolean
    teachingMethod?: boolean
    teachingTime?: boolean
    timeStart?: boolean
    timeEnd?: boolean
    availableTimes?: boolean
  }

  export type TutorProfileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "tutorName" | "province" | "image" | "pricePerHour" | "languageTaught" | "sex" | "description" | "phoneNumber" | "verifyed" | "technique" | "teachingMethod" | "teachingTime" | "timeStart" | "timeEnd" | "availableTimes", ExtArgs["result"]["tutorProfile"]>
  export type TutorProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    tutorSubjects?: boolean | TutorProfile$tutorSubjectsArgs<ExtArgs>
    experiences?: boolean | TutorProfile$experiencesArgs<ExtArgs>
    reviews?: boolean | TutorProfile$reviewsArgs<ExtArgs>
    levels?: boolean | TutorProfile$levelsArgs<ExtArgs>
    BookingTutor?: boolean | TutorProfile$BookingTutorArgs<ExtArgs>
    _count?: boolean | TutorProfileCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TutorProfileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TutorProfileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $TutorProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TutorProfile"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      tutorSubjects: Prisma.$TutorSubjectPayload<ExtArgs>[]
      experiences: Prisma.$ExperiencePayload<ExtArgs>[]
      reviews: Prisma.$ReviewPayload<ExtArgs>[]
      levels: Prisma.$TutorLevelPayload<ExtArgs>[]
      BookingTutor: Prisma.$BookingTutorPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      tutorName: string
      province: string
      image: string
      pricePerHour: number
      languageTaught: $Enums.Language
      sex: $Enums.SexMethod
      description: string | null
      phoneNumber: string
      verifyed: boolean
      technique: string | null
      teachingMethod: $Enums.TeachingMethod
      teachingTime: $Enums.TeachingTime
      timeStart: string
      timeEnd: string
      availableTimes: $Enums.TeachingTime
    }, ExtArgs["result"]["tutorProfile"]>
    composites: {}
  }

  type TutorProfileGetPayload<S extends boolean | null | undefined | TutorProfileDefaultArgs> = $Result.GetResult<Prisma.$TutorProfilePayload, S>

  type TutorProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TutorProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TutorProfileCountAggregateInputType | true
    }

  export interface TutorProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TutorProfile'], meta: { name: 'TutorProfile' } }
    /**
     * Find zero or one TutorProfile that matches the filter.
     * @param {TutorProfileFindUniqueArgs} args - Arguments to find a TutorProfile
     * @example
     * // Get one TutorProfile
     * const tutorProfile = await prisma.tutorProfile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TutorProfileFindUniqueArgs>(args: SelectSubset<T, TutorProfileFindUniqueArgs<ExtArgs>>): Prisma__TutorProfileClient<$Result.GetResult<Prisma.$TutorProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TutorProfile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TutorProfileFindUniqueOrThrowArgs} args - Arguments to find a TutorProfile
     * @example
     * // Get one TutorProfile
     * const tutorProfile = await prisma.tutorProfile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TutorProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, TutorProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TutorProfileClient<$Result.GetResult<Prisma.$TutorProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TutorProfile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TutorProfileFindFirstArgs} args - Arguments to find a TutorProfile
     * @example
     * // Get one TutorProfile
     * const tutorProfile = await prisma.tutorProfile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TutorProfileFindFirstArgs>(args?: SelectSubset<T, TutorProfileFindFirstArgs<ExtArgs>>): Prisma__TutorProfileClient<$Result.GetResult<Prisma.$TutorProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TutorProfile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TutorProfileFindFirstOrThrowArgs} args - Arguments to find a TutorProfile
     * @example
     * // Get one TutorProfile
     * const tutorProfile = await prisma.tutorProfile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TutorProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, TutorProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__TutorProfileClient<$Result.GetResult<Prisma.$TutorProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TutorProfiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TutorProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TutorProfiles
     * const tutorProfiles = await prisma.tutorProfile.findMany()
     * 
     * // Get first 10 TutorProfiles
     * const tutorProfiles = await prisma.tutorProfile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tutorProfileWithIdOnly = await prisma.tutorProfile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TutorProfileFindManyArgs>(args?: SelectSubset<T, TutorProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TutorProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TutorProfile.
     * @param {TutorProfileCreateArgs} args - Arguments to create a TutorProfile.
     * @example
     * // Create one TutorProfile
     * const TutorProfile = await prisma.tutorProfile.create({
     *   data: {
     *     // ... data to create a TutorProfile
     *   }
     * })
     * 
     */
    create<T extends TutorProfileCreateArgs>(args: SelectSubset<T, TutorProfileCreateArgs<ExtArgs>>): Prisma__TutorProfileClient<$Result.GetResult<Prisma.$TutorProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TutorProfiles.
     * @param {TutorProfileCreateManyArgs} args - Arguments to create many TutorProfiles.
     * @example
     * // Create many TutorProfiles
     * const tutorProfile = await prisma.tutorProfile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TutorProfileCreateManyArgs>(args?: SelectSubset<T, TutorProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TutorProfiles and returns the data saved in the database.
     * @param {TutorProfileCreateManyAndReturnArgs} args - Arguments to create many TutorProfiles.
     * @example
     * // Create many TutorProfiles
     * const tutorProfile = await prisma.tutorProfile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TutorProfiles and only return the `id`
     * const tutorProfileWithIdOnly = await prisma.tutorProfile.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TutorProfileCreateManyAndReturnArgs>(args?: SelectSubset<T, TutorProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TutorProfilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TutorProfile.
     * @param {TutorProfileDeleteArgs} args - Arguments to delete one TutorProfile.
     * @example
     * // Delete one TutorProfile
     * const TutorProfile = await prisma.tutorProfile.delete({
     *   where: {
     *     // ... filter to delete one TutorProfile
     *   }
     * })
     * 
     */
    delete<T extends TutorProfileDeleteArgs>(args: SelectSubset<T, TutorProfileDeleteArgs<ExtArgs>>): Prisma__TutorProfileClient<$Result.GetResult<Prisma.$TutorProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TutorProfile.
     * @param {TutorProfileUpdateArgs} args - Arguments to update one TutorProfile.
     * @example
     * // Update one TutorProfile
     * const tutorProfile = await prisma.tutorProfile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TutorProfileUpdateArgs>(args: SelectSubset<T, TutorProfileUpdateArgs<ExtArgs>>): Prisma__TutorProfileClient<$Result.GetResult<Prisma.$TutorProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TutorProfiles.
     * @param {TutorProfileDeleteManyArgs} args - Arguments to filter TutorProfiles to delete.
     * @example
     * // Delete a few TutorProfiles
     * const { count } = await prisma.tutorProfile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TutorProfileDeleteManyArgs>(args?: SelectSubset<T, TutorProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TutorProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TutorProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TutorProfiles
     * const tutorProfile = await prisma.tutorProfile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TutorProfileUpdateManyArgs>(args: SelectSubset<T, TutorProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TutorProfiles and returns the data updated in the database.
     * @param {TutorProfileUpdateManyAndReturnArgs} args - Arguments to update many TutorProfiles.
     * @example
     * // Update many TutorProfiles
     * const tutorProfile = await prisma.tutorProfile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TutorProfiles and only return the `id`
     * const tutorProfileWithIdOnly = await prisma.tutorProfile.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TutorProfileUpdateManyAndReturnArgs>(args: SelectSubset<T, TutorProfileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TutorProfilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TutorProfile.
     * @param {TutorProfileUpsertArgs} args - Arguments to update or create a TutorProfile.
     * @example
     * // Update or create a TutorProfile
     * const tutorProfile = await prisma.tutorProfile.upsert({
     *   create: {
     *     // ... data to create a TutorProfile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TutorProfile we want to update
     *   }
     * })
     */
    upsert<T extends TutorProfileUpsertArgs>(args: SelectSubset<T, TutorProfileUpsertArgs<ExtArgs>>): Prisma__TutorProfileClient<$Result.GetResult<Prisma.$TutorProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TutorProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TutorProfileCountArgs} args - Arguments to filter TutorProfiles to count.
     * @example
     * // Count the number of TutorProfiles
     * const count = await prisma.tutorProfile.count({
     *   where: {
     *     // ... the filter for the TutorProfiles we want to count
     *   }
     * })
    **/
    count<T extends TutorProfileCountArgs>(
      args?: Subset<T, TutorProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TutorProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TutorProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TutorProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TutorProfileAggregateArgs>(args: Subset<T, TutorProfileAggregateArgs>): Prisma.PrismaPromise<GetTutorProfileAggregateType<T>>

    /**
     * Group by TutorProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TutorProfileGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TutorProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TutorProfileGroupByArgs['orderBy'] }
        : { orderBy?: TutorProfileGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TutorProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTutorProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TutorProfile model
   */
  readonly fields: TutorProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TutorProfile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TutorProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tutorSubjects<T extends TutorProfile$tutorSubjectsArgs<ExtArgs> = {}>(args?: Subset<T, TutorProfile$tutorSubjectsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TutorSubjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    experiences<T extends TutorProfile$experiencesArgs<ExtArgs> = {}>(args?: Subset<T, TutorProfile$experiencesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExperiencePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reviews<T extends TutorProfile$reviewsArgs<ExtArgs> = {}>(args?: Subset<T, TutorProfile$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    levels<T extends TutorProfile$levelsArgs<ExtArgs> = {}>(args?: Subset<T, TutorProfile$levelsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TutorLevelPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    BookingTutor<T extends TutorProfile$BookingTutorArgs<ExtArgs> = {}>(args?: Subset<T, TutorProfile$BookingTutorArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingTutorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TutorProfile model
   */
  interface TutorProfileFieldRefs {
    readonly id: FieldRef<"TutorProfile", 'Int'>
    readonly userId: FieldRef<"TutorProfile", 'Int'>
    readonly tutorName: FieldRef<"TutorProfile", 'String'>
    readonly province: FieldRef<"TutorProfile", 'String'>
    readonly image: FieldRef<"TutorProfile", 'String'>
    readonly pricePerHour: FieldRef<"TutorProfile", 'Int'>
    readonly languageTaught: FieldRef<"TutorProfile", 'Language'>
    readonly sex: FieldRef<"TutorProfile", 'SexMethod'>
    readonly description: FieldRef<"TutorProfile", 'String'>
    readonly phoneNumber: FieldRef<"TutorProfile", 'String'>
    readonly verifyed: FieldRef<"TutorProfile", 'Boolean'>
    readonly technique: FieldRef<"TutorProfile", 'String'>
    readonly teachingMethod: FieldRef<"TutorProfile", 'TeachingMethod'>
    readonly teachingTime: FieldRef<"TutorProfile", 'TeachingTime'>
    readonly timeStart: FieldRef<"TutorProfile", 'String'>
    readonly timeEnd: FieldRef<"TutorProfile", 'String'>
    readonly availableTimes: FieldRef<"TutorProfile", 'TeachingTime'>
  }
    

  // Custom InputTypes
  /**
   * TutorProfile findUnique
   */
  export type TutorProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TutorProfile
     */
    select?: TutorProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TutorProfile
     */
    omit?: TutorProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TutorProfileInclude<ExtArgs> | null
    /**
     * Filter, which TutorProfile to fetch.
     */
    where: TutorProfileWhereUniqueInput
  }

  /**
   * TutorProfile findUniqueOrThrow
   */
  export type TutorProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TutorProfile
     */
    select?: TutorProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TutorProfile
     */
    omit?: TutorProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TutorProfileInclude<ExtArgs> | null
    /**
     * Filter, which TutorProfile to fetch.
     */
    where: TutorProfileWhereUniqueInput
  }

  /**
   * TutorProfile findFirst
   */
  export type TutorProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TutorProfile
     */
    select?: TutorProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TutorProfile
     */
    omit?: TutorProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TutorProfileInclude<ExtArgs> | null
    /**
     * Filter, which TutorProfile to fetch.
     */
    where?: TutorProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TutorProfiles to fetch.
     */
    orderBy?: TutorProfileOrderByWithRelationInput | TutorProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TutorProfiles.
     */
    cursor?: TutorProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TutorProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TutorProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TutorProfiles.
     */
    distinct?: TutorProfileScalarFieldEnum | TutorProfileScalarFieldEnum[]
  }

  /**
   * TutorProfile findFirstOrThrow
   */
  export type TutorProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TutorProfile
     */
    select?: TutorProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TutorProfile
     */
    omit?: TutorProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TutorProfileInclude<ExtArgs> | null
    /**
     * Filter, which TutorProfile to fetch.
     */
    where?: TutorProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TutorProfiles to fetch.
     */
    orderBy?: TutorProfileOrderByWithRelationInput | TutorProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TutorProfiles.
     */
    cursor?: TutorProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TutorProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TutorProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TutorProfiles.
     */
    distinct?: TutorProfileScalarFieldEnum | TutorProfileScalarFieldEnum[]
  }

  /**
   * TutorProfile findMany
   */
  export type TutorProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TutorProfile
     */
    select?: TutorProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TutorProfile
     */
    omit?: TutorProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TutorProfileInclude<ExtArgs> | null
    /**
     * Filter, which TutorProfiles to fetch.
     */
    where?: TutorProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TutorProfiles to fetch.
     */
    orderBy?: TutorProfileOrderByWithRelationInput | TutorProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TutorProfiles.
     */
    cursor?: TutorProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TutorProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TutorProfiles.
     */
    skip?: number
    distinct?: TutorProfileScalarFieldEnum | TutorProfileScalarFieldEnum[]
  }

  /**
   * TutorProfile create
   */
  export type TutorProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TutorProfile
     */
    select?: TutorProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TutorProfile
     */
    omit?: TutorProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TutorProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a TutorProfile.
     */
    data: XOR<TutorProfileCreateInput, TutorProfileUncheckedCreateInput>
  }

  /**
   * TutorProfile createMany
   */
  export type TutorProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TutorProfiles.
     */
    data: TutorProfileCreateManyInput | TutorProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TutorProfile createManyAndReturn
   */
  export type TutorProfileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TutorProfile
     */
    select?: TutorProfileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TutorProfile
     */
    omit?: TutorProfileOmit<ExtArgs> | null
    /**
     * The data used to create many TutorProfiles.
     */
    data: TutorProfileCreateManyInput | TutorProfileCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TutorProfileIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TutorProfile update
   */
  export type TutorProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TutorProfile
     */
    select?: TutorProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TutorProfile
     */
    omit?: TutorProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TutorProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a TutorProfile.
     */
    data: XOR<TutorProfileUpdateInput, TutorProfileUncheckedUpdateInput>
    /**
     * Choose, which TutorProfile to update.
     */
    where: TutorProfileWhereUniqueInput
  }

  /**
   * TutorProfile updateMany
   */
  export type TutorProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TutorProfiles.
     */
    data: XOR<TutorProfileUpdateManyMutationInput, TutorProfileUncheckedUpdateManyInput>
    /**
     * Filter which TutorProfiles to update
     */
    where?: TutorProfileWhereInput
    /**
     * Limit how many TutorProfiles to update.
     */
    limit?: number
  }

  /**
   * TutorProfile updateManyAndReturn
   */
  export type TutorProfileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TutorProfile
     */
    select?: TutorProfileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TutorProfile
     */
    omit?: TutorProfileOmit<ExtArgs> | null
    /**
     * The data used to update TutorProfiles.
     */
    data: XOR<TutorProfileUpdateManyMutationInput, TutorProfileUncheckedUpdateManyInput>
    /**
     * Filter which TutorProfiles to update
     */
    where?: TutorProfileWhereInput
    /**
     * Limit how many TutorProfiles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TutorProfileIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TutorProfile upsert
   */
  export type TutorProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TutorProfile
     */
    select?: TutorProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TutorProfile
     */
    omit?: TutorProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TutorProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the TutorProfile to update in case it exists.
     */
    where: TutorProfileWhereUniqueInput
    /**
     * In case the TutorProfile found by the `where` argument doesn't exist, create a new TutorProfile with this data.
     */
    create: XOR<TutorProfileCreateInput, TutorProfileUncheckedCreateInput>
    /**
     * In case the TutorProfile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TutorProfileUpdateInput, TutorProfileUncheckedUpdateInput>
  }

  /**
   * TutorProfile delete
   */
  export type TutorProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TutorProfile
     */
    select?: TutorProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TutorProfile
     */
    omit?: TutorProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TutorProfileInclude<ExtArgs> | null
    /**
     * Filter which TutorProfile to delete.
     */
    where: TutorProfileWhereUniqueInput
  }

  /**
   * TutorProfile deleteMany
   */
  export type TutorProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TutorProfiles to delete
     */
    where?: TutorProfileWhereInput
    /**
     * Limit how many TutorProfiles to delete.
     */
    limit?: number
  }

  /**
   * TutorProfile.tutorSubjects
   */
  export type TutorProfile$tutorSubjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TutorSubject
     */
    select?: TutorSubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TutorSubject
     */
    omit?: TutorSubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TutorSubjectInclude<ExtArgs> | null
    where?: TutorSubjectWhereInput
    orderBy?: TutorSubjectOrderByWithRelationInput | TutorSubjectOrderByWithRelationInput[]
    cursor?: TutorSubjectWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TutorSubjectScalarFieldEnum | TutorSubjectScalarFieldEnum[]
  }

  /**
   * TutorProfile.experiences
   */
  export type TutorProfile$experiencesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experience
     */
    select?: ExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Experience
     */
    omit?: ExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceInclude<ExtArgs> | null
    where?: ExperienceWhereInput
    orderBy?: ExperienceOrderByWithRelationInput | ExperienceOrderByWithRelationInput[]
    cursor?: ExperienceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExperienceScalarFieldEnum | ExperienceScalarFieldEnum[]
  }

  /**
   * TutorProfile.reviews
   */
  export type TutorProfile$reviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    cursor?: ReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * TutorProfile.levels
   */
  export type TutorProfile$levelsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TutorLevel
     */
    select?: TutorLevelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TutorLevel
     */
    omit?: TutorLevelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TutorLevelInclude<ExtArgs> | null
    where?: TutorLevelWhereInput
    orderBy?: TutorLevelOrderByWithRelationInput | TutorLevelOrderByWithRelationInput[]
    cursor?: TutorLevelWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TutorLevelScalarFieldEnum | TutorLevelScalarFieldEnum[]
  }

  /**
   * TutorProfile.BookingTutor
   */
  export type TutorProfile$BookingTutorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingTutor
     */
    select?: BookingTutorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingTutor
     */
    omit?: BookingTutorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingTutorInclude<ExtArgs> | null
    where?: BookingTutorWhereInput
    orderBy?: BookingTutorOrderByWithRelationInput | BookingTutorOrderByWithRelationInput[]
    cursor?: BookingTutorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingTutorScalarFieldEnum | BookingTutorScalarFieldEnum[]
  }

  /**
   * TutorProfile without action
   */
  export type TutorProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TutorProfile
     */
    select?: TutorProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TutorProfile
     */
    omit?: TutorProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TutorProfileInclude<ExtArgs> | null
  }


  /**
   * Model TeachingLevel
   */

  export type AggregateTeachingLevel = {
    _count: TeachingLevelCountAggregateOutputType | null
    _avg: TeachingLevelAvgAggregateOutputType | null
    _sum: TeachingLevelSumAggregateOutputType | null
    _min: TeachingLevelMinAggregateOutputType | null
    _max: TeachingLevelMaxAggregateOutputType | null
  }

  export type TeachingLevelAvgAggregateOutputType = {
    id: number | null
  }

  export type TeachingLevelSumAggregateOutputType = {
    id: number | null
  }

  export type TeachingLevelMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type TeachingLevelMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type TeachingLevelCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type TeachingLevelAvgAggregateInputType = {
    id?: true
  }

  export type TeachingLevelSumAggregateInputType = {
    id?: true
  }

  export type TeachingLevelMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type TeachingLevelMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type TeachingLevelCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type TeachingLevelAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TeachingLevel to aggregate.
     */
    where?: TeachingLevelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeachingLevels to fetch.
     */
    orderBy?: TeachingLevelOrderByWithRelationInput | TeachingLevelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TeachingLevelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeachingLevels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeachingLevels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TeachingLevels
    **/
    _count?: true | TeachingLevelCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TeachingLevelAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TeachingLevelSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TeachingLevelMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TeachingLevelMaxAggregateInputType
  }

  export type GetTeachingLevelAggregateType<T extends TeachingLevelAggregateArgs> = {
        [P in keyof T & keyof AggregateTeachingLevel]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTeachingLevel[P]>
      : GetScalarType<T[P], AggregateTeachingLevel[P]>
  }




  export type TeachingLevelGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeachingLevelWhereInput
    orderBy?: TeachingLevelOrderByWithAggregationInput | TeachingLevelOrderByWithAggregationInput[]
    by: TeachingLevelScalarFieldEnum[] | TeachingLevelScalarFieldEnum
    having?: TeachingLevelScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TeachingLevelCountAggregateInputType | true
    _avg?: TeachingLevelAvgAggregateInputType
    _sum?: TeachingLevelSumAggregateInputType
    _min?: TeachingLevelMinAggregateInputType
    _max?: TeachingLevelMaxAggregateInputType
  }

  export type TeachingLevelGroupByOutputType = {
    id: number
    name: string
    _count: TeachingLevelCountAggregateOutputType | null
    _avg: TeachingLevelAvgAggregateOutputType | null
    _sum: TeachingLevelSumAggregateOutputType | null
    _min: TeachingLevelMinAggregateOutputType | null
    _max: TeachingLevelMaxAggregateOutputType | null
  }

  type GetTeachingLevelGroupByPayload<T extends TeachingLevelGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TeachingLevelGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TeachingLevelGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TeachingLevelGroupByOutputType[P]>
            : GetScalarType<T[P], TeachingLevelGroupByOutputType[P]>
        }
      >
    >


  export type TeachingLevelSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    tutors?: boolean | TeachingLevel$tutorsArgs<ExtArgs>
    _count?: boolean | TeachingLevelCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["teachingLevel"]>

  export type TeachingLevelSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["teachingLevel"]>

  export type TeachingLevelSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["teachingLevel"]>

  export type TeachingLevelSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type TeachingLevelOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["teachingLevel"]>
  export type TeachingLevelInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tutors?: boolean | TeachingLevel$tutorsArgs<ExtArgs>
    _count?: boolean | TeachingLevelCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TeachingLevelIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TeachingLevelIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TeachingLevelPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TeachingLevel"
    objects: {
      tutors: Prisma.$TutorLevelPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["teachingLevel"]>
    composites: {}
  }

  type TeachingLevelGetPayload<S extends boolean | null | undefined | TeachingLevelDefaultArgs> = $Result.GetResult<Prisma.$TeachingLevelPayload, S>

  type TeachingLevelCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TeachingLevelFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TeachingLevelCountAggregateInputType | true
    }

  export interface TeachingLevelDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TeachingLevel'], meta: { name: 'TeachingLevel' } }
    /**
     * Find zero or one TeachingLevel that matches the filter.
     * @param {TeachingLevelFindUniqueArgs} args - Arguments to find a TeachingLevel
     * @example
     * // Get one TeachingLevel
     * const teachingLevel = await prisma.teachingLevel.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TeachingLevelFindUniqueArgs>(args: SelectSubset<T, TeachingLevelFindUniqueArgs<ExtArgs>>): Prisma__TeachingLevelClient<$Result.GetResult<Prisma.$TeachingLevelPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TeachingLevel that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TeachingLevelFindUniqueOrThrowArgs} args - Arguments to find a TeachingLevel
     * @example
     * // Get one TeachingLevel
     * const teachingLevel = await prisma.teachingLevel.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TeachingLevelFindUniqueOrThrowArgs>(args: SelectSubset<T, TeachingLevelFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TeachingLevelClient<$Result.GetResult<Prisma.$TeachingLevelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TeachingLevel that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeachingLevelFindFirstArgs} args - Arguments to find a TeachingLevel
     * @example
     * // Get one TeachingLevel
     * const teachingLevel = await prisma.teachingLevel.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TeachingLevelFindFirstArgs>(args?: SelectSubset<T, TeachingLevelFindFirstArgs<ExtArgs>>): Prisma__TeachingLevelClient<$Result.GetResult<Prisma.$TeachingLevelPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TeachingLevel that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeachingLevelFindFirstOrThrowArgs} args - Arguments to find a TeachingLevel
     * @example
     * // Get one TeachingLevel
     * const teachingLevel = await prisma.teachingLevel.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TeachingLevelFindFirstOrThrowArgs>(args?: SelectSubset<T, TeachingLevelFindFirstOrThrowArgs<ExtArgs>>): Prisma__TeachingLevelClient<$Result.GetResult<Prisma.$TeachingLevelPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TeachingLevels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeachingLevelFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TeachingLevels
     * const teachingLevels = await prisma.teachingLevel.findMany()
     * 
     * // Get first 10 TeachingLevels
     * const teachingLevels = await prisma.teachingLevel.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const teachingLevelWithIdOnly = await prisma.teachingLevel.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TeachingLevelFindManyArgs>(args?: SelectSubset<T, TeachingLevelFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeachingLevelPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TeachingLevel.
     * @param {TeachingLevelCreateArgs} args - Arguments to create a TeachingLevel.
     * @example
     * // Create one TeachingLevel
     * const TeachingLevel = await prisma.teachingLevel.create({
     *   data: {
     *     // ... data to create a TeachingLevel
     *   }
     * })
     * 
     */
    create<T extends TeachingLevelCreateArgs>(args: SelectSubset<T, TeachingLevelCreateArgs<ExtArgs>>): Prisma__TeachingLevelClient<$Result.GetResult<Prisma.$TeachingLevelPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TeachingLevels.
     * @param {TeachingLevelCreateManyArgs} args - Arguments to create many TeachingLevels.
     * @example
     * // Create many TeachingLevels
     * const teachingLevel = await prisma.teachingLevel.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TeachingLevelCreateManyArgs>(args?: SelectSubset<T, TeachingLevelCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TeachingLevels and returns the data saved in the database.
     * @param {TeachingLevelCreateManyAndReturnArgs} args - Arguments to create many TeachingLevels.
     * @example
     * // Create many TeachingLevels
     * const teachingLevel = await prisma.teachingLevel.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TeachingLevels and only return the `id`
     * const teachingLevelWithIdOnly = await prisma.teachingLevel.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TeachingLevelCreateManyAndReturnArgs>(args?: SelectSubset<T, TeachingLevelCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeachingLevelPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TeachingLevel.
     * @param {TeachingLevelDeleteArgs} args - Arguments to delete one TeachingLevel.
     * @example
     * // Delete one TeachingLevel
     * const TeachingLevel = await prisma.teachingLevel.delete({
     *   where: {
     *     // ... filter to delete one TeachingLevel
     *   }
     * })
     * 
     */
    delete<T extends TeachingLevelDeleteArgs>(args: SelectSubset<T, TeachingLevelDeleteArgs<ExtArgs>>): Prisma__TeachingLevelClient<$Result.GetResult<Prisma.$TeachingLevelPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TeachingLevel.
     * @param {TeachingLevelUpdateArgs} args - Arguments to update one TeachingLevel.
     * @example
     * // Update one TeachingLevel
     * const teachingLevel = await prisma.teachingLevel.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TeachingLevelUpdateArgs>(args: SelectSubset<T, TeachingLevelUpdateArgs<ExtArgs>>): Prisma__TeachingLevelClient<$Result.GetResult<Prisma.$TeachingLevelPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TeachingLevels.
     * @param {TeachingLevelDeleteManyArgs} args - Arguments to filter TeachingLevels to delete.
     * @example
     * // Delete a few TeachingLevels
     * const { count } = await prisma.teachingLevel.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TeachingLevelDeleteManyArgs>(args?: SelectSubset<T, TeachingLevelDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TeachingLevels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeachingLevelUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TeachingLevels
     * const teachingLevel = await prisma.teachingLevel.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TeachingLevelUpdateManyArgs>(args: SelectSubset<T, TeachingLevelUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TeachingLevels and returns the data updated in the database.
     * @param {TeachingLevelUpdateManyAndReturnArgs} args - Arguments to update many TeachingLevels.
     * @example
     * // Update many TeachingLevels
     * const teachingLevel = await prisma.teachingLevel.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TeachingLevels and only return the `id`
     * const teachingLevelWithIdOnly = await prisma.teachingLevel.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TeachingLevelUpdateManyAndReturnArgs>(args: SelectSubset<T, TeachingLevelUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeachingLevelPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TeachingLevel.
     * @param {TeachingLevelUpsertArgs} args - Arguments to update or create a TeachingLevel.
     * @example
     * // Update or create a TeachingLevel
     * const teachingLevel = await prisma.teachingLevel.upsert({
     *   create: {
     *     // ... data to create a TeachingLevel
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TeachingLevel we want to update
     *   }
     * })
     */
    upsert<T extends TeachingLevelUpsertArgs>(args: SelectSubset<T, TeachingLevelUpsertArgs<ExtArgs>>): Prisma__TeachingLevelClient<$Result.GetResult<Prisma.$TeachingLevelPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TeachingLevels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeachingLevelCountArgs} args - Arguments to filter TeachingLevels to count.
     * @example
     * // Count the number of TeachingLevels
     * const count = await prisma.teachingLevel.count({
     *   where: {
     *     // ... the filter for the TeachingLevels we want to count
     *   }
     * })
    **/
    count<T extends TeachingLevelCountArgs>(
      args?: Subset<T, TeachingLevelCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TeachingLevelCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TeachingLevel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeachingLevelAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TeachingLevelAggregateArgs>(args: Subset<T, TeachingLevelAggregateArgs>): Prisma.PrismaPromise<GetTeachingLevelAggregateType<T>>

    /**
     * Group by TeachingLevel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeachingLevelGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TeachingLevelGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TeachingLevelGroupByArgs['orderBy'] }
        : { orderBy?: TeachingLevelGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TeachingLevelGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTeachingLevelGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TeachingLevel model
   */
  readonly fields: TeachingLevelFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TeachingLevel.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TeachingLevelClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tutors<T extends TeachingLevel$tutorsArgs<ExtArgs> = {}>(args?: Subset<T, TeachingLevel$tutorsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TutorLevelPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TeachingLevel model
   */
  interface TeachingLevelFieldRefs {
    readonly id: FieldRef<"TeachingLevel", 'Int'>
    readonly name: FieldRef<"TeachingLevel", 'String'>
  }
    

  // Custom InputTypes
  /**
   * TeachingLevel findUnique
   */
  export type TeachingLevelFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeachingLevel
     */
    select?: TeachingLevelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeachingLevel
     */
    omit?: TeachingLevelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeachingLevelInclude<ExtArgs> | null
    /**
     * Filter, which TeachingLevel to fetch.
     */
    where: TeachingLevelWhereUniqueInput
  }

  /**
   * TeachingLevel findUniqueOrThrow
   */
  export type TeachingLevelFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeachingLevel
     */
    select?: TeachingLevelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeachingLevel
     */
    omit?: TeachingLevelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeachingLevelInclude<ExtArgs> | null
    /**
     * Filter, which TeachingLevel to fetch.
     */
    where: TeachingLevelWhereUniqueInput
  }

  /**
   * TeachingLevel findFirst
   */
  export type TeachingLevelFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeachingLevel
     */
    select?: TeachingLevelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeachingLevel
     */
    omit?: TeachingLevelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeachingLevelInclude<ExtArgs> | null
    /**
     * Filter, which TeachingLevel to fetch.
     */
    where?: TeachingLevelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeachingLevels to fetch.
     */
    orderBy?: TeachingLevelOrderByWithRelationInput | TeachingLevelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TeachingLevels.
     */
    cursor?: TeachingLevelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeachingLevels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeachingLevels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TeachingLevels.
     */
    distinct?: TeachingLevelScalarFieldEnum | TeachingLevelScalarFieldEnum[]
  }

  /**
   * TeachingLevel findFirstOrThrow
   */
  export type TeachingLevelFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeachingLevel
     */
    select?: TeachingLevelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeachingLevel
     */
    omit?: TeachingLevelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeachingLevelInclude<ExtArgs> | null
    /**
     * Filter, which TeachingLevel to fetch.
     */
    where?: TeachingLevelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeachingLevels to fetch.
     */
    orderBy?: TeachingLevelOrderByWithRelationInput | TeachingLevelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TeachingLevels.
     */
    cursor?: TeachingLevelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeachingLevels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeachingLevels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TeachingLevels.
     */
    distinct?: TeachingLevelScalarFieldEnum | TeachingLevelScalarFieldEnum[]
  }

  /**
   * TeachingLevel findMany
   */
  export type TeachingLevelFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeachingLevel
     */
    select?: TeachingLevelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeachingLevel
     */
    omit?: TeachingLevelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeachingLevelInclude<ExtArgs> | null
    /**
     * Filter, which TeachingLevels to fetch.
     */
    where?: TeachingLevelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeachingLevels to fetch.
     */
    orderBy?: TeachingLevelOrderByWithRelationInput | TeachingLevelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TeachingLevels.
     */
    cursor?: TeachingLevelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeachingLevels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeachingLevels.
     */
    skip?: number
    distinct?: TeachingLevelScalarFieldEnum | TeachingLevelScalarFieldEnum[]
  }

  /**
   * TeachingLevel create
   */
  export type TeachingLevelCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeachingLevel
     */
    select?: TeachingLevelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeachingLevel
     */
    omit?: TeachingLevelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeachingLevelInclude<ExtArgs> | null
    /**
     * The data needed to create a TeachingLevel.
     */
    data: XOR<TeachingLevelCreateInput, TeachingLevelUncheckedCreateInput>
  }

  /**
   * TeachingLevel createMany
   */
  export type TeachingLevelCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TeachingLevels.
     */
    data: TeachingLevelCreateManyInput | TeachingLevelCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TeachingLevel createManyAndReturn
   */
  export type TeachingLevelCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeachingLevel
     */
    select?: TeachingLevelSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TeachingLevel
     */
    omit?: TeachingLevelOmit<ExtArgs> | null
    /**
     * The data used to create many TeachingLevels.
     */
    data: TeachingLevelCreateManyInput | TeachingLevelCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TeachingLevel update
   */
  export type TeachingLevelUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeachingLevel
     */
    select?: TeachingLevelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeachingLevel
     */
    omit?: TeachingLevelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeachingLevelInclude<ExtArgs> | null
    /**
     * The data needed to update a TeachingLevel.
     */
    data: XOR<TeachingLevelUpdateInput, TeachingLevelUncheckedUpdateInput>
    /**
     * Choose, which TeachingLevel to update.
     */
    where: TeachingLevelWhereUniqueInput
  }

  /**
   * TeachingLevel updateMany
   */
  export type TeachingLevelUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TeachingLevels.
     */
    data: XOR<TeachingLevelUpdateManyMutationInput, TeachingLevelUncheckedUpdateManyInput>
    /**
     * Filter which TeachingLevels to update
     */
    where?: TeachingLevelWhereInput
    /**
     * Limit how many TeachingLevels to update.
     */
    limit?: number
  }

  /**
   * TeachingLevel updateManyAndReturn
   */
  export type TeachingLevelUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeachingLevel
     */
    select?: TeachingLevelSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TeachingLevel
     */
    omit?: TeachingLevelOmit<ExtArgs> | null
    /**
     * The data used to update TeachingLevels.
     */
    data: XOR<TeachingLevelUpdateManyMutationInput, TeachingLevelUncheckedUpdateManyInput>
    /**
     * Filter which TeachingLevels to update
     */
    where?: TeachingLevelWhereInput
    /**
     * Limit how many TeachingLevels to update.
     */
    limit?: number
  }

  /**
   * TeachingLevel upsert
   */
  export type TeachingLevelUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeachingLevel
     */
    select?: TeachingLevelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeachingLevel
     */
    omit?: TeachingLevelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeachingLevelInclude<ExtArgs> | null
    /**
     * The filter to search for the TeachingLevel to update in case it exists.
     */
    where: TeachingLevelWhereUniqueInput
    /**
     * In case the TeachingLevel found by the `where` argument doesn't exist, create a new TeachingLevel with this data.
     */
    create: XOR<TeachingLevelCreateInput, TeachingLevelUncheckedCreateInput>
    /**
     * In case the TeachingLevel was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TeachingLevelUpdateInput, TeachingLevelUncheckedUpdateInput>
  }

  /**
   * TeachingLevel delete
   */
  export type TeachingLevelDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeachingLevel
     */
    select?: TeachingLevelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeachingLevel
     */
    omit?: TeachingLevelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeachingLevelInclude<ExtArgs> | null
    /**
     * Filter which TeachingLevel to delete.
     */
    where: TeachingLevelWhereUniqueInput
  }

  /**
   * TeachingLevel deleteMany
   */
  export type TeachingLevelDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TeachingLevels to delete
     */
    where?: TeachingLevelWhereInput
    /**
     * Limit how many TeachingLevels to delete.
     */
    limit?: number
  }

  /**
   * TeachingLevel.tutors
   */
  export type TeachingLevel$tutorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TutorLevel
     */
    select?: TutorLevelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TutorLevel
     */
    omit?: TutorLevelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TutorLevelInclude<ExtArgs> | null
    where?: TutorLevelWhereInput
    orderBy?: TutorLevelOrderByWithRelationInput | TutorLevelOrderByWithRelationInput[]
    cursor?: TutorLevelWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TutorLevelScalarFieldEnum | TutorLevelScalarFieldEnum[]
  }

  /**
   * TeachingLevel without action
   */
  export type TeachingLevelDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeachingLevel
     */
    select?: TeachingLevelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeachingLevel
     */
    omit?: TeachingLevelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeachingLevelInclude<ExtArgs> | null
  }


  /**
   * Model TutorLevel
   */

  export type AggregateTutorLevel = {
    _count: TutorLevelCountAggregateOutputType | null
    _avg: TutorLevelAvgAggregateOutputType | null
    _sum: TutorLevelSumAggregateOutputType | null
    _min: TutorLevelMinAggregateOutputType | null
    _max: TutorLevelMaxAggregateOutputType | null
  }

  export type TutorLevelAvgAggregateOutputType = {
    id: number | null
    tutorProfileId: number | null
    teachingLevelId: number | null
  }

  export type TutorLevelSumAggregateOutputType = {
    id: number | null
    tutorProfileId: number | null
    teachingLevelId: number | null
  }

  export type TutorLevelMinAggregateOutputType = {
    id: number | null
    tutorProfileId: number | null
    teachingLevelId: number | null
  }

  export type TutorLevelMaxAggregateOutputType = {
    id: number | null
    tutorProfileId: number | null
    teachingLevelId: number | null
  }

  export type TutorLevelCountAggregateOutputType = {
    id: number
    tutorProfileId: number
    teachingLevelId: number
    _all: number
  }


  export type TutorLevelAvgAggregateInputType = {
    id?: true
    tutorProfileId?: true
    teachingLevelId?: true
  }

  export type TutorLevelSumAggregateInputType = {
    id?: true
    tutorProfileId?: true
    teachingLevelId?: true
  }

  export type TutorLevelMinAggregateInputType = {
    id?: true
    tutorProfileId?: true
    teachingLevelId?: true
  }

  export type TutorLevelMaxAggregateInputType = {
    id?: true
    tutorProfileId?: true
    teachingLevelId?: true
  }

  export type TutorLevelCountAggregateInputType = {
    id?: true
    tutorProfileId?: true
    teachingLevelId?: true
    _all?: true
  }

  export type TutorLevelAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TutorLevel to aggregate.
     */
    where?: TutorLevelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TutorLevels to fetch.
     */
    orderBy?: TutorLevelOrderByWithRelationInput | TutorLevelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TutorLevelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TutorLevels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TutorLevels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TutorLevels
    **/
    _count?: true | TutorLevelCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TutorLevelAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TutorLevelSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TutorLevelMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TutorLevelMaxAggregateInputType
  }

  export type GetTutorLevelAggregateType<T extends TutorLevelAggregateArgs> = {
        [P in keyof T & keyof AggregateTutorLevel]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTutorLevel[P]>
      : GetScalarType<T[P], AggregateTutorLevel[P]>
  }




  export type TutorLevelGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TutorLevelWhereInput
    orderBy?: TutorLevelOrderByWithAggregationInput | TutorLevelOrderByWithAggregationInput[]
    by: TutorLevelScalarFieldEnum[] | TutorLevelScalarFieldEnum
    having?: TutorLevelScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TutorLevelCountAggregateInputType | true
    _avg?: TutorLevelAvgAggregateInputType
    _sum?: TutorLevelSumAggregateInputType
    _min?: TutorLevelMinAggregateInputType
    _max?: TutorLevelMaxAggregateInputType
  }

  export type TutorLevelGroupByOutputType = {
    id: number
    tutorProfileId: number
    teachingLevelId: number
    _count: TutorLevelCountAggregateOutputType | null
    _avg: TutorLevelAvgAggregateOutputType | null
    _sum: TutorLevelSumAggregateOutputType | null
    _min: TutorLevelMinAggregateOutputType | null
    _max: TutorLevelMaxAggregateOutputType | null
  }

  type GetTutorLevelGroupByPayload<T extends TutorLevelGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TutorLevelGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TutorLevelGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TutorLevelGroupByOutputType[P]>
            : GetScalarType<T[P], TutorLevelGroupByOutputType[P]>
        }
      >
    >


  export type TutorLevelSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tutorProfileId?: boolean
    teachingLevelId?: boolean
    tutorProfile?: boolean | TutorProfileDefaultArgs<ExtArgs>
    teachingLevel?: boolean | TeachingLevelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tutorLevel"]>

  export type TutorLevelSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tutorProfileId?: boolean
    teachingLevelId?: boolean
    tutorProfile?: boolean | TutorProfileDefaultArgs<ExtArgs>
    teachingLevel?: boolean | TeachingLevelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tutorLevel"]>

  export type TutorLevelSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tutorProfileId?: boolean
    teachingLevelId?: boolean
    tutorProfile?: boolean | TutorProfileDefaultArgs<ExtArgs>
    teachingLevel?: boolean | TeachingLevelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tutorLevel"]>

  export type TutorLevelSelectScalar = {
    id?: boolean
    tutorProfileId?: boolean
    teachingLevelId?: boolean
  }

  export type TutorLevelOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tutorProfileId" | "teachingLevelId", ExtArgs["result"]["tutorLevel"]>
  export type TutorLevelInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tutorProfile?: boolean | TutorProfileDefaultArgs<ExtArgs>
    teachingLevel?: boolean | TeachingLevelDefaultArgs<ExtArgs>
  }
  export type TutorLevelIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tutorProfile?: boolean | TutorProfileDefaultArgs<ExtArgs>
    teachingLevel?: boolean | TeachingLevelDefaultArgs<ExtArgs>
  }
  export type TutorLevelIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tutorProfile?: boolean | TutorProfileDefaultArgs<ExtArgs>
    teachingLevel?: boolean | TeachingLevelDefaultArgs<ExtArgs>
  }

  export type $TutorLevelPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TutorLevel"
    objects: {
      tutorProfile: Prisma.$TutorProfilePayload<ExtArgs>
      teachingLevel: Prisma.$TeachingLevelPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      tutorProfileId: number
      teachingLevelId: number
    }, ExtArgs["result"]["tutorLevel"]>
    composites: {}
  }

  type TutorLevelGetPayload<S extends boolean | null | undefined | TutorLevelDefaultArgs> = $Result.GetResult<Prisma.$TutorLevelPayload, S>

  type TutorLevelCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TutorLevelFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TutorLevelCountAggregateInputType | true
    }

  export interface TutorLevelDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TutorLevel'], meta: { name: 'TutorLevel' } }
    /**
     * Find zero or one TutorLevel that matches the filter.
     * @param {TutorLevelFindUniqueArgs} args - Arguments to find a TutorLevel
     * @example
     * // Get one TutorLevel
     * const tutorLevel = await prisma.tutorLevel.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TutorLevelFindUniqueArgs>(args: SelectSubset<T, TutorLevelFindUniqueArgs<ExtArgs>>): Prisma__TutorLevelClient<$Result.GetResult<Prisma.$TutorLevelPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TutorLevel that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TutorLevelFindUniqueOrThrowArgs} args - Arguments to find a TutorLevel
     * @example
     * // Get one TutorLevel
     * const tutorLevel = await prisma.tutorLevel.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TutorLevelFindUniqueOrThrowArgs>(args: SelectSubset<T, TutorLevelFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TutorLevelClient<$Result.GetResult<Prisma.$TutorLevelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TutorLevel that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TutorLevelFindFirstArgs} args - Arguments to find a TutorLevel
     * @example
     * // Get one TutorLevel
     * const tutorLevel = await prisma.tutorLevel.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TutorLevelFindFirstArgs>(args?: SelectSubset<T, TutorLevelFindFirstArgs<ExtArgs>>): Prisma__TutorLevelClient<$Result.GetResult<Prisma.$TutorLevelPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TutorLevel that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TutorLevelFindFirstOrThrowArgs} args - Arguments to find a TutorLevel
     * @example
     * // Get one TutorLevel
     * const tutorLevel = await prisma.tutorLevel.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TutorLevelFindFirstOrThrowArgs>(args?: SelectSubset<T, TutorLevelFindFirstOrThrowArgs<ExtArgs>>): Prisma__TutorLevelClient<$Result.GetResult<Prisma.$TutorLevelPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TutorLevels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TutorLevelFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TutorLevels
     * const tutorLevels = await prisma.tutorLevel.findMany()
     * 
     * // Get first 10 TutorLevels
     * const tutorLevels = await prisma.tutorLevel.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tutorLevelWithIdOnly = await prisma.tutorLevel.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TutorLevelFindManyArgs>(args?: SelectSubset<T, TutorLevelFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TutorLevelPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TutorLevel.
     * @param {TutorLevelCreateArgs} args - Arguments to create a TutorLevel.
     * @example
     * // Create one TutorLevel
     * const TutorLevel = await prisma.tutorLevel.create({
     *   data: {
     *     // ... data to create a TutorLevel
     *   }
     * })
     * 
     */
    create<T extends TutorLevelCreateArgs>(args: SelectSubset<T, TutorLevelCreateArgs<ExtArgs>>): Prisma__TutorLevelClient<$Result.GetResult<Prisma.$TutorLevelPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TutorLevels.
     * @param {TutorLevelCreateManyArgs} args - Arguments to create many TutorLevels.
     * @example
     * // Create many TutorLevels
     * const tutorLevel = await prisma.tutorLevel.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TutorLevelCreateManyArgs>(args?: SelectSubset<T, TutorLevelCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TutorLevels and returns the data saved in the database.
     * @param {TutorLevelCreateManyAndReturnArgs} args - Arguments to create many TutorLevels.
     * @example
     * // Create many TutorLevels
     * const tutorLevel = await prisma.tutorLevel.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TutorLevels and only return the `id`
     * const tutorLevelWithIdOnly = await prisma.tutorLevel.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TutorLevelCreateManyAndReturnArgs>(args?: SelectSubset<T, TutorLevelCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TutorLevelPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TutorLevel.
     * @param {TutorLevelDeleteArgs} args - Arguments to delete one TutorLevel.
     * @example
     * // Delete one TutorLevel
     * const TutorLevel = await prisma.tutorLevel.delete({
     *   where: {
     *     // ... filter to delete one TutorLevel
     *   }
     * })
     * 
     */
    delete<T extends TutorLevelDeleteArgs>(args: SelectSubset<T, TutorLevelDeleteArgs<ExtArgs>>): Prisma__TutorLevelClient<$Result.GetResult<Prisma.$TutorLevelPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TutorLevel.
     * @param {TutorLevelUpdateArgs} args - Arguments to update one TutorLevel.
     * @example
     * // Update one TutorLevel
     * const tutorLevel = await prisma.tutorLevel.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TutorLevelUpdateArgs>(args: SelectSubset<T, TutorLevelUpdateArgs<ExtArgs>>): Prisma__TutorLevelClient<$Result.GetResult<Prisma.$TutorLevelPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TutorLevels.
     * @param {TutorLevelDeleteManyArgs} args - Arguments to filter TutorLevels to delete.
     * @example
     * // Delete a few TutorLevels
     * const { count } = await prisma.tutorLevel.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TutorLevelDeleteManyArgs>(args?: SelectSubset<T, TutorLevelDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TutorLevels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TutorLevelUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TutorLevels
     * const tutorLevel = await prisma.tutorLevel.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TutorLevelUpdateManyArgs>(args: SelectSubset<T, TutorLevelUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TutorLevels and returns the data updated in the database.
     * @param {TutorLevelUpdateManyAndReturnArgs} args - Arguments to update many TutorLevels.
     * @example
     * // Update many TutorLevels
     * const tutorLevel = await prisma.tutorLevel.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TutorLevels and only return the `id`
     * const tutorLevelWithIdOnly = await prisma.tutorLevel.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TutorLevelUpdateManyAndReturnArgs>(args: SelectSubset<T, TutorLevelUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TutorLevelPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TutorLevel.
     * @param {TutorLevelUpsertArgs} args - Arguments to update or create a TutorLevel.
     * @example
     * // Update or create a TutorLevel
     * const tutorLevel = await prisma.tutorLevel.upsert({
     *   create: {
     *     // ... data to create a TutorLevel
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TutorLevel we want to update
     *   }
     * })
     */
    upsert<T extends TutorLevelUpsertArgs>(args: SelectSubset<T, TutorLevelUpsertArgs<ExtArgs>>): Prisma__TutorLevelClient<$Result.GetResult<Prisma.$TutorLevelPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TutorLevels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TutorLevelCountArgs} args - Arguments to filter TutorLevels to count.
     * @example
     * // Count the number of TutorLevels
     * const count = await prisma.tutorLevel.count({
     *   where: {
     *     // ... the filter for the TutorLevels we want to count
     *   }
     * })
    **/
    count<T extends TutorLevelCountArgs>(
      args?: Subset<T, TutorLevelCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TutorLevelCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TutorLevel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TutorLevelAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TutorLevelAggregateArgs>(args: Subset<T, TutorLevelAggregateArgs>): Prisma.PrismaPromise<GetTutorLevelAggregateType<T>>

    /**
     * Group by TutorLevel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TutorLevelGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TutorLevelGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TutorLevelGroupByArgs['orderBy'] }
        : { orderBy?: TutorLevelGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TutorLevelGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTutorLevelGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TutorLevel model
   */
  readonly fields: TutorLevelFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TutorLevel.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TutorLevelClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tutorProfile<T extends TutorProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TutorProfileDefaultArgs<ExtArgs>>): Prisma__TutorProfileClient<$Result.GetResult<Prisma.$TutorProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    teachingLevel<T extends TeachingLevelDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TeachingLevelDefaultArgs<ExtArgs>>): Prisma__TeachingLevelClient<$Result.GetResult<Prisma.$TeachingLevelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TutorLevel model
   */
  interface TutorLevelFieldRefs {
    readonly id: FieldRef<"TutorLevel", 'Int'>
    readonly tutorProfileId: FieldRef<"TutorLevel", 'Int'>
    readonly teachingLevelId: FieldRef<"TutorLevel", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * TutorLevel findUnique
   */
  export type TutorLevelFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TutorLevel
     */
    select?: TutorLevelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TutorLevel
     */
    omit?: TutorLevelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TutorLevelInclude<ExtArgs> | null
    /**
     * Filter, which TutorLevel to fetch.
     */
    where: TutorLevelWhereUniqueInput
  }

  /**
   * TutorLevel findUniqueOrThrow
   */
  export type TutorLevelFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TutorLevel
     */
    select?: TutorLevelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TutorLevel
     */
    omit?: TutorLevelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TutorLevelInclude<ExtArgs> | null
    /**
     * Filter, which TutorLevel to fetch.
     */
    where: TutorLevelWhereUniqueInput
  }

  /**
   * TutorLevel findFirst
   */
  export type TutorLevelFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TutorLevel
     */
    select?: TutorLevelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TutorLevel
     */
    omit?: TutorLevelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TutorLevelInclude<ExtArgs> | null
    /**
     * Filter, which TutorLevel to fetch.
     */
    where?: TutorLevelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TutorLevels to fetch.
     */
    orderBy?: TutorLevelOrderByWithRelationInput | TutorLevelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TutorLevels.
     */
    cursor?: TutorLevelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TutorLevels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TutorLevels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TutorLevels.
     */
    distinct?: TutorLevelScalarFieldEnum | TutorLevelScalarFieldEnum[]
  }

  /**
   * TutorLevel findFirstOrThrow
   */
  export type TutorLevelFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TutorLevel
     */
    select?: TutorLevelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TutorLevel
     */
    omit?: TutorLevelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TutorLevelInclude<ExtArgs> | null
    /**
     * Filter, which TutorLevel to fetch.
     */
    where?: TutorLevelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TutorLevels to fetch.
     */
    orderBy?: TutorLevelOrderByWithRelationInput | TutorLevelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TutorLevels.
     */
    cursor?: TutorLevelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TutorLevels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TutorLevels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TutorLevels.
     */
    distinct?: TutorLevelScalarFieldEnum | TutorLevelScalarFieldEnum[]
  }

  /**
   * TutorLevel findMany
   */
  export type TutorLevelFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TutorLevel
     */
    select?: TutorLevelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TutorLevel
     */
    omit?: TutorLevelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TutorLevelInclude<ExtArgs> | null
    /**
     * Filter, which TutorLevels to fetch.
     */
    where?: TutorLevelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TutorLevels to fetch.
     */
    orderBy?: TutorLevelOrderByWithRelationInput | TutorLevelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TutorLevels.
     */
    cursor?: TutorLevelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TutorLevels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TutorLevels.
     */
    skip?: number
    distinct?: TutorLevelScalarFieldEnum | TutorLevelScalarFieldEnum[]
  }

  /**
   * TutorLevel create
   */
  export type TutorLevelCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TutorLevel
     */
    select?: TutorLevelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TutorLevel
     */
    omit?: TutorLevelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TutorLevelInclude<ExtArgs> | null
    /**
     * The data needed to create a TutorLevel.
     */
    data: XOR<TutorLevelCreateInput, TutorLevelUncheckedCreateInput>
  }

  /**
   * TutorLevel createMany
   */
  export type TutorLevelCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TutorLevels.
     */
    data: TutorLevelCreateManyInput | TutorLevelCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TutorLevel createManyAndReturn
   */
  export type TutorLevelCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TutorLevel
     */
    select?: TutorLevelSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TutorLevel
     */
    omit?: TutorLevelOmit<ExtArgs> | null
    /**
     * The data used to create many TutorLevels.
     */
    data: TutorLevelCreateManyInput | TutorLevelCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TutorLevelIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TutorLevel update
   */
  export type TutorLevelUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TutorLevel
     */
    select?: TutorLevelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TutorLevel
     */
    omit?: TutorLevelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TutorLevelInclude<ExtArgs> | null
    /**
     * The data needed to update a TutorLevel.
     */
    data: XOR<TutorLevelUpdateInput, TutorLevelUncheckedUpdateInput>
    /**
     * Choose, which TutorLevel to update.
     */
    where: TutorLevelWhereUniqueInput
  }

  /**
   * TutorLevel updateMany
   */
  export type TutorLevelUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TutorLevels.
     */
    data: XOR<TutorLevelUpdateManyMutationInput, TutorLevelUncheckedUpdateManyInput>
    /**
     * Filter which TutorLevels to update
     */
    where?: TutorLevelWhereInput
    /**
     * Limit how many TutorLevels to update.
     */
    limit?: number
  }

  /**
   * TutorLevel updateManyAndReturn
   */
  export type TutorLevelUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TutorLevel
     */
    select?: TutorLevelSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TutorLevel
     */
    omit?: TutorLevelOmit<ExtArgs> | null
    /**
     * The data used to update TutorLevels.
     */
    data: XOR<TutorLevelUpdateManyMutationInput, TutorLevelUncheckedUpdateManyInput>
    /**
     * Filter which TutorLevels to update
     */
    where?: TutorLevelWhereInput
    /**
     * Limit how many TutorLevels to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TutorLevelIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TutorLevel upsert
   */
  export type TutorLevelUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TutorLevel
     */
    select?: TutorLevelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TutorLevel
     */
    omit?: TutorLevelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TutorLevelInclude<ExtArgs> | null
    /**
     * The filter to search for the TutorLevel to update in case it exists.
     */
    where: TutorLevelWhereUniqueInput
    /**
     * In case the TutorLevel found by the `where` argument doesn't exist, create a new TutorLevel with this data.
     */
    create: XOR<TutorLevelCreateInput, TutorLevelUncheckedCreateInput>
    /**
     * In case the TutorLevel was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TutorLevelUpdateInput, TutorLevelUncheckedUpdateInput>
  }

  /**
   * TutorLevel delete
   */
  export type TutorLevelDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TutorLevel
     */
    select?: TutorLevelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TutorLevel
     */
    omit?: TutorLevelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TutorLevelInclude<ExtArgs> | null
    /**
     * Filter which TutorLevel to delete.
     */
    where: TutorLevelWhereUniqueInput
  }

  /**
   * TutorLevel deleteMany
   */
  export type TutorLevelDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TutorLevels to delete
     */
    where?: TutorLevelWhereInput
    /**
     * Limit how many TutorLevels to delete.
     */
    limit?: number
  }

  /**
   * TutorLevel without action
   */
  export type TutorLevelDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TutorLevel
     */
    select?: TutorLevelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TutorLevel
     */
    omit?: TutorLevelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TutorLevelInclude<ExtArgs> | null
  }


  /**
   * Model BookingTutor
   */

  export type AggregateBookingTutor = {
    _count: BookingTutorCountAggregateOutputType | null
    _avg: BookingTutorAvgAggregateOutputType | null
    _sum: BookingTutorSumAggregateOutputType | null
    _min: BookingTutorMinAggregateOutputType | null
    _max: BookingTutorMaxAggregateOutputType | null
  }

  export type BookingTutorAvgAggregateOutputType = {
    id: number | null
    subjectId: number | null
    assignedTutorId: number | null
  }

  export type BookingTutorSumAggregateOutputType = {
    id: number | null
    subjectId: number | null
    assignedTutorId: number | null
  }

  export type BookingTutorMinAggregateOutputType = {
    id: number | null
    fullName: string | null
    phoneNumber: string | null
    email: string | null
    subjectId: number | null
    subjectName: string | null
    level: string | null
    target: string | null
    nationalityTeacher: string | null
    teacherSex: $Enums.SexMethod | null
    studyingDays: $Enums.TeachingTime | null
    studyingTimes: string | null
    startStudyingDate: string | null
    teachingMethod: $Enums.TeachingMethod | null
    studyLocation: string | null
    yourCity: string | null
    note: string | null
    assignedTutorId: number | null
    status: $Enums.BookingStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BookingTutorMaxAggregateOutputType = {
    id: number | null
    fullName: string | null
    phoneNumber: string | null
    email: string | null
    subjectId: number | null
    subjectName: string | null
    level: string | null
    target: string | null
    nationalityTeacher: string | null
    teacherSex: $Enums.SexMethod | null
    studyingDays: $Enums.TeachingTime | null
    studyingTimes: string | null
    startStudyingDate: string | null
    teachingMethod: $Enums.TeachingMethod | null
    studyLocation: string | null
    yourCity: string | null
    note: string | null
    assignedTutorId: number | null
    status: $Enums.BookingStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BookingTutorCountAggregateOutputType = {
    id: number
    fullName: number
    phoneNumber: number
    email: number
    subjectId: number
    subjectName: number
    level: number
    target: number
    nationalityTeacher: number
    teacherSex: number
    studyingDays: number
    studyingTimes: number
    startStudyingDate: number
    teachingMethod: number
    studyLocation: number
    yourCity: number
    note: number
    assignedTutorId: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BookingTutorAvgAggregateInputType = {
    id?: true
    subjectId?: true
    assignedTutorId?: true
  }

  export type BookingTutorSumAggregateInputType = {
    id?: true
    subjectId?: true
    assignedTutorId?: true
  }

  export type BookingTutorMinAggregateInputType = {
    id?: true
    fullName?: true
    phoneNumber?: true
    email?: true
    subjectId?: true
    subjectName?: true
    level?: true
    target?: true
    nationalityTeacher?: true
    teacherSex?: true
    studyingDays?: true
    studyingTimes?: true
    startStudyingDate?: true
    teachingMethod?: true
    studyLocation?: true
    yourCity?: true
    note?: true
    assignedTutorId?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BookingTutorMaxAggregateInputType = {
    id?: true
    fullName?: true
    phoneNumber?: true
    email?: true
    subjectId?: true
    subjectName?: true
    level?: true
    target?: true
    nationalityTeacher?: true
    teacherSex?: true
    studyingDays?: true
    studyingTimes?: true
    startStudyingDate?: true
    teachingMethod?: true
    studyLocation?: true
    yourCity?: true
    note?: true
    assignedTutorId?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BookingTutorCountAggregateInputType = {
    id?: true
    fullName?: true
    phoneNumber?: true
    email?: true
    subjectId?: true
    subjectName?: true
    level?: true
    target?: true
    nationalityTeacher?: true
    teacherSex?: true
    studyingDays?: true
    studyingTimes?: true
    startStudyingDate?: true
    teachingMethod?: true
    studyLocation?: true
    yourCity?: true
    note?: true
    assignedTutorId?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BookingTutorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BookingTutor to aggregate.
     */
    where?: BookingTutorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookingTutors to fetch.
     */
    orderBy?: BookingTutorOrderByWithRelationInput | BookingTutorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BookingTutorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookingTutors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookingTutors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BookingTutors
    **/
    _count?: true | BookingTutorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BookingTutorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BookingTutorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BookingTutorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BookingTutorMaxAggregateInputType
  }

  export type GetBookingTutorAggregateType<T extends BookingTutorAggregateArgs> = {
        [P in keyof T & keyof AggregateBookingTutor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBookingTutor[P]>
      : GetScalarType<T[P], AggregateBookingTutor[P]>
  }




  export type BookingTutorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingTutorWhereInput
    orderBy?: BookingTutorOrderByWithAggregationInput | BookingTutorOrderByWithAggregationInput[]
    by: BookingTutorScalarFieldEnum[] | BookingTutorScalarFieldEnum
    having?: BookingTutorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BookingTutorCountAggregateInputType | true
    _avg?: BookingTutorAvgAggregateInputType
    _sum?: BookingTutorSumAggregateInputType
    _min?: BookingTutorMinAggregateInputType
    _max?: BookingTutorMaxAggregateInputType
  }

  export type BookingTutorGroupByOutputType = {
    id: number
    fullName: string
    phoneNumber: string
    email: string | null
    subjectId: number | null
    subjectName: string | null
    level: string | null
    target: string | null
    nationalityTeacher: string | null
    teacherSex: $Enums.SexMethod | null
    studyingDays: $Enums.TeachingTime | null
    studyingTimes: string | null
    startStudyingDate: string | null
    teachingMethod: $Enums.TeachingMethod | null
    studyLocation: string | null
    yourCity: string | null
    note: string | null
    assignedTutorId: number | null
    status: $Enums.BookingStatus | null
    createdAt: Date
    updatedAt: Date
    _count: BookingTutorCountAggregateOutputType | null
    _avg: BookingTutorAvgAggregateOutputType | null
    _sum: BookingTutorSumAggregateOutputType | null
    _min: BookingTutorMinAggregateOutputType | null
    _max: BookingTutorMaxAggregateOutputType | null
  }

  type GetBookingTutorGroupByPayload<T extends BookingTutorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BookingTutorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BookingTutorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BookingTutorGroupByOutputType[P]>
            : GetScalarType<T[P], BookingTutorGroupByOutputType[P]>
        }
      >
    >


  export type BookingTutorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    phoneNumber?: boolean
    email?: boolean
    subjectId?: boolean
    subjectName?: boolean
    level?: boolean
    target?: boolean
    nationalityTeacher?: boolean
    teacherSex?: boolean
    studyingDays?: boolean
    studyingTimes?: boolean
    startStudyingDate?: boolean
    teachingMethod?: boolean
    studyLocation?: boolean
    yourCity?: boolean
    note?: boolean
    assignedTutorId?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    subject?: boolean | BookingTutor$subjectArgs<ExtArgs>
    assignedTutor?: boolean | BookingTutor$assignedTutorArgs<ExtArgs>
  }, ExtArgs["result"]["bookingTutor"]>

  export type BookingTutorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    phoneNumber?: boolean
    email?: boolean
    subjectId?: boolean
    subjectName?: boolean
    level?: boolean
    target?: boolean
    nationalityTeacher?: boolean
    teacherSex?: boolean
    studyingDays?: boolean
    studyingTimes?: boolean
    startStudyingDate?: boolean
    teachingMethod?: boolean
    studyLocation?: boolean
    yourCity?: boolean
    note?: boolean
    assignedTutorId?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    subject?: boolean | BookingTutor$subjectArgs<ExtArgs>
    assignedTutor?: boolean | BookingTutor$assignedTutorArgs<ExtArgs>
  }, ExtArgs["result"]["bookingTutor"]>

  export type BookingTutorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    phoneNumber?: boolean
    email?: boolean
    subjectId?: boolean
    subjectName?: boolean
    level?: boolean
    target?: boolean
    nationalityTeacher?: boolean
    teacherSex?: boolean
    studyingDays?: boolean
    studyingTimes?: boolean
    startStudyingDate?: boolean
    teachingMethod?: boolean
    studyLocation?: boolean
    yourCity?: boolean
    note?: boolean
    assignedTutorId?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    subject?: boolean | BookingTutor$subjectArgs<ExtArgs>
    assignedTutor?: boolean | BookingTutor$assignedTutorArgs<ExtArgs>
  }, ExtArgs["result"]["bookingTutor"]>

  export type BookingTutorSelectScalar = {
    id?: boolean
    fullName?: boolean
    phoneNumber?: boolean
    email?: boolean
    subjectId?: boolean
    subjectName?: boolean
    level?: boolean
    target?: boolean
    nationalityTeacher?: boolean
    teacherSex?: boolean
    studyingDays?: boolean
    studyingTimes?: boolean
    startStudyingDate?: boolean
    teachingMethod?: boolean
    studyLocation?: boolean
    yourCity?: boolean
    note?: boolean
    assignedTutorId?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BookingTutorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fullName" | "phoneNumber" | "email" | "subjectId" | "subjectName" | "level" | "target" | "nationalityTeacher" | "teacherSex" | "studyingDays" | "studyingTimes" | "startStudyingDate" | "teachingMethod" | "studyLocation" | "yourCity" | "note" | "assignedTutorId" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["bookingTutor"]>
  export type BookingTutorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subject?: boolean | BookingTutor$subjectArgs<ExtArgs>
    assignedTutor?: boolean | BookingTutor$assignedTutorArgs<ExtArgs>
  }
  export type BookingTutorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subject?: boolean | BookingTutor$subjectArgs<ExtArgs>
    assignedTutor?: boolean | BookingTutor$assignedTutorArgs<ExtArgs>
  }
  export type BookingTutorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subject?: boolean | BookingTutor$subjectArgs<ExtArgs>
    assignedTutor?: boolean | BookingTutor$assignedTutorArgs<ExtArgs>
  }

  export type $BookingTutorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BookingTutor"
    objects: {
      subject: Prisma.$SubjectCategoryPayload<ExtArgs> | null
      assignedTutor: Prisma.$TutorProfilePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      fullName: string
      phoneNumber: string
      email: string | null
      subjectId: number | null
      subjectName: string | null
      level: string | null
      target: string | null
      nationalityTeacher: string | null
      teacherSex: $Enums.SexMethod | null
      studyingDays: $Enums.TeachingTime | null
      studyingTimes: string | null
      startStudyingDate: string | null
      teachingMethod: $Enums.TeachingMethod | null
      studyLocation: string | null
      yourCity: string | null
      note: string | null
      assignedTutorId: number | null
      status: $Enums.BookingStatus | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["bookingTutor"]>
    composites: {}
  }

  type BookingTutorGetPayload<S extends boolean | null | undefined | BookingTutorDefaultArgs> = $Result.GetResult<Prisma.$BookingTutorPayload, S>

  type BookingTutorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BookingTutorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BookingTutorCountAggregateInputType | true
    }

  export interface BookingTutorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BookingTutor'], meta: { name: 'BookingTutor' } }
    /**
     * Find zero or one BookingTutor that matches the filter.
     * @param {BookingTutorFindUniqueArgs} args - Arguments to find a BookingTutor
     * @example
     * // Get one BookingTutor
     * const bookingTutor = await prisma.bookingTutor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BookingTutorFindUniqueArgs>(args: SelectSubset<T, BookingTutorFindUniqueArgs<ExtArgs>>): Prisma__BookingTutorClient<$Result.GetResult<Prisma.$BookingTutorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BookingTutor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BookingTutorFindUniqueOrThrowArgs} args - Arguments to find a BookingTutor
     * @example
     * // Get one BookingTutor
     * const bookingTutor = await prisma.bookingTutor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BookingTutorFindUniqueOrThrowArgs>(args: SelectSubset<T, BookingTutorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BookingTutorClient<$Result.GetResult<Prisma.$BookingTutorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BookingTutor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingTutorFindFirstArgs} args - Arguments to find a BookingTutor
     * @example
     * // Get one BookingTutor
     * const bookingTutor = await prisma.bookingTutor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BookingTutorFindFirstArgs>(args?: SelectSubset<T, BookingTutorFindFirstArgs<ExtArgs>>): Prisma__BookingTutorClient<$Result.GetResult<Prisma.$BookingTutorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BookingTutor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingTutorFindFirstOrThrowArgs} args - Arguments to find a BookingTutor
     * @example
     * // Get one BookingTutor
     * const bookingTutor = await prisma.bookingTutor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BookingTutorFindFirstOrThrowArgs>(args?: SelectSubset<T, BookingTutorFindFirstOrThrowArgs<ExtArgs>>): Prisma__BookingTutorClient<$Result.GetResult<Prisma.$BookingTutorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BookingTutors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingTutorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BookingTutors
     * const bookingTutors = await prisma.bookingTutor.findMany()
     * 
     * // Get first 10 BookingTutors
     * const bookingTutors = await prisma.bookingTutor.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bookingTutorWithIdOnly = await prisma.bookingTutor.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BookingTutorFindManyArgs>(args?: SelectSubset<T, BookingTutorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingTutorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BookingTutor.
     * @param {BookingTutorCreateArgs} args - Arguments to create a BookingTutor.
     * @example
     * // Create one BookingTutor
     * const BookingTutor = await prisma.bookingTutor.create({
     *   data: {
     *     // ... data to create a BookingTutor
     *   }
     * })
     * 
     */
    create<T extends BookingTutorCreateArgs>(args: SelectSubset<T, BookingTutorCreateArgs<ExtArgs>>): Prisma__BookingTutorClient<$Result.GetResult<Prisma.$BookingTutorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BookingTutors.
     * @param {BookingTutorCreateManyArgs} args - Arguments to create many BookingTutors.
     * @example
     * // Create many BookingTutors
     * const bookingTutor = await prisma.bookingTutor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BookingTutorCreateManyArgs>(args?: SelectSubset<T, BookingTutorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BookingTutors and returns the data saved in the database.
     * @param {BookingTutorCreateManyAndReturnArgs} args - Arguments to create many BookingTutors.
     * @example
     * // Create many BookingTutors
     * const bookingTutor = await prisma.bookingTutor.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BookingTutors and only return the `id`
     * const bookingTutorWithIdOnly = await prisma.bookingTutor.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BookingTutorCreateManyAndReturnArgs>(args?: SelectSubset<T, BookingTutorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingTutorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BookingTutor.
     * @param {BookingTutorDeleteArgs} args - Arguments to delete one BookingTutor.
     * @example
     * // Delete one BookingTutor
     * const BookingTutor = await prisma.bookingTutor.delete({
     *   where: {
     *     // ... filter to delete one BookingTutor
     *   }
     * })
     * 
     */
    delete<T extends BookingTutorDeleteArgs>(args: SelectSubset<T, BookingTutorDeleteArgs<ExtArgs>>): Prisma__BookingTutorClient<$Result.GetResult<Prisma.$BookingTutorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BookingTutor.
     * @param {BookingTutorUpdateArgs} args - Arguments to update one BookingTutor.
     * @example
     * // Update one BookingTutor
     * const bookingTutor = await prisma.bookingTutor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BookingTutorUpdateArgs>(args: SelectSubset<T, BookingTutorUpdateArgs<ExtArgs>>): Prisma__BookingTutorClient<$Result.GetResult<Prisma.$BookingTutorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BookingTutors.
     * @param {BookingTutorDeleteManyArgs} args - Arguments to filter BookingTutors to delete.
     * @example
     * // Delete a few BookingTutors
     * const { count } = await prisma.bookingTutor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BookingTutorDeleteManyArgs>(args?: SelectSubset<T, BookingTutorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BookingTutors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingTutorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BookingTutors
     * const bookingTutor = await prisma.bookingTutor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BookingTutorUpdateManyArgs>(args: SelectSubset<T, BookingTutorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BookingTutors and returns the data updated in the database.
     * @param {BookingTutorUpdateManyAndReturnArgs} args - Arguments to update many BookingTutors.
     * @example
     * // Update many BookingTutors
     * const bookingTutor = await prisma.bookingTutor.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BookingTutors and only return the `id`
     * const bookingTutorWithIdOnly = await prisma.bookingTutor.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BookingTutorUpdateManyAndReturnArgs>(args: SelectSubset<T, BookingTutorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingTutorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BookingTutor.
     * @param {BookingTutorUpsertArgs} args - Arguments to update or create a BookingTutor.
     * @example
     * // Update or create a BookingTutor
     * const bookingTutor = await prisma.bookingTutor.upsert({
     *   create: {
     *     // ... data to create a BookingTutor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BookingTutor we want to update
     *   }
     * })
     */
    upsert<T extends BookingTutorUpsertArgs>(args: SelectSubset<T, BookingTutorUpsertArgs<ExtArgs>>): Prisma__BookingTutorClient<$Result.GetResult<Prisma.$BookingTutorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BookingTutors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingTutorCountArgs} args - Arguments to filter BookingTutors to count.
     * @example
     * // Count the number of BookingTutors
     * const count = await prisma.bookingTutor.count({
     *   where: {
     *     // ... the filter for the BookingTutors we want to count
     *   }
     * })
    **/
    count<T extends BookingTutorCountArgs>(
      args?: Subset<T, BookingTutorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BookingTutorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BookingTutor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingTutorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BookingTutorAggregateArgs>(args: Subset<T, BookingTutorAggregateArgs>): Prisma.PrismaPromise<GetBookingTutorAggregateType<T>>

    /**
     * Group by BookingTutor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingTutorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BookingTutorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BookingTutorGroupByArgs['orderBy'] }
        : { orderBy?: BookingTutorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BookingTutorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBookingTutorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BookingTutor model
   */
  readonly fields: BookingTutorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BookingTutor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BookingTutorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    subject<T extends BookingTutor$subjectArgs<ExtArgs> = {}>(args?: Subset<T, BookingTutor$subjectArgs<ExtArgs>>): Prisma__SubjectCategoryClient<$Result.GetResult<Prisma.$SubjectCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    assignedTutor<T extends BookingTutor$assignedTutorArgs<ExtArgs> = {}>(args?: Subset<T, BookingTutor$assignedTutorArgs<ExtArgs>>): Prisma__TutorProfileClient<$Result.GetResult<Prisma.$TutorProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the BookingTutor model
   */
  interface BookingTutorFieldRefs {
    readonly id: FieldRef<"BookingTutor", 'Int'>
    readonly fullName: FieldRef<"BookingTutor", 'String'>
    readonly phoneNumber: FieldRef<"BookingTutor", 'String'>
    readonly email: FieldRef<"BookingTutor", 'String'>
    readonly subjectId: FieldRef<"BookingTutor", 'Int'>
    readonly subjectName: FieldRef<"BookingTutor", 'String'>
    readonly level: FieldRef<"BookingTutor", 'String'>
    readonly target: FieldRef<"BookingTutor", 'String'>
    readonly nationalityTeacher: FieldRef<"BookingTutor", 'String'>
    readonly teacherSex: FieldRef<"BookingTutor", 'SexMethod'>
    readonly studyingDays: FieldRef<"BookingTutor", 'TeachingTime'>
    readonly studyingTimes: FieldRef<"BookingTutor", 'String'>
    readonly startStudyingDate: FieldRef<"BookingTutor", 'String'>
    readonly teachingMethod: FieldRef<"BookingTutor", 'TeachingMethod'>
    readonly studyLocation: FieldRef<"BookingTutor", 'String'>
    readonly yourCity: FieldRef<"BookingTutor", 'String'>
    readonly note: FieldRef<"BookingTutor", 'String'>
    readonly assignedTutorId: FieldRef<"BookingTutor", 'Int'>
    readonly status: FieldRef<"BookingTutor", 'BookingStatus'>
    readonly createdAt: FieldRef<"BookingTutor", 'DateTime'>
    readonly updatedAt: FieldRef<"BookingTutor", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * BookingTutor findUnique
   */
  export type BookingTutorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingTutor
     */
    select?: BookingTutorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingTutor
     */
    omit?: BookingTutorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingTutorInclude<ExtArgs> | null
    /**
     * Filter, which BookingTutor to fetch.
     */
    where: BookingTutorWhereUniqueInput
  }

  /**
   * BookingTutor findUniqueOrThrow
   */
  export type BookingTutorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingTutor
     */
    select?: BookingTutorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingTutor
     */
    omit?: BookingTutorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingTutorInclude<ExtArgs> | null
    /**
     * Filter, which BookingTutor to fetch.
     */
    where: BookingTutorWhereUniqueInput
  }

  /**
   * BookingTutor findFirst
   */
  export type BookingTutorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingTutor
     */
    select?: BookingTutorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingTutor
     */
    omit?: BookingTutorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingTutorInclude<ExtArgs> | null
    /**
     * Filter, which BookingTutor to fetch.
     */
    where?: BookingTutorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookingTutors to fetch.
     */
    orderBy?: BookingTutorOrderByWithRelationInput | BookingTutorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BookingTutors.
     */
    cursor?: BookingTutorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookingTutors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookingTutors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BookingTutors.
     */
    distinct?: BookingTutorScalarFieldEnum | BookingTutorScalarFieldEnum[]
  }

  /**
   * BookingTutor findFirstOrThrow
   */
  export type BookingTutorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingTutor
     */
    select?: BookingTutorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingTutor
     */
    omit?: BookingTutorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingTutorInclude<ExtArgs> | null
    /**
     * Filter, which BookingTutor to fetch.
     */
    where?: BookingTutorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookingTutors to fetch.
     */
    orderBy?: BookingTutorOrderByWithRelationInput | BookingTutorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BookingTutors.
     */
    cursor?: BookingTutorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookingTutors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookingTutors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BookingTutors.
     */
    distinct?: BookingTutorScalarFieldEnum | BookingTutorScalarFieldEnum[]
  }

  /**
   * BookingTutor findMany
   */
  export type BookingTutorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingTutor
     */
    select?: BookingTutorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingTutor
     */
    omit?: BookingTutorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingTutorInclude<ExtArgs> | null
    /**
     * Filter, which BookingTutors to fetch.
     */
    where?: BookingTutorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookingTutors to fetch.
     */
    orderBy?: BookingTutorOrderByWithRelationInput | BookingTutorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BookingTutors.
     */
    cursor?: BookingTutorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookingTutors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookingTutors.
     */
    skip?: number
    distinct?: BookingTutorScalarFieldEnum | BookingTutorScalarFieldEnum[]
  }

  /**
   * BookingTutor create
   */
  export type BookingTutorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingTutor
     */
    select?: BookingTutorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingTutor
     */
    omit?: BookingTutorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingTutorInclude<ExtArgs> | null
    /**
     * The data needed to create a BookingTutor.
     */
    data: XOR<BookingTutorCreateInput, BookingTutorUncheckedCreateInput>
  }

  /**
   * BookingTutor createMany
   */
  export type BookingTutorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BookingTutors.
     */
    data: BookingTutorCreateManyInput | BookingTutorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BookingTutor createManyAndReturn
   */
  export type BookingTutorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingTutor
     */
    select?: BookingTutorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BookingTutor
     */
    omit?: BookingTutorOmit<ExtArgs> | null
    /**
     * The data used to create many BookingTutors.
     */
    data: BookingTutorCreateManyInput | BookingTutorCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingTutorIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BookingTutor update
   */
  export type BookingTutorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingTutor
     */
    select?: BookingTutorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingTutor
     */
    omit?: BookingTutorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingTutorInclude<ExtArgs> | null
    /**
     * The data needed to update a BookingTutor.
     */
    data: XOR<BookingTutorUpdateInput, BookingTutorUncheckedUpdateInput>
    /**
     * Choose, which BookingTutor to update.
     */
    where: BookingTutorWhereUniqueInput
  }

  /**
   * BookingTutor updateMany
   */
  export type BookingTutorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BookingTutors.
     */
    data: XOR<BookingTutorUpdateManyMutationInput, BookingTutorUncheckedUpdateManyInput>
    /**
     * Filter which BookingTutors to update
     */
    where?: BookingTutorWhereInput
    /**
     * Limit how many BookingTutors to update.
     */
    limit?: number
  }

  /**
   * BookingTutor updateManyAndReturn
   */
  export type BookingTutorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingTutor
     */
    select?: BookingTutorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BookingTutor
     */
    omit?: BookingTutorOmit<ExtArgs> | null
    /**
     * The data used to update BookingTutors.
     */
    data: XOR<BookingTutorUpdateManyMutationInput, BookingTutorUncheckedUpdateManyInput>
    /**
     * Filter which BookingTutors to update
     */
    where?: BookingTutorWhereInput
    /**
     * Limit how many BookingTutors to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingTutorIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * BookingTutor upsert
   */
  export type BookingTutorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingTutor
     */
    select?: BookingTutorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingTutor
     */
    omit?: BookingTutorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingTutorInclude<ExtArgs> | null
    /**
     * The filter to search for the BookingTutor to update in case it exists.
     */
    where: BookingTutorWhereUniqueInput
    /**
     * In case the BookingTutor found by the `where` argument doesn't exist, create a new BookingTutor with this data.
     */
    create: XOR<BookingTutorCreateInput, BookingTutorUncheckedCreateInput>
    /**
     * In case the BookingTutor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BookingTutorUpdateInput, BookingTutorUncheckedUpdateInput>
  }

  /**
   * BookingTutor delete
   */
  export type BookingTutorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingTutor
     */
    select?: BookingTutorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingTutor
     */
    omit?: BookingTutorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingTutorInclude<ExtArgs> | null
    /**
     * Filter which BookingTutor to delete.
     */
    where: BookingTutorWhereUniqueInput
  }

  /**
   * BookingTutor deleteMany
   */
  export type BookingTutorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BookingTutors to delete
     */
    where?: BookingTutorWhereInput
    /**
     * Limit how many BookingTutors to delete.
     */
    limit?: number
  }

  /**
   * BookingTutor.subject
   */
  export type BookingTutor$subjectArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubjectCategory
     */
    select?: SubjectCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubjectCategory
     */
    omit?: SubjectCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectCategoryInclude<ExtArgs> | null
    where?: SubjectCategoryWhereInput
  }

  /**
   * BookingTutor.assignedTutor
   */
  export type BookingTutor$assignedTutorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TutorProfile
     */
    select?: TutorProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TutorProfile
     */
    omit?: TutorProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TutorProfileInclude<ExtArgs> | null
    where?: TutorProfileWhereInput
  }

  /**
   * BookingTutor without action
   */
  export type BookingTutorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingTutor
     */
    select?: BookingTutorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingTutor
     */
    omit?: BookingTutorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingTutorInclude<ExtArgs> | null
  }


  /**
   * Model Experience
   */

  export type AggregateExperience = {
    _count: ExperienceCountAggregateOutputType | null
    _avg: ExperienceAvgAggregateOutputType | null
    _sum: ExperienceSumAggregateOutputType | null
    _min: ExperienceMinAggregateOutputType | null
    _max: ExperienceMaxAggregateOutputType | null
  }

  export type ExperienceAvgAggregateOutputType = {
    id: number | null
    tutorId: number | null
  }

  export type ExperienceSumAggregateOutputType = {
    id: number | null
    tutorId: number | null
  }

  export type ExperienceMinAggregateOutputType = {
    id: number | null
    detail: string | null
    tutorId: number | null
  }

  export type ExperienceMaxAggregateOutputType = {
    id: number | null
    detail: string | null
    tutorId: number | null
  }

  export type ExperienceCountAggregateOutputType = {
    id: number
    detail: number
    tutorId: number
    _all: number
  }


  export type ExperienceAvgAggregateInputType = {
    id?: true
    tutorId?: true
  }

  export type ExperienceSumAggregateInputType = {
    id?: true
    tutorId?: true
  }

  export type ExperienceMinAggregateInputType = {
    id?: true
    detail?: true
    tutorId?: true
  }

  export type ExperienceMaxAggregateInputType = {
    id?: true
    detail?: true
    tutorId?: true
  }

  export type ExperienceCountAggregateInputType = {
    id?: true
    detail?: true
    tutorId?: true
    _all?: true
  }

  export type ExperienceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Experience to aggregate.
     */
    where?: ExperienceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Experiences to fetch.
     */
    orderBy?: ExperienceOrderByWithRelationInput | ExperienceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExperienceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Experiences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Experiences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Experiences
    **/
    _count?: true | ExperienceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ExperienceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ExperienceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExperienceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExperienceMaxAggregateInputType
  }

  export type GetExperienceAggregateType<T extends ExperienceAggregateArgs> = {
        [P in keyof T & keyof AggregateExperience]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExperience[P]>
      : GetScalarType<T[P], AggregateExperience[P]>
  }




  export type ExperienceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExperienceWhereInput
    orderBy?: ExperienceOrderByWithAggregationInput | ExperienceOrderByWithAggregationInput[]
    by: ExperienceScalarFieldEnum[] | ExperienceScalarFieldEnum
    having?: ExperienceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExperienceCountAggregateInputType | true
    _avg?: ExperienceAvgAggregateInputType
    _sum?: ExperienceSumAggregateInputType
    _min?: ExperienceMinAggregateInputType
    _max?: ExperienceMaxAggregateInputType
  }

  export type ExperienceGroupByOutputType = {
    id: number
    detail: string
    tutorId: number
    _count: ExperienceCountAggregateOutputType | null
    _avg: ExperienceAvgAggregateOutputType | null
    _sum: ExperienceSumAggregateOutputType | null
    _min: ExperienceMinAggregateOutputType | null
    _max: ExperienceMaxAggregateOutputType | null
  }

  type GetExperienceGroupByPayload<T extends ExperienceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExperienceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExperienceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExperienceGroupByOutputType[P]>
            : GetScalarType<T[P], ExperienceGroupByOutputType[P]>
        }
      >
    >


  export type ExperienceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    detail?: boolean
    tutorId?: boolean
    tutor?: boolean | TutorProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["experience"]>

  export type ExperienceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    detail?: boolean
    tutorId?: boolean
    tutor?: boolean | TutorProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["experience"]>

  export type ExperienceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    detail?: boolean
    tutorId?: boolean
    tutor?: boolean | TutorProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["experience"]>

  export type ExperienceSelectScalar = {
    id?: boolean
    detail?: boolean
    tutorId?: boolean
  }

  export type ExperienceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "detail" | "tutorId", ExtArgs["result"]["experience"]>
  export type ExperienceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tutor?: boolean | TutorProfileDefaultArgs<ExtArgs>
  }
  export type ExperienceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tutor?: boolean | TutorProfileDefaultArgs<ExtArgs>
  }
  export type ExperienceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tutor?: boolean | TutorProfileDefaultArgs<ExtArgs>
  }

  export type $ExperiencePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Experience"
    objects: {
      tutor: Prisma.$TutorProfilePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      detail: string
      tutorId: number
    }, ExtArgs["result"]["experience"]>
    composites: {}
  }

  type ExperienceGetPayload<S extends boolean | null | undefined | ExperienceDefaultArgs> = $Result.GetResult<Prisma.$ExperiencePayload, S>

  type ExperienceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ExperienceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ExperienceCountAggregateInputType | true
    }

  export interface ExperienceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Experience'], meta: { name: 'Experience' } }
    /**
     * Find zero or one Experience that matches the filter.
     * @param {ExperienceFindUniqueArgs} args - Arguments to find a Experience
     * @example
     * // Get one Experience
     * const experience = await prisma.experience.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ExperienceFindUniqueArgs>(args: SelectSubset<T, ExperienceFindUniqueArgs<ExtArgs>>): Prisma__ExperienceClient<$Result.GetResult<Prisma.$ExperiencePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Experience that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ExperienceFindUniqueOrThrowArgs} args - Arguments to find a Experience
     * @example
     * // Get one Experience
     * const experience = await prisma.experience.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ExperienceFindUniqueOrThrowArgs>(args: SelectSubset<T, ExperienceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ExperienceClient<$Result.GetResult<Prisma.$ExperiencePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Experience that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExperienceFindFirstArgs} args - Arguments to find a Experience
     * @example
     * // Get one Experience
     * const experience = await prisma.experience.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ExperienceFindFirstArgs>(args?: SelectSubset<T, ExperienceFindFirstArgs<ExtArgs>>): Prisma__ExperienceClient<$Result.GetResult<Prisma.$ExperiencePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Experience that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExperienceFindFirstOrThrowArgs} args - Arguments to find a Experience
     * @example
     * // Get one Experience
     * const experience = await prisma.experience.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ExperienceFindFirstOrThrowArgs>(args?: SelectSubset<T, ExperienceFindFirstOrThrowArgs<ExtArgs>>): Prisma__ExperienceClient<$Result.GetResult<Prisma.$ExperiencePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Experiences that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExperienceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Experiences
     * const experiences = await prisma.experience.findMany()
     * 
     * // Get first 10 Experiences
     * const experiences = await prisma.experience.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const experienceWithIdOnly = await prisma.experience.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ExperienceFindManyArgs>(args?: SelectSubset<T, ExperienceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExperiencePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Experience.
     * @param {ExperienceCreateArgs} args - Arguments to create a Experience.
     * @example
     * // Create one Experience
     * const Experience = await prisma.experience.create({
     *   data: {
     *     // ... data to create a Experience
     *   }
     * })
     * 
     */
    create<T extends ExperienceCreateArgs>(args: SelectSubset<T, ExperienceCreateArgs<ExtArgs>>): Prisma__ExperienceClient<$Result.GetResult<Prisma.$ExperiencePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Experiences.
     * @param {ExperienceCreateManyArgs} args - Arguments to create many Experiences.
     * @example
     * // Create many Experiences
     * const experience = await prisma.experience.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ExperienceCreateManyArgs>(args?: SelectSubset<T, ExperienceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Experiences and returns the data saved in the database.
     * @param {ExperienceCreateManyAndReturnArgs} args - Arguments to create many Experiences.
     * @example
     * // Create many Experiences
     * const experience = await prisma.experience.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Experiences and only return the `id`
     * const experienceWithIdOnly = await prisma.experience.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ExperienceCreateManyAndReturnArgs>(args?: SelectSubset<T, ExperienceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExperiencePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Experience.
     * @param {ExperienceDeleteArgs} args - Arguments to delete one Experience.
     * @example
     * // Delete one Experience
     * const Experience = await prisma.experience.delete({
     *   where: {
     *     // ... filter to delete one Experience
     *   }
     * })
     * 
     */
    delete<T extends ExperienceDeleteArgs>(args: SelectSubset<T, ExperienceDeleteArgs<ExtArgs>>): Prisma__ExperienceClient<$Result.GetResult<Prisma.$ExperiencePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Experience.
     * @param {ExperienceUpdateArgs} args - Arguments to update one Experience.
     * @example
     * // Update one Experience
     * const experience = await prisma.experience.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ExperienceUpdateArgs>(args: SelectSubset<T, ExperienceUpdateArgs<ExtArgs>>): Prisma__ExperienceClient<$Result.GetResult<Prisma.$ExperiencePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Experiences.
     * @param {ExperienceDeleteManyArgs} args - Arguments to filter Experiences to delete.
     * @example
     * // Delete a few Experiences
     * const { count } = await prisma.experience.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ExperienceDeleteManyArgs>(args?: SelectSubset<T, ExperienceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Experiences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExperienceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Experiences
     * const experience = await prisma.experience.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ExperienceUpdateManyArgs>(args: SelectSubset<T, ExperienceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Experiences and returns the data updated in the database.
     * @param {ExperienceUpdateManyAndReturnArgs} args - Arguments to update many Experiences.
     * @example
     * // Update many Experiences
     * const experience = await prisma.experience.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Experiences and only return the `id`
     * const experienceWithIdOnly = await prisma.experience.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ExperienceUpdateManyAndReturnArgs>(args: SelectSubset<T, ExperienceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExperiencePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Experience.
     * @param {ExperienceUpsertArgs} args - Arguments to update or create a Experience.
     * @example
     * // Update or create a Experience
     * const experience = await prisma.experience.upsert({
     *   create: {
     *     // ... data to create a Experience
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Experience we want to update
     *   }
     * })
     */
    upsert<T extends ExperienceUpsertArgs>(args: SelectSubset<T, ExperienceUpsertArgs<ExtArgs>>): Prisma__ExperienceClient<$Result.GetResult<Prisma.$ExperiencePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Experiences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExperienceCountArgs} args - Arguments to filter Experiences to count.
     * @example
     * // Count the number of Experiences
     * const count = await prisma.experience.count({
     *   where: {
     *     // ... the filter for the Experiences we want to count
     *   }
     * })
    **/
    count<T extends ExperienceCountArgs>(
      args?: Subset<T, ExperienceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExperienceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Experience.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExperienceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ExperienceAggregateArgs>(args: Subset<T, ExperienceAggregateArgs>): Prisma.PrismaPromise<GetExperienceAggregateType<T>>

    /**
     * Group by Experience.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExperienceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ExperienceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExperienceGroupByArgs['orderBy'] }
        : { orderBy?: ExperienceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ExperienceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExperienceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Experience model
   */
  readonly fields: ExperienceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Experience.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExperienceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tutor<T extends TutorProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TutorProfileDefaultArgs<ExtArgs>>): Prisma__TutorProfileClient<$Result.GetResult<Prisma.$TutorProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Experience model
   */
  interface ExperienceFieldRefs {
    readonly id: FieldRef<"Experience", 'Int'>
    readonly detail: FieldRef<"Experience", 'String'>
    readonly tutorId: FieldRef<"Experience", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Experience findUnique
   */
  export type ExperienceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experience
     */
    select?: ExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Experience
     */
    omit?: ExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceInclude<ExtArgs> | null
    /**
     * Filter, which Experience to fetch.
     */
    where: ExperienceWhereUniqueInput
  }

  /**
   * Experience findUniqueOrThrow
   */
  export type ExperienceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experience
     */
    select?: ExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Experience
     */
    omit?: ExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceInclude<ExtArgs> | null
    /**
     * Filter, which Experience to fetch.
     */
    where: ExperienceWhereUniqueInput
  }

  /**
   * Experience findFirst
   */
  export type ExperienceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experience
     */
    select?: ExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Experience
     */
    omit?: ExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceInclude<ExtArgs> | null
    /**
     * Filter, which Experience to fetch.
     */
    where?: ExperienceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Experiences to fetch.
     */
    orderBy?: ExperienceOrderByWithRelationInput | ExperienceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Experiences.
     */
    cursor?: ExperienceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Experiences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Experiences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Experiences.
     */
    distinct?: ExperienceScalarFieldEnum | ExperienceScalarFieldEnum[]
  }

  /**
   * Experience findFirstOrThrow
   */
  export type ExperienceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experience
     */
    select?: ExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Experience
     */
    omit?: ExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceInclude<ExtArgs> | null
    /**
     * Filter, which Experience to fetch.
     */
    where?: ExperienceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Experiences to fetch.
     */
    orderBy?: ExperienceOrderByWithRelationInput | ExperienceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Experiences.
     */
    cursor?: ExperienceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Experiences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Experiences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Experiences.
     */
    distinct?: ExperienceScalarFieldEnum | ExperienceScalarFieldEnum[]
  }

  /**
   * Experience findMany
   */
  export type ExperienceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experience
     */
    select?: ExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Experience
     */
    omit?: ExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceInclude<ExtArgs> | null
    /**
     * Filter, which Experiences to fetch.
     */
    where?: ExperienceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Experiences to fetch.
     */
    orderBy?: ExperienceOrderByWithRelationInput | ExperienceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Experiences.
     */
    cursor?: ExperienceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Experiences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Experiences.
     */
    skip?: number
    distinct?: ExperienceScalarFieldEnum | ExperienceScalarFieldEnum[]
  }

  /**
   * Experience create
   */
  export type ExperienceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experience
     */
    select?: ExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Experience
     */
    omit?: ExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceInclude<ExtArgs> | null
    /**
     * The data needed to create a Experience.
     */
    data: XOR<ExperienceCreateInput, ExperienceUncheckedCreateInput>
  }

  /**
   * Experience createMany
   */
  export type ExperienceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Experiences.
     */
    data: ExperienceCreateManyInput | ExperienceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Experience createManyAndReturn
   */
  export type ExperienceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experience
     */
    select?: ExperienceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Experience
     */
    omit?: ExperienceOmit<ExtArgs> | null
    /**
     * The data used to create many Experiences.
     */
    data: ExperienceCreateManyInput | ExperienceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Experience update
   */
  export type ExperienceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experience
     */
    select?: ExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Experience
     */
    omit?: ExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceInclude<ExtArgs> | null
    /**
     * The data needed to update a Experience.
     */
    data: XOR<ExperienceUpdateInput, ExperienceUncheckedUpdateInput>
    /**
     * Choose, which Experience to update.
     */
    where: ExperienceWhereUniqueInput
  }

  /**
   * Experience updateMany
   */
  export type ExperienceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Experiences.
     */
    data: XOR<ExperienceUpdateManyMutationInput, ExperienceUncheckedUpdateManyInput>
    /**
     * Filter which Experiences to update
     */
    where?: ExperienceWhereInput
    /**
     * Limit how many Experiences to update.
     */
    limit?: number
  }

  /**
   * Experience updateManyAndReturn
   */
  export type ExperienceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experience
     */
    select?: ExperienceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Experience
     */
    omit?: ExperienceOmit<ExtArgs> | null
    /**
     * The data used to update Experiences.
     */
    data: XOR<ExperienceUpdateManyMutationInput, ExperienceUncheckedUpdateManyInput>
    /**
     * Filter which Experiences to update
     */
    where?: ExperienceWhereInput
    /**
     * Limit how many Experiences to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Experience upsert
   */
  export type ExperienceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experience
     */
    select?: ExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Experience
     */
    omit?: ExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceInclude<ExtArgs> | null
    /**
     * The filter to search for the Experience to update in case it exists.
     */
    where: ExperienceWhereUniqueInput
    /**
     * In case the Experience found by the `where` argument doesn't exist, create a new Experience with this data.
     */
    create: XOR<ExperienceCreateInput, ExperienceUncheckedCreateInput>
    /**
     * In case the Experience was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExperienceUpdateInput, ExperienceUncheckedUpdateInput>
  }

  /**
   * Experience delete
   */
  export type ExperienceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experience
     */
    select?: ExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Experience
     */
    omit?: ExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceInclude<ExtArgs> | null
    /**
     * Filter which Experience to delete.
     */
    where: ExperienceWhereUniqueInput
  }

  /**
   * Experience deleteMany
   */
  export type ExperienceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Experiences to delete
     */
    where?: ExperienceWhereInput
    /**
     * Limit how many Experiences to delete.
     */
    limit?: number
  }

  /**
   * Experience without action
   */
  export type ExperienceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experience
     */
    select?: ExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Experience
     */
    omit?: ExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceInclude<ExtArgs> | null
  }


  /**
   * Model Review
   */

  export type AggregateReview = {
    _count: ReviewCountAggregateOutputType | null
    _avg: ReviewAvgAggregateOutputType | null
    _sum: ReviewSumAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  export type ReviewAvgAggregateOutputType = {
    id: number | null
    rating: number | null
    tutorId: number | null
    userId: number | null
  }

  export type ReviewSumAggregateOutputType = {
    id: number | null
    rating: number | null
    tutorId: number | null
    userId: number | null
  }

  export type ReviewMinAggregateOutputType = {
    id: number | null
    comment: string | null
    rating: number | null
    tutorId: number | null
    userId: number | null
    createdAt: Date | null
  }

  export type ReviewMaxAggregateOutputType = {
    id: number | null
    comment: string | null
    rating: number | null
    tutorId: number | null
    userId: number | null
    createdAt: Date | null
  }

  export type ReviewCountAggregateOutputType = {
    id: number
    comment: number
    rating: number
    tutorId: number
    userId: number
    createdAt: number
    _all: number
  }


  export type ReviewAvgAggregateInputType = {
    id?: true
    rating?: true
    tutorId?: true
    userId?: true
  }

  export type ReviewSumAggregateInputType = {
    id?: true
    rating?: true
    tutorId?: true
    userId?: true
  }

  export type ReviewMinAggregateInputType = {
    id?: true
    comment?: true
    rating?: true
    tutorId?: true
    userId?: true
    createdAt?: true
  }

  export type ReviewMaxAggregateInputType = {
    id?: true
    comment?: true
    rating?: true
    tutorId?: true
    userId?: true
    createdAt?: true
  }

  export type ReviewCountAggregateInputType = {
    id?: true
    comment?: true
    rating?: true
    tutorId?: true
    userId?: true
    createdAt?: true
    _all?: true
  }

  export type ReviewAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Review to aggregate.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reviews
    **/
    _count?: true | ReviewCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReviewAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReviewSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReviewMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReviewMaxAggregateInputType
  }

  export type GetReviewAggregateType<T extends ReviewAggregateArgs> = {
        [P in keyof T & keyof AggregateReview]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReview[P]>
      : GetScalarType<T[P], AggregateReview[P]>
  }




  export type ReviewGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithAggregationInput | ReviewOrderByWithAggregationInput[]
    by: ReviewScalarFieldEnum[] | ReviewScalarFieldEnum
    having?: ReviewScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReviewCountAggregateInputType | true
    _avg?: ReviewAvgAggregateInputType
    _sum?: ReviewSumAggregateInputType
    _min?: ReviewMinAggregateInputType
    _max?: ReviewMaxAggregateInputType
  }

  export type ReviewGroupByOutputType = {
    id: number
    comment: string
    rating: number
    tutorId: number
    userId: number
    createdAt: Date
    _count: ReviewCountAggregateOutputType | null
    _avg: ReviewAvgAggregateOutputType | null
    _sum: ReviewSumAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  type GetReviewGroupByPayload<T extends ReviewGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReviewGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReviewGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReviewGroupByOutputType[P]>
            : GetScalarType<T[P], ReviewGroupByOutputType[P]>
        }
      >
    >


  export type ReviewSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    comment?: boolean
    rating?: boolean
    tutorId?: boolean
    userId?: boolean
    createdAt?: boolean
    tutor?: boolean | TutorProfileDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>

  export type ReviewSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    comment?: boolean
    rating?: boolean
    tutorId?: boolean
    userId?: boolean
    createdAt?: boolean
    tutor?: boolean | TutorProfileDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>

  export type ReviewSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    comment?: boolean
    rating?: boolean
    tutorId?: boolean
    userId?: boolean
    createdAt?: boolean
    tutor?: boolean | TutorProfileDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>

  export type ReviewSelectScalar = {
    id?: boolean
    comment?: boolean
    rating?: boolean
    tutorId?: boolean
    userId?: boolean
    createdAt?: boolean
  }

  export type ReviewOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "comment" | "rating" | "tutorId" | "userId" | "createdAt", ExtArgs["result"]["review"]>
  export type ReviewInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tutor?: boolean | TutorProfileDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ReviewIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tutor?: boolean | TutorProfileDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ReviewIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tutor?: boolean | TutorProfileDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ReviewPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Review"
    objects: {
      tutor: Prisma.$TutorProfilePayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      comment: string
      rating: number
      tutorId: number
      userId: number
      createdAt: Date
    }, ExtArgs["result"]["review"]>
    composites: {}
  }

  type ReviewGetPayload<S extends boolean | null | undefined | ReviewDefaultArgs> = $Result.GetResult<Prisma.$ReviewPayload, S>

  type ReviewCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReviewFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReviewCountAggregateInputType | true
    }

  export interface ReviewDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Review'], meta: { name: 'Review' } }
    /**
     * Find zero or one Review that matches the filter.
     * @param {ReviewFindUniqueArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReviewFindUniqueArgs>(args: SelectSubset<T, ReviewFindUniqueArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Review that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReviewFindUniqueOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReviewFindUniqueOrThrowArgs>(args: SelectSubset<T, ReviewFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Review that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindFirstArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReviewFindFirstArgs>(args?: SelectSubset<T, ReviewFindFirstArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Review that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindFirstOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReviewFindFirstOrThrowArgs>(args?: SelectSubset<T, ReviewFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reviews
     * const reviews = await prisma.review.findMany()
     * 
     * // Get first 10 Reviews
     * const reviews = await prisma.review.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reviewWithIdOnly = await prisma.review.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReviewFindManyArgs>(args?: SelectSubset<T, ReviewFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Review.
     * @param {ReviewCreateArgs} args - Arguments to create a Review.
     * @example
     * // Create one Review
     * const Review = await prisma.review.create({
     *   data: {
     *     // ... data to create a Review
     *   }
     * })
     * 
     */
    create<T extends ReviewCreateArgs>(args: SelectSubset<T, ReviewCreateArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reviews.
     * @param {ReviewCreateManyArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const review = await prisma.review.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReviewCreateManyArgs>(args?: SelectSubset<T, ReviewCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Reviews and returns the data saved in the database.
     * @param {ReviewCreateManyAndReturnArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const review = await prisma.review.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Reviews and only return the `id`
     * const reviewWithIdOnly = await prisma.review.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReviewCreateManyAndReturnArgs>(args?: SelectSubset<T, ReviewCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Review.
     * @param {ReviewDeleteArgs} args - Arguments to delete one Review.
     * @example
     * // Delete one Review
     * const Review = await prisma.review.delete({
     *   where: {
     *     // ... filter to delete one Review
     *   }
     * })
     * 
     */
    delete<T extends ReviewDeleteArgs>(args: SelectSubset<T, ReviewDeleteArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Review.
     * @param {ReviewUpdateArgs} args - Arguments to update one Review.
     * @example
     * // Update one Review
     * const review = await prisma.review.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReviewUpdateArgs>(args: SelectSubset<T, ReviewUpdateArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reviews.
     * @param {ReviewDeleteManyArgs} args - Arguments to filter Reviews to delete.
     * @example
     * // Delete a few Reviews
     * const { count } = await prisma.review.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReviewDeleteManyArgs>(args?: SelectSubset<T, ReviewDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reviews
     * const review = await prisma.review.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReviewUpdateManyArgs>(args: SelectSubset<T, ReviewUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviews and returns the data updated in the database.
     * @param {ReviewUpdateManyAndReturnArgs} args - Arguments to update many Reviews.
     * @example
     * // Update many Reviews
     * const review = await prisma.review.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Reviews and only return the `id`
     * const reviewWithIdOnly = await prisma.review.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ReviewUpdateManyAndReturnArgs>(args: SelectSubset<T, ReviewUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Review.
     * @param {ReviewUpsertArgs} args - Arguments to update or create a Review.
     * @example
     * // Update or create a Review
     * const review = await prisma.review.upsert({
     *   create: {
     *     // ... data to create a Review
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Review we want to update
     *   }
     * })
     */
    upsert<T extends ReviewUpsertArgs>(args: SelectSubset<T, ReviewUpsertArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewCountArgs} args - Arguments to filter Reviews to count.
     * @example
     * // Count the number of Reviews
     * const count = await prisma.review.count({
     *   where: {
     *     // ... the filter for the Reviews we want to count
     *   }
     * })
    **/
    count<T extends ReviewCountArgs>(
      args?: Subset<T, ReviewCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReviewCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReviewAggregateArgs>(args: Subset<T, ReviewAggregateArgs>): Prisma.PrismaPromise<GetReviewAggregateType<T>>

    /**
     * Group by Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ReviewGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReviewGroupByArgs['orderBy'] }
        : { orderBy?: ReviewGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ReviewGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReviewGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Review model
   */
  readonly fields: ReviewFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Review.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReviewClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tutor<T extends TutorProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TutorProfileDefaultArgs<ExtArgs>>): Prisma__TutorProfileClient<$Result.GetResult<Prisma.$TutorProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Review model
   */
  interface ReviewFieldRefs {
    readonly id: FieldRef<"Review", 'Int'>
    readonly comment: FieldRef<"Review", 'String'>
    readonly rating: FieldRef<"Review", 'Int'>
    readonly tutorId: FieldRef<"Review", 'Int'>
    readonly userId: FieldRef<"Review", 'Int'>
    readonly createdAt: FieldRef<"Review", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Review findUnique
   */
  export type ReviewFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review findUniqueOrThrow
   */
  export type ReviewFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review findFirst
   */
  export type ReviewFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review findFirstOrThrow
   */
  export type ReviewFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review findMany
   */
  export type ReviewFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Reviews to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review create
   */
  export type ReviewCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The data needed to create a Review.
     */
    data: XOR<ReviewCreateInput, ReviewUncheckedCreateInput>
  }

  /**
   * Review createMany
   */
  export type ReviewCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reviews.
     */
    data: ReviewCreateManyInput | ReviewCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Review createManyAndReturn
   */
  export type ReviewCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * The data used to create many Reviews.
     */
    data: ReviewCreateManyInput | ReviewCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Review update
   */
  export type ReviewUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The data needed to update a Review.
     */
    data: XOR<ReviewUpdateInput, ReviewUncheckedUpdateInput>
    /**
     * Choose, which Review to update.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review updateMany
   */
  export type ReviewUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reviews.
     */
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyInput>
    /**
     * Filter which Reviews to update
     */
    where?: ReviewWhereInput
    /**
     * Limit how many Reviews to update.
     */
    limit?: number
  }

  /**
   * Review updateManyAndReturn
   */
  export type ReviewUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * The data used to update Reviews.
     */
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyInput>
    /**
     * Filter which Reviews to update
     */
    where?: ReviewWhereInput
    /**
     * Limit how many Reviews to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Review upsert
   */
  export type ReviewUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The filter to search for the Review to update in case it exists.
     */
    where: ReviewWhereUniqueInput
    /**
     * In case the Review found by the `where` argument doesn't exist, create a new Review with this data.
     */
    create: XOR<ReviewCreateInput, ReviewUncheckedCreateInput>
    /**
     * In case the Review was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReviewUpdateInput, ReviewUncheckedUpdateInput>
  }

  /**
   * Review delete
   */
  export type ReviewDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter which Review to delete.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review deleteMany
   */
  export type ReviewDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reviews to delete
     */
    where?: ReviewWhereInput
    /**
     * Limit how many Reviews to delete.
     */
    limit?: number
  }

  /**
   * Review without action
   */
  export type ReviewDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
  }


  /**
   * Model SubjectCategory
   */

  export type AggregateSubjectCategory = {
    _count: SubjectCategoryCountAggregateOutputType | null
    _avg: SubjectCategoryAvgAggregateOutputType | null
    _sum: SubjectCategorySumAggregateOutputType | null
    _min: SubjectCategoryMinAggregateOutputType | null
    _max: SubjectCategoryMaxAggregateOutputType | null
  }

  export type SubjectCategoryAvgAggregateOutputType = {
    id: number | null
  }

  export type SubjectCategorySumAggregateOutputType = {
    id: number | null
  }

  export type SubjectCategoryMinAggregateOutputType = {
    id: number | null
    name: string | null
    icon: string | null
  }

  export type SubjectCategoryMaxAggregateOutputType = {
    id: number | null
    name: string | null
    icon: string | null
  }

  export type SubjectCategoryCountAggregateOutputType = {
    id: number
    name: number
    icon: number
    _all: number
  }


  export type SubjectCategoryAvgAggregateInputType = {
    id?: true
  }

  export type SubjectCategorySumAggregateInputType = {
    id?: true
  }

  export type SubjectCategoryMinAggregateInputType = {
    id?: true
    name?: true
    icon?: true
  }

  export type SubjectCategoryMaxAggregateInputType = {
    id?: true
    name?: true
    icon?: true
  }

  export type SubjectCategoryCountAggregateInputType = {
    id?: true
    name?: true
    icon?: true
    _all?: true
  }

  export type SubjectCategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SubjectCategory to aggregate.
     */
    where?: SubjectCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubjectCategories to fetch.
     */
    orderBy?: SubjectCategoryOrderByWithRelationInput | SubjectCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SubjectCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubjectCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubjectCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SubjectCategories
    **/
    _count?: true | SubjectCategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SubjectCategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SubjectCategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubjectCategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubjectCategoryMaxAggregateInputType
  }

  export type GetSubjectCategoryAggregateType<T extends SubjectCategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateSubjectCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubjectCategory[P]>
      : GetScalarType<T[P], AggregateSubjectCategory[P]>
  }




  export type SubjectCategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubjectCategoryWhereInput
    orderBy?: SubjectCategoryOrderByWithAggregationInput | SubjectCategoryOrderByWithAggregationInput[]
    by: SubjectCategoryScalarFieldEnum[] | SubjectCategoryScalarFieldEnum
    having?: SubjectCategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubjectCategoryCountAggregateInputType | true
    _avg?: SubjectCategoryAvgAggregateInputType
    _sum?: SubjectCategorySumAggregateInputType
    _min?: SubjectCategoryMinAggregateInputType
    _max?: SubjectCategoryMaxAggregateInputType
  }

  export type SubjectCategoryGroupByOutputType = {
    id: number
    name: string
    icon: string | null
    _count: SubjectCategoryCountAggregateOutputType | null
    _avg: SubjectCategoryAvgAggregateOutputType | null
    _sum: SubjectCategorySumAggregateOutputType | null
    _min: SubjectCategoryMinAggregateOutputType | null
    _max: SubjectCategoryMaxAggregateOutputType | null
  }

  type GetSubjectCategoryGroupByPayload<T extends SubjectCategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubjectCategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubjectCategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubjectCategoryGroupByOutputType[P]>
            : GetScalarType<T[P], SubjectCategoryGroupByOutputType[P]>
        }
      >
    >


  export type SubjectCategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    icon?: boolean
    tutors?: boolean | SubjectCategory$tutorsArgs<ExtArgs>
    BookingTutor?: boolean | SubjectCategory$BookingTutorArgs<ExtArgs>
    _count?: boolean | SubjectCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subjectCategory"]>

  export type SubjectCategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    icon?: boolean
  }, ExtArgs["result"]["subjectCategory"]>

  export type SubjectCategorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    icon?: boolean
  }, ExtArgs["result"]["subjectCategory"]>

  export type SubjectCategorySelectScalar = {
    id?: boolean
    name?: boolean
    icon?: boolean
  }

  export type SubjectCategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "icon", ExtArgs["result"]["subjectCategory"]>
  export type SubjectCategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tutors?: boolean | SubjectCategory$tutorsArgs<ExtArgs>
    BookingTutor?: boolean | SubjectCategory$BookingTutorArgs<ExtArgs>
    _count?: boolean | SubjectCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SubjectCategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type SubjectCategoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SubjectCategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SubjectCategory"
    objects: {
      tutors: Prisma.$TutorSubjectPayload<ExtArgs>[]
      BookingTutor: Prisma.$BookingTutorPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      icon: string | null
    }, ExtArgs["result"]["subjectCategory"]>
    composites: {}
  }

  type SubjectCategoryGetPayload<S extends boolean | null | undefined | SubjectCategoryDefaultArgs> = $Result.GetResult<Prisma.$SubjectCategoryPayload, S>

  type SubjectCategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SubjectCategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SubjectCategoryCountAggregateInputType | true
    }

  export interface SubjectCategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SubjectCategory'], meta: { name: 'SubjectCategory' } }
    /**
     * Find zero or one SubjectCategory that matches the filter.
     * @param {SubjectCategoryFindUniqueArgs} args - Arguments to find a SubjectCategory
     * @example
     * // Get one SubjectCategory
     * const subjectCategory = await prisma.subjectCategory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SubjectCategoryFindUniqueArgs>(args: SelectSubset<T, SubjectCategoryFindUniqueArgs<ExtArgs>>): Prisma__SubjectCategoryClient<$Result.GetResult<Prisma.$SubjectCategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SubjectCategory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SubjectCategoryFindUniqueOrThrowArgs} args - Arguments to find a SubjectCategory
     * @example
     * // Get one SubjectCategory
     * const subjectCategory = await prisma.subjectCategory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SubjectCategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, SubjectCategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SubjectCategoryClient<$Result.GetResult<Prisma.$SubjectCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SubjectCategory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectCategoryFindFirstArgs} args - Arguments to find a SubjectCategory
     * @example
     * // Get one SubjectCategory
     * const subjectCategory = await prisma.subjectCategory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SubjectCategoryFindFirstArgs>(args?: SelectSubset<T, SubjectCategoryFindFirstArgs<ExtArgs>>): Prisma__SubjectCategoryClient<$Result.GetResult<Prisma.$SubjectCategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SubjectCategory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectCategoryFindFirstOrThrowArgs} args - Arguments to find a SubjectCategory
     * @example
     * // Get one SubjectCategory
     * const subjectCategory = await prisma.subjectCategory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SubjectCategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, SubjectCategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__SubjectCategoryClient<$Result.GetResult<Prisma.$SubjectCategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SubjectCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectCategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SubjectCategories
     * const subjectCategories = await prisma.subjectCategory.findMany()
     * 
     * // Get first 10 SubjectCategories
     * const subjectCategories = await prisma.subjectCategory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const subjectCategoryWithIdOnly = await prisma.subjectCategory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SubjectCategoryFindManyArgs>(args?: SelectSubset<T, SubjectCategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubjectCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SubjectCategory.
     * @param {SubjectCategoryCreateArgs} args - Arguments to create a SubjectCategory.
     * @example
     * // Create one SubjectCategory
     * const SubjectCategory = await prisma.subjectCategory.create({
     *   data: {
     *     // ... data to create a SubjectCategory
     *   }
     * })
     * 
     */
    create<T extends SubjectCategoryCreateArgs>(args: SelectSubset<T, SubjectCategoryCreateArgs<ExtArgs>>): Prisma__SubjectCategoryClient<$Result.GetResult<Prisma.$SubjectCategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SubjectCategories.
     * @param {SubjectCategoryCreateManyArgs} args - Arguments to create many SubjectCategories.
     * @example
     * // Create many SubjectCategories
     * const subjectCategory = await prisma.subjectCategory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SubjectCategoryCreateManyArgs>(args?: SelectSubset<T, SubjectCategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SubjectCategories and returns the data saved in the database.
     * @param {SubjectCategoryCreateManyAndReturnArgs} args - Arguments to create many SubjectCategories.
     * @example
     * // Create many SubjectCategories
     * const subjectCategory = await prisma.subjectCategory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SubjectCategories and only return the `id`
     * const subjectCategoryWithIdOnly = await prisma.subjectCategory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SubjectCategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, SubjectCategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubjectCategoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SubjectCategory.
     * @param {SubjectCategoryDeleteArgs} args - Arguments to delete one SubjectCategory.
     * @example
     * // Delete one SubjectCategory
     * const SubjectCategory = await prisma.subjectCategory.delete({
     *   where: {
     *     // ... filter to delete one SubjectCategory
     *   }
     * })
     * 
     */
    delete<T extends SubjectCategoryDeleteArgs>(args: SelectSubset<T, SubjectCategoryDeleteArgs<ExtArgs>>): Prisma__SubjectCategoryClient<$Result.GetResult<Prisma.$SubjectCategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SubjectCategory.
     * @param {SubjectCategoryUpdateArgs} args - Arguments to update one SubjectCategory.
     * @example
     * // Update one SubjectCategory
     * const subjectCategory = await prisma.subjectCategory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SubjectCategoryUpdateArgs>(args: SelectSubset<T, SubjectCategoryUpdateArgs<ExtArgs>>): Prisma__SubjectCategoryClient<$Result.GetResult<Prisma.$SubjectCategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SubjectCategories.
     * @param {SubjectCategoryDeleteManyArgs} args - Arguments to filter SubjectCategories to delete.
     * @example
     * // Delete a few SubjectCategories
     * const { count } = await prisma.subjectCategory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SubjectCategoryDeleteManyArgs>(args?: SelectSubset<T, SubjectCategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SubjectCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectCategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SubjectCategories
     * const subjectCategory = await prisma.subjectCategory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SubjectCategoryUpdateManyArgs>(args: SelectSubset<T, SubjectCategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SubjectCategories and returns the data updated in the database.
     * @param {SubjectCategoryUpdateManyAndReturnArgs} args - Arguments to update many SubjectCategories.
     * @example
     * // Update many SubjectCategories
     * const subjectCategory = await prisma.subjectCategory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SubjectCategories and only return the `id`
     * const subjectCategoryWithIdOnly = await prisma.subjectCategory.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SubjectCategoryUpdateManyAndReturnArgs>(args: SelectSubset<T, SubjectCategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubjectCategoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SubjectCategory.
     * @param {SubjectCategoryUpsertArgs} args - Arguments to update or create a SubjectCategory.
     * @example
     * // Update or create a SubjectCategory
     * const subjectCategory = await prisma.subjectCategory.upsert({
     *   create: {
     *     // ... data to create a SubjectCategory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SubjectCategory we want to update
     *   }
     * })
     */
    upsert<T extends SubjectCategoryUpsertArgs>(args: SelectSubset<T, SubjectCategoryUpsertArgs<ExtArgs>>): Prisma__SubjectCategoryClient<$Result.GetResult<Prisma.$SubjectCategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SubjectCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectCategoryCountArgs} args - Arguments to filter SubjectCategories to count.
     * @example
     * // Count the number of SubjectCategories
     * const count = await prisma.subjectCategory.count({
     *   where: {
     *     // ... the filter for the SubjectCategories we want to count
     *   }
     * })
    **/
    count<T extends SubjectCategoryCountArgs>(
      args?: Subset<T, SubjectCategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubjectCategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SubjectCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectCategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SubjectCategoryAggregateArgs>(args: Subset<T, SubjectCategoryAggregateArgs>): Prisma.PrismaPromise<GetSubjectCategoryAggregateType<T>>

    /**
     * Group by SubjectCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectCategoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SubjectCategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubjectCategoryGroupByArgs['orderBy'] }
        : { orderBy?: SubjectCategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SubjectCategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubjectCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SubjectCategory model
   */
  readonly fields: SubjectCategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SubjectCategory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubjectCategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tutors<T extends SubjectCategory$tutorsArgs<ExtArgs> = {}>(args?: Subset<T, SubjectCategory$tutorsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TutorSubjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    BookingTutor<T extends SubjectCategory$BookingTutorArgs<ExtArgs> = {}>(args?: Subset<T, SubjectCategory$BookingTutorArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingTutorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SubjectCategory model
   */
  interface SubjectCategoryFieldRefs {
    readonly id: FieldRef<"SubjectCategory", 'Int'>
    readonly name: FieldRef<"SubjectCategory", 'String'>
    readonly icon: FieldRef<"SubjectCategory", 'String'>
  }
    

  // Custom InputTypes
  /**
   * SubjectCategory findUnique
   */
  export type SubjectCategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubjectCategory
     */
    select?: SubjectCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubjectCategory
     */
    omit?: SubjectCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectCategoryInclude<ExtArgs> | null
    /**
     * Filter, which SubjectCategory to fetch.
     */
    where: SubjectCategoryWhereUniqueInput
  }

  /**
   * SubjectCategory findUniqueOrThrow
   */
  export type SubjectCategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubjectCategory
     */
    select?: SubjectCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubjectCategory
     */
    omit?: SubjectCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectCategoryInclude<ExtArgs> | null
    /**
     * Filter, which SubjectCategory to fetch.
     */
    where: SubjectCategoryWhereUniqueInput
  }

  /**
   * SubjectCategory findFirst
   */
  export type SubjectCategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubjectCategory
     */
    select?: SubjectCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubjectCategory
     */
    omit?: SubjectCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectCategoryInclude<ExtArgs> | null
    /**
     * Filter, which SubjectCategory to fetch.
     */
    where?: SubjectCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubjectCategories to fetch.
     */
    orderBy?: SubjectCategoryOrderByWithRelationInput | SubjectCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SubjectCategories.
     */
    cursor?: SubjectCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubjectCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubjectCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SubjectCategories.
     */
    distinct?: SubjectCategoryScalarFieldEnum | SubjectCategoryScalarFieldEnum[]
  }

  /**
   * SubjectCategory findFirstOrThrow
   */
  export type SubjectCategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubjectCategory
     */
    select?: SubjectCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubjectCategory
     */
    omit?: SubjectCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectCategoryInclude<ExtArgs> | null
    /**
     * Filter, which SubjectCategory to fetch.
     */
    where?: SubjectCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubjectCategories to fetch.
     */
    orderBy?: SubjectCategoryOrderByWithRelationInput | SubjectCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SubjectCategories.
     */
    cursor?: SubjectCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubjectCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubjectCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SubjectCategories.
     */
    distinct?: SubjectCategoryScalarFieldEnum | SubjectCategoryScalarFieldEnum[]
  }

  /**
   * SubjectCategory findMany
   */
  export type SubjectCategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubjectCategory
     */
    select?: SubjectCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubjectCategory
     */
    omit?: SubjectCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectCategoryInclude<ExtArgs> | null
    /**
     * Filter, which SubjectCategories to fetch.
     */
    where?: SubjectCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubjectCategories to fetch.
     */
    orderBy?: SubjectCategoryOrderByWithRelationInput | SubjectCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SubjectCategories.
     */
    cursor?: SubjectCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubjectCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubjectCategories.
     */
    skip?: number
    distinct?: SubjectCategoryScalarFieldEnum | SubjectCategoryScalarFieldEnum[]
  }

  /**
   * SubjectCategory create
   */
  export type SubjectCategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubjectCategory
     */
    select?: SubjectCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubjectCategory
     */
    omit?: SubjectCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectCategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a SubjectCategory.
     */
    data: XOR<SubjectCategoryCreateInput, SubjectCategoryUncheckedCreateInput>
  }

  /**
   * SubjectCategory createMany
   */
  export type SubjectCategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SubjectCategories.
     */
    data: SubjectCategoryCreateManyInput | SubjectCategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SubjectCategory createManyAndReturn
   */
  export type SubjectCategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubjectCategory
     */
    select?: SubjectCategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SubjectCategory
     */
    omit?: SubjectCategoryOmit<ExtArgs> | null
    /**
     * The data used to create many SubjectCategories.
     */
    data: SubjectCategoryCreateManyInput | SubjectCategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SubjectCategory update
   */
  export type SubjectCategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubjectCategory
     */
    select?: SubjectCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubjectCategory
     */
    omit?: SubjectCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectCategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a SubjectCategory.
     */
    data: XOR<SubjectCategoryUpdateInput, SubjectCategoryUncheckedUpdateInput>
    /**
     * Choose, which SubjectCategory to update.
     */
    where: SubjectCategoryWhereUniqueInput
  }

  /**
   * SubjectCategory updateMany
   */
  export type SubjectCategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SubjectCategories.
     */
    data: XOR<SubjectCategoryUpdateManyMutationInput, SubjectCategoryUncheckedUpdateManyInput>
    /**
     * Filter which SubjectCategories to update
     */
    where?: SubjectCategoryWhereInput
    /**
     * Limit how many SubjectCategories to update.
     */
    limit?: number
  }

  /**
   * SubjectCategory updateManyAndReturn
   */
  export type SubjectCategoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubjectCategory
     */
    select?: SubjectCategorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SubjectCategory
     */
    omit?: SubjectCategoryOmit<ExtArgs> | null
    /**
     * The data used to update SubjectCategories.
     */
    data: XOR<SubjectCategoryUpdateManyMutationInput, SubjectCategoryUncheckedUpdateManyInput>
    /**
     * Filter which SubjectCategories to update
     */
    where?: SubjectCategoryWhereInput
    /**
     * Limit how many SubjectCategories to update.
     */
    limit?: number
  }

  /**
   * SubjectCategory upsert
   */
  export type SubjectCategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubjectCategory
     */
    select?: SubjectCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubjectCategory
     */
    omit?: SubjectCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectCategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the SubjectCategory to update in case it exists.
     */
    where: SubjectCategoryWhereUniqueInput
    /**
     * In case the SubjectCategory found by the `where` argument doesn't exist, create a new SubjectCategory with this data.
     */
    create: XOR<SubjectCategoryCreateInput, SubjectCategoryUncheckedCreateInput>
    /**
     * In case the SubjectCategory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubjectCategoryUpdateInput, SubjectCategoryUncheckedUpdateInput>
  }

  /**
   * SubjectCategory delete
   */
  export type SubjectCategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubjectCategory
     */
    select?: SubjectCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubjectCategory
     */
    omit?: SubjectCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectCategoryInclude<ExtArgs> | null
    /**
     * Filter which SubjectCategory to delete.
     */
    where: SubjectCategoryWhereUniqueInput
  }

  /**
   * SubjectCategory deleteMany
   */
  export type SubjectCategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SubjectCategories to delete
     */
    where?: SubjectCategoryWhereInput
    /**
     * Limit how many SubjectCategories to delete.
     */
    limit?: number
  }

  /**
   * SubjectCategory.tutors
   */
  export type SubjectCategory$tutorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TutorSubject
     */
    select?: TutorSubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TutorSubject
     */
    omit?: TutorSubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TutorSubjectInclude<ExtArgs> | null
    where?: TutorSubjectWhereInput
    orderBy?: TutorSubjectOrderByWithRelationInput | TutorSubjectOrderByWithRelationInput[]
    cursor?: TutorSubjectWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TutorSubjectScalarFieldEnum | TutorSubjectScalarFieldEnum[]
  }

  /**
   * SubjectCategory.BookingTutor
   */
  export type SubjectCategory$BookingTutorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingTutor
     */
    select?: BookingTutorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingTutor
     */
    omit?: BookingTutorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingTutorInclude<ExtArgs> | null
    where?: BookingTutorWhereInput
    orderBy?: BookingTutorOrderByWithRelationInput | BookingTutorOrderByWithRelationInput[]
    cursor?: BookingTutorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingTutorScalarFieldEnum | BookingTutorScalarFieldEnum[]
  }

  /**
   * SubjectCategory without action
   */
  export type SubjectCategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubjectCategory
     */
    select?: SubjectCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubjectCategory
     */
    omit?: SubjectCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectCategoryInclude<ExtArgs> | null
  }


  /**
   * Model TutorSubject
   */

  export type AggregateTutorSubject = {
    _count: TutorSubjectCountAggregateOutputType | null
    _avg: TutorSubjectAvgAggregateOutputType | null
    _sum: TutorSubjectSumAggregateOutputType | null
    _min: TutorSubjectMinAggregateOutputType | null
    _max: TutorSubjectMaxAggregateOutputType | null
  }

  export type TutorSubjectAvgAggregateOutputType = {
    id: number | null
    tutorId: number | null
    categoryId: number | null
  }

  export type TutorSubjectSumAggregateOutputType = {
    id: number | null
    tutorId: number | null
    categoryId: number | null
  }

  export type TutorSubjectMinAggregateOutputType = {
    id: number | null
    tutorId: number | null
    categoryId: number | null
  }

  export type TutorSubjectMaxAggregateOutputType = {
    id: number | null
    tutorId: number | null
    categoryId: number | null
  }

  export type TutorSubjectCountAggregateOutputType = {
    id: number
    tutorId: number
    categoryId: number
    _all: number
  }


  export type TutorSubjectAvgAggregateInputType = {
    id?: true
    tutorId?: true
    categoryId?: true
  }

  export type TutorSubjectSumAggregateInputType = {
    id?: true
    tutorId?: true
    categoryId?: true
  }

  export type TutorSubjectMinAggregateInputType = {
    id?: true
    tutorId?: true
    categoryId?: true
  }

  export type TutorSubjectMaxAggregateInputType = {
    id?: true
    tutorId?: true
    categoryId?: true
  }

  export type TutorSubjectCountAggregateInputType = {
    id?: true
    tutorId?: true
    categoryId?: true
    _all?: true
  }

  export type TutorSubjectAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TutorSubject to aggregate.
     */
    where?: TutorSubjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TutorSubjects to fetch.
     */
    orderBy?: TutorSubjectOrderByWithRelationInput | TutorSubjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TutorSubjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TutorSubjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TutorSubjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TutorSubjects
    **/
    _count?: true | TutorSubjectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TutorSubjectAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TutorSubjectSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TutorSubjectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TutorSubjectMaxAggregateInputType
  }

  export type GetTutorSubjectAggregateType<T extends TutorSubjectAggregateArgs> = {
        [P in keyof T & keyof AggregateTutorSubject]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTutorSubject[P]>
      : GetScalarType<T[P], AggregateTutorSubject[P]>
  }




  export type TutorSubjectGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TutorSubjectWhereInput
    orderBy?: TutorSubjectOrderByWithAggregationInput | TutorSubjectOrderByWithAggregationInput[]
    by: TutorSubjectScalarFieldEnum[] | TutorSubjectScalarFieldEnum
    having?: TutorSubjectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TutorSubjectCountAggregateInputType | true
    _avg?: TutorSubjectAvgAggregateInputType
    _sum?: TutorSubjectSumAggregateInputType
    _min?: TutorSubjectMinAggregateInputType
    _max?: TutorSubjectMaxAggregateInputType
  }

  export type TutorSubjectGroupByOutputType = {
    id: number
    tutorId: number
    categoryId: number
    _count: TutorSubjectCountAggregateOutputType | null
    _avg: TutorSubjectAvgAggregateOutputType | null
    _sum: TutorSubjectSumAggregateOutputType | null
    _min: TutorSubjectMinAggregateOutputType | null
    _max: TutorSubjectMaxAggregateOutputType | null
  }

  type GetTutorSubjectGroupByPayload<T extends TutorSubjectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TutorSubjectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TutorSubjectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TutorSubjectGroupByOutputType[P]>
            : GetScalarType<T[P], TutorSubjectGroupByOutputType[P]>
        }
      >
    >


  export type TutorSubjectSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tutorId?: boolean
    categoryId?: boolean
    tutor?: boolean | TutorProfileDefaultArgs<ExtArgs>
    category?: boolean | SubjectCategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tutorSubject"]>

  export type TutorSubjectSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tutorId?: boolean
    categoryId?: boolean
    tutor?: boolean | TutorProfileDefaultArgs<ExtArgs>
    category?: boolean | SubjectCategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tutorSubject"]>

  export type TutorSubjectSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tutorId?: boolean
    categoryId?: boolean
    tutor?: boolean | TutorProfileDefaultArgs<ExtArgs>
    category?: boolean | SubjectCategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tutorSubject"]>

  export type TutorSubjectSelectScalar = {
    id?: boolean
    tutorId?: boolean
    categoryId?: boolean
  }

  export type TutorSubjectOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tutorId" | "categoryId", ExtArgs["result"]["tutorSubject"]>
  export type TutorSubjectInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tutor?: boolean | TutorProfileDefaultArgs<ExtArgs>
    category?: boolean | SubjectCategoryDefaultArgs<ExtArgs>
  }
  export type TutorSubjectIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tutor?: boolean | TutorProfileDefaultArgs<ExtArgs>
    category?: boolean | SubjectCategoryDefaultArgs<ExtArgs>
  }
  export type TutorSubjectIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tutor?: boolean | TutorProfileDefaultArgs<ExtArgs>
    category?: boolean | SubjectCategoryDefaultArgs<ExtArgs>
  }

  export type $TutorSubjectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TutorSubject"
    objects: {
      tutor: Prisma.$TutorProfilePayload<ExtArgs>
      category: Prisma.$SubjectCategoryPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      tutorId: number
      categoryId: number
    }, ExtArgs["result"]["tutorSubject"]>
    composites: {}
  }

  type TutorSubjectGetPayload<S extends boolean | null | undefined | TutorSubjectDefaultArgs> = $Result.GetResult<Prisma.$TutorSubjectPayload, S>

  type TutorSubjectCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TutorSubjectFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TutorSubjectCountAggregateInputType | true
    }

  export interface TutorSubjectDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TutorSubject'], meta: { name: 'TutorSubject' } }
    /**
     * Find zero or one TutorSubject that matches the filter.
     * @param {TutorSubjectFindUniqueArgs} args - Arguments to find a TutorSubject
     * @example
     * // Get one TutorSubject
     * const tutorSubject = await prisma.tutorSubject.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TutorSubjectFindUniqueArgs>(args: SelectSubset<T, TutorSubjectFindUniqueArgs<ExtArgs>>): Prisma__TutorSubjectClient<$Result.GetResult<Prisma.$TutorSubjectPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TutorSubject that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TutorSubjectFindUniqueOrThrowArgs} args - Arguments to find a TutorSubject
     * @example
     * // Get one TutorSubject
     * const tutorSubject = await prisma.tutorSubject.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TutorSubjectFindUniqueOrThrowArgs>(args: SelectSubset<T, TutorSubjectFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TutorSubjectClient<$Result.GetResult<Prisma.$TutorSubjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TutorSubject that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TutorSubjectFindFirstArgs} args - Arguments to find a TutorSubject
     * @example
     * // Get one TutorSubject
     * const tutorSubject = await prisma.tutorSubject.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TutorSubjectFindFirstArgs>(args?: SelectSubset<T, TutorSubjectFindFirstArgs<ExtArgs>>): Prisma__TutorSubjectClient<$Result.GetResult<Prisma.$TutorSubjectPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TutorSubject that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TutorSubjectFindFirstOrThrowArgs} args - Arguments to find a TutorSubject
     * @example
     * // Get one TutorSubject
     * const tutorSubject = await prisma.tutorSubject.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TutorSubjectFindFirstOrThrowArgs>(args?: SelectSubset<T, TutorSubjectFindFirstOrThrowArgs<ExtArgs>>): Prisma__TutorSubjectClient<$Result.GetResult<Prisma.$TutorSubjectPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TutorSubjects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TutorSubjectFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TutorSubjects
     * const tutorSubjects = await prisma.tutorSubject.findMany()
     * 
     * // Get first 10 TutorSubjects
     * const tutorSubjects = await prisma.tutorSubject.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tutorSubjectWithIdOnly = await prisma.tutorSubject.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TutorSubjectFindManyArgs>(args?: SelectSubset<T, TutorSubjectFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TutorSubjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TutorSubject.
     * @param {TutorSubjectCreateArgs} args - Arguments to create a TutorSubject.
     * @example
     * // Create one TutorSubject
     * const TutorSubject = await prisma.tutorSubject.create({
     *   data: {
     *     // ... data to create a TutorSubject
     *   }
     * })
     * 
     */
    create<T extends TutorSubjectCreateArgs>(args: SelectSubset<T, TutorSubjectCreateArgs<ExtArgs>>): Prisma__TutorSubjectClient<$Result.GetResult<Prisma.$TutorSubjectPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TutorSubjects.
     * @param {TutorSubjectCreateManyArgs} args - Arguments to create many TutorSubjects.
     * @example
     * // Create many TutorSubjects
     * const tutorSubject = await prisma.tutorSubject.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TutorSubjectCreateManyArgs>(args?: SelectSubset<T, TutorSubjectCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TutorSubjects and returns the data saved in the database.
     * @param {TutorSubjectCreateManyAndReturnArgs} args - Arguments to create many TutorSubjects.
     * @example
     * // Create many TutorSubjects
     * const tutorSubject = await prisma.tutorSubject.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TutorSubjects and only return the `id`
     * const tutorSubjectWithIdOnly = await prisma.tutorSubject.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TutorSubjectCreateManyAndReturnArgs>(args?: SelectSubset<T, TutorSubjectCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TutorSubjectPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TutorSubject.
     * @param {TutorSubjectDeleteArgs} args - Arguments to delete one TutorSubject.
     * @example
     * // Delete one TutorSubject
     * const TutorSubject = await prisma.tutorSubject.delete({
     *   where: {
     *     // ... filter to delete one TutorSubject
     *   }
     * })
     * 
     */
    delete<T extends TutorSubjectDeleteArgs>(args: SelectSubset<T, TutorSubjectDeleteArgs<ExtArgs>>): Prisma__TutorSubjectClient<$Result.GetResult<Prisma.$TutorSubjectPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TutorSubject.
     * @param {TutorSubjectUpdateArgs} args - Arguments to update one TutorSubject.
     * @example
     * // Update one TutorSubject
     * const tutorSubject = await prisma.tutorSubject.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TutorSubjectUpdateArgs>(args: SelectSubset<T, TutorSubjectUpdateArgs<ExtArgs>>): Prisma__TutorSubjectClient<$Result.GetResult<Prisma.$TutorSubjectPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TutorSubjects.
     * @param {TutorSubjectDeleteManyArgs} args - Arguments to filter TutorSubjects to delete.
     * @example
     * // Delete a few TutorSubjects
     * const { count } = await prisma.tutorSubject.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TutorSubjectDeleteManyArgs>(args?: SelectSubset<T, TutorSubjectDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TutorSubjects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TutorSubjectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TutorSubjects
     * const tutorSubject = await prisma.tutorSubject.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TutorSubjectUpdateManyArgs>(args: SelectSubset<T, TutorSubjectUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TutorSubjects and returns the data updated in the database.
     * @param {TutorSubjectUpdateManyAndReturnArgs} args - Arguments to update many TutorSubjects.
     * @example
     * // Update many TutorSubjects
     * const tutorSubject = await prisma.tutorSubject.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TutorSubjects and only return the `id`
     * const tutorSubjectWithIdOnly = await prisma.tutorSubject.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TutorSubjectUpdateManyAndReturnArgs>(args: SelectSubset<T, TutorSubjectUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TutorSubjectPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TutorSubject.
     * @param {TutorSubjectUpsertArgs} args - Arguments to update or create a TutorSubject.
     * @example
     * // Update or create a TutorSubject
     * const tutorSubject = await prisma.tutorSubject.upsert({
     *   create: {
     *     // ... data to create a TutorSubject
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TutorSubject we want to update
     *   }
     * })
     */
    upsert<T extends TutorSubjectUpsertArgs>(args: SelectSubset<T, TutorSubjectUpsertArgs<ExtArgs>>): Prisma__TutorSubjectClient<$Result.GetResult<Prisma.$TutorSubjectPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TutorSubjects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TutorSubjectCountArgs} args - Arguments to filter TutorSubjects to count.
     * @example
     * // Count the number of TutorSubjects
     * const count = await prisma.tutorSubject.count({
     *   where: {
     *     // ... the filter for the TutorSubjects we want to count
     *   }
     * })
    **/
    count<T extends TutorSubjectCountArgs>(
      args?: Subset<T, TutorSubjectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TutorSubjectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TutorSubject.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TutorSubjectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TutorSubjectAggregateArgs>(args: Subset<T, TutorSubjectAggregateArgs>): Prisma.PrismaPromise<GetTutorSubjectAggregateType<T>>

    /**
     * Group by TutorSubject.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TutorSubjectGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TutorSubjectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TutorSubjectGroupByArgs['orderBy'] }
        : { orderBy?: TutorSubjectGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TutorSubjectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTutorSubjectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TutorSubject model
   */
  readonly fields: TutorSubjectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TutorSubject.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TutorSubjectClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tutor<T extends TutorProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TutorProfileDefaultArgs<ExtArgs>>): Prisma__TutorProfileClient<$Result.GetResult<Prisma.$TutorProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    category<T extends SubjectCategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SubjectCategoryDefaultArgs<ExtArgs>>): Prisma__SubjectCategoryClient<$Result.GetResult<Prisma.$SubjectCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TutorSubject model
   */
  interface TutorSubjectFieldRefs {
    readonly id: FieldRef<"TutorSubject", 'Int'>
    readonly tutorId: FieldRef<"TutorSubject", 'Int'>
    readonly categoryId: FieldRef<"TutorSubject", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * TutorSubject findUnique
   */
  export type TutorSubjectFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TutorSubject
     */
    select?: TutorSubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TutorSubject
     */
    omit?: TutorSubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TutorSubjectInclude<ExtArgs> | null
    /**
     * Filter, which TutorSubject to fetch.
     */
    where: TutorSubjectWhereUniqueInput
  }

  /**
   * TutorSubject findUniqueOrThrow
   */
  export type TutorSubjectFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TutorSubject
     */
    select?: TutorSubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TutorSubject
     */
    omit?: TutorSubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TutorSubjectInclude<ExtArgs> | null
    /**
     * Filter, which TutorSubject to fetch.
     */
    where: TutorSubjectWhereUniqueInput
  }

  /**
   * TutorSubject findFirst
   */
  export type TutorSubjectFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TutorSubject
     */
    select?: TutorSubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TutorSubject
     */
    omit?: TutorSubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TutorSubjectInclude<ExtArgs> | null
    /**
     * Filter, which TutorSubject to fetch.
     */
    where?: TutorSubjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TutorSubjects to fetch.
     */
    orderBy?: TutorSubjectOrderByWithRelationInput | TutorSubjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TutorSubjects.
     */
    cursor?: TutorSubjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TutorSubjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TutorSubjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TutorSubjects.
     */
    distinct?: TutorSubjectScalarFieldEnum | TutorSubjectScalarFieldEnum[]
  }

  /**
   * TutorSubject findFirstOrThrow
   */
  export type TutorSubjectFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TutorSubject
     */
    select?: TutorSubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TutorSubject
     */
    omit?: TutorSubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TutorSubjectInclude<ExtArgs> | null
    /**
     * Filter, which TutorSubject to fetch.
     */
    where?: TutorSubjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TutorSubjects to fetch.
     */
    orderBy?: TutorSubjectOrderByWithRelationInput | TutorSubjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TutorSubjects.
     */
    cursor?: TutorSubjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TutorSubjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TutorSubjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TutorSubjects.
     */
    distinct?: TutorSubjectScalarFieldEnum | TutorSubjectScalarFieldEnum[]
  }

  /**
   * TutorSubject findMany
   */
  export type TutorSubjectFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TutorSubject
     */
    select?: TutorSubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TutorSubject
     */
    omit?: TutorSubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TutorSubjectInclude<ExtArgs> | null
    /**
     * Filter, which TutorSubjects to fetch.
     */
    where?: TutorSubjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TutorSubjects to fetch.
     */
    orderBy?: TutorSubjectOrderByWithRelationInput | TutorSubjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TutorSubjects.
     */
    cursor?: TutorSubjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TutorSubjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TutorSubjects.
     */
    skip?: number
    distinct?: TutorSubjectScalarFieldEnum | TutorSubjectScalarFieldEnum[]
  }

  /**
   * TutorSubject create
   */
  export type TutorSubjectCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TutorSubject
     */
    select?: TutorSubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TutorSubject
     */
    omit?: TutorSubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TutorSubjectInclude<ExtArgs> | null
    /**
     * The data needed to create a TutorSubject.
     */
    data: XOR<TutorSubjectCreateInput, TutorSubjectUncheckedCreateInput>
  }

  /**
   * TutorSubject createMany
   */
  export type TutorSubjectCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TutorSubjects.
     */
    data: TutorSubjectCreateManyInput | TutorSubjectCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TutorSubject createManyAndReturn
   */
  export type TutorSubjectCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TutorSubject
     */
    select?: TutorSubjectSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TutorSubject
     */
    omit?: TutorSubjectOmit<ExtArgs> | null
    /**
     * The data used to create many TutorSubjects.
     */
    data: TutorSubjectCreateManyInput | TutorSubjectCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TutorSubjectIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TutorSubject update
   */
  export type TutorSubjectUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TutorSubject
     */
    select?: TutorSubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TutorSubject
     */
    omit?: TutorSubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TutorSubjectInclude<ExtArgs> | null
    /**
     * The data needed to update a TutorSubject.
     */
    data: XOR<TutorSubjectUpdateInput, TutorSubjectUncheckedUpdateInput>
    /**
     * Choose, which TutorSubject to update.
     */
    where: TutorSubjectWhereUniqueInput
  }

  /**
   * TutorSubject updateMany
   */
  export type TutorSubjectUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TutorSubjects.
     */
    data: XOR<TutorSubjectUpdateManyMutationInput, TutorSubjectUncheckedUpdateManyInput>
    /**
     * Filter which TutorSubjects to update
     */
    where?: TutorSubjectWhereInput
    /**
     * Limit how many TutorSubjects to update.
     */
    limit?: number
  }

  /**
   * TutorSubject updateManyAndReturn
   */
  export type TutorSubjectUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TutorSubject
     */
    select?: TutorSubjectSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TutorSubject
     */
    omit?: TutorSubjectOmit<ExtArgs> | null
    /**
     * The data used to update TutorSubjects.
     */
    data: XOR<TutorSubjectUpdateManyMutationInput, TutorSubjectUncheckedUpdateManyInput>
    /**
     * Filter which TutorSubjects to update
     */
    where?: TutorSubjectWhereInput
    /**
     * Limit how many TutorSubjects to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TutorSubjectIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TutorSubject upsert
   */
  export type TutorSubjectUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TutorSubject
     */
    select?: TutorSubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TutorSubject
     */
    omit?: TutorSubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TutorSubjectInclude<ExtArgs> | null
    /**
     * The filter to search for the TutorSubject to update in case it exists.
     */
    where: TutorSubjectWhereUniqueInput
    /**
     * In case the TutorSubject found by the `where` argument doesn't exist, create a new TutorSubject with this data.
     */
    create: XOR<TutorSubjectCreateInput, TutorSubjectUncheckedCreateInput>
    /**
     * In case the TutorSubject was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TutorSubjectUpdateInput, TutorSubjectUncheckedUpdateInput>
  }

  /**
   * TutorSubject delete
   */
  export type TutorSubjectDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TutorSubject
     */
    select?: TutorSubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TutorSubject
     */
    omit?: TutorSubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TutorSubjectInclude<ExtArgs> | null
    /**
     * Filter which TutorSubject to delete.
     */
    where: TutorSubjectWhereUniqueInput
  }

  /**
   * TutorSubject deleteMany
   */
  export type TutorSubjectDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TutorSubjects to delete
     */
    where?: TutorSubjectWhereInput
    /**
     * Limit how many TutorSubjects to delete.
     */
    limit?: number
  }

  /**
   * TutorSubject without action
   */
  export type TutorSubjectDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TutorSubject
     */
    select?: TutorSubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TutorSubject
     */
    omit?: TutorSubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TutorSubjectInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const TutorProfileScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    tutorName: 'tutorName',
    province: 'province',
    image: 'image',
    pricePerHour: 'pricePerHour',
    languageTaught: 'languageTaught',
    sex: 'sex',
    description: 'description',
    phoneNumber: 'phoneNumber',
    verifyed: 'verifyed',
    technique: 'technique',
    teachingMethod: 'teachingMethod',
    teachingTime: 'teachingTime',
    timeStart: 'timeStart',
    timeEnd: 'timeEnd',
    availableTimes: 'availableTimes'
  };

  export type TutorProfileScalarFieldEnum = (typeof TutorProfileScalarFieldEnum)[keyof typeof TutorProfileScalarFieldEnum]


  export const TeachingLevelScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type TeachingLevelScalarFieldEnum = (typeof TeachingLevelScalarFieldEnum)[keyof typeof TeachingLevelScalarFieldEnum]


  export const TutorLevelScalarFieldEnum: {
    id: 'id',
    tutorProfileId: 'tutorProfileId',
    teachingLevelId: 'teachingLevelId'
  };

  export type TutorLevelScalarFieldEnum = (typeof TutorLevelScalarFieldEnum)[keyof typeof TutorLevelScalarFieldEnum]


  export const BookingTutorScalarFieldEnum: {
    id: 'id',
    fullName: 'fullName',
    phoneNumber: 'phoneNumber',
    email: 'email',
    subjectId: 'subjectId',
    subjectName: 'subjectName',
    level: 'level',
    target: 'target',
    nationalityTeacher: 'nationalityTeacher',
    teacherSex: 'teacherSex',
    studyingDays: 'studyingDays',
    studyingTimes: 'studyingTimes',
    startStudyingDate: 'startStudyingDate',
    teachingMethod: 'teachingMethod',
    studyLocation: 'studyLocation',
    yourCity: 'yourCity',
    note: 'note',
    assignedTutorId: 'assignedTutorId',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BookingTutorScalarFieldEnum = (typeof BookingTutorScalarFieldEnum)[keyof typeof BookingTutorScalarFieldEnum]


  export const ExperienceScalarFieldEnum: {
    id: 'id',
    detail: 'detail',
    tutorId: 'tutorId'
  };

  export type ExperienceScalarFieldEnum = (typeof ExperienceScalarFieldEnum)[keyof typeof ExperienceScalarFieldEnum]


  export const ReviewScalarFieldEnum: {
    id: 'id',
    comment: 'comment',
    rating: 'rating',
    tutorId: 'tutorId',
    userId: 'userId',
    createdAt: 'createdAt'
  };

  export type ReviewScalarFieldEnum = (typeof ReviewScalarFieldEnum)[keyof typeof ReviewScalarFieldEnum]


  export const SubjectCategoryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    icon: 'icon'
  };

  export type SubjectCategoryScalarFieldEnum = (typeof SubjectCategoryScalarFieldEnum)[keyof typeof SubjectCategoryScalarFieldEnum]


  export const TutorSubjectScalarFieldEnum: {
    id: 'id',
    tutorId: 'tutorId',
    categoryId: 'categoryId'
  };

  export type TutorSubjectScalarFieldEnum = (typeof TutorSubjectScalarFieldEnum)[keyof typeof TutorSubjectScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Language'
   */
  export type EnumLanguageFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Language'>
    


  /**
   * Reference to a field of type 'Language[]'
   */
  export type ListEnumLanguageFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Language[]'>
    


  /**
   * Reference to a field of type 'SexMethod'
   */
  export type EnumSexMethodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SexMethod'>
    


  /**
   * Reference to a field of type 'SexMethod[]'
   */
  export type ListEnumSexMethodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SexMethod[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'TeachingMethod'
   */
  export type EnumTeachingMethodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TeachingMethod'>
    


  /**
   * Reference to a field of type 'TeachingMethod[]'
   */
  export type ListEnumTeachingMethodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TeachingMethod[]'>
    


  /**
   * Reference to a field of type 'TeachingTime'
   */
  export type EnumTeachingTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TeachingTime'>
    


  /**
   * Reference to a field of type 'TeachingTime[]'
   */
  export type ListEnumTeachingTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TeachingTime[]'>
    


  /**
   * Reference to a field of type 'BookingStatus'
   */
  export type EnumBookingStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BookingStatus'>
    


  /**
   * Reference to a field of type 'BookingStatus[]'
   */
  export type ListEnumBookingStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BookingStatus[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    tutorProfile?: XOR<TutorProfileNullableScalarRelationFilter, TutorProfileWhereInput> | null
    reviews?: ReviewListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tutorProfile?: TutorProfileOrderByWithRelationInput
    reviews?: ReviewOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    tutorProfile?: XOR<TutorProfileNullableScalarRelationFilter, TutorProfileWhereInput> | null
    reviews?: ReviewListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type TutorProfileWhereInput = {
    AND?: TutorProfileWhereInput | TutorProfileWhereInput[]
    OR?: TutorProfileWhereInput[]
    NOT?: TutorProfileWhereInput | TutorProfileWhereInput[]
    id?: IntFilter<"TutorProfile"> | number
    userId?: IntFilter<"TutorProfile"> | number
    tutorName?: StringFilter<"TutorProfile"> | string
    province?: StringFilter<"TutorProfile"> | string
    image?: StringFilter<"TutorProfile"> | string
    pricePerHour?: IntFilter<"TutorProfile"> | number
    languageTaught?: EnumLanguageFilter<"TutorProfile"> | $Enums.Language
    sex?: EnumSexMethodFilter<"TutorProfile"> | $Enums.SexMethod
    description?: StringNullableFilter<"TutorProfile"> | string | null
    phoneNumber?: StringFilter<"TutorProfile"> | string
    verifyed?: BoolFilter<"TutorProfile"> | boolean
    technique?: StringNullableFilter<"TutorProfile"> | string | null
    teachingMethod?: EnumTeachingMethodFilter<"TutorProfile"> | $Enums.TeachingMethod
    teachingTime?: EnumTeachingTimeFilter<"TutorProfile"> | $Enums.TeachingTime
    timeStart?: StringFilter<"TutorProfile"> | string
    timeEnd?: StringFilter<"TutorProfile"> | string
    availableTimes?: EnumTeachingTimeFilter<"TutorProfile"> | $Enums.TeachingTime
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    tutorSubjects?: TutorSubjectListRelationFilter
    experiences?: ExperienceListRelationFilter
    reviews?: ReviewListRelationFilter
    levels?: TutorLevelListRelationFilter
    BookingTutor?: BookingTutorListRelationFilter
  }

  export type TutorProfileOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    tutorName?: SortOrder
    province?: SortOrder
    image?: SortOrder
    pricePerHour?: SortOrder
    languageTaught?: SortOrder
    sex?: SortOrder
    description?: SortOrderInput | SortOrder
    phoneNumber?: SortOrder
    verifyed?: SortOrder
    technique?: SortOrderInput | SortOrder
    teachingMethod?: SortOrder
    teachingTime?: SortOrder
    timeStart?: SortOrder
    timeEnd?: SortOrder
    availableTimes?: SortOrder
    user?: UserOrderByWithRelationInput
    tutorSubjects?: TutorSubjectOrderByRelationAggregateInput
    experiences?: ExperienceOrderByRelationAggregateInput
    reviews?: ReviewOrderByRelationAggregateInput
    levels?: TutorLevelOrderByRelationAggregateInput
    BookingTutor?: BookingTutorOrderByRelationAggregateInput
  }

  export type TutorProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId?: number
    AND?: TutorProfileWhereInput | TutorProfileWhereInput[]
    OR?: TutorProfileWhereInput[]
    NOT?: TutorProfileWhereInput | TutorProfileWhereInput[]
    tutorName?: StringFilter<"TutorProfile"> | string
    province?: StringFilter<"TutorProfile"> | string
    image?: StringFilter<"TutorProfile"> | string
    pricePerHour?: IntFilter<"TutorProfile"> | number
    languageTaught?: EnumLanguageFilter<"TutorProfile"> | $Enums.Language
    sex?: EnumSexMethodFilter<"TutorProfile"> | $Enums.SexMethod
    description?: StringNullableFilter<"TutorProfile"> | string | null
    phoneNumber?: StringFilter<"TutorProfile"> | string
    verifyed?: BoolFilter<"TutorProfile"> | boolean
    technique?: StringNullableFilter<"TutorProfile"> | string | null
    teachingMethod?: EnumTeachingMethodFilter<"TutorProfile"> | $Enums.TeachingMethod
    teachingTime?: EnumTeachingTimeFilter<"TutorProfile"> | $Enums.TeachingTime
    timeStart?: StringFilter<"TutorProfile"> | string
    timeEnd?: StringFilter<"TutorProfile"> | string
    availableTimes?: EnumTeachingTimeFilter<"TutorProfile"> | $Enums.TeachingTime
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    tutorSubjects?: TutorSubjectListRelationFilter
    experiences?: ExperienceListRelationFilter
    reviews?: ReviewListRelationFilter
    levels?: TutorLevelListRelationFilter
    BookingTutor?: BookingTutorListRelationFilter
  }, "id" | "userId">

  export type TutorProfileOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    tutorName?: SortOrder
    province?: SortOrder
    image?: SortOrder
    pricePerHour?: SortOrder
    languageTaught?: SortOrder
    sex?: SortOrder
    description?: SortOrderInput | SortOrder
    phoneNumber?: SortOrder
    verifyed?: SortOrder
    technique?: SortOrderInput | SortOrder
    teachingMethod?: SortOrder
    teachingTime?: SortOrder
    timeStart?: SortOrder
    timeEnd?: SortOrder
    availableTimes?: SortOrder
    _count?: TutorProfileCountOrderByAggregateInput
    _avg?: TutorProfileAvgOrderByAggregateInput
    _max?: TutorProfileMaxOrderByAggregateInput
    _min?: TutorProfileMinOrderByAggregateInput
    _sum?: TutorProfileSumOrderByAggregateInput
  }

  export type TutorProfileScalarWhereWithAggregatesInput = {
    AND?: TutorProfileScalarWhereWithAggregatesInput | TutorProfileScalarWhereWithAggregatesInput[]
    OR?: TutorProfileScalarWhereWithAggregatesInput[]
    NOT?: TutorProfileScalarWhereWithAggregatesInput | TutorProfileScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TutorProfile"> | number
    userId?: IntWithAggregatesFilter<"TutorProfile"> | number
    tutorName?: StringWithAggregatesFilter<"TutorProfile"> | string
    province?: StringWithAggregatesFilter<"TutorProfile"> | string
    image?: StringWithAggregatesFilter<"TutorProfile"> | string
    pricePerHour?: IntWithAggregatesFilter<"TutorProfile"> | number
    languageTaught?: EnumLanguageWithAggregatesFilter<"TutorProfile"> | $Enums.Language
    sex?: EnumSexMethodWithAggregatesFilter<"TutorProfile"> | $Enums.SexMethod
    description?: StringNullableWithAggregatesFilter<"TutorProfile"> | string | null
    phoneNumber?: StringWithAggregatesFilter<"TutorProfile"> | string
    verifyed?: BoolWithAggregatesFilter<"TutorProfile"> | boolean
    technique?: StringNullableWithAggregatesFilter<"TutorProfile"> | string | null
    teachingMethod?: EnumTeachingMethodWithAggregatesFilter<"TutorProfile"> | $Enums.TeachingMethod
    teachingTime?: EnumTeachingTimeWithAggregatesFilter<"TutorProfile"> | $Enums.TeachingTime
    timeStart?: StringWithAggregatesFilter<"TutorProfile"> | string
    timeEnd?: StringWithAggregatesFilter<"TutorProfile"> | string
    availableTimes?: EnumTeachingTimeWithAggregatesFilter<"TutorProfile"> | $Enums.TeachingTime
  }

  export type TeachingLevelWhereInput = {
    AND?: TeachingLevelWhereInput | TeachingLevelWhereInput[]
    OR?: TeachingLevelWhereInput[]
    NOT?: TeachingLevelWhereInput | TeachingLevelWhereInput[]
    id?: IntFilter<"TeachingLevel"> | number
    name?: StringFilter<"TeachingLevel"> | string
    tutors?: TutorLevelListRelationFilter
  }

  export type TeachingLevelOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    tutors?: TutorLevelOrderByRelationAggregateInput
  }

  export type TeachingLevelWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: TeachingLevelWhereInput | TeachingLevelWhereInput[]
    OR?: TeachingLevelWhereInput[]
    NOT?: TeachingLevelWhereInput | TeachingLevelWhereInput[]
    tutors?: TutorLevelListRelationFilter
  }, "id" | "name">

  export type TeachingLevelOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: TeachingLevelCountOrderByAggregateInput
    _avg?: TeachingLevelAvgOrderByAggregateInput
    _max?: TeachingLevelMaxOrderByAggregateInput
    _min?: TeachingLevelMinOrderByAggregateInput
    _sum?: TeachingLevelSumOrderByAggregateInput
  }

  export type TeachingLevelScalarWhereWithAggregatesInput = {
    AND?: TeachingLevelScalarWhereWithAggregatesInput | TeachingLevelScalarWhereWithAggregatesInput[]
    OR?: TeachingLevelScalarWhereWithAggregatesInput[]
    NOT?: TeachingLevelScalarWhereWithAggregatesInput | TeachingLevelScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TeachingLevel"> | number
    name?: StringWithAggregatesFilter<"TeachingLevel"> | string
  }

  export type TutorLevelWhereInput = {
    AND?: TutorLevelWhereInput | TutorLevelWhereInput[]
    OR?: TutorLevelWhereInput[]
    NOT?: TutorLevelWhereInput | TutorLevelWhereInput[]
    id?: IntFilter<"TutorLevel"> | number
    tutorProfileId?: IntFilter<"TutorLevel"> | number
    teachingLevelId?: IntFilter<"TutorLevel"> | number
    tutorProfile?: XOR<TutorProfileScalarRelationFilter, TutorProfileWhereInput>
    teachingLevel?: XOR<TeachingLevelScalarRelationFilter, TeachingLevelWhereInput>
  }

  export type TutorLevelOrderByWithRelationInput = {
    id?: SortOrder
    tutorProfileId?: SortOrder
    teachingLevelId?: SortOrder
    tutorProfile?: TutorProfileOrderByWithRelationInput
    teachingLevel?: TeachingLevelOrderByWithRelationInput
  }

  export type TutorLevelWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    tutorProfileId_teachingLevelId?: TutorLevelTutorProfileIdTeachingLevelIdCompoundUniqueInput
    AND?: TutorLevelWhereInput | TutorLevelWhereInput[]
    OR?: TutorLevelWhereInput[]
    NOT?: TutorLevelWhereInput | TutorLevelWhereInput[]
    tutorProfileId?: IntFilter<"TutorLevel"> | number
    teachingLevelId?: IntFilter<"TutorLevel"> | number
    tutorProfile?: XOR<TutorProfileScalarRelationFilter, TutorProfileWhereInput>
    teachingLevel?: XOR<TeachingLevelScalarRelationFilter, TeachingLevelWhereInput>
  }, "id" | "tutorProfileId_teachingLevelId">

  export type TutorLevelOrderByWithAggregationInput = {
    id?: SortOrder
    tutorProfileId?: SortOrder
    teachingLevelId?: SortOrder
    _count?: TutorLevelCountOrderByAggregateInput
    _avg?: TutorLevelAvgOrderByAggregateInput
    _max?: TutorLevelMaxOrderByAggregateInput
    _min?: TutorLevelMinOrderByAggregateInput
    _sum?: TutorLevelSumOrderByAggregateInput
  }

  export type TutorLevelScalarWhereWithAggregatesInput = {
    AND?: TutorLevelScalarWhereWithAggregatesInput | TutorLevelScalarWhereWithAggregatesInput[]
    OR?: TutorLevelScalarWhereWithAggregatesInput[]
    NOT?: TutorLevelScalarWhereWithAggregatesInput | TutorLevelScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TutorLevel"> | number
    tutorProfileId?: IntWithAggregatesFilter<"TutorLevel"> | number
    teachingLevelId?: IntWithAggregatesFilter<"TutorLevel"> | number
  }

  export type BookingTutorWhereInput = {
    AND?: BookingTutorWhereInput | BookingTutorWhereInput[]
    OR?: BookingTutorWhereInput[]
    NOT?: BookingTutorWhereInput | BookingTutorWhereInput[]
    id?: IntFilter<"BookingTutor"> | number
    fullName?: StringFilter<"BookingTutor"> | string
    phoneNumber?: StringFilter<"BookingTutor"> | string
    email?: StringNullableFilter<"BookingTutor"> | string | null
    subjectId?: IntNullableFilter<"BookingTutor"> | number | null
    subjectName?: StringNullableFilter<"BookingTutor"> | string | null
    level?: StringNullableFilter<"BookingTutor"> | string | null
    target?: StringNullableFilter<"BookingTutor"> | string | null
    nationalityTeacher?: StringNullableFilter<"BookingTutor"> | string | null
    teacherSex?: EnumSexMethodNullableFilter<"BookingTutor"> | $Enums.SexMethod | null
    studyingDays?: EnumTeachingTimeNullableFilter<"BookingTutor"> | $Enums.TeachingTime | null
    studyingTimes?: StringNullableFilter<"BookingTutor"> | string | null
    startStudyingDate?: StringNullableFilter<"BookingTutor"> | string | null
    teachingMethod?: EnumTeachingMethodNullableFilter<"BookingTutor"> | $Enums.TeachingMethod | null
    studyLocation?: StringNullableFilter<"BookingTutor"> | string | null
    yourCity?: StringNullableFilter<"BookingTutor"> | string | null
    note?: StringNullableFilter<"BookingTutor"> | string | null
    assignedTutorId?: IntNullableFilter<"BookingTutor"> | number | null
    status?: EnumBookingStatusNullableFilter<"BookingTutor"> | $Enums.BookingStatus | null
    createdAt?: DateTimeFilter<"BookingTutor"> | Date | string
    updatedAt?: DateTimeFilter<"BookingTutor"> | Date | string
    subject?: XOR<SubjectCategoryNullableScalarRelationFilter, SubjectCategoryWhereInput> | null
    assignedTutor?: XOR<TutorProfileNullableScalarRelationFilter, TutorProfileWhereInput> | null
  }

  export type BookingTutorOrderByWithRelationInput = {
    id?: SortOrder
    fullName?: SortOrder
    phoneNumber?: SortOrder
    email?: SortOrderInput | SortOrder
    subjectId?: SortOrderInput | SortOrder
    subjectName?: SortOrderInput | SortOrder
    level?: SortOrderInput | SortOrder
    target?: SortOrderInput | SortOrder
    nationalityTeacher?: SortOrderInput | SortOrder
    teacherSex?: SortOrderInput | SortOrder
    studyingDays?: SortOrderInput | SortOrder
    studyingTimes?: SortOrderInput | SortOrder
    startStudyingDate?: SortOrderInput | SortOrder
    teachingMethod?: SortOrderInput | SortOrder
    studyLocation?: SortOrderInput | SortOrder
    yourCity?: SortOrderInput | SortOrder
    note?: SortOrderInput | SortOrder
    assignedTutorId?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    subject?: SubjectCategoryOrderByWithRelationInput
    assignedTutor?: TutorProfileOrderByWithRelationInput
  }

  export type BookingTutorWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: BookingTutorWhereInput | BookingTutorWhereInput[]
    OR?: BookingTutorWhereInput[]
    NOT?: BookingTutorWhereInput | BookingTutorWhereInput[]
    fullName?: StringFilter<"BookingTutor"> | string
    phoneNumber?: StringFilter<"BookingTutor"> | string
    email?: StringNullableFilter<"BookingTutor"> | string | null
    subjectId?: IntNullableFilter<"BookingTutor"> | number | null
    subjectName?: StringNullableFilter<"BookingTutor"> | string | null
    level?: StringNullableFilter<"BookingTutor"> | string | null
    target?: StringNullableFilter<"BookingTutor"> | string | null
    nationalityTeacher?: StringNullableFilter<"BookingTutor"> | string | null
    teacherSex?: EnumSexMethodNullableFilter<"BookingTutor"> | $Enums.SexMethod | null
    studyingDays?: EnumTeachingTimeNullableFilter<"BookingTutor"> | $Enums.TeachingTime | null
    studyingTimes?: StringNullableFilter<"BookingTutor"> | string | null
    startStudyingDate?: StringNullableFilter<"BookingTutor"> | string | null
    teachingMethod?: EnumTeachingMethodNullableFilter<"BookingTutor"> | $Enums.TeachingMethod | null
    studyLocation?: StringNullableFilter<"BookingTutor"> | string | null
    yourCity?: StringNullableFilter<"BookingTutor"> | string | null
    note?: StringNullableFilter<"BookingTutor"> | string | null
    assignedTutorId?: IntNullableFilter<"BookingTutor"> | number | null
    status?: EnumBookingStatusNullableFilter<"BookingTutor"> | $Enums.BookingStatus | null
    createdAt?: DateTimeFilter<"BookingTutor"> | Date | string
    updatedAt?: DateTimeFilter<"BookingTutor"> | Date | string
    subject?: XOR<SubjectCategoryNullableScalarRelationFilter, SubjectCategoryWhereInput> | null
    assignedTutor?: XOR<TutorProfileNullableScalarRelationFilter, TutorProfileWhereInput> | null
  }, "id">

  export type BookingTutorOrderByWithAggregationInput = {
    id?: SortOrder
    fullName?: SortOrder
    phoneNumber?: SortOrder
    email?: SortOrderInput | SortOrder
    subjectId?: SortOrderInput | SortOrder
    subjectName?: SortOrderInput | SortOrder
    level?: SortOrderInput | SortOrder
    target?: SortOrderInput | SortOrder
    nationalityTeacher?: SortOrderInput | SortOrder
    teacherSex?: SortOrderInput | SortOrder
    studyingDays?: SortOrderInput | SortOrder
    studyingTimes?: SortOrderInput | SortOrder
    startStudyingDate?: SortOrderInput | SortOrder
    teachingMethod?: SortOrderInput | SortOrder
    studyLocation?: SortOrderInput | SortOrder
    yourCity?: SortOrderInput | SortOrder
    note?: SortOrderInput | SortOrder
    assignedTutorId?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BookingTutorCountOrderByAggregateInput
    _avg?: BookingTutorAvgOrderByAggregateInput
    _max?: BookingTutorMaxOrderByAggregateInput
    _min?: BookingTutorMinOrderByAggregateInput
    _sum?: BookingTutorSumOrderByAggregateInput
  }

  export type BookingTutorScalarWhereWithAggregatesInput = {
    AND?: BookingTutorScalarWhereWithAggregatesInput | BookingTutorScalarWhereWithAggregatesInput[]
    OR?: BookingTutorScalarWhereWithAggregatesInput[]
    NOT?: BookingTutorScalarWhereWithAggregatesInput | BookingTutorScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"BookingTutor"> | number
    fullName?: StringWithAggregatesFilter<"BookingTutor"> | string
    phoneNumber?: StringWithAggregatesFilter<"BookingTutor"> | string
    email?: StringNullableWithAggregatesFilter<"BookingTutor"> | string | null
    subjectId?: IntNullableWithAggregatesFilter<"BookingTutor"> | number | null
    subjectName?: StringNullableWithAggregatesFilter<"BookingTutor"> | string | null
    level?: StringNullableWithAggregatesFilter<"BookingTutor"> | string | null
    target?: StringNullableWithAggregatesFilter<"BookingTutor"> | string | null
    nationalityTeacher?: StringNullableWithAggregatesFilter<"BookingTutor"> | string | null
    teacherSex?: EnumSexMethodNullableWithAggregatesFilter<"BookingTutor"> | $Enums.SexMethod | null
    studyingDays?: EnumTeachingTimeNullableWithAggregatesFilter<"BookingTutor"> | $Enums.TeachingTime | null
    studyingTimes?: StringNullableWithAggregatesFilter<"BookingTutor"> | string | null
    startStudyingDate?: StringNullableWithAggregatesFilter<"BookingTutor"> | string | null
    teachingMethod?: EnumTeachingMethodNullableWithAggregatesFilter<"BookingTutor"> | $Enums.TeachingMethod | null
    studyLocation?: StringNullableWithAggregatesFilter<"BookingTutor"> | string | null
    yourCity?: StringNullableWithAggregatesFilter<"BookingTutor"> | string | null
    note?: StringNullableWithAggregatesFilter<"BookingTutor"> | string | null
    assignedTutorId?: IntNullableWithAggregatesFilter<"BookingTutor"> | number | null
    status?: EnumBookingStatusNullableWithAggregatesFilter<"BookingTutor"> | $Enums.BookingStatus | null
    createdAt?: DateTimeWithAggregatesFilter<"BookingTutor"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"BookingTutor"> | Date | string
  }

  export type ExperienceWhereInput = {
    AND?: ExperienceWhereInput | ExperienceWhereInput[]
    OR?: ExperienceWhereInput[]
    NOT?: ExperienceWhereInput | ExperienceWhereInput[]
    id?: IntFilter<"Experience"> | number
    detail?: StringFilter<"Experience"> | string
    tutorId?: IntFilter<"Experience"> | number
    tutor?: XOR<TutorProfileScalarRelationFilter, TutorProfileWhereInput>
  }

  export type ExperienceOrderByWithRelationInput = {
    id?: SortOrder
    detail?: SortOrder
    tutorId?: SortOrder
    tutor?: TutorProfileOrderByWithRelationInput
  }

  export type ExperienceWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ExperienceWhereInput | ExperienceWhereInput[]
    OR?: ExperienceWhereInput[]
    NOT?: ExperienceWhereInput | ExperienceWhereInput[]
    detail?: StringFilter<"Experience"> | string
    tutorId?: IntFilter<"Experience"> | number
    tutor?: XOR<TutorProfileScalarRelationFilter, TutorProfileWhereInput>
  }, "id">

  export type ExperienceOrderByWithAggregationInput = {
    id?: SortOrder
    detail?: SortOrder
    tutorId?: SortOrder
    _count?: ExperienceCountOrderByAggregateInput
    _avg?: ExperienceAvgOrderByAggregateInput
    _max?: ExperienceMaxOrderByAggregateInput
    _min?: ExperienceMinOrderByAggregateInput
    _sum?: ExperienceSumOrderByAggregateInput
  }

  export type ExperienceScalarWhereWithAggregatesInput = {
    AND?: ExperienceScalarWhereWithAggregatesInput | ExperienceScalarWhereWithAggregatesInput[]
    OR?: ExperienceScalarWhereWithAggregatesInput[]
    NOT?: ExperienceScalarWhereWithAggregatesInput | ExperienceScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Experience"> | number
    detail?: StringWithAggregatesFilter<"Experience"> | string
    tutorId?: IntWithAggregatesFilter<"Experience"> | number
  }

  export type ReviewWhereInput = {
    AND?: ReviewWhereInput | ReviewWhereInput[]
    OR?: ReviewWhereInput[]
    NOT?: ReviewWhereInput | ReviewWhereInput[]
    id?: IntFilter<"Review"> | number
    comment?: StringFilter<"Review"> | string
    rating?: IntFilter<"Review"> | number
    tutorId?: IntFilter<"Review"> | number
    userId?: IntFilter<"Review"> | number
    createdAt?: DateTimeFilter<"Review"> | Date | string
    tutor?: XOR<TutorProfileScalarRelationFilter, TutorProfileWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ReviewOrderByWithRelationInput = {
    id?: SortOrder
    comment?: SortOrder
    rating?: SortOrder
    tutorId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    tutor?: TutorProfileOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type ReviewWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ReviewWhereInput | ReviewWhereInput[]
    OR?: ReviewWhereInput[]
    NOT?: ReviewWhereInput | ReviewWhereInput[]
    comment?: StringFilter<"Review"> | string
    rating?: IntFilter<"Review"> | number
    tutorId?: IntFilter<"Review"> | number
    userId?: IntFilter<"Review"> | number
    createdAt?: DateTimeFilter<"Review"> | Date | string
    tutor?: XOR<TutorProfileScalarRelationFilter, TutorProfileWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type ReviewOrderByWithAggregationInput = {
    id?: SortOrder
    comment?: SortOrder
    rating?: SortOrder
    tutorId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    _count?: ReviewCountOrderByAggregateInput
    _avg?: ReviewAvgOrderByAggregateInput
    _max?: ReviewMaxOrderByAggregateInput
    _min?: ReviewMinOrderByAggregateInput
    _sum?: ReviewSumOrderByAggregateInput
  }

  export type ReviewScalarWhereWithAggregatesInput = {
    AND?: ReviewScalarWhereWithAggregatesInput | ReviewScalarWhereWithAggregatesInput[]
    OR?: ReviewScalarWhereWithAggregatesInput[]
    NOT?: ReviewScalarWhereWithAggregatesInput | ReviewScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Review"> | number
    comment?: StringWithAggregatesFilter<"Review"> | string
    rating?: IntWithAggregatesFilter<"Review"> | number
    tutorId?: IntWithAggregatesFilter<"Review"> | number
    userId?: IntWithAggregatesFilter<"Review"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Review"> | Date | string
  }

  export type SubjectCategoryWhereInput = {
    AND?: SubjectCategoryWhereInput | SubjectCategoryWhereInput[]
    OR?: SubjectCategoryWhereInput[]
    NOT?: SubjectCategoryWhereInput | SubjectCategoryWhereInput[]
    id?: IntFilter<"SubjectCategory"> | number
    name?: StringFilter<"SubjectCategory"> | string
    icon?: StringNullableFilter<"SubjectCategory"> | string | null
    tutors?: TutorSubjectListRelationFilter
    BookingTutor?: BookingTutorListRelationFilter
  }

  export type SubjectCategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    icon?: SortOrderInput | SortOrder
    tutors?: TutorSubjectOrderByRelationAggregateInput
    BookingTutor?: BookingTutorOrderByRelationAggregateInput
  }

  export type SubjectCategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: SubjectCategoryWhereInput | SubjectCategoryWhereInput[]
    OR?: SubjectCategoryWhereInput[]
    NOT?: SubjectCategoryWhereInput | SubjectCategoryWhereInput[]
    icon?: StringNullableFilter<"SubjectCategory"> | string | null
    tutors?: TutorSubjectListRelationFilter
    BookingTutor?: BookingTutorListRelationFilter
  }, "id" | "name">

  export type SubjectCategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    icon?: SortOrderInput | SortOrder
    _count?: SubjectCategoryCountOrderByAggregateInput
    _avg?: SubjectCategoryAvgOrderByAggregateInput
    _max?: SubjectCategoryMaxOrderByAggregateInput
    _min?: SubjectCategoryMinOrderByAggregateInput
    _sum?: SubjectCategorySumOrderByAggregateInput
  }

  export type SubjectCategoryScalarWhereWithAggregatesInput = {
    AND?: SubjectCategoryScalarWhereWithAggregatesInput | SubjectCategoryScalarWhereWithAggregatesInput[]
    OR?: SubjectCategoryScalarWhereWithAggregatesInput[]
    NOT?: SubjectCategoryScalarWhereWithAggregatesInput | SubjectCategoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"SubjectCategory"> | number
    name?: StringWithAggregatesFilter<"SubjectCategory"> | string
    icon?: StringNullableWithAggregatesFilter<"SubjectCategory"> | string | null
  }

  export type TutorSubjectWhereInput = {
    AND?: TutorSubjectWhereInput | TutorSubjectWhereInput[]
    OR?: TutorSubjectWhereInput[]
    NOT?: TutorSubjectWhereInput | TutorSubjectWhereInput[]
    id?: IntFilter<"TutorSubject"> | number
    tutorId?: IntFilter<"TutorSubject"> | number
    categoryId?: IntFilter<"TutorSubject"> | number
    tutor?: XOR<TutorProfileScalarRelationFilter, TutorProfileWhereInput>
    category?: XOR<SubjectCategoryScalarRelationFilter, SubjectCategoryWhereInput>
  }

  export type TutorSubjectOrderByWithRelationInput = {
    id?: SortOrder
    tutorId?: SortOrder
    categoryId?: SortOrder
    tutor?: TutorProfileOrderByWithRelationInput
    category?: SubjectCategoryOrderByWithRelationInput
  }

  export type TutorSubjectWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TutorSubjectWhereInput | TutorSubjectWhereInput[]
    OR?: TutorSubjectWhereInput[]
    NOT?: TutorSubjectWhereInput | TutorSubjectWhereInput[]
    tutorId?: IntFilter<"TutorSubject"> | number
    categoryId?: IntFilter<"TutorSubject"> | number
    tutor?: XOR<TutorProfileScalarRelationFilter, TutorProfileWhereInput>
    category?: XOR<SubjectCategoryScalarRelationFilter, SubjectCategoryWhereInput>
  }, "id">

  export type TutorSubjectOrderByWithAggregationInput = {
    id?: SortOrder
    tutorId?: SortOrder
    categoryId?: SortOrder
    _count?: TutorSubjectCountOrderByAggregateInput
    _avg?: TutorSubjectAvgOrderByAggregateInput
    _max?: TutorSubjectMaxOrderByAggregateInput
    _min?: TutorSubjectMinOrderByAggregateInput
    _sum?: TutorSubjectSumOrderByAggregateInput
  }

  export type TutorSubjectScalarWhereWithAggregatesInput = {
    AND?: TutorSubjectScalarWhereWithAggregatesInput | TutorSubjectScalarWhereWithAggregatesInput[]
    OR?: TutorSubjectScalarWhereWithAggregatesInput[]
    NOT?: TutorSubjectScalarWhereWithAggregatesInput | TutorSubjectScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TutorSubject"> | number
    tutorId?: IntWithAggregatesFilter<"TutorSubject"> | number
    categoryId?: IntWithAggregatesFilter<"TutorSubject"> | number
  }

  export type UserCreateInput = {
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    tutorProfile?: TutorProfileCreateNestedOneWithoutUserInput
    reviews?: ReviewCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    tutorProfile?: TutorProfileUncheckedCreateNestedOneWithoutUserInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tutorProfile?: TutorProfileUpdateOneWithoutUserNestedInput
    reviews?: ReviewUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tutorProfile?: TutorProfileUncheckedUpdateOneWithoutUserNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TutorProfileCreateInput = {
    tutorName: string
    province: string
    image: string
    pricePerHour: number
    languageTaught?: $Enums.Language
    sex?: $Enums.SexMethod
    description?: string | null
    phoneNumber: string
    verifyed?: boolean
    technique?: string | null
    teachingMethod?: $Enums.TeachingMethod
    teachingTime?: $Enums.TeachingTime
    timeStart: string
    timeEnd: string
    availableTimes?: $Enums.TeachingTime
    user: UserCreateNestedOneWithoutTutorProfileInput
    tutorSubjects?: TutorSubjectCreateNestedManyWithoutTutorInput
    experiences?: ExperienceCreateNestedManyWithoutTutorInput
    reviews?: ReviewCreateNestedManyWithoutTutorInput
    levels?: TutorLevelCreateNestedManyWithoutTutorProfileInput
    BookingTutor?: BookingTutorCreateNestedManyWithoutAssignedTutorInput
  }

  export type TutorProfileUncheckedCreateInput = {
    id?: number
    userId: number
    tutorName: string
    province: string
    image: string
    pricePerHour: number
    languageTaught?: $Enums.Language
    sex?: $Enums.SexMethod
    description?: string | null
    phoneNumber: string
    verifyed?: boolean
    technique?: string | null
    teachingMethod?: $Enums.TeachingMethod
    teachingTime?: $Enums.TeachingTime
    timeStart: string
    timeEnd: string
    availableTimes?: $Enums.TeachingTime
    tutorSubjects?: TutorSubjectUncheckedCreateNestedManyWithoutTutorInput
    experiences?: ExperienceUncheckedCreateNestedManyWithoutTutorInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutTutorInput
    levels?: TutorLevelUncheckedCreateNestedManyWithoutTutorProfileInput
    BookingTutor?: BookingTutorUncheckedCreateNestedManyWithoutAssignedTutorInput
  }

  export type TutorProfileUpdateInput = {
    tutorName?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    pricePerHour?: IntFieldUpdateOperationsInput | number
    languageTaught?: EnumLanguageFieldUpdateOperationsInput | $Enums.Language
    sex?: EnumSexMethodFieldUpdateOperationsInput | $Enums.SexMethod
    description?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: StringFieldUpdateOperationsInput | string
    verifyed?: BoolFieldUpdateOperationsInput | boolean
    technique?: NullableStringFieldUpdateOperationsInput | string | null
    teachingMethod?: EnumTeachingMethodFieldUpdateOperationsInput | $Enums.TeachingMethod
    teachingTime?: EnumTeachingTimeFieldUpdateOperationsInput | $Enums.TeachingTime
    timeStart?: StringFieldUpdateOperationsInput | string
    timeEnd?: StringFieldUpdateOperationsInput | string
    availableTimes?: EnumTeachingTimeFieldUpdateOperationsInput | $Enums.TeachingTime
    user?: UserUpdateOneRequiredWithoutTutorProfileNestedInput
    tutorSubjects?: TutorSubjectUpdateManyWithoutTutorNestedInput
    experiences?: ExperienceUpdateManyWithoutTutorNestedInput
    reviews?: ReviewUpdateManyWithoutTutorNestedInput
    levels?: TutorLevelUpdateManyWithoutTutorProfileNestedInput
    BookingTutor?: BookingTutorUpdateManyWithoutAssignedTutorNestedInput
  }

  export type TutorProfileUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    tutorName?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    pricePerHour?: IntFieldUpdateOperationsInput | number
    languageTaught?: EnumLanguageFieldUpdateOperationsInput | $Enums.Language
    sex?: EnumSexMethodFieldUpdateOperationsInput | $Enums.SexMethod
    description?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: StringFieldUpdateOperationsInput | string
    verifyed?: BoolFieldUpdateOperationsInput | boolean
    technique?: NullableStringFieldUpdateOperationsInput | string | null
    teachingMethod?: EnumTeachingMethodFieldUpdateOperationsInput | $Enums.TeachingMethod
    teachingTime?: EnumTeachingTimeFieldUpdateOperationsInput | $Enums.TeachingTime
    timeStart?: StringFieldUpdateOperationsInput | string
    timeEnd?: StringFieldUpdateOperationsInput | string
    availableTimes?: EnumTeachingTimeFieldUpdateOperationsInput | $Enums.TeachingTime
    tutorSubjects?: TutorSubjectUncheckedUpdateManyWithoutTutorNestedInput
    experiences?: ExperienceUncheckedUpdateManyWithoutTutorNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutTutorNestedInput
    levels?: TutorLevelUncheckedUpdateManyWithoutTutorProfileNestedInput
    BookingTutor?: BookingTutorUncheckedUpdateManyWithoutAssignedTutorNestedInput
  }

  export type TutorProfileCreateManyInput = {
    id?: number
    userId: number
    tutorName: string
    province: string
    image: string
    pricePerHour: number
    languageTaught?: $Enums.Language
    sex?: $Enums.SexMethod
    description?: string | null
    phoneNumber: string
    verifyed?: boolean
    technique?: string | null
    teachingMethod?: $Enums.TeachingMethod
    teachingTime?: $Enums.TeachingTime
    timeStart: string
    timeEnd: string
    availableTimes?: $Enums.TeachingTime
  }

  export type TutorProfileUpdateManyMutationInput = {
    tutorName?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    pricePerHour?: IntFieldUpdateOperationsInput | number
    languageTaught?: EnumLanguageFieldUpdateOperationsInput | $Enums.Language
    sex?: EnumSexMethodFieldUpdateOperationsInput | $Enums.SexMethod
    description?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: StringFieldUpdateOperationsInput | string
    verifyed?: BoolFieldUpdateOperationsInput | boolean
    technique?: NullableStringFieldUpdateOperationsInput | string | null
    teachingMethod?: EnumTeachingMethodFieldUpdateOperationsInput | $Enums.TeachingMethod
    teachingTime?: EnumTeachingTimeFieldUpdateOperationsInput | $Enums.TeachingTime
    timeStart?: StringFieldUpdateOperationsInput | string
    timeEnd?: StringFieldUpdateOperationsInput | string
    availableTimes?: EnumTeachingTimeFieldUpdateOperationsInput | $Enums.TeachingTime
  }

  export type TutorProfileUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    tutorName?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    pricePerHour?: IntFieldUpdateOperationsInput | number
    languageTaught?: EnumLanguageFieldUpdateOperationsInput | $Enums.Language
    sex?: EnumSexMethodFieldUpdateOperationsInput | $Enums.SexMethod
    description?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: StringFieldUpdateOperationsInput | string
    verifyed?: BoolFieldUpdateOperationsInput | boolean
    technique?: NullableStringFieldUpdateOperationsInput | string | null
    teachingMethod?: EnumTeachingMethodFieldUpdateOperationsInput | $Enums.TeachingMethod
    teachingTime?: EnumTeachingTimeFieldUpdateOperationsInput | $Enums.TeachingTime
    timeStart?: StringFieldUpdateOperationsInput | string
    timeEnd?: StringFieldUpdateOperationsInput | string
    availableTimes?: EnumTeachingTimeFieldUpdateOperationsInput | $Enums.TeachingTime
  }

  export type TeachingLevelCreateInput = {
    name: string
    tutors?: TutorLevelCreateNestedManyWithoutTeachingLevelInput
  }

  export type TeachingLevelUncheckedCreateInput = {
    id?: number
    name: string
    tutors?: TutorLevelUncheckedCreateNestedManyWithoutTeachingLevelInput
  }

  export type TeachingLevelUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    tutors?: TutorLevelUpdateManyWithoutTeachingLevelNestedInput
  }

  export type TeachingLevelUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    tutors?: TutorLevelUncheckedUpdateManyWithoutTeachingLevelNestedInput
  }

  export type TeachingLevelCreateManyInput = {
    id?: number
    name: string
  }

  export type TeachingLevelUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type TeachingLevelUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type TutorLevelCreateInput = {
    tutorProfile: TutorProfileCreateNestedOneWithoutLevelsInput
    teachingLevel: TeachingLevelCreateNestedOneWithoutTutorsInput
  }

  export type TutorLevelUncheckedCreateInput = {
    id?: number
    tutorProfileId: number
    teachingLevelId: number
  }

  export type TutorLevelUpdateInput = {
    tutorProfile?: TutorProfileUpdateOneRequiredWithoutLevelsNestedInput
    teachingLevel?: TeachingLevelUpdateOneRequiredWithoutTutorsNestedInput
  }

  export type TutorLevelUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    tutorProfileId?: IntFieldUpdateOperationsInput | number
    teachingLevelId?: IntFieldUpdateOperationsInput | number
  }

  export type TutorLevelCreateManyInput = {
    id?: number
    tutorProfileId: number
    teachingLevelId: number
  }

  export type TutorLevelUpdateManyMutationInput = {

  }

  export type TutorLevelUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    tutorProfileId?: IntFieldUpdateOperationsInput | number
    teachingLevelId?: IntFieldUpdateOperationsInput | number
  }

  export type BookingTutorCreateInput = {
    fullName: string
    phoneNumber: string
    email?: string | null
    subjectName?: string | null
    level?: string | null
    target?: string | null
    nationalityTeacher?: string | null
    teacherSex?: $Enums.SexMethod | null
    studyingDays?: $Enums.TeachingTime | null
    studyingTimes?: string | null
    startStudyingDate?: string | null
    teachingMethod?: $Enums.TeachingMethod | null
    studyLocation?: string | null
    yourCity?: string | null
    note?: string | null
    status?: $Enums.BookingStatus | null
    createdAt?: Date | string
    updatedAt?: Date | string
    subject?: SubjectCategoryCreateNestedOneWithoutBookingTutorInput
    assignedTutor?: TutorProfileCreateNestedOneWithoutBookingTutorInput
  }

  export type BookingTutorUncheckedCreateInput = {
    id?: number
    fullName: string
    phoneNumber: string
    email?: string | null
    subjectId?: number | null
    subjectName?: string | null
    level?: string | null
    target?: string | null
    nationalityTeacher?: string | null
    teacherSex?: $Enums.SexMethod | null
    studyingDays?: $Enums.TeachingTime | null
    studyingTimes?: string | null
    startStudyingDate?: string | null
    teachingMethod?: $Enums.TeachingMethod | null
    studyLocation?: string | null
    yourCity?: string | null
    note?: string | null
    assignedTutorId?: number | null
    status?: $Enums.BookingStatus | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookingTutorUpdateInput = {
    fullName?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    subjectName?: NullableStringFieldUpdateOperationsInput | string | null
    level?: NullableStringFieldUpdateOperationsInput | string | null
    target?: NullableStringFieldUpdateOperationsInput | string | null
    nationalityTeacher?: NullableStringFieldUpdateOperationsInput | string | null
    teacherSex?: NullableEnumSexMethodFieldUpdateOperationsInput | $Enums.SexMethod | null
    studyingDays?: NullableEnumTeachingTimeFieldUpdateOperationsInput | $Enums.TeachingTime | null
    studyingTimes?: NullableStringFieldUpdateOperationsInput | string | null
    startStudyingDate?: NullableStringFieldUpdateOperationsInput | string | null
    teachingMethod?: NullableEnumTeachingMethodFieldUpdateOperationsInput | $Enums.TeachingMethod | null
    studyLocation?: NullableStringFieldUpdateOperationsInput | string | null
    yourCity?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subject?: SubjectCategoryUpdateOneWithoutBookingTutorNestedInput
    assignedTutor?: TutorProfileUpdateOneWithoutBookingTutorNestedInput
  }

  export type BookingTutorUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullName?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    subjectId?: NullableIntFieldUpdateOperationsInput | number | null
    subjectName?: NullableStringFieldUpdateOperationsInput | string | null
    level?: NullableStringFieldUpdateOperationsInput | string | null
    target?: NullableStringFieldUpdateOperationsInput | string | null
    nationalityTeacher?: NullableStringFieldUpdateOperationsInput | string | null
    teacherSex?: NullableEnumSexMethodFieldUpdateOperationsInput | $Enums.SexMethod | null
    studyingDays?: NullableEnumTeachingTimeFieldUpdateOperationsInput | $Enums.TeachingTime | null
    studyingTimes?: NullableStringFieldUpdateOperationsInput | string | null
    startStudyingDate?: NullableStringFieldUpdateOperationsInput | string | null
    teachingMethod?: NullableEnumTeachingMethodFieldUpdateOperationsInput | $Enums.TeachingMethod | null
    studyLocation?: NullableStringFieldUpdateOperationsInput | string | null
    yourCity?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    assignedTutorId?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableEnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingTutorCreateManyInput = {
    id?: number
    fullName: string
    phoneNumber: string
    email?: string | null
    subjectId?: number | null
    subjectName?: string | null
    level?: string | null
    target?: string | null
    nationalityTeacher?: string | null
    teacherSex?: $Enums.SexMethod | null
    studyingDays?: $Enums.TeachingTime | null
    studyingTimes?: string | null
    startStudyingDate?: string | null
    teachingMethod?: $Enums.TeachingMethod | null
    studyLocation?: string | null
    yourCity?: string | null
    note?: string | null
    assignedTutorId?: number | null
    status?: $Enums.BookingStatus | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookingTutorUpdateManyMutationInput = {
    fullName?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    subjectName?: NullableStringFieldUpdateOperationsInput | string | null
    level?: NullableStringFieldUpdateOperationsInput | string | null
    target?: NullableStringFieldUpdateOperationsInput | string | null
    nationalityTeacher?: NullableStringFieldUpdateOperationsInput | string | null
    teacherSex?: NullableEnumSexMethodFieldUpdateOperationsInput | $Enums.SexMethod | null
    studyingDays?: NullableEnumTeachingTimeFieldUpdateOperationsInput | $Enums.TeachingTime | null
    studyingTimes?: NullableStringFieldUpdateOperationsInput | string | null
    startStudyingDate?: NullableStringFieldUpdateOperationsInput | string | null
    teachingMethod?: NullableEnumTeachingMethodFieldUpdateOperationsInput | $Enums.TeachingMethod | null
    studyLocation?: NullableStringFieldUpdateOperationsInput | string | null
    yourCity?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingTutorUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullName?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    subjectId?: NullableIntFieldUpdateOperationsInput | number | null
    subjectName?: NullableStringFieldUpdateOperationsInput | string | null
    level?: NullableStringFieldUpdateOperationsInput | string | null
    target?: NullableStringFieldUpdateOperationsInput | string | null
    nationalityTeacher?: NullableStringFieldUpdateOperationsInput | string | null
    teacherSex?: NullableEnumSexMethodFieldUpdateOperationsInput | $Enums.SexMethod | null
    studyingDays?: NullableEnumTeachingTimeFieldUpdateOperationsInput | $Enums.TeachingTime | null
    studyingTimes?: NullableStringFieldUpdateOperationsInput | string | null
    startStudyingDate?: NullableStringFieldUpdateOperationsInput | string | null
    teachingMethod?: NullableEnumTeachingMethodFieldUpdateOperationsInput | $Enums.TeachingMethod | null
    studyLocation?: NullableStringFieldUpdateOperationsInput | string | null
    yourCity?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    assignedTutorId?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableEnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExperienceCreateInput = {
    detail: string
    tutor: TutorProfileCreateNestedOneWithoutExperiencesInput
  }

  export type ExperienceUncheckedCreateInput = {
    id?: number
    detail: string
    tutorId: number
  }

  export type ExperienceUpdateInput = {
    detail?: StringFieldUpdateOperationsInput | string
    tutor?: TutorProfileUpdateOneRequiredWithoutExperiencesNestedInput
  }

  export type ExperienceUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    detail?: StringFieldUpdateOperationsInput | string
    tutorId?: IntFieldUpdateOperationsInput | number
  }

  export type ExperienceCreateManyInput = {
    id?: number
    detail: string
    tutorId: number
  }

  export type ExperienceUpdateManyMutationInput = {
    detail?: StringFieldUpdateOperationsInput | string
  }

  export type ExperienceUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    detail?: StringFieldUpdateOperationsInput | string
    tutorId?: IntFieldUpdateOperationsInput | number
  }

  export type ReviewCreateInput = {
    comment: string
    rating: number
    createdAt?: Date | string
    tutor: TutorProfileCreateNestedOneWithoutReviewsInput
    user: UserCreateNestedOneWithoutReviewsInput
  }

  export type ReviewUncheckedCreateInput = {
    id?: number
    comment: string
    rating: number
    tutorId: number
    userId: number
    createdAt?: Date | string
  }

  export type ReviewUpdateInput = {
    comment?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tutor?: TutorProfileUpdateOneRequiredWithoutReviewsNestedInput
    user?: UserUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type ReviewUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    tutorId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewCreateManyInput = {
    id?: number
    comment: string
    rating: number
    tutorId: number
    userId: number
    createdAt?: Date | string
  }

  export type ReviewUpdateManyMutationInput = {
    comment?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    tutorId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubjectCategoryCreateInput = {
    name: string
    icon?: string | null
    tutors?: TutorSubjectCreateNestedManyWithoutCategoryInput
    BookingTutor?: BookingTutorCreateNestedManyWithoutSubjectInput
  }

  export type SubjectCategoryUncheckedCreateInput = {
    id?: number
    name: string
    icon?: string | null
    tutors?: TutorSubjectUncheckedCreateNestedManyWithoutCategoryInput
    BookingTutor?: BookingTutorUncheckedCreateNestedManyWithoutSubjectInput
  }

  export type SubjectCategoryUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    tutors?: TutorSubjectUpdateManyWithoutCategoryNestedInput
    BookingTutor?: BookingTutorUpdateManyWithoutSubjectNestedInput
  }

  export type SubjectCategoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    tutors?: TutorSubjectUncheckedUpdateManyWithoutCategoryNestedInput
    BookingTutor?: BookingTutorUncheckedUpdateManyWithoutSubjectNestedInput
  }

  export type SubjectCategoryCreateManyInput = {
    id?: number
    name: string
    icon?: string | null
  }

  export type SubjectCategoryUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SubjectCategoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TutorSubjectCreateInput = {
    tutor: TutorProfileCreateNestedOneWithoutTutorSubjectsInput
    category: SubjectCategoryCreateNestedOneWithoutTutorsInput
  }

  export type TutorSubjectUncheckedCreateInput = {
    id?: number
    tutorId: number
    categoryId: number
  }

  export type TutorSubjectUpdateInput = {
    tutor?: TutorProfileUpdateOneRequiredWithoutTutorSubjectsNestedInput
    category?: SubjectCategoryUpdateOneRequiredWithoutTutorsNestedInput
  }

  export type TutorSubjectUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    tutorId?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
  }

  export type TutorSubjectCreateManyInput = {
    id?: number
    tutorId: number
    categoryId: number
  }

  export type TutorSubjectUpdateManyMutationInput = {

  }

  export type TutorSubjectUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    tutorId?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type TutorProfileNullableScalarRelationFilter = {
    is?: TutorProfileWhereInput | null
    isNot?: TutorProfileWhereInput | null
  }

  export type ReviewListRelationFilter = {
    every?: ReviewWhereInput
    some?: ReviewWhereInput
    none?: ReviewWhereInput
  }

  export type ReviewOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumLanguageFilter<$PrismaModel = never> = {
    equals?: $Enums.Language | EnumLanguageFieldRefInput<$PrismaModel>
    in?: $Enums.Language[] | ListEnumLanguageFieldRefInput<$PrismaModel>
    notIn?: $Enums.Language[] | ListEnumLanguageFieldRefInput<$PrismaModel>
    not?: NestedEnumLanguageFilter<$PrismaModel> | $Enums.Language
  }

  export type EnumSexMethodFilter<$PrismaModel = never> = {
    equals?: $Enums.SexMethod | EnumSexMethodFieldRefInput<$PrismaModel>
    in?: $Enums.SexMethod[] | ListEnumSexMethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.SexMethod[] | ListEnumSexMethodFieldRefInput<$PrismaModel>
    not?: NestedEnumSexMethodFilter<$PrismaModel> | $Enums.SexMethod
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type EnumTeachingMethodFilter<$PrismaModel = never> = {
    equals?: $Enums.TeachingMethod | EnumTeachingMethodFieldRefInput<$PrismaModel>
    in?: $Enums.TeachingMethod[] | ListEnumTeachingMethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.TeachingMethod[] | ListEnumTeachingMethodFieldRefInput<$PrismaModel>
    not?: NestedEnumTeachingMethodFilter<$PrismaModel> | $Enums.TeachingMethod
  }

  export type EnumTeachingTimeFilter<$PrismaModel = never> = {
    equals?: $Enums.TeachingTime | EnumTeachingTimeFieldRefInput<$PrismaModel>
    in?: $Enums.TeachingTime[] | ListEnumTeachingTimeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TeachingTime[] | ListEnumTeachingTimeFieldRefInput<$PrismaModel>
    not?: NestedEnumTeachingTimeFilter<$PrismaModel> | $Enums.TeachingTime
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type TutorSubjectListRelationFilter = {
    every?: TutorSubjectWhereInput
    some?: TutorSubjectWhereInput
    none?: TutorSubjectWhereInput
  }

  export type ExperienceListRelationFilter = {
    every?: ExperienceWhereInput
    some?: ExperienceWhereInput
    none?: ExperienceWhereInput
  }

  export type TutorLevelListRelationFilter = {
    every?: TutorLevelWhereInput
    some?: TutorLevelWhereInput
    none?: TutorLevelWhereInput
  }

  export type BookingTutorListRelationFilter = {
    every?: BookingTutorWhereInput
    some?: BookingTutorWhereInput
    none?: BookingTutorWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type TutorSubjectOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ExperienceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TutorLevelOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BookingTutorOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TutorProfileCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    tutorName?: SortOrder
    province?: SortOrder
    image?: SortOrder
    pricePerHour?: SortOrder
    languageTaught?: SortOrder
    sex?: SortOrder
    description?: SortOrder
    phoneNumber?: SortOrder
    verifyed?: SortOrder
    technique?: SortOrder
    teachingMethod?: SortOrder
    teachingTime?: SortOrder
    timeStart?: SortOrder
    timeEnd?: SortOrder
    availableTimes?: SortOrder
  }

  export type TutorProfileAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    pricePerHour?: SortOrder
  }

  export type TutorProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    tutorName?: SortOrder
    province?: SortOrder
    image?: SortOrder
    pricePerHour?: SortOrder
    languageTaught?: SortOrder
    sex?: SortOrder
    description?: SortOrder
    phoneNumber?: SortOrder
    verifyed?: SortOrder
    technique?: SortOrder
    teachingMethod?: SortOrder
    teachingTime?: SortOrder
    timeStart?: SortOrder
    timeEnd?: SortOrder
    availableTimes?: SortOrder
  }

  export type TutorProfileMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    tutorName?: SortOrder
    province?: SortOrder
    image?: SortOrder
    pricePerHour?: SortOrder
    languageTaught?: SortOrder
    sex?: SortOrder
    description?: SortOrder
    phoneNumber?: SortOrder
    verifyed?: SortOrder
    technique?: SortOrder
    teachingMethod?: SortOrder
    teachingTime?: SortOrder
    timeStart?: SortOrder
    timeEnd?: SortOrder
    availableTimes?: SortOrder
  }

  export type TutorProfileSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    pricePerHour?: SortOrder
  }

  export type EnumLanguageWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Language | EnumLanguageFieldRefInput<$PrismaModel>
    in?: $Enums.Language[] | ListEnumLanguageFieldRefInput<$PrismaModel>
    notIn?: $Enums.Language[] | ListEnumLanguageFieldRefInput<$PrismaModel>
    not?: NestedEnumLanguageWithAggregatesFilter<$PrismaModel> | $Enums.Language
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLanguageFilter<$PrismaModel>
    _max?: NestedEnumLanguageFilter<$PrismaModel>
  }

  export type EnumSexMethodWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SexMethod | EnumSexMethodFieldRefInput<$PrismaModel>
    in?: $Enums.SexMethod[] | ListEnumSexMethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.SexMethod[] | ListEnumSexMethodFieldRefInput<$PrismaModel>
    not?: NestedEnumSexMethodWithAggregatesFilter<$PrismaModel> | $Enums.SexMethod
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSexMethodFilter<$PrismaModel>
    _max?: NestedEnumSexMethodFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumTeachingMethodWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TeachingMethod | EnumTeachingMethodFieldRefInput<$PrismaModel>
    in?: $Enums.TeachingMethod[] | ListEnumTeachingMethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.TeachingMethod[] | ListEnumTeachingMethodFieldRefInput<$PrismaModel>
    not?: NestedEnumTeachingMethodWithAggregatesFilter<$PrismaModel> | $Enums.TeachingMethod
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTeachingMethodFilter<$PrismaModel>
    _max?: NestedEnumTeachingMethodFilter<$PrismaModel>
  }

  export type EnumTeachingTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TeachingTime | EnumTeachingTimeFieldRefInput<$PrismaModel>
    in?: $Enums.TeachingTime[] | ListEnumTeachingTimeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TeachingTime[] | ListEnumTeachingTimeFieldRefInput<$PrismaModel>
    not?: NestedEnumTeachingTimeWithAggregatesFilter<$PrismaModel> | $Enums.TeachingTime
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTeachingTimeFilter<$PrismaModel>
    _max?: NestedEnumTeachingTimeFilter<$PrismaModel>
  }

  export type TeachingLevelCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type TeachingLevelAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TeachingLevelMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type TeachingLevelMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type TeachingLevelSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TutorProfileScalarRelationFilter = {
    is?: TutorProfileWhereInput
    isNot?: TutorProfileWhereInput
  }

  export type TeachingLevelScalarRelationFilter = {
    is?: TeachingLevelWhereInput
    isNot?: TeachingLevelWhereInput
  }

  export type TutorLevelTutorProfileIdTeachingLevelIdCompoundUniqueInput = {
    tutorProfileId: number
    teachingLevelId: number
  }

  export type TutorLevelCountOrderByAggregateInput = {
    id?: SortOrder
    tutorProfileId?: SortOrder
    teachingLevelId?: SortOrder
  }

  export type TutorLevelAvgOrderByAggregateInput = {
    id?: SortOrder
    tutorProfileId?: SortOrder
    teachingLevelId?: SortOrder
  }

  export type TutorLevelMaxOrderByAggregateInput = {
    id?: SortOrder
    tutorProfileId?: SortOrder
    teachingLevelId?: SortOrder
  }

  export type TutorLevelMinOrderByAggregateInput = {
    id?: SortOrder
    tutorProfileId?: SortOrder
    teachingLevelId?: SortOrder
  }

  export type TutorLevelSumOrderByAggregateInput = {
    id?: SortOrder
    tutorProfileId?: SortOrder
    teachingLevelId?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type EnumSexMethodNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.SexMethod | EnumSexMethodFieldRefInput<$PrismaModel> | null
    in?: $Enums.SexMethod[] | ListEnumSexMethodFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.SexMethod[] | ListEnumSexMethodFieldRefInput<$PrismaModel> | null
    not?: NestedEnumSexMethodNullableFilter<$PrismaModel> | $Enums.SexMethod | null
  }

  export type EnumTeachingTimeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.TeachingTime | EnumTeachingTimeFieldRefInput<$PrismaModel> | null
    in?: $Enums.TeachingTime[] | ListEnumTeachingTimeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.TeachingTime[] | ListEnumTeachingTimeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumTeachingTimeNullableFilter<$PrismaModel> | $Enums.TeachingTime | null
  }

  export type EnumTeachingMethodNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.TeachingMethod | EnumTeachingMethodFieldRefInput<$PrismaModel> | null
    in?: $Enums.TeachingMethod[] | ListEnumTeachingMethodFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.TeachingMethod[] | ListEnumTeachingMethodFieldRefInput<$PrismaModel> | null
    not?: NestedEnumTeachingMethodNullableFilter<$PrismaModel> | $Enums.TeachingMethod | null
  }

  export type EnumBookingStatusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.BookingStatus | EnumBookingStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumBookingStatusNullableFilter<$PrismaModel> | $Enums.BookingStatus | null
  }

  export type SubjectCategoryNullableScalarRelationFilter = {
    is?: SubjectCategoryWhereInput | null
    isNot?: SubjectCategoryWhereInput | null
  }

  export type BookingTutorCountOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    phoneNumber?: SortOrder
    email?: SortOrder
    subjectId?: SortOrder
    subjectName?: SortOrder
    level?: SortOrder
    target?: SortOrder
    nationalityTeacher?: SortOrder
    teacherSex?: SortOrder
    studyingDays?: SortOrder
    studyingTimes?: SortOrder
    startStudyingDate?: SortOrder
    teachingMethod?: SortOrder
    studyLocation?: SortOrder
    yourCity?: SortOrder
    note?: SortOrder
    assignedTutorId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BookingTutorAvgOrderByAggregateInput = {
    id?: SortOrder
    subjectId?: SortOrder
    assignedTutorId?: SortOrder
  }

  export type BookingTutorMaxOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    phoneNumber?: SortOrder
    email?: SortOrder
    subjectId?: SortOrder
    subjectName?: SortOrder
    level?: SortOrder
    target?: SortOrder
    nationalityTeacher?: SortOrder
    teacherSex?: SortOrder
    studyingDays?: SortOrder
    studyingTimes?: SortOrder
    startStudyingDate?: SortOrder
    teachingMethod?: SortOrder
    studyLocation?: SortOrder
    yourCity?: SortOrder
    note?: SortOrder
    assignedTutorId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BookingTutorMinOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    phoneNumber?: SortOrder
    email?: SortOrder
    subjectId?: SortOrder
    subjectName?: SortOrder
    level?: SortOrder
    target?: SortOrder
    nationalityTeacher?: SortOrder
    teacherSex?: SortOrder
    studyingDays?: SortOrder
    studyingTimes?: SortOrder
    startStudyingDate?: SortOrder
    teachingMethod?: SortOrder
    studyLocation?: SortOrder
    yourCity?: SortOrder
    note?: SortOrder
    assignedTutorId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BookingTutorSumOrderByAggregateInput = {
    id?: SortOrder
    subjectId?: SortOrder
    assignedTutorId?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type EnumSexMethodNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SexMethod | EnumSexMethodFieldRefInput<$PrismaModel> | null
    in?: $Enums.SexMethod[] | ListEnumSexMethodFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.SexMethod[] | ListEnumSexMethodFieldRefInput<$PrismaModel> | null
    not?: NestedEnumSexMethodNullableWithAggregatesFilter<$PrismaModel> | $Enums.SexMethod | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumSexMethodNullableFilter<$PrismaModel>
    _max?: NestedEnumSexMethodNullableFilter<$PrismaModel>
  }

  export type EnumTeachingTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TeachingTime | EnumTeachingTimeFieldRefInput<$PrismaModel> | null
    in?: $Enums.TeachingTime[] | ListEnumTeachingTimeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.TeachingTime[] | ListEnumTeachingTimeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumTeachingTimeNullableWithAggregatesFilter<$PrismaModel> | $Enums.TeachingTime | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumTeachingTimeNullableFilter<$PrismaModel>
    _max?: NestedEnumTeachingTimeNullableFilter<$PrismaModel>
  }

  export type EnumTeachingMethodNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TeachingMethod | EnumTeachingMethodFieldRefInput<$PrismaModel> | null
    in?: $Enums.TeachingMethod[] | ListEnumTeachingMethodFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.TeachingMethod[] | ListEnumTeachingMethodFieldRefInput<$PrismaModel> | null
    not?: NestedEnumTeachingMethodNullableWithAggregatesFilter<$PrismaModel> | $Enums.TeachingMethod | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumTeachingMethodNullableFilter<$PrismaModel>
    _max?: NestedEnumTeachingMethodNullableFilter<$PrismaModel>
  }

  export type EnumBookingStatusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BookingStatus | EnumBookingStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumBookingStatusNullableWithAggregatesFilter<$PrismaModel> | $Enums.BookingStatus | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumBookingStatusNullableFilter<$PrismaModel>
    _max?: NestedEnumBookingStatusNullableFilter<$PrismaModel>
  }

  export type ExperienceCountOrderByAggregateInput = {
    id?: SortOrder
    detail?: SortOrder
    tutorId?: SortOrder
  }

  export type ExperienceAvgOrderByAggregateInput = {
    id?: SortOrder
    tutorId?: SortOrder
  }

  export type ExperienceMaxOrderByAggregateInput = {
    id?: SortOrder
    detail?: SortOrder
    tutorId?: SortOrder
  }

  export type ExperienceMinOrderByAggregateInput = {
    id?: SortOrder
    detail?: SortOrder
    tutorId?: SortOrder
  }

  export type ExperienceSumOrderByAggregateInput = {
    id?: SortOrder
    tutorId?: SortOrder
  }

  export type ReviewCountOrderByAggregateInput = {
    id?: SortOrder
    comment?: SortOrder
    rating?: SortOrder
    tutorId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type ReviewAvgOrderByAggregateInput = {
    id?: SortOrder
    rating?: SortOrder
    tutorId?: SortOrder
    userId?: SortOrder
  }

  export type ReviewMaxOrderByAggregateInput = {
    id?: SortOrder
    comment?: SortOrder
    rating?: SortOrder
    tutorId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type ReviewMinOrderByAggregateInput = {
    id?: SortOrder
    comment?: SortOrder
    rating?: SortOrder
    tutorId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type ReviewSumOrderByAggregateInput = {
    id?: SortOrder
    rating?: SortOrder
    tutorId?: SortOrder
    userId?: SortOrder
  }

  export type SubjectCategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    icon?: SortOrder
  }

  export type SubjectCategoryAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SubjectCategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    icon?: SortOrder
  }

  export type SubjectCategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    icon?: SortOrder
  }

  export type SubjectCategorySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SubjectCategoryScalarRelationFilter = {
    is?: SubjectCategoryWhereInput
    isNot?: SubjectCategoryWhereInput
  }

  export type TutorSubjectCountOrderByAggregateInput = {
    id?: SortOrder
    tutorId?: SortOrder
    categoryId?: SortOrder
  }

  export type TutorSubjectAvgOrderByAggregateInput = {
    id?: SortOrder
    tutorId?: SortOrder
    categoryId?: SortOrder
  }

  export type TutorSubjectMaxOrderByAggregateInput = {
    id?: SortOrder
    tutorId?: SortOrder
    categoryId?: SortOrder
  }

  export type TutorSubjectMinOrderByAggregateInput = {
    id?: SortOrder
    tutorId?: SortOrder
    categoryId?: SortOrder
  }

  export type TutorSubjectSumOrderByAggregateInput = {
    id?: SortOrder
    tutorId?: SortOrder
    categoryId?: SortOrder
  }

  export type TutorProfileCreateNestedOneWithoutUserInput = {
    create?: XOR<TutorProfileCreateWithoutUserInput, TutorProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: TutorProfileCreateOrConnectWithoutUserInput
    connect?: TutorProfileWhereUniqueInput
  }

  export type ReviewCreateNestedManyWithoutUserInput = {
    create?: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput> | ReviewCreateWithoutUserInput[] | ReviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutUserInput | ReviewCreateOrConnectWithoutUserInput[]
    createMany?: ReviewCreateManyUserInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type TutorProfileUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<TutorProfileCreateWithoutUserInput, TutorProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: TutorProfileCreateOrConnectWithoutUserInput
    connect?: TutorProfileWhereUniqueInput
  }

  export type ReviewUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput> | ReviewCreateWithoutUserInput[] | ReviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutUserInput | ReviewCreateOrConnectWithoutUserInput[]
    createMany?: ReviewCreateManyUserInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type TutorProfileUpdateOneWithoutUserNestedInput = {
    create?: XOR<TutorProfileCreateWithoutUserInput, TutorProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: TutorProfileCreateOrConnectWithoutUserInput
    upsert?: TutorProfileUpsertWithoutUserInput
    disconnect?: TutorProfileWhereInput | boolean
    delete?: TutorProfileWhereInput | boolean
    connect?: TutorProfileWhereUniqueInput
    update?: XOR<XOR<TutorProfileUpdateToOneWithWhereWithoutUserInput, TutorProfileUpdateWithoutUserInput>, TutorProfileUncheckedUpdateWithoutUserInput>
  }

  export type ReviewUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput> | ReviewCreateWithoutUserInput[] | ReviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutUserInput | ReviewCreateOrConnectWithoutUserInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutUserInput | ReviewUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReviewCreateManyUserInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutUserInput | ReviewUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutUserInput | ReviewUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TutorProfileUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<TutorProfileCreateWithoutUserInput, TutorProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: TutorProfileCreateOrConnectWithoutUserInput
    upsert?: TutorProfileUpsertWithoutUserInput
    disconnect?: TutorProfileWhereInput | boolean
    delete?: TutorProfileWhereInput | boolean
    connect?: TutorProfileWhereUniqueInput
    update?: XOR<XOR<TutorProfileUpdateToOneWithWhereWithoutUserInput, TutorProfileUpdateWithoutUserInput>, TutorProfileUncheckedUpdateWithoutUserInput>
  }

  export type ReviewUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput> | ReviewCreateWithoutUserInput[] | ReviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutUserInput | ReviewCreateOrConnectWithoutUserInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutUserInput | ReviewUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReviewCreateManyUserInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutUserInput | ReviewUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutUserInput | ReviewUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutTutorProfileInput = {
    create?: XOR<UserCreateWithoutTutorProfileInput, UserUncheckedCreateWithoutTutorProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutTutorProfileInput
    connect?: UserWhereUniqueInput
  }

  export type TutorSubjectCreateNestedManyWithoutTutorInput = {
    create?: XOR<TutorSubjectCreateWithoutTutorInput, TutorSubjectUncheckedCreateWithoutTutorInput> | TutorSubjectCreateWithoutTutorInput[] | TutorSubjectUncheckedCreateWithoutTutorInput[]
    connectOrCreate?: TutorSubjectCreateOrConnectWithoutTutorInput | TutorSubjectCreateOrConnectWithoutTutorInput[]
    createMany?: TutorSubjectCreateManyTutorInputEnvelope
    connect?: TutorSubjectWhereUniqueInput | TutorSubjectWhereUniqueInput[]
  }

  export type ExperienceCreateNestedManyWithoutTutorInput = {
    create?: XOR<ExperienceCreateWithoutTutorInput, ExperienceUncheckedCreateWithoutTutorInput> | ExperienceCreateWithoutTutorInput[] | ExperienceUncheckedCreateWithoutTutorInput[]
    connectOrCreate?: ExperienceCreateOrConnectWithoutTutorInput | ExperienceCreateOrConnectWithoutTutorInput[]
    createMany?: ExperienceCreateManyTutorInputEnvelope
    connect?: ExperienceWhereUniqueInput | ExperienceWhereUniqueInput[]
  }

  export type ReviewCreateNestedManyWithoutTutorInput = {
    create?: XOR<ReviewCreateWithoutTutorInput, ReviewUncheckedCreateWithoutTutorInput> | ReviewCreateWithoutTutorInput[] | ReviewUncheckedCreateWithoutTutorInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutTutorInput | ReviewCreateOrConnectWithoutTutorInput[]
    createMany?: ReviewCreateManyTutorInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type TutorLevelCreateNestedManyWithoutTutorProfileInput = {
    create?: XOR<TutorLevelCreateWithoutTutorProfileInput, TutorLevelUncheckedCreateWithoutTutorProfileInput> | TutorLevelCreateWithoutTutorProfileInput[] | TutorLevelUncheckedCreateWithoutTutorProfileInput[]
    connectOrCreate?: TutorLevelCreateOrConnectWithoutTutorProfileInput | TutorLevelCreateOrConnectWithoutTutorProfileInput[]
    createMany?: TutorLevelCreateManyTutorProfileInputEnvelope
    connect?: TutorLevelWhereUniqueInput | TutorLevelWhereUniqueInput[]
  }

  export type BookingTutorCreateNestedManyWithoutAssignedTutorInput = {
    create?: XOR<BookingTutorCreateWithoutAssignedTutorInput, BookingTutorUncheckedCreateWithoutAssignedTutorInput> | BookingTutorCreateWithoutAssignedTutorInput[] | BookingTutorUncheckedCreateWithoutAssignedTutorInput[]
    connectOrCreate?: BookingTutorCreateOrConnectWithoutAssignedTutorInput | BookingTutorCreateOrConnectWithoutAssignedTutorInput[]
    createMany?: BookingTutorCreateManyAssignedTutorInputEnvelope
    connect?: BookingTutorWhereUniqueInput | BookingTutorWhereUniqueInput[]
  }

  export type TutorSubjectUncheckedCreateNestedManyWithoutTutorInput = {
    create?: XOR<TutorSubjectCreateWithoutTutorInput, TutorSubjectUncheckedCreateWithoutTutorInput> | TutorSubjectCreateWithoutTutorInput[] | TutorSubjectUncheckedCreateWithoutTutorInput[]
    connectOrCreate?: TutorSubjectCreateOrConnectWithoutTutorInput | TutorSubjectCreateOrConnectWithoutTutorInput[]
    createMany?: TutorSubjectCreateManyTutorInputEnvelope
    connect?: TutorSubjectWhereUniqueInput | TutorSubjectWhereUniqueInput[]
  }

  export type ExperienceUncheckedCreateNestedManyWithoutTutorInput = {
    create?: XOR<ExperienceCreateWithoutTutorInput, ExperienceUncheckedCreateWithoutTutorInput> | ExperienceCreateWithoutTutorInput[] | ExperienceUncheckedCreateWithoutTutorInput[]
    connectOrCreate?: ExperienceCreateOrConnectWithoutTutorInput | ExperienceCreateOrConnectWithoutTutorInput[]
    createMany?: ExperienceCreateManyTutorInputEnvelope
    connect?: ExperienceWhereUniqueInput | ExperienceWhereUniqueInput[]
  }

  export type ReviewUncheckedCreateNestedManyWithoutTutorInput = {
    create?: XOR<ReviewCreateWithoutTutorInput, ReviewUncheckedCreateWithoutTutorInput> | ReviewCreateWithoutTutorInput[] | ReviewUncheckedCreateWithoutTutorInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutTutorInput | ReviewCreateOrConnectWithoutTutorInput[]
    createMany?: ReviewCreateManyTutorInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type TutorLevelUncheckedCreateNestedManyWithoutTutorProfileInput = {
    create?: XOR<TutorLevelCreateWithoutTutorProfileInput, TutorLevelUncheckedCreateWithoutTutorProfileInput> | TutorLevelCreateWithoutTutorProfileInput[] | TutorLevelUncheckedCreateWithoutTutorProfileInput[]
    connectOrCreate?: TutorLevelCreateOrConnectWithoutTutorProfileInput | TutorLevelCreateOrConnectWithoutTutorProfileInput[]
    createMany?: TutorLevelCreateManyTutorProfileInputEnvelope
    connect?: TutorLevelWhereUniqueInput | TutorLevelWhereUniqueInput[]
  }

  export type BookingTutorUncheckedCreateNestedManyWithoutAssignedTutorInput = {
    create?: XOR<BookingTutorCreateWithoutAssignedTutorInput, BookingTutorUncheckedCreateWithoutAssignedTutorInput> | BookingTutorCreateWithoutAssignedTutorInput[] | BookingTutorUncheckedCreateWithoutAssignedTutorInput[]
    connectOrCreate?: BookingTutorCreateOrConnectWithoutAssignedTutorInput | BookingTutorCreateOrConnectWithoutAssignedTutorInput[]
    createMany?: BookingTutorCreateManyAssignedTutorInputEnvelope
    connect?: BookingTutorWhereUniqueInput | BookingTutorWhereUniqueInput[]
  }

  export type EnumLanguageFieldUpdateOperationsInput = {
    set?: $Enums.Language
  }

  export type EnumSexMethodFieldUpdateOperationsInput = {
    set?: $Enums.SexMethod
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type EnumTeachingMethodFieldUpdateOperationsInput = {
    set?: $Enums.TeachingMethod
  }

  export type EnumTeachingTimeFieldUpdateOperationsInput = {
    set?: $Enums.TeachingTime
  }

  export type UserUpdateOneRequiredWithoutTutorProfileNestedInput = {
    create?: XOR<UserCreateWithoutTutorProfileInput, UserUncheckedCreateWithoutTutorProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutTutorProfileInput
    upsert?: UserUpsertWithoutTutorProfileInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTutorProfileInput, UserUpdateWithoutTutorProfileInput>, UserUncheckedUpdateWithoutTutorProfileInput>
  }

  export type TutorSubjectUpdateManyWithoutTutorNestedInput = {
    create?: XOR<TutorSubjectCreateWithoutTutorInput, TutorSubjectUncheckedCreateWithoutTutorInput> | TutorSubjectCreateWithoutTutorInput[] | TutorSubjectUncheckedCreateWithoutTutorInput[]
    connectOrCreate?: TutorSubjectCreateOrConnectWithoutTutorInput | TutorSubjectCreateOrConnectWithoutTutorInput[]
    upsert?: TutorSubjectUpsertWithWhereUniqueWithoutTutorInput | TutorSubjectUpsertWithWhereUniqueWithoutTutorInput[]
    createMany?: TutorSubjectCreateManyTutorInputEnvelope
    set?: TutorSubjectWhereUniqueInput | TutorSubjectWhereUniqueInput[]
    disconnect?: TutorSubjectWhereUniqueInput | TutorSubjectWhereUniqueInput[]
    delete?: TutorSubjectWhereUniqueInput | TutorSubjectWhereUniqueInput[]
    connect?: TutorSubjectWhereUniqueInput | TutorSubjectWhereUniqueInput[]
    update?: TutorSubjectUpdateWithWhereUniqueWithoutTutorInput | TutorSubjectUpdateWithWhereUniqueWithoutTutorInput[]
    updateMany?: TutorSubjectUpdateManyWithWhereWithoutTutorInput | TutorSubjectUpdateManyWithWhereWithoutTutorInput[]
    deleteMany?: TutorSubjectScalarWhereInput | TutorSubjectScalarWhereInput[]
  }

  export type ExperienceUpdateManyWithoutTutorNestedInput = {
    create?: XOR<ExperienceCreateWithoutTutorInput, ExperienceUncheckedCreateWithoutTutorInput> | ExperienceCreateWithoutTutorInput[] | ExperienceUncheckedCreateWithoutTutorInput[]
    connectOrCreate?: ExperienceCreateOrConnectWithoutTutorInput | ExperienceCreateOrConnectWithoutTutorInput[]
    upsert?: ExperienceUpsertWithWhereUniqueWithoutTutorInput | ExperienceUpsertWithWhereUniqueWithoutTutorInput[]
    createMany?: ExperienceCreateManyTutorInputEnvelope
    set?: ExperienceWhereUniqueInput | ExperienceWhereUniqueInput[]
    disconnect?: ExperienceWhereUniqueInput | ExperienceWhereUniqueInput[]
    delete?: ExperienceWhereUniqueInput | ExperienceWhereUniqueInput[]
    connect?: ExperienceWhereUniqueInput | ExperienceWhereUniqueInput[]
    update?: ExperienceUpdateWithWhereUniqueWithoutTutorInput | ExperienceUpdateWithWhereUniqueWithoutTutorInput[]
    updateMany?: ExperienceUpdateManyWithWhereWithoutTutorInput | ExperienceUpdateManyWithWhereWithoutTutorInput[]
    deleteMany?: ExperienceScalarWhereInput | ExperienceScalarWhereInput[]
  }

  export type ReviewUpdateManyWithoutTutorNestedInput = {
    create?: XOR<ReviewCreateWithoutTutorInput, ReviewUncheckedCreateWithoutTutorInput> | ReviewCreateWithoutTutorInput[] | ReviewUncheckedCreateWithoutTutorInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutTutorInput | ReviewCreateOrConnectWithoutTutorInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutTutorInput | ReviewUpsertWithWhereUniqueWithoutTutorInput[]
    createMany?: ReviewCreateManyTutorInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutTutorInput | ReviewUpdateWithWhereUniqueWithoutTutorInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutTutorInput | ReviewUpdateManyWithWhereWithoutTutorInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type TutorLevelUpdateManyWithoutTutorProfileNestedInput = {
    create?: XOR<TutorLevelCreateWithoutTutorProfileInput, TutorLevelUncheckedCreateWithoutTutorProfileInput> | TutorLevelCreateWithoutTutorProfileInput[] | TutorLevelUncheckedCreateWithoutTutorProfileInput[]
    connectOrCreate?: TutorLevelCreateOrConnectWithoutTutorProfileInput | TutorLevelCreateOrConnectWithoutTutorProfileInput[]
    upsert?: TutorLevelUpsertWithWhereUniqueWithoutTutorProfileInput | TutorLevelUpsertWithWhereUniqueWithoutTutorProfileInput[]
    createMany?: TutorLevelCreateManyTutorProfileInputEnvelope
    set?: TutorLevelWhereUniqueInput | TutorLevelWhereUniqueInput[]
    disconnect?: TutorLevelWhereUniqueInput | TutorLevelWhereUniqueInput[]
    delete?: TutorLevelWhereUniqueInput | TutorLevelWhereUniqueInput[]
    connect?: TutorLevelWhereUniqueInput | TutorLevelWhereUniqueInput[]
    update?: TutorLevelUpdateWithWhereUniqueWithoutTutorProfileInput | TutorLevelUpdateWithWhereUniqueWithoutTutorProfileInput[]
    updateMany?: TutorLevelUpdateManyWithWhereWithoutTutorProfileInput | TutorLevelUpdateManyWithWhereWithoutTutorProfileInput[]
    deleteMany?: TutorLevelScalarWhereInput | TutorLevelScalarWhereInput[]
  }

  export type BookingTutorUpdateManyWithoutAssignedTutorNestedInput = {
    create?: XOR<BookingTutorCreateWithoutAssignedTutorInput, BookingTutorUncheckedCreateWithoutAssignedTutorInput> | BookingTutorCreateWithoutAssignedTutorInput[] | BookingTutorUncheckedCreateWithoutAssignedTutorInput[]
    connectOrCreate?: BookingTutorCreateOrConnectWithoutAssignedTutorInput | BookingTutorCreateOrConnectWithoutAssignedTutorInput[]
    upsert?: BookingTutorUpsertWithWhereUniqueWithoutAssignedTutorInput | BookingTutorUpsertWithWhereUniqueWithoutAssignedTutorInput[]
    createMany?: BookingTutorCreateManyAssignedTutorInputEnvelope
    set?: BookingTutorWhereUniqueInput | BookingTutorWhereUniqueInput[]
    disconnect?: BookingTutorWhereUniqueInput | BookingTutorWhereUniqueInput[]
    delete?: BookingTutorWhereUniqueInput | BookingTutorWhereUniqueInput[]
    connect?: BookingTutorWhereUniqueInput | BookingTutorWhereUniqueInput[]
    update?: BookingTutorUpdateWithWhereUniqueWithoutAssignedTutorInput | BookingTutorUpdateWithWhereUniqueWithoutAssignedTutorInput[]
    updateMany?: BookingTutorUpdateManyWithWhereWithoutAssignedTutorInput | BookingTutorUpdateManyWithWhereWithoutAssignedTutorInput[]
    deleteMany?: BookingTutorScalarWhereInput | BookingTutorScalarWhereInput[]
  }

  export type TutorSubjectUncheckedUpdateManyWithoutTutorNestedInput = {
    create?: XOR<TutorSubjectCreateWithoutTutorInput, TutorSubjectUncheckedCreateWithoutTutorInput> | TutorSubjectCreateWithoutTutorInput[] | TutorSubjectUncheckedCreateWithoutTutorInput[]
    connectOrCreate?: TutorSubjectCreateOrConnectWithoutTutorInput | TutorSubjectCreateOrConnectWithoutTutorInput[]
    upsert?: TutorSubjectUpsertWithWhereUniqueWithoutTutorInput | TutorSubjectUpsertWithWhereUniqueWithoutTutorInput[]
    createMany?: TutorSubjectCreateManyTutorInputEnvelope
    set?: TutorSubjectWhereUniqueInput | TutorSubjectWhereUniqueInput[]
    disconnect?: TutorSubjectWhereUniqueInput | TutorSubjectWhereUniqueInput[]
    delete?: TutorSubjectWhereUniqueInput | TutorSubjectWhereUniqueInput[]
    connect?: TutorSubjectWhereUniqueInput | TutorSubjectWhereUniqueInput[]
    update?: TutorSubjectUpdateWithWhereUniqueWithoutTutorInput | TutorSubjectUpdateWithWhereUniqueWithoutTutorInput[]
    updateMany?: TutorSubjectUpdateManyWithWhereWithoutTutorInput | TutorSubjectUpdateManyWithWhereWithoutTutorInput[]
    deleteMany?: TutorSubjectScalarWhereInput | TutorSubjectScalarWhereInput[]
  }

  export type ExperienceUncheckedUpdateManyWithoutTutorNestedInput = {
    create?: XOR<ExperienceCreateWithoutTutorInput, ExperienceUncheckedCreateWithoutTutorInput> | ExperienceCreateWithoutTutorInput[] | ExperienceUncheckedCreateWithoutTutorInput[]
    connectOrCreate?: ExperienceCreateOrConnectWithoutTutorInput | ExperienceCreateOrConnectWithoutTutorInput[]
    upsert?: ExperienceUpsertWithWhereUniqueWithoutTutorInput | ExperienceUpsertWithWhereUniqueWithoutTutorInput[]
    createMany?: ExperienceCreateManyTutorInputEnvelope
    set?: ExperienceWhereUniqueInput | ExperienceWhereUniqueInput[]
    disconnect?: ExperienceWhereUniqueInput | ExperienceWhereUniqueInput[]
    delete?: ExperienceWhereUniqueInput | ExperienceWhereUniqueInput[]
    connect?: ExperienceWhereUniqueInput | ExperienceWhereUniqueInput[]
    update?: ExperienceUpdateWithWhereUniqueWithoutTutorInput | ExperienceUpdateWithWhereUniqueWithoutTutorInput[]
    updateMany?: ExperienceUpdateManyWithWhereWithoutTutorInput | ExperienceUpdateManyWithWhereWithoutTutorInput[]
    deleteMany?: ExperienceScalarWhereInput | ExperienceScalarWhereInput[]
  }

  export type ReviewUncheckedUpdateManyWithoutTutorNestedInput = {
    create?: XOR<ReviewCreateWithoutTutorInput, ReviewUncheckedCreateWithoutTutorInput> | ReviewCreateWithoutTutorInput[] | ReviewUncheckedCreateWithoutTutorInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutTutorInput | ReviewCreateOrConnectWithoutTutorInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutTutorInput | ReviewUpsertWithWhereUniqueWithoutTutorInput[]
    createMany?: ReviewCreateManyTutorInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutTutorInput | ReviewUpdateWithWhereUniqueWithoutTutorInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutTutorInput | ReviewUpdateManyWithWhereWithoutTutorInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type TutorLevelUncheckedUpdateManyWithoutTutorProfileNestedInput = {
    create?: XOR<TutorLevelCreateWithoutTutorProfileInput, TutorLevelUncheckedCreateWithoutTutorProfileInput> | TutorLevelCreateWithoutTutorProfileInput[] | TutorLevelUncheckedCreateWithoutTutorProfileInput[]
    connectOrCreate?: TutorLevelCreateOrConnectWithoutTutorProfileInput | TutorLevelCreateOrConnectWithoutTutorProfileInput[]
    upsert?: TutorLevelUpsertWithWhereUniqueWithoutTutorProfileInput | TutorLevelUpsertWithWhereUniqueWithoutTutorProfileInput[]
    createMany?: TutorLevelCreateManyTutorProfileInputEnvelope
    set?: TutorLevelWhereUniqueInput | TutorLevelWhereUniqueInput[]
    disconnect?: TutorLevelWhereUniqueInput | TutorLevelWhereUniqueInput[]
    delete?: TutorLevelWhereUniqueInput | TutorLevelWhereUniqueInput[]
    connect?: TutorLevelWhereUniqueInput | TutorLevelWhereUniqueInput[]
    update?: TutorLevelUpdateWithWhereUniqueWithoutTutorProfileInput | TutorLevelUpdateWithWhereUniqueWithoutTutorProfileInput[]
    updateMany?: TutorLevelUpdateManyWithWhereWithoutTutorProfileInput | TutorLevelUpdateManyWithWhereWithoutTutorProfileInput[]
    deleteMany?: TutorLevelScalarWhereInput | TutorLevelScalarWhereInput[]
  }

  export type BookingTutorUncheckedUpdateManyWithoutAssignedTutorNestedInput = {
    create?: XOR<BookingTutorCreateWithoutAssignedTutorInput, BookingTutorUncheckedCreateWithoutAssignedTutorInput> | BookingTutorCreateWithoutAssignedTutorInput[] | BookingTutorUncheckedCreateWithoutAssignedTutorInput[]
    connectOrCreate?: BookingTutorCreateOrConnectWithoutAssignedTutorInput | BookingTutorCreateOrConnectWithoutAssignedTutorInput[]
    upsert?: BookingTutorUpsertWithWhereUniqueWithoutAssignedTutorInput | BookingTutorUpsertWithWhereUniqueWithoutAssignedTutorInput[]
    createMany?: BookingTutorCreateManyAssignedTutorInputEnvelope
    set?: BookingTutorWhereUniqueInput | BookingTutorWhereUniqueInput[]
    disconnect?: BookingTutorWhereUniqueInput | BookingTutorWhereUniqueInput[]
    delete?: BookingTutorWhereUniqueInput | BookingTutorWhereUniqueInput[]
    connect?: BookingTutorWhereUniqueInput | BookingTutorWhereUniqueInput[]
    update?: BookingTutorUpdateWithWhereUniqueWithoutAssignedTutorInput | BookingTutorUpdateWithWhereUniqueWithoutAssignedTutorInput[]
    updateMany?: BookingTutorUpdateManyWithWhereWithoutAssignedTutorInput | BookingTutorUpdateManyWithWhereWithoutAssignedTutorInput[]
    deleteMany?: BookingTutorScalarWhereInput | BookingTutorScalarWhereInput[]
  }

  export type TutorLevelCreateNestedManyWithoutTeachingLevelInput = {
    create?: XOR<TutorLevelCreateWithoutTeachingLevelInput, TutorLevelUncheckedCreateWithoutTeachingLevelInput> | TutorLevelCreateWithoutTeachingLevelInput[] | TutorLevelUncheckedCreateWithoutTeachingLevelInput[]
    connectOrCreate?: TutorLevelCreateOrConnectWithoutTeachingLevelInput | TutorLevelCreateOrConnectWithoutTeachingLevelInput[]
    createMany?: TutorLevelCreateManyTeachingLevelInputEnvelope
    connect?: TutorLevelWhereUniqueInput | TutorLevelWhereUniqueInput[]
  }

  export type TutorLevelUncheckedCreateNestedManyWithoutTeachingLevelInput = {
    create?: XOR<TutorLevelCreateWithoutTeachingLevelInput, TutorLevelUncheckedCreateWithoutTeachingLevelInput> | TutorLevelCreateWithoutTeachingLevelInput[] | TutorLevelUncheckedCreateWithoutTeachingLevelInput[]
    connectOrCreate?: TutorLevelCreateOrConnectWithoutTeachingLevelInput | TutorLevelCreateOrConnectWithoutTeachingLevelInput[]
    createMany?: TutorLevelCreateManyTeachingLevelInputEnvelope
    connect?: TutorLevelWhereUniqueInput | TutorLevelWhereUniqueInput[]
  }

  export type TutorLevelUpdateManyWithoutTeachingLevelNestedInput = {
    create?: XOR<TutorLevelCreateWithoutTeachingLevelInput, TutorLevelUncheckedCreateWithoutTeachingLevelInput> | TutorLevelCreateWithoutTeachingLevelInput[] | TutorLevelUncheckedCreateWithoutTeachingLevelInput[]
    connectOrCreate?: TutorLevelCreateOrConnectWithoutTeachingLevelInput | TutorLevelCreateOrConnectWithoutTeachingLevelInput[]
    upsert?: TutorLevelUpsertWithWhereUniqueWithoutTeachingLevelInput | TutorLevelUpsertWithWhereUniqueWithoutTeachingLevelInput[]
    createMany?: TutorLevelCreateManyTeachingLevelInputEnvelope
    set?: TutorLevelWhereUniqueInput | TutorLevelWhereUniqueInput[]
    disconnect?: TutorLevelWhereUniqueInput | TutorLevelWhereUniqueInput[]
    delete?: TutorLevelWhereUniqueInput | TutorLevelWhereUniqueInput[]
    connect?: TutorLevelWhereUniqueInput | TutorLevelWhereUniqueInput[]
    update?: TutorLevelUpdateWithWhereUniqueWithoutTeachingLevelInput | TutorLevelUpdateWithWhereUniqueWithoutTeachingLevelInput[]
    updateMany?: TutorLevelUpdateManyWithWhereWithoutTeachingLevelInput | TutorLevelUpdateManyWithWhereWithoutTeachingLevelInput[]
    deleteMany?: TutorLevelScalarWhereInput | TutorLevelScalarWhereInput[]
  }

  export type TutorLevelUncheckedUpdateManyWithoutTeachingLevelNestedInput = {
    create?: XOR<TutorLevelCreateWithoutTeachingLevelInput, TutorLevelUncheckedCreateWithoutTeachingLevelInput> | TutorLevelCreateWithoutTeachingLevelInput[] | TutorLevelUncheckedCreateWithoutTeachingLevelInput[]
    connectOrCreate?: TutorLevelCreateOrConnectWithoutTeachingLevelInput | TutorLevelCreateOrConnectWithoutTeachingLevelInput[]
    upsert?: TutorLevelUpsertWithWhereUniqueWithoutTeachingLevelInput | TutorLevelUpsertWithWhereUniqueWithoutTeachingLevelInput[]
    createMany?: TutorLevelCreateManyTeachingLevelInputEnvelope
    set?: TutorLevelWhereUniqueInput | TutorLevelWhereUniqueInput[]
    disconnect?: TutorLevelWhereUniqueInput | TutorLevelWhereUniqueInput[]
    delete?: TutorLevelWhereUniqueInput | TutorLevelWhereUniqueInput[]
    connect?: TutorLevelWhereUniqueInput | TutorLevelWhereUniqueInput[]
    update?: TutorLevelUpdateWithWhereUniqueWithoutTeachingLevelInput | TutorLevelUpdateWithWhereUniqueWithoutTeachingLevelInput[]
    updateMany?: TutorLevelUpdateManyWithWhereWithoutTeachingLevelInput | TutorLevelUpdateManyWithWhereWithoutTeachingLevelInput[]
    deleteMany?: TutorLevelScalarWhereInput | TutorLevelScalarWhereInput[]
  }

  export type TutorProfileCreateNestedOneWithoutLevelsInput = {
    create?: XOR<TutorProfileCreateWithoutLevelsInput, TutorProfileUncheckedCreateWithoutLevelsInput>
    connectOrCreate?: TutorProfileCreateOrConnectWithoutLevelsInput
    connect?: TutorProfileWhereUniqueInput
  }

  export type TeachingLevelCreateNestedOneWithoutTutorsInput = {
    create?: XOR<TeachingLevelCreateWithoutTutorsInput, TeachingLevelUncheckedCreateWithoutTutorsInput>
    connectOrCreate?: TeachingLevelCreateOrConnectWithoutTutorsInput
    connect?: TeachingLevelWhereUniqueInput
  }

  export type TutorProfileUpdateOneRequiredWithoutLevelsNestedInput = {
    create?: XOR<TutorProfileCreateWithoutLevelsInput, TutorProfileUncheckedCreateWithoutLevelsInput>
    connectOrCreate?: TutorProfileCreateOrConnectWithoutLevelsInput
    upsert?: TutorProfileUpsertWithoutLevelsInput
    connect?: TutorProfileWhereUniqueInput
    update?: XOR<XOR<TutorProfileUpdateToOneWithWhereWithoutLevelsInput, TutorProfileUpdateWithoutLevelsInput>, TutorProfileUncheckedUpdateWithoutLevelsInput>
  }

  export type TeachingLevelUpdateOneRequiredWithoutTutorsNestedInput = {
    create?: XOR<TeachingLevelCreateWithoutTutorsInput, TeachingLevelUncheckedCreateWithoutTutorsInput>
    connectOrCreate?: TeachingLevelCreateOrConnectWithoutTutorsInput
    upsert?: TeachingLevelUpsertWithoutTutorsInput
    connect?: TeachingLevelWhereUniqueInput
    update?: XOR<XOR<TeachingLevelUpdateToOneWithWhereWithoutTutorsInput, TeachingLevelUpdateWithoutTutorsInput>, TeachingLevelUncheckedUpdateWithoutTutorsInput>
  }

  export type SubjectCategoryCreateNestedOneWithoutBookingTutorInput = {
    create?: XOR<SubjectCategoryCreateWithoutBookingTutorInput, SubjectCategoryUncheckedCreateWithoutBookingTutorInput>
    connectOrCreate?: SubjectCategoryCreateOrConnectWithoutBookingTutorInput
    connect?: SubjectCategoryWhereUniqueInput
  }

  export type TutorProfileCreateNestedOneWithoutBookingTutorInput = {
    create?: XOR<TutorProfileCreateWithoutBookingTutorInput, TutorProfileUncheckedCreateWithoutBookingTutorInput>
    connectOrCreate?: TutorProfileCreateOrConnectWithoutBookingTutorInput
    connect?: TutorProfileWhereUniqueInput
  }

  export type NullableEnumSexMethodFieldUpdateOperationsInput = {
    set?: $Enums.SexMethod | null
  }

  export type NullableEnumTeachingTimeFieldUpdateOperationsInput = {
    set?: $Enums.TeachingTime | null
  }

  export type NullableEnumTeachingMethodFieldUpdateOperationsInput = {
    set?: $Enums.TeachingMethod | null
  }

  export type NullableEnumBookingStatusFieldUpdateOperationsInput = {
    set?: $Enums.BookingStatus | null
  }

  export type SubjectCategoryUpdateOneWithoutBookingTutorNestedInput = {
    create?: XOR<SubjectCategoryCreateWithoutBookingTutorInput, SubjectCategoryUncheckedCreateWithoutBookingTutorInput>
    connectOrCreate?: SubjectCategoryCreateOrConnectWithoutBookingTutorInput
    upsert?: SubjectCategoryUpsertWithoutBookingTutorInput
    disconnect?: SubjectCategoryWhereInput | boolean
    delete?: SubjectCategoryWhereInput | boolean
    connect?: SubjectCategoryWhereUniqueInput
    update?: XOR<XOR<SubjectCategoryUpdateToOneWithWhereWithoutBookingTutorInput, SubjectCategoryUpdateWithoutBookingTutorInput>, SubjectCategoryUncheckedUpdateWithoutBookingTutorInput>
  }

  export type TutorProfileUpdateOneWithoutBookingTutorNestedInput = {
    create?: XOR<TutorProfileCreateWithoutBookingTutorInput, TutorProfileUncheckedCreateWithoutBookingTutorInput>
    connectOrCreate?: TutorProfileCreateOrConnectWithoutBookingTutorInput
    upsert?: TutorProfileUpsertWithoutBookingTutorInput
    disconnect?: TutorProfileWhereInput | boolean
    delete?: TutorProfileWhereInput | boolean
    connect?: TutorProfileWhereUniqueInput
    update?: XOR<XOR<TutorProfileUpdateToOneWithWhereWithoutBookingTutorInput, TutorProfileUpdateWithoutBookingTutorInput>, TutorProfileUncheckedUpdateWithoutBookingTutorInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TutorProfileCreateNestedOneWithoutExperiencesInput = {
    create?: XOR<TutorProfileCreateWithoutExperiencesInput, TutorProfileUncheckedCreateWithoutExperiencesInput>
    connectOrCreate?: TutorProfileCreateOrConnectWithoutExperiencesInput
    connect?: TutorProfileWhereUniqueInput
  }

  export type TutorProfileUpdateOneRequiredWithoutExperiencesNestedInput = {
    create?: XOR<TutorProfileCreateWithoutExperiencesInput, TutorProfileUncheckedCreateWithoutExperiencesInput>
    connectOrCreate?: TutorProfileCreateOrConnectWithoutExperiencesInput
    upsert?: TutorProfileUpsertWithoutExperiencesInput
    connect?: TutorProfileWhereUniqueInput
    update?: XOR<XOR<TutorProfileUpdateToOneWithWhereWithoutExperiencesInput, TutorProfileUpdateWithoutExperiencesInput>, TutorProfileUncheckedUpdateWithoutExperiencesInput>
  }

  export type TutorProfileCreateNestedOneWithoutReviewsInput = {
    create?: XOR<TutorProfileCreateWithoutReviewsInput, TutorProfileUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: TutorProfileCreateOrConnectWithoutReviewsInput
    connect?: TutorProfileWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutReviewsInput = {
    create?: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReviewsInput
    connect?: UserWhereUniqueInput
  }

  export type TutorProfileUpdateOneRequiredWithoutReviewsNestedInput = {
    create?: XOR<TutorProfileCreateWithoutReviewsInput, TutorProfileUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: TutorProfileCreateOrConnectWithoutReviewsInput
    upsert?: TutorProfileUpsertWithoutReviewsInput
    connect?: TutorProfileWhereUniqueInput
    update?: XOR<XOR<TutorProfileUpdateToOneWithWhereWithoutReviewsInput, TutorProfileUpdateWithoutReviewsInput>, TutorProfileUncheckedUpdateWithoutReviewsInput>
  }

  export type UserUpdateOneRequiredWithoutReviewsNestedInput = {
    create?: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReviewsInput
    upsert?: UserUpsertWithoutReviewsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReviewsInput, UserUpdateWithoutReviewsInput>, UserUncheckedUpdateWithoutReviewsInput>
  }

  export type TutorSubjectCreateNestedManyWithoutCategoryInput = {
    create?: XOR<TutorSubjectCreateWithoutCategoryInput, TutorSubjectUncheckedCreateWithoutCategoryInput> | TutorSubjectCreateWithoutCategoryInput[] | TutorSubjectUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: TutorSubjectCreateOrConnectWithoutCategoryInput | TutorSubjectCreateOrConnectWithoutCategoryInput[]
    createMany?: TutorSubjectCreateManyCategoryInputEnvelope
    connect?: TutorSubjectWhereUniqueInput | TutorSubjectWhereUniqueInput[]
  }

  export type BookingTutorCreateNestedManyWithoutSubjectInput = {
    create?: XOR<BookingTutorCreateWithoutSubjectInput, BookingTutorUncheckedCreateWithoutSubjectInput> | BookingTutorCreateWithoutSubjectInput[] | BookingTutorUncheckedCreateWithoutSubjectInput[]
    connectOrCreate?: BookingTutorCreateOrConnectWithoutSubjectInput | BookingTutorCreateOrConnectWithoutSubjectInput[]
    createMany?: BookingTutorCreateManySubjectInputEnvelope
    connect?: BookingTutorWhereUniqueInput | BookingTutorWhereUniqueInput[]
  }

  export type TutorSubjectUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<TutorSubjectCreateWithoutCategoryInput, TutorSubjectUncheckedCreateWithoutCategoryInput> | TutorSubjectCreateWithoutCategoryInput[] | TutorSubjectUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: TutorSubjectCreateOrConnectWithoutCategoryInput | TutorSubjectCreateOrConnectWithoutCategoryInput[]
    createMany?: TutorSubjectCreateManyCategoryInputEnvelope
    connect?: TutorSubjectWhereUniqueInput | TutorSubjectWhereUniqueInput[]
  }

  export type BookingTutorUncheckedCreateNestedManyWithoutSubjectInput = {
    create?: XOR<BookingTutorCreateWithoutSubjectInput, BookingTutorUncheckedCreateWithoutSubjectInput> | BookingTutorCreateWithoutSubjectInput[] | BookingTutorUncheckedCreateWithoutSubjectInput[]
    connectOrCreate?: BookingTutorCreateOrConnectWithoutSubjectInput | BookingTutorCreateOrConnectWithoutSubjectInput[]
    createMany?: BookingTutorCreateManySubjectInputEnvelope
    connect?: BookingTutorWhereUniqueInput | BookingTutorWhereUniqueInput[]
  }

  export type TutorSubjectUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<TutorSubjectCreateWithoutCategoryInput, TutorSubjectUncheckedCreateWithoutCategoryInput> | TutorSubjectCreateWithoutCategoryInput[] | TutorSubjectUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: TutorSubjectCreateOrConnectWithoutCategoryInput | TutorSubjectCreateOrConnectWithoutCategoryInput[]
    upsert?: TutorSubjectUpsertWithWhereUniqueWithoutCategoryInput | TutorSubjectUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: TutorSubjectCreateManyCategoryInputEnvelope
    set?: TutorSubjectWhereUniqueInput | TutorSubjectWhereUniqueInput[]
    disconnect?: TutorSubjectWhereUniqueInput | TutorSubjectWhereUniqueInput[]
    delete?: TutorSubjectWhereUniqueInput | TutorSubjectWhereUniqueInput[]
    connect?: TutorSubjectWhereUniqueInput | TutorSubjectWhereUniqueInput[]
    update?: TutorSubjectUpdateWithWhereUniqueWithoutCategoryInput | TutorSubjectUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: TutorSubjectUpdateManyWithWhereWithoutCategoryInput | TutorSubjectUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: TutorSubjectScalarWhereInput | TutorSubjectScalarWhereInput[]
  }

  export type BookingTutorUpdateManyWithoutSubjectNestedInput = {
    create?: XOR<BookingTutorCreateWithoutSubjectInput, BookingTutorUncheckedCreateWithoutSubjectInput> | BookingTutorCreateWithoutSubjectInput[] | BookingTutorUncheckedCreateWithoutSubjectInput[]
    connectOrCreate?: BookingTutorCreateOrConnectWithoutSubjectInput | BookingTutorCreateOrConnectWithoutSubjectInput[]
    upsert?: BookingTutorUpsertWithWhereUniqueWithoutSubjectInput | BookingTutorUpsertWithWhereUniqueWithoutSubjectInput[]
    createMany?: BookingTutorCreateManySubjectInputEnvelope
    set?: BookingTutorWhereUniqueInput | BookingTutorWhereUniqueInput[]
    disconnect?: BookingTutorWhereUniqueInput | BookingTutorWhereUniqueInput[]
    delete?: BookingTutorWhereUniqueInput | BookingTutorWhereUniqueInput[]
    connect?: BookingTutorWhereUniqueInput | BookingTutorWhereUniqueInput[]
    update?: BookingTutorUpdateWithWhereUniqueWithoutSubjectInput | BookingTutorUpdateWithWhereUniqueWithoutSubjectInput[]
    updateMany?: BookingTutorUpdateManyWithWhereWithoutSubjectInput | BookingTutorUpdateManyWithWhereWithoutSubjectInput[]
    deleteMany?: BookingTutorScalarWhereInput | BookingTutorScalarWhereInput[]
  }

  export type TutorSubjectUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<TutorSubjectCreateWithoutCategoryInput, TutorSubjectUncheckedCreateWithoutCategoryInput> | TutorSubjectCreateWithoutCategoryInput[] | TutorSubjectUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: TutorSubjectCreateOrConnectWithoutCategoryInput | TutorSubjectCreateOrConnectWithoutCategoryInput[]
    upsert?: TutorSubjectUpsertWithWhereUniqueWithoutCategoryInput | TutorSubjectUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: TutorSubjectCreateManyCategoryInputEnvelope
    set?: TutorSubjectWhereUniqueInput | TutorSubjectWhereUniqueInput[]
    disconnect?: TutorSubjectWhereUniqueInput | TutorSubjectWhereUniqueInput[]
    delete?: TutorSubjectWhereUniqueInput | TutorSubjectWhereUniqueInput[]
    connect?: TutorSubjectWhereUniqueInput | TutorSubjectWhereUniqueInput[]
    update?: TutorSubjectUpdateWithWhereUniqueWithoutCategoryInput | TutorSubjectUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: TutorSubjectUpdateManyWithWhereWithoutCategoryInput | TutorSubjectUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: TutorSubjectScalarWhereInput | TutorSubjectScalarWhereInput[]
  }

  export type BookingTutorUncheckedUpdateManyWithoutSubjectNestedInput = {
    create?: XOR<BookingTutorCreateWithoutSubjectInput, BookingTutorUncheckedCreateWithoutSubjectInput> | BookingTutorCreateWithoutSubjectInput[] | BookingTutorUncheckedCreateWithoutSubjectInput[]
    connectOrCreate?: BookingTutorCreateOrConnectWithoutSubjectInput | BookingTutorCreateOrConnectWithoutSubjectInput[]
    upsert?: BookingTutorUpsertWithWhereUniqueWithoutSubjectInput | BookingTutorUpsertWithWhereUniqueWithoutSubjectInput[]
    createMany?: BookingTutorCreateManySubjectInputEnvelope
    set?: BookingTutorWhereUniqueInput | BookingTutorWhereUniqueInput[]
    disconnect?: BookingTutorWhereUniqueInput | BookingTutorWhereUniqueInput[]
    delete?: BookingTutorWhereUniqueInput | BookingTutorWhereUniqueInput[]
    connect?: BookingTutorWhereUniqueInput | BookingTutorWhereUniqueInput[]
    update?: BookingTutorUpdateWithWhereUniqueWithoutSubjectInput | BookingTutorUpdateWithWhereUniqueWithoutSubjectInput[]
    updateMany?: BookingTutorUpdateManyWithWhereWithoutSubjectInput | BookingTutorUpdateManyWithWhereWithoutSubjectInput[]
    deleteMany?: BookingTutorScalarWhereInput | BookingTutorScalarWhereInput[]
  }

  export type TutorProfileCreateNestedOneWithoutTutorSubjectsInput = {
    create?: XOR<TutorProfileCreateWithoutTutorSubjectsInput, TutorProfileUncheckedCreateWithoutTutorSubjectsInput>
    connectOrCreate?: TutorProfileCreateOrConnectWithoutTutorSubjectsInput
    connect?: TutorProfileWhereUniqueInput
  }

  export type SubjectCategoryCreateNestedOneWithoutTutorsInput = {
    create?: XOR<SubjectCategoryCreateWithoutTutorsInput, SubjectCategoryUncheckedCreateWithoutTutorsInput>
    connectOrCreate?: SubjectCategoryCreateOrConnectWithoutTutorsInput
    connect?: SubjectCategoryWhereUniqueInput
  }

  export type TutorProfileUpdateOneRequiredWithoutTutorSubjectsNestedInput = {
    create?: XOR<TutorProfileCreateWithoutTutorSubjectsInput, TutorProfileUncheckedCreateWithoutTutorSubjectsInput>
    connectOrCreate?: TutorProfileCreateOrConnectWithoutTutorSubjectsInput
    upsert?: TutorProfileUpsertWithoutTutorSubjectsInput
    connect?: TutorProfileWhereUniqueInput
    update?: XOR<XOR<TutorProfileUpdateToOneWithWhereWithoutTutorSubjectsInput, TutorProfileUpdateWithoutTutorSubjectsInput>, TutorProfileUncheckedUpdateWithoutTutorSubjectsInput>
  }

  export type SubjectCategoryUpdateOneRequiredWithoutTutorsNestedInput = {
    create?: XOR<SubjectCategoryCreateWithoutTutorsInput, SubjectCategoryUncheckedCreateWithoutTutorsInput>
    connectOrCreate?: SubjectCategoryCreateOrConnectWithoutTutorsInput
    upsert?: SubjectCategoryUpsertWithoutTutorsInput
    connect?: SubjectCategoryWhereUniqueInput
    update?: XOR<XOR<SubjectCategoryUpdateToOneWithWhereWithoutTutorsInput, SubjectCategoryUpdateWithoutTutorsInput>, SubjectCategoryUncheckedUpdateWithoutTutorsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumLanguageFilter<$PrismaModel = never> = {
    equals?: $Enums.Language | EnumLanguageFieldRefInput<$PrismaModel>
    in?: $Enums.Language[] | ListEnumLanguageFieldRefInput<$PrismaModel>
    notIn?: $Enums.Language[] | ListEnumLanguageFieldRefInput<$PrismaModel>
    not?: NestedEnumLanguageFilter<$PrismaModel> | $Enums.Language
  }

  export type NestedEnumSexMethodFilter<$PrismaModel = never> = {
    equals?: $Enums.SexMethod | EnumSexMethodFieldRefInput<$PrismaModel>
    in?: $Enums.SexMethod[] | ListEnumSexMethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.SexMethod[] | ListEnumSexMethodFieldRefInput<$PrismaModel>
    not?: NestedEnumSexMethodFilter<$PrismaModel> | $Enums.SexMethod
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumTeachingMethodFilter<$PrismaModel = never> = {
    equals?: $Enums.TeachingMethod | EnumTeachingMethodFieldRefInput<$PrismaModel>
    in?: $Enums.TeachingMethod[] | ListEnumTeachingMethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.TeachingMethod[] | ListEnumTeachingMethodFieldRefInput<$PrismaModel>
    not?: NestedEnumTeachingMethodFilter<$PrismaModel> | $Enums.TeachingMethod
  }

  export type NestedEnumTeachingTimeFilter<$PrismaModel = never> = {
    equals?: $Enums.TeachingTime | EnumTeachingTimeFieldRefInput<$PrismaModel>
    in?: $Enums.TeachingTime[] | ListEnumTeachingTimeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TeachingTime[] | ListEnumTeachingTimeFieldRefInput<$PrismaModel>
    not?: NestedEnumTeachingTimeFilter<$PrismaModel> | $Enums.TeachingTime
  }

  export type NestedEnumLanguageWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Language | EnumLanguageFieldRefInput<$PrismaModel>
    in?: $Enums.Language[] | ListEnumLanguageFieldRefInput<$PrismaModel>
    notIn?: $Enums.Language[] | ListEnumLanguageFieldRefInput<$PrismaModel>
    not?: NestedEnumLanguageWithAggregatesFilter<$PrismaModel> | $Enums.Language
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLanguageFilter<$PrismaModel>
    _max?: NestedEnumLanguageFilter<$PrismaModel>
  }

  export type NestedEnumSexMethodWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SexMethod | EnumSexMethodFieldRefInput<$PrismaModel>
    in?: $Enums.SexMethod[] | ListEnumSexMethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.SexMethod[] | ListEnumSexMethodFieldRefInput<$PrismaModel>
    not?: NestedEnumSexMethodWithAggregatesFilter<$PrismaModel> | $Enums.SexMethod
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSexMethodFilter<$PrismaModel>
    _max?: NestedEnumSexMethodFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumTeachingMethodWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TeachingMethod | EnumTeachingMethodFieldRefInput<$PrismaModel>
    in?: $Enums.TeachingMethod[] | ListEnumTeachingMethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.TeachingMethod[] | ListEnumTeachingMethodFieldRefInput<$PrismaModel>
    not?: NestedEnumTeachingMethodWithAggregatesFilter<$PrismaModel> | $Enums.TeachingMethod
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTeachingMethodFilter<$PrismaModel>
    _max?: NestedEnumTeachingMethodFilter<$PrismaModel>
  }

  export type NestedEnumTeachingTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TeachingTime | EnumTeachingTimeFieldRefInput<$PrismaModel>
    in?: $Enums.TeachingTime[] | ListEnumTeachingTimeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TeachingTime[] | ListEnumTeachingTimeFieldRefInput<$PrismaModel>
    not?: NestedEnumTeachingTimeWithAggregatesFilter<$PrismaModel> | $Enums.TeachingTime
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTeachingTimeFilter<$PrismaModel>
    _max?: NestedEnumTeachingTimeFilter<$PrismaModel>
  }

  export type NestedEnumSexMethodNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.SexMethod | EnumSexMethodFieldRefInput<$PrismaModel> | null
    in?: $Enums.SexMethod[] | ListEnumSexMethodFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.SexMethod[] | ListEnumSexMethodFieldRefInput<$PrismaModel> | null
    not?: NestedEnumSexMethodNullableFilter<$PrismaModel> | $Enums.SexMethod | null
  }

  export type NestedEnumTeachingTimeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.TeachingTime | EnumTeachingTimeFieldRefInput<$PrismaModel> | null
    in?: $Enums.TeachingTime[] | ListEnumTeachingTimeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.TeachingTime[] | ListEnumTeachingTimeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumTeachingTimeNullableFilter<$PrismaModel> | $Enums.TeachingTime | null
  }

  export type NestedEnumTeachingMethodNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.TeachingMethod | EnumTeachingMethodFieldRefInput<$PrismaModel> | null
    in?: $Enums.TeachingMethod[] | ListEnumTeachingMethodFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.TeachingMethod[] | ListEnumTeachingMethodFieldRefInput<$PrismaModel> | null
    not?: NestedEnumTeachingMethodNullableFilter<$PrismaModel> | $Enums.TeachingMethod | null
  }

  export type NestedEnumBookingStatusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.BookingStatus | EnumBookingStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumBookingStatusNullableFilter<$PrismaModel> | $Enums.BookingStatus | null
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumSexMethodNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SexMethod | EnumSexMethodFieldRefInput<$PrismaModel> | null
    in?: $Enums.SexMethod[] | ListEnumSexMethodFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.SexMethod[] | ListEnumSexMethodFieldRefInput<$PrismaModel> | null
    not?: NestedEnumSexMethodNullableWithAggregatesFilter<$PrismaModel> | $Enums.SexMethod | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumSexMethodNullableFilter<$PrismaModel>
    _max?: NestedEnumSexMethodNullableFilter<$PrismaModel>
  }

  export type NestedEnumTeachingTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TeachingTime | EnumTeachingTimeFieldRefInput<$PrismaModel> | null
    in?: $Enums.TeachingTime[] | ListEnumTeachingTimeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.TeachingTime[] | ListEnumTeachingTimeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumTeachingTimeNullableWithAggregatesFilter<$PrismaModel> | $Enums.TeachingTime | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumTeachingTimeNullableFilter<$PrismaModel>
    _max?: NestedEnumTeachingTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumTeachingMethodNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TeachingMethod | EnumTeachingMethodFieldRefInput<$PrismaModel> | null
    in?: $Enums.TeachingMethod[] | ListEnumTeachingMethodFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.TeachingMethod[] | ListEnumTeachingMethodFieldRefInput<$PrismaModel> | null
    not?: NestedEnumTeachingMethodNullableWithAggregatesFilter<$PrismaModel> | $Enums.TeachingMethod | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumTeachingMethodNullableFilter<$PrismaModel>
    _max?: NestedEnumTeachingMethodNullableFilter<$PrismaModel>
  }

  export type NestedEnumBookingStatusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BookingStatus | EnumBookingStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumBookingStatusNullableWithAggregatesFilter<$PrismaModel> | $Enums.BookingStatus | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumBookingStatusNullableFilter<$PrismaModel>
    _max?: NestedEnumBookingStatusNullableFilter<$PrismaModel>
  }

  export type TutorProfileCreateWithoutUserInput = {
    tutorName: string
    province: string
    image: string
    pricePerHour: number
    languageTaught?: $Enums.Language
    sex?: $Enums.SexMethod
    description?: string | null
    phoneNumber: string
    verifyed?: boolean
    technique?: string | null
    teachingMethod?: $Enums.TeachingMethod
    teachingTime?: $Enums.TeachingTime
    timeStart: string
    timeEnd: string
    availableTimes?: $Enums.TeachingTime
    tutorSubjects?: TutorSubjectCreateNestedManyWithoutTutorInput
    experiences?: ExperienceCreateNestedManyWithoutTutorInput
    reviews?: ReviewCreateNestedManyWithoutTutorInput
    levels?: TutorLevelCreateNestedManyWithoutTutorProfileInput
    BookingTutor?: BookingTutorCreateNestedManyWithoutAssignedTutorInput
  }

  export type TutorProfileUncheckedCreateWithoutUserInput = {
    id?: number
    tutorName: string
    province: string
    image: string
    pricePerHour: number
    languageTaught?: $Enums.Language
    sex?: $Enums.SexMethod
    description?: string | null
    phoneNumber: string
    verifyed?: boolean
    technique?: string | null
    teachingMethod?: $Enums.TeachingMethod
    teachingTime?: $Enums.TeachingTime
    timeStart: string
    timeEnd: string
    availableTimes?: $Enums.TeachingTime
    tutorSubjects?: TutorSubjectUncheckedCreateNestedManyWithoutTutorInput
    experiences?: ExperienceUncheckedCreateNestedManyWithoutTutorInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutTutorInput
    levels?: TutorLevelUncheckedCreateNestedManyWithoutTutorProfileInput
    BookingTutor?: BookingTutorUncheckedCreateNestedManyWithoutAssignedTutorInput
  }

  export type TutorProfileCreateOrConnectWithoutUserInput = {
    where: TutorProfileWhereUniqueInput
    create: XOR<TutorProfileCreateWithoutUserInput, TutorProfileUncheckedCreateWithoutUserInput>
  }

  export type ReviewCreateWithoutUserInput = {
    comment: string
    rating: number
    createdAt?: Date | string
    tutor: TutorProfileCreateNestedOneWithoutReviewsInput
  }

  export type ReviewUncheckedCreateWithoutUserInput = {
    id?: number
    comment: string
    rating: number
    tutorId: number
    createdAt?: Date | string
  }

  export type ReviewCreateOrConnectWithoutUserInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput>
  }

  export type ReviewCreateManyUserInputEnvelope = {
    data: ReviewCreateManyUserInput | ReviewCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TutorProfileUpsertWithoutUserInput = {
    update: XOR<TutorProfileUpdateWithoutUserInput, TutorProfileUncheckedUpdateWithoutUserInput>
    create: XOR<TutorProfileCreateWithoutUserInput, TutorProfileUncheckedCreateWithoutUserInput>
    where?: TutorProfileWhereInput
  }

  export type TutorProfileUpdateToOneWithWhereWithoutUserInput = {
    where?: TutorProfileWhereInput
    data: XOR<TutorProfileUpdateWithoutUserInput, TutorProfileUncheckedUpdateWithoutUserInput>
  }

  export type TutorProfileUpdateWithoutUserInput = {
    tutorName?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    pricePerHour?: IntFieldUpdateOperationsInput | number
    languageTaught?: EnumLanguageFieldUpdateOperationsInput | $Enums.Language
    sex?: EnumSexMethodFieldUpdateOperationsInput | $Enums.SexMethod
    description?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: StringFieldUpdateOperationsInput | string
    verifyed?: BoolFieldUpdateOperationsInput | boolean
    technique?: NullableStringFieldUpdateOperationsInput | string | null
    teachingMethod?: EnumTeachingMethodFieldUpdateOperationsInput | $Enums.TeachingMethod
    teachingTime?: EnumTeachingTimeFieldUpdateOperationsInput | $Enums.TeachingTime
    timeStart?: StringFieldUpdateOperationsInput | string
    timeEnd?: StringFieldUpdateOperationsInput | string
    availableTimes?: EnumTeachingTimeFieldUpdateOperationsInput | $Enums.TeachingTime
    tutorSubjects?: TutorSubjectUpdateManyWithoutTutorNestedInput
    experiences?: ExperienceUpdateManyWithoutTutorNestedInput
    reviews?: ReviewUpdateManyWithoutTutorNestedInput
    levels?: TutorLevelUpdateManyWithoutTutorProfileNestedInput
    BookingTutor?: BookingTutorUpdateManyWithoutAssignedTutorNestedInput
  }

  export type TutorProfileUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    tutorName?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    pricePerHour?: IntFieldUpdateOperationsInput | number
    languageTaught?: EnumLanguageFieldUpdateOperationsInput | $Enums.Language
    sex?: EnumSexMethodFieldUpdateOperationsInput | $Enums.SexMethod
    description?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: StringFieldUpdateOperationsInput | string
    verifyed?: BoolFieldUpdateOperationsInput | boolean
    technique?: NullableStringFieldUpdateOperationsInput | string | null
    teachingMethod?: EnumTeachingMethodFieldUpdateOperationsInput | $Enums.TeachingMethod
    teachingTime?: EnumTeachingTimeFieldUpdateOperationsInput | $Enums.TeachingTime
    timeStart?: StringFieldUpdateOperationsInput | string
    timeEnd?: StringFieldUpdateOperationsInput | string
    availableTimes?: EnumTeachingTimeFieldUpdateOperationsInput | $Enums.TeachingTime
    tutorSubjects?: TutorSubjectUncheckedUpdateManyWithoutTutorNestedInput
    experiences?: ExperienceUncheckedUpdateManyWithoutTutorNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutTutorNestedInput
    levels?: TutorLevelUncheckedUpdateManyWithoutTutorProfileNestedInput
    BookingTutor?: BookingTutorUncheckedUpdateManyWithoutAssignedTutorNestedInput
  }

  export type ReviewUpsertWithWhereUniqueWithoutUserInput = {
    where: ReviewWhereUniqueInput
    update: XOR<ReviewUpdateWithoutUserInput, ReviewUncheckedUpdateWithoutUserInput>
    create: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput>
  }

  export type ReviewUpdateWithWhereUniqueWithoutUserInput = {
    where: ReviewWhereUniqueInput
    data: XOR<ReviewUpdateWithoutUserInput, ReviewUncheckedUpdateWithoutUserInput>
  }

  export type ReviewUpdateManyWithWhereWithoutUserInput = {
    where: ReviewScalarWhereInput
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyWithoutUserInput>
  }

  export type ReviewScalarWhereInput = {
    AND?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
    OR?: ReviewScalarWhereInput[]
    NOT?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
    id?: IntFilter<"Review"> | number
    comment?: StringFilter<"Review"> | string
    rating?: IntFilter<"Review"> | number
    tutorId?: IntFilter<"Review"> | number
    userId?: IntFilter<"Review"> | number
    createdAt?: DateTimeFilter<"Review"> | Date | string
  }

  export type UserCreateWithoutTutorProfileInput = {
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    reviews?: ReviewCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTutorProfileInput = {
    id?: number
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    reviews?: ReviewUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTutorProfileInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTutorProfileInput, UserUncheckedCreateWithoutTutorProfileInput>
  }

  export type TutorSubjectCreateWithoutTutorInput = {
    category: SubjectCategoryCreateNestedOneWithoutTutorsInput
  }

  export type TutorSubjectUncheckedCreateWithoutTutorInput = {
    id?: number
    categoryId: number
  }

  export type TutorSubjectCreateOrConnectWithoutTutorInput = {
    where: TutorSubjectWhereUniqueInput
    create: XOR<TutorSubjectCreateWithoutTutorInput, TutorSubjectUncheckedCreateWithoutTutorInput>
  }

  export type TutorSubjectCreateManyTutorInputEnvelope = {
    data: TutorSubjectCreateManyTutorInput | TutorSubjectCreateManyTutorInput[]
    skipDuplicates?: boolean
  }

  export type ExperienceCreateWithoutTutorInput = {
    detail: string
  }

  export type ExperienceUncheckedCreateWithoutTutorInput = {
    id?: number
    detail: string
  }

  export type ExperienceCreateOrConnectWithoutTutorInput = {
    where: ExperienceWhereUniqueInput
    create: XOR<ExperienceCreateWithoutTutorInput, ExperienceUncheckedCreateWithoutTutorInput>
  }

  export type ExperienceCreateManyTutorInputEnvelope = {
    data: ExperienceCreateManyTutorInput | ExperienceCreateManyTutorInput[]
    skipDuplicates?: boolean
  }

  export type ReviewCreateWithoutTutorInput = {
    comment: string
    rating: number
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutReviewsInput
  }

  export type ReviewUncheckedCreateWithoutTutorInput = {
    id?: number
    comment: string
    rating: number
    userId: number
    createdAt?: Date | string
  }

  export type ReviewCreateOrConnectWithoutTutorInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutTutorInput, ReviewUncheckedCreateWithoutTutorInput>
  }

  export type ReviewCreateManyTutorInputEnvelope = {
    data: ReviewCreateManyTutorInput | ReviewCreateManyTutorInput[]
    skipDuplicates?: boolean
  }

  export type TutorLevelCreateWithoutTutorProfileInput = {
    teachingLevel: TeachingLevelCreateNestedOneWithoutTutorsInput
  }

  export type TutorLevelUncheckedCreateWithoutTutorProfileInput = {
    id?: number
    teachingLevelId: number
  }

  export type TutorLevelCreateOrConnectWithoutTutorProfileInput = {
    where: TutorLevelWhereUniqueInput
    create: XOR<TutorLevelCreateWithoutTutorProfileInput, TutorLevelUncheckedCreateWithoutTutorProfileInput>
  }

  export type TutorLevelCreateManyTutorProfileInputEnvelope = {
    data: TutorLevelCreateManyTutorProfileInput | TutorLevelCreateManyTutorProfileInput[]
    skipDuplicates?: boolean
  }

  export type BookingTutorCreateWithoutAssignedTutorInput = {
    fullName: string
    phoneNumber: string
    email?: string | null
    subjectName?: string | null
    level?: string | null
    target?: string | null
    nationalityTeacher?: string | null
    teacherSex?: $Enums.SexMethod | null
    studyingDays?: $Enums.TeachingTime | null
    studyingTimes?: string | null
    startStudyingDate?: string | null
    teachingMethod?: $Enums.TeachingMethod | null
    studyLocation?: string | null
    yourCity?: string | null
    note?: string | null
    status?: $Enums.BookingStatus | null
    createdAt?: Date | string
    updatedAt?: Date | string
    subject?: SubjectCategoryCreateNestedOneWithoutBookingTutorInput
  }

  export type BookingTutorUncheckedCreateWithoutAssignedTutorInput = {
    id?: number
    fullName: string
    phoneNumber: string
    email?: string | null
    subjectId?: number | null
    subjectName?: string | null
    level?: string | null
    target?: string | null
    nationalityTeacher?: string | null
    teacherSex?: $Enums.SexMethod | null
    studyingDays?: $Enums.TeachingTime | null
    studyingTimes?: string | null
    startStudyingDate?: string | null
    teachingMethod?: $Enums.TeachingMethod | null
    studyLocation?: string | null
    yourCity?: string | null
    note?: string | null
    status?: $Enums.BookingStatus | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookingTutorCreateOrConnectWithoutAssignedTutorInput = {
    where: BookingTutorWhereUniqueInput
    create: XOR<BookingTutorCreateWithoutAssignedTutorInput, BookingTutorUncheckedCreateWithoutAssignedTutorInput>
  }

  export type BookingTutorCreateManyAssignedTutorInputEnvelope = {
    data: BookingTutorCreateManyAssignedTutorInput | BookingTutorCreateManyAssignedTutorInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutTutorProfileInput = {
    update: XOR<UserUpdateWithoutTutorProfileInput, UserUncheckedUpdateWithoutTutorProfileInput>
    create: XOR<UserCreateWithoutTutorProfileInput, UserUncheckedCreateWithoutTutorProfileInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTutorProfileInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTutorProfileInput, UserUncheckedUpdateWithoutTutorProfileInput>
  }

  export type UserUpdateWithoutTutorProfileInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviews?: ReviewUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTutorProfileInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviews?: ReviewUncheckedUpdateManyWithoutUserNestedInput
  }

  export type TutorSubjectUpsertWithWhereUniqueWithoutTutorInput = {
    where: TutorSubjectWhereUniqueInput
    update: XOR<TutorSubjectUpdateWithoutTutorInput, TutorSubjectUncheckedUpdateWithoutTutorInput>
    create: XOR<TutorSubjectCreateWithoutTutorInput, TutorSubjectUncheckedCreateWithoutTutorInput>
  }

  export type TutorSubjectUpdateWithWhereUniqueWithoutTutorInput = {
    where: TutorSubjectWhereUniqueInput
    data: XOR<TutorSubjectUpdateWithoutTutorInput, TutorSubjectUncheckedUpdateWithoutTutorInput>
  }

  export type TutorSubjectUpdateManyWithWhereWithoutTutorInput = {
    where: TutorSubjectScalarWhereInput
    data: XOR<TutorSubjectUpdateManyMutationInput, TutorSubjectUncheckedUpdateManyWithoutTutorInput>
  }

  export type TutorSubjectScalarWhereInput = {
    AND?: TutorSubjectScalarWhereInput | TutorSubjectScalarWhereInput[]
    OR?: TutorSubjectScalarWhereInput[]
    NOT?: TutorSubjectScalarWhereInput | TutorSubjectScalarWhereInput[]
    id?: IntFilter<"TutorSubject"> | number
    tutorId?: IntFilter<"TutorSubject"> | number
    categoryId?: IntFilter<"TutorSubject"> | number
  }

  export type ExperienceUpsertWithWhereUniqueWithoutTutorInput = {
    where: ExperienceWhereUniqueInput
    update: XOR<ExperienceUpdateWithoutTutorInput, ExperienceUncheckedUpdateWithoutTutorInput>
    create: XOR<ExperienceCreateWithoutTutorInput, ExperienceUncheckedCreateWithoutTutorInput>
  }

  export type ExperienceUpdateWithWhereUniqueWithoutTutorInput = {
    where: ExperienceWhereUniqueInput
    data: XOR<ExperienceUpdateWithoutTutorInput, ExperienceUncheckedUpdateWithoutTutorInput>
  }

  export type ExperienceUpdateManyWithWhereWithoutTutorInput = {
    where: ExperienceScalarWhereInput
    data: XOR<ExperienceUpdateManyMutationInput, ExperienceUncheckedUpdateManyWithoutTutorInput>
  }

  export type ExperienceScalarWhereInput = {
    AND?: ExperienceScalarWhereInput | ExperienceScalarWhereInput[]
    OR?: ExperienceScalarWhereInput[]
    NOT?: ExperienceScalarWhereInput | ExperienceScalarWhereInput[]
    id?: IntFilter<"Experience"> | number
    detail?: StringFilter<"Experience"> | string
    tutorId?: IntFilter<"Experience"> | number
  }

  export type ReviewUpsertWithWhereUniqueWithoutTutorInput = {
    where: ReviewWhereUniqueInput
    update: XOR<ReviewUpdateWithoutTutorInput, ReviewUncheckedUpdateWithoutTutorInput>
    create: XOR<ReviewCreateWithoutTutorInput, ReviewUncheckedCreateWithoutTutorInput>
  }

  export type ReviewUpdateWithWhereUniqueWithoutTutorInput = {
    where: ReviewWhereUniqueInput
    data: XOR<ReviewUpdateWithoutTutorInput, ReviewUncheckedUpdateWithoutTutorInput>
  }

  export type ReviewUpdateManyWithWhereWithoutTutorInput = {
    where: ReviewScalarWhereInput
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyWithoutTutorInput>
  }

  export type TutorLevelUpsertWithWhereUniqueWithoutTutorProfileInput = {
    where: TutorLevelWhereUniqueInput
    update: XOR<TutorLevelUpdateWithoutTutorProfileInput, TutorLevelUncheckedUpdateWithoutTutorProfileInput>
    create: XOR<TutorLevelCreateWithoutTutorProfileInput, TutorLevelUncheckedCreateWithoutTutorProfileInput>
  }

  export type TutorLevelUpdateWithWhereUniqueWithoutTutorProfileInput = {
    where: TutorLevelWhereUniqueInput
    data: XOR<TutorLevelUpdateWithoutTutorProfileInput, TutorLevelUncheckedUpdateWithoutTutorProfileInput>
  }

  export type TutorLevelUpdateManyWithWhereWithoutTutorProfileInput = {
    where: TutorLevelScalarWhereInput
    data: XOR<TutorLevelUpdateManyMutationInput, TutorLevelUncheckedUpdateManyWithoutTutorProfileInput>
  }

  export type TutorLevelScalarWhereInput = {
    AND?: TutorLevelScalarWhereInput | TutorLevelScalarWhereInput[]
    OR?: TutorLevelScalarWhereInput[]
    NOT?: TutorLevelScalarWhereInput | TutorLevelScalarWhereInput[]
    id?: IntFilter<"TutorLevel"> | number
    tutorProfileId?: IntFilter<"TutorLevel"> | number
    teachingLevelId?: IntFilter<"TutorLevel"> | number
  }

  export type BookingTutorUpsertWithWhereUniqueWithoutAssignedTutorInput = {
    where: BookingTutorWhereUniqueInput
    update: XOR<BookingTutorUpdateWithoutAssignedTutorInput, BookingTutorUncheckedUpdateWithoutAssignedTutorInput>
    create: XOR<BookingTutorCreateWithoutAssignedTutorInput, BookingTutorUncheckedCreateWithoutAssignedTutorInput>
  }

  export type BookingTutorUpdateWithWhereUniqueWithoutAssignedTutorInput = {
    where: BookingTutorWhereUniqueInput
    data: XOR<BookingTutorUpdateWithoutAssignedTutorInput, BookingTutorUncheckedUpdateWithoutAssignedTutorInput>
  }

  export type BookingTutorUpdateManyWithWhereWithoutAssignedTutorInput = {
    where: BookingTutorScalarWhereInput
    data: XOR<BookingTutorUpdateManyMutationInput, BookingTutorUncheckedUpdateManyWithoutAssignedTutorInput>
  }

  export type BookingTutorScalarWhereInput = {
    AND?: BookingTutorScalarWhereInput | BookingTutorScalarWhereInput[]
    OR?: BookingTutorScalarWhereInput[]
    NOT?: BookingTutorScalarWhereInput | BookingTutorScalarWhereInput[]
    id?: IntFilter<"BookingTutor"> | number
    fullName?: StringFilter<"BookingTutor"> | string
    phoneNumber?: StringFilter<"BookingTutor"> | string
    email?: StringNullableFilter<"BookingTutor"> | string | null
    subjectId?: IntNullableFilter<"BookingTutor"> | number | null
    subjectName?: StringNullableFilter<"BookingTutor"> | string | null
    level?: StringNullableFilter<"BookingTutor"> | string | null
    target?: StringNullableFilter<"BookingTutor"> | string | null
    nationalityTeacher?: StringNullableFilter<"BookingTutor"> | string | null
    teacherSex?: EnumSexMethodNullableFilter<"BookingTutor"> | $Enums.SexMethod | null
    studyingDays?: EnumTeachingTimeNullableFilter<"BookingTutor"> | $Enums.TeachingTime | null
    studyingTimes?: StringNullableFilter<"BookingTutor"> | string | null
    startStudyingDate?: StringNullableFilter<"BookingTutor"> | string | null
    teachingMethod?: EnumTeachingMethodNullableFilter<"BookingTutor"> | $Enums.TeachingMethod | null
    studyLocation?: StringNullableFilter<"BookingTutor"> | string | null
    yourCity?: StringNullableFilter<"BookingTutor"> | string | null
    note?: StringNullableFilter<"BookingTutor"> | string | null
    assignedTutorId?: IntNullableFilter<"BookingTutor"> | number | null
    status?: EnumBookingStatusNullableFilter<"BookingTutor"> | $Enums.BookingStatus | null
    createdAt?: DateTimeFilter<"BookingTutor"> | Date | string
    updatedAt?: DateTimeFilter<"BookingTutor"> | Date | string
  }

  export type TutorLevelCreateWithoutTeachingLevelInput = {
    tutorProfile: TutorProfileCreateNestedOneWithoutLevelsInput
  }

  export type TutorLevelUncheckedCreateWithoutTeachingLevelInput = {
    id?: number
    tutorProfileId: number
  }

  export type TutorLevelCreateOrConnectWithoutTeachingLevelInput = {
    where: TutorLevelWhereUniqueInput
    create: XOR<TutorLevelCreateWithoutTeachingLevelInput, TutorLevelUncheckedCreateWithoutTeachingLevelInput>
  }

  export type TutorLevelCreateManyTeachingLevelInputEnvelope = {
    data: TutorLevelCreateManyTeachingLevelInput | TutorLevelCreateManyTeachingLevelInput[]
    skipDuplicates?: boolean
  }

  export type TutorLevelUpsertWithWhereUniqueWithoutTeachingLevelInput = {
    where: TutorLevelWhereUniqueInput
    update: XOR<TutorLevelUpdateWithoutTeachingLevelInput, TutorLevelUncheckedUpdateWithoutTeachingLevelInput>
    create: XOR<TutorLevelCreateWithoutTeachingLevelInput, TutorLevelUncheckedCreateWithoutTeachingLevelInput>
  }

  export type TutorLevelUpdateWithWhereUniqueWithoutTeachingLevelInput = {
    where: TutorLevelWhereUniqueInput
    data: XOR<TutorLevelUpdateWithoutTeachingLevelInput, TutorLevelUncheckedUpdateWithoutTeachingLevelInput>
  }

  export type TutorLevelUpdateManyWithWhereWithoutTeachingLevelInput = {
    where: TutorLevelScalarWhereInput
    data: XOR<TutorLevelUpdateManyMutationInput, TutorLevelUncheckedUpdateManyWithoutTeachingLevelInput>
  }

  export type TutorProfileCreateWithoutLevelsInput = {
    tutorName: string
    province: string
    image: string
    pricePerHour: number
    languageTaught?: $Enums.Language
    sex?: $Enums.SexMethod
    description?: string | null
    phoneNumber: string
    verifyed?: boolean
    technique?: string | null
    teachingMethod?: $Enums.TeachingMethod
    teachingTime?: $Enums.TeachingTime
    timeStart: string
    timeEnd: string
    availableTimes?: $Enums.TeachingTime
    user: UserCreateNestedOneWithoutTutorProfileInput
    tutorSubjects?: TutorSubjectCreateNestedManyWithoutTutorInput
    experiences?: ExperienceCreateNestedManyWithoutTutorInput
    reviews?: ReviewCreateNestedManyWithoutTutorInput
    BookingTutor?: BookingTutorCreateNestedManyWithoutAssignedTutorInput
  }

  export type TutorProfileUncheckedCreateWithoutLevelsInput = {
    id?: number
    userId: number
    tutorName: string
    province: string
    image: string
    pricePerHour: number
    languageTaught?: $Enums.Language
    sex?: $Enums.SexMethod
    description?: string | null
    phoneNumber: string
    verifyed?: boolean
    technique?: string | null
    teachingMethod?: $Enums.TeachingMethod
    teachingTime?: $Enums.TeachingTime
    timeStart: string
    timeEnd: string
    availableTimes?: $Enums.TeachingTime
    tutorSubjects?: TutorSubjectUncheckedCreateNestedManyWithoutTutorInput
    experiences?: ExperienceUncheckedCreateNestedManyWithoutTutorInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutTutorInput
    BookingTutor?: BookingTutorUncheckedCreateNestedManyWithoutAssignedTutorInput
  }

  export type TutorProfileCreateOrConnectWithoutLevelsInput = {
    where: TutorProfileWhereUniqueInput
    create: XOR<TutorProfileCreateWithoutLevelsInput, TutorProfileUncheckedCreateWithoutLevelsInput>
  }

  export type TeachingLevelCreateWithoutTutorsInput = {
    name: string
  }

  export type TeachingLevelUncheckedCreateWithoutTutorsInput = {
    id?: number
    name: string
  }

  export type TeachingLevelCreateOrConnectWithoutTutorsInput = {
    where: TeachingLevelWhereUniqueInput
    create: XOR<TeachingLevelCreateWithoutTutorsInput, TeachingLevelUncheckedCreateWithoutTutorsInput>
  }

  export type TutorProfileUpsertWithoutLevelsInput = {
    update: XOR<TutorProfileUpdateWithoutLevelsInput, TutorProfileUncheckedUpdateWithoutLevelsInput>
    create: XOR<TutorProfileCreateWithoutLevelsInput, TutorProfileUncheckedCreateWithoutLevelsInput>
    where?: TutorProfileWhereInput
  }

  export type TutorProfileUpdateToOneWithWhereWithoutLevelsInput = {
    where?: TutorProfileWhereInput
    data: XOR<TutorProfileUpdateWithoutLevelsInput, TutorProfileUncheckedUpdateWithoutLevelsInput>
  }

  export type TutorProfileUpdateWithoutLevelsInput = {
    tutorName?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    pricePerHour?: IntFieldUpdateOperationsInput | number
    languageTaught?: EnumLanguageFieldUpdateOperationsInput | $Enums.Language
    sex?: EnumSexMethodFieldUpdateOperationsInput | $Enums.SexMethod
    description?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: StringFieldUpdateOperationsInput | string
    verifyed?: BoolFieldUpdateOperationsInput | boolean
    technique?: NullableStringFieldUpdateOperationsInput | string | null
    teachingMethod?: EnumTeachingMethodFieldUpdateOperationsInput | $Enums.TeachingMethod
    teachingTime?: EnumTeachingTimeFieldUpdateOperationsInput | $Enums.TeachingTime
    timeStart?: StringFieldUpdateOperationsInput | string
    timeEnd?: StringFieldUpdateOperationsInput | string
    availableTimes?: EnumTeachingTimeFieldUpdateOperationsInput | $Enums.TeachingTime
    user?: UserUpdateOneRequiredWithoutTutorProfileNestedInput
    tutorSubjects?: TutorSubjectUpdateManyWithoutTutorNestedInput
    experiences?: ExperienceUpdateManyWithoutTutorNestedInput
    reviews?: ReviewUpdateManyWithoutTutorNestedInput
    BookingTutor?: BookingTutorUpdateManyWithoutAssignedTutorNestedInput
  }

  export type TutorProfileUncheckedUpdateWithoutLevelsInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    tutorName?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    pricePerHour?: IntFieldUpdateOperationsInput | number
    languageTaught?: EnumLanguageFieldUpdateOperationsInput | $Enums.Language
    sex?: EnumSexMethodFieldUpdateOperationsInput | $Enums.SexMethod
    description?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: StringFieldUpdateOperationsInput | string
    verifyed?: BoolFieldUpdateOperationsInput | boolean
    technique?: NullableStringFieldUpdateOperationsInput | string | null
    teachingMethod?: EnumTeachingMethodFieldUpdateOperationsInput | $Enums.TeachingMethod
    teachingTime?: EnumTeachingTimeFieldUpdateOperationsInput | $Enums.TeachingTime
    timeStart?: StringFieldUpdateOperationsInput | string
    timeEnd?: StringFieldUpdateOperationsInput | string
    availableTimes?: EnumTeachingTimeFieldUpdateOperationsInput | $Enums.TeachingTime
    tutorSubjects?: TutorSubjectUncheckedUpdateManyWithoutTutorNestedInput
    experiences?: ExperienceUncheckedUpdateManyWithoutTutorNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutTutorNestedInput
    BookingTutor?: BookingTutorUncheckedUpdateManyWithoutAssignedTutorNestedInput
  }

  export type TeachingLevelUpsertWithoutTutorsInput = {
    update: XOR<TeachingLevelUpdateWithoutTutorsInput, TeachingLevelUncheckedUpdateWithoutTutorsInput>
    create: XOR<TeachingLevelCreateWithoutTutorsInput, TeachingLevelUncheckedCreateWithoutTutorsInput>
    where?: TeachingLevelWhereInput
  }

  export type TeachingLevelUpdateToOneWithWhereWithoutTutorsInput = {
    where?: TeachingLevelWhereInput
    data: XOR<TeachingLevelUpdateWithoutTutorsInput, TeachingLevelUncheckedUpdateWithoutTutorsInput>
  }

  export type TeachingLevelUpdateWithoutTutorsInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type TeachingLevelUncheckedUpdateWithoutTutorsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type SubjectCategoryCreateWithoutBookingTutorInput = {
    name: string
    icon?: string | null
    tutors?: TutorSubjectCreateNestedManyWithoutCategoryInput
  }

  export type SubjectCategoryUncheckedCreateWithoutBookingTutorInput = {
    id?: number
    name: string
    icon?: string | null
    tutors?: TutorSubjectUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type SubjectCategoryCreateOrConnectWithoutBookingTutorInput = {
    where: SubjectCategoryWhereUniqueInput
    create: XOR<SubjectCategoryCreateWithoutBookingTutorInput, SubjectCategoryUncheckedCreateWithoutBookingTutorInput>
  }

  export type TutorProfileCreateWithoutBookingTutorInput = {
    tutorName: string
    province: string
    image: string
    pricePerHour: number
    languageTaught?: $Enums.Language
    sex?: $Enums.SexMethod
    description?: string | null
    phoneNumber: string
    verifyed?: boolean
    technique?: string | null
    teachingMethod?: $Enums.TeachingMethod
    teachingTime?: $Enums.TeachingTime
    timeStart: string
    timeEnd: string
    availableTimes?: $Enums.TeachingTime
    user: UserCreateNestedOneWithoutTutorProfileInput
    tutorSubjects?: TutorSubjectCreateNestedManyWithoutTutorInput
    experiences?: ExperienceCreateNestedManyWithoutTutorInput
    reviews?: ReviewCreateNestedManyWithoutTutorInput
    levels?: TutorLevelCreateNestedManyWithoutTutorProfileInput
  }

  export type TutorProfileUncheckedCreateWithoutBookingTutorInput = {
    id?: number
    userId: number
    tutorName: string
    province: string
    image: string
    pricePerHour: number
    languageTaught?: $Enums.Language
    sex?: $Enums.SexMethod
    description?: string | null
    phoneNumber: string
    verifyed?: boolean
    technique?: string | null
    teachingMethod?: $Enums.TeachingMethod
    teachingTime?: $Enums.TeachingTime
    timeStart: string
    timeEnd: string
    availableTimes?: $Enums.TeachingTime
    tutorSubjects?: TutorSubjectUncheckedCreateNestedManyWithoutTutorInput
    experiences?: ExperienceUncheckedCreateNestedManyWithoutTutorInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutTutorInput
    levels?: TutorLevelUncheckedCreateNestedManyWithoutTutorProfileInput
  }

  export type TutorProfileCreateOrConnectWithoutBookingTutorInput = {
    where: TutorProfileWhereUniqueInput
    create: XOR<TutorProfileCreateWithoutBookingTutorInput, TutorProfileUncheckedCreateWithoutBookingTutorInput>
  }

  export type SubjectCategoryUpsertWithoutBookingTutorInput = {
    update: XOR<SubjectCategoryUpdateWithoutBookingTutorInput, SubjectCategoryUncheckedUpdateWithoutBookingTutorInput>
    create: XOR<SubjectCategoryCreateWithoutBookingTutorInput, SubjectCategoryUncheckedCreateWithoutBookingTutorInput>
    where?: SubjectCategoryWhereInput
  }

  export type SubjectCategoryUpdateToOneWithWhereWithoutBookingTutorInput = {
    where?: SubjectCategoryWhereInput
    data: XOR<SubjectCategoryUpdateWithoutBookingTutorInput, SubjectCategoryUncheckedUpdateWithoutBookingTutorInput>
  }

  export type SubjectCategoryUpdateWithoutBookingTutorInput = {
    name?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    tutors?: TutorSubjectUpdateManyWithoutCategoryNestedInput
  }

  export type SubjectCategoryUncheckedUpdateWithoutBookingTutorInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    tutors?: TutorSubjectUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type TutorProfileUpsertWithoutBookingTutorInput = {
    update: XOR<TutorProfileUpdateWithoutBookingTutorInput, TutorProfileUncheckedUpdateWithoutBookingTutorInput>
    create: XOR<TutorProfileCreateWithoutBookingTutorInput, TutorProfileUncheckedCreateWithoutBookingTutorInput>
    where?: TutorProfileWhereInput
  }

  export type TutorProfileUpdateToOneWithWhereWithoutBookingTutorInput = {
    where?: TutorProfileWhereInput
    data: XOR<TutorProfileUpdateWithoutBookingTutorInput, TutorProfileUncheckedUpdateWithoutBookingTutorInput>
  }

  export type TutorProfileUpdateWithoutBookingTutorInput = {
    tutorName?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    pricePerHour?: IntFieldUpdateOperationsInput | number
    languageTaught?: EnumLanguageFieldUpdateOperationsInput | $Enums.Language
    sex?: EnumSexMethodFieldUpdateOperationsInput | $Enums.SexMethod
    description?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: StringFieldUpdateOperationsInput | string
    verifyed?: BoolFieldUpdateOperationsInput | boolean
    technique?: NullableStringFieldUpdateOperationsInput | string | null
    teachingMethod?: EnumTeachingMethodFieldUpdateOperationsInput | $Enums.TeachingMethod
    teachingTime?: EnumTeachingTimeFieldUpdateOperationsInput | $Enums.TeachingTime
    timeStart?: StringFieldUpdateOperationsInput | string
    timeEnd?: StringFieldUpdateOperationsInput | string
    availableTimes?: EnumTeachingTimeFieldUpdateOperationsInput | $Enums.TeachingTime
    user?: UserUpdateOneRequiredWithoutTutorProfileNestedInput
    tutorSubjects?: TutorSubjectUpdateManyWithoutTutorNestedInput
    experiences?: ExperienceUpdateManyWithoutTutorNestedInput
    reviews?: ReviewUpdateManyWithoutTutorNestedInput
    levels?: TutorLevelUpdateManyWithoutTutorProfileNestedInput
  }

  export type TutorProfileUncheckedUpdateWithoutBookingTutorInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    tutorName?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    pricePerHour?: IntFieldUpdateOperationsInput | number
    languageTaught?: EnumLanguageFieldUpdateOperationsInput | $Enums.Language
    sex?: EnumSexMethodFieldUpdateOperationsInput | $Enums.SexMethod
    description?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: StringFieldUpdateOperationsInput | string
    verifyed?: BoolFieldUpdateOperationsInput | boolean
    technique?: NullableStringFieldUpdateOperationsInput | string | null
    teachingMethod?: EnumTeachingMethodFieldUpdateOperationsInput | $Enums.TeachingMethod
    teachingTime?: EnumTeachingTimeFieldUpdateOperationsInput | $Enums.TeachingTime
    timeStart?: StringFieldUpdateOperationsInput | string
    timeEnd?: StringFieldUpdateOperationsInput | string
    availableTimes?: EnumTeachingTimeFieldUpdateOperationsInput | $Enums.TeachingTime
    tutorSubjects?: TutorSubjectUncheckedUpdateManyWithoutTutorNestedInput
    experiences?: ExperienceUncheckedUpdateManyWithoutTutorNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutTutorNestedInput
    levels?: TutorLevelUncheckedUpdateManyWithoutTutorProfileNestedInput
  }

  export type TutorProfileCreateWithoutExperiencesInput = {
    tutorName: string
    province: string
    image: string
    pricePerHour: number
    languageTaught?: $Enums.Language
    sex?: $Enums.SexMethod
    description?: string | null
    phoneNumber: string
    verifyed?: boolean
    technique?: string | null
    teachingMethod?: $Enums.TeachingMethod
    teachingTime?: $Enums.TeachingTime
    timeStart: string
    timeEnd: string
    availableTimes?: $Enums.TeachingTime
    user: UserCreateNestedOneWithoutTutorProfileInput
    tutorSubjects?: TutorSubjectCreateNestedManyWithoutTutorInput
    reviews?: ReviewCreateNestedManyWithoutTutorInput
    levels?: TutorLevelCreateNestedManyWithoutTutorProfileInput
    BookingTutor?: BookingTutorCreateNestedManyWithoutAssignedTutorInput
  }

  export type TutorProfileUncheckedCreateWithoutExperiencesInput = {
    id?: number
    userId: number
    tutorName: string
    province: string
    image: string
    pricePerHour: number
    languageTaught?: $Enums.Language
    sex?: $Enums.SexMethod
    description?: string | null
    phoneNumber: string
    verifyed?: boolean
    technique?: string | null
    teachingMethod?: $Enums.TeachingMethod
    teachingTime?: $Enums.TeachingTime
    timeStart: string
    timeEnd: string
    availableTimes?: $Enums.TeachingTime
    tutorSubjects?: TutorSubjectUncheckedCreateNestedManyWithoutTutorInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutTutorInput
    levels?: TutorLevelUncheckedCreateNestedManyWithoutTutorProfileInput
    BookingTutor?: BookingTutorUncheckedCreateNestedManyWithoutAssignedTutorInput
  }

  export type TutorProfileCreateOrConnectWithoutExperiencesInput = {
    where: TutorProfileWhereUniqueInput
    create: XOR<TutorProfileCreateWithoutExperiencesInput, TutorProfileUncheckedCreateWithoutExperiencesInput>
  }

  export type TutorProfileUpsertWithoutExperiencesInput = {
    update: XOR<TutorProfileUpdateWithoutExperiencesInput, TutorProfileUncheckedUpdateWithoutExperiencesInput>
    create: XOR<TutorProfileCreateWithoutExperiencesInput, TutorProfileUncheckedCreateWithoutExperiencesInput>
    where?: TutorProfileWhereInput
  }

  export type TutorProfileUpdateToOneWithWhereWithoutExperiencesInput = {
    where?: TutorProfileWhereInput
    data: XOR<TutorProfileUpdateWithoutExperiencesInput, TutorProfileUncheckedUpdateWithoutExperiencesInput>
  }

  export type TutorProfileUpdateWithoutExperiencesInput = {
    tutorName?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    pricePerHour?: IntFieldUpdateOperationsInput | number
    languageTaught?: EnumLanguageFieldUpdateOperationsInput | $Enums.Language
    sex?: EnumSexMethodFieldUpdateOperationsInput | $Enums.SexMethod
    description?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: StringFieldUpdateOperationsInput | string
    verifyed?: BoolFieldUpdateOperationsInput | boolean
    technique?: NullableStringFieldUpdateOperationsInput | string | null
    teachingMethod?: EnumTeachingMethodFieldUpdateOperationsInput | $Enums.TeachingMethod
    teachingTime?: EnumTeachingTimeFieldUpdateOperationsInput | $Enums.TeachingTime
    timeStart?: StringFieldUpdateOperationsInput | string
    timeEnd?: StringFieldUpdateOperationsInput | string
    availableTimes?: EnumTeachingTimeFieldUpdateOperationsInput | $Enums.TeachingTime
    user?: UserUpdateOneRequiredWithoutTutorProfileNestedInput
    tutorSubjects?: TutorSubjectUpdateManyWithoutTutorNestedInput
    reviews?: ReviewUpdateManyWithoutTutorNestedInput
    levels?: TutorLevelUpdateManyWithoutTutorProfileNestedInput
    BookingTutor?: BookingTutorUpdateManyWithoutAssignedTutorNestedInput
  }

  export type TutorProfileUncheckedUpdateWithoutExperiencesInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    tutorName?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    pricePerHour?: IntFieldUpdateOperationsInput | number
    languageTaught?: EnumLanguageFieldUpdateOperationsInput | $Enums.Language
    sex?: EnumSexMethodFieldUpdateOperationsInput | $Enums.SexMethod
    description?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: StringFieldUpdateOperationsInput | string
    verifyed?: BoolFieldUpdateOperationsInput | boolean
    technique?: NullableStringFieldUpdateOperationsInput | string | null
    teachingMethod?: EnumTeachingMethodFieldUpdateOperationsInput | $Enums.TeachingMethod
    teachingTime?: EnumTeachingTimeFieldUpdateOperationsInput | $Enums.TeachingTime
    timeStart?: StringFieldUpdateOperationsInput | string
    timeEnd?: StringFieldUpdateOperationsInput | string
    availableTimes?: EnumTeachingTimeFieldUpdateOperationsInput | $Enums.TeachingTime
    tutorSubjects?: TutorSubjectUncheckedUpdateManyWithoutTutorNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutTutorNestedInput
    levels?: TutorLevelUncheckedUpdateManyWithoutTutorProfileNestedInput
    BookingTutor?: BookingTutorUncheckedUpdateManyWithoutAssignedTutorNestedInput
  }

  export type TutorProfileCreateWithoutReviewsInput = {
    tutorName: string
    province: string
    image: string
    pricePerHour: number
    languageTaught?: $Enums.Language
    sex?: $Enums.SexMethod
    description?: string | null
    phoneNumber: string
    verifyed?: boolean
    technique?: string | null
    teachingMethod?: $Enums.TeachingMethod
    teachingTime?: $Enums.TeachingTime
    timeStart: string
    timeEnd: string
    availableTimes?: $Enums.TeachingTime
    user: UserCreateNestedOneWithoutTutorProfileInput
    tutorSubjects?: TutorSubjectCreateNestedManyWithoutTutorInput
    experiences?: ExperienceCreateNestedManyWithoutTutorInput
    levels?: TutorLevelCreateNestedManyWithoutTutorProfileInput
    BookingTutor?: BookingTutorCreateNestedManyWithoutAssignedTutorInput
  }

  export type TutorProfileUncheckedCreateWithoutReviewsInput = {
    id?: number
    userId: number
    tutorName: string
    province: string
    image: string
    pricePerHour: number
    languageTaught?: $Enums.Language
    sex?: $Enums.SexMethod
    description?: string | null
    phoneNumber: string
    verifyed?: boolean
    technique?: string | null
    teachingMethod?: $Enums.TeachingMethod
    teachingTime?: $Enums.TeachingTime
    timeStart: string
    timeEnd: string
    availableTimes?: $Enums.TeachingTime
    tutorSubjects?: TutorSubjectUncheckedCreateNestedManyWithoutTutorInput
    experiences?: ExperienceUncheckedCreateNestedManyWithoutTutorInput
    levels?: TutorLevelUncheckedCreateNestedManyWithoutTutorProfileInput
    BookingTutor?: BookingTutorUncheckedCreateNestedManyWithoutAssignedTutorInput
  }

  export type TutorProfileCreateOrConnectWithoutReviewsInput = {
    where: TutorProfileWhereUniqueInput
    create: XOR<TutorProfileCreateWithoutReviewsInput, TutorProfileUncheckedCreateWithoutReviewsInput>
  }

  export type UserCreateWithoutReviewsInput = {
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    tutorProfile?: TutorProfileCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutReviewsInput = {
    id?: number
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    tutorProfile?: TutorProfileUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutReviewsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
  }

  export type TutorProfileUpsertWithoutReviewsInput = {
    update: XOR<TutorProfileUpdateWithoutReviewsInput, TutorProfileUncheckedUpdateWithoutReviewsInput>
    create: XOR<TutorProfileCreateWithoutReviewsInput, TutorProfileUncheckedCreateWithoutReviewsInput>
    where?: TutorProfileWhereInput
  }

  export type TutorProfileUpdateToOneWithWhereWithoutReviewsInput = {
    where?: TutorProfileWhereInput
    data: XOR<TutorProfileUpdateWithoutReviewsInput, TutorProfileUncheckedUpdateWithoutReviewsInput>
  }

  export type TutorProfileUpdateWithoutReviewsInput = {
    tutorName?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    pricePerHour?: IntFieldUpdateOperationsInput | number
    languageTaught?: EnumLanguageFieldUpdateOperationsInput | $Enums.Language
    sex?: EnumSexMethodFieldUpdateOperationsInput | $Enums.SexMethod
    description?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: StringFieldUpdateOperationsInput | string
    verifyed?: BoolFieldUpdateOperationsInput | boolean
    technique?: NullableStringFieldUpdateOperationsInput | string | null
    teachingMethod?: EnumTeachingMethodFieldUpdateOperationsInput | $Enums.TeachingMethod
    teachingTime?: EnumTeachingTimeFieldUpdateOperationsInput | $Enums.TeachingTime
    timeStart?: StringFieldUpdateOperationsInput | string
    timeEnd?: StringFieldUpdateOperationsInput | string
    availableTimes?: EnumTeachingTimeFieldUpdateOperationsInput | $Enums.TeachingTime
    user?: UserUpdateOneRequiredWithoutTutorProfileNestedInput
    tutorSubjects?: TutorSubjectUpdateManyWithoutTutorNestedInput
    experiences?: ExperienceUpdateManyWithoutTutorNestedInput
    levels?: TutorLevelUpdateManyWithoutTutorProfileNestedInput
    BookingTutor?: BookingTutorUpdateManyWithoutAssignedTutorNestedInput
  }

  export type TutorProfileUncheckedUpdateWithoutReviewsInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    tutorName?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    pricePerHour?: IntFieldUpdateOperationsInput | number
    languageTaught?: EnumLanguageFieldUpdateOperationsInput | $Enums.Language
    sex?: EnumSexMethodFieldUpdateOperationsInput | $Enums.SexMethod
    description?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: StringFieldUpdateOperationsInput | string
    verifyed?: BoolFieldUpdateOperationsInput | boolean
    technique?: NullableStringFieldUpdateOperationsInput | string | null
    teachingMethod?: EnumTeachingMethodFieldUpdateOperationsInput | $Enums.TeachingMethod
    teachingTime?: EnumTeachingTimeFieldUpdateOperationsInput | $Enums.TeachingTime
    timeStart?: StringFieldUpdateOperationsInput | string
    timeEnd?: StringFieldUpdateOperationsInput | string
    availableTimes?: EnumTeachingTimeFieldUpdateOperationsInput | $Enums.TeachingTime
    tutorSubjects?: TutorSubjectUncheckedUpdateManyWithoutTutorNestedInput
    experiences?: ExperienceUncheckedUpdateManyWithoutTutorNestedInput
    levels?: TutorLevelUncheckedUpdateManyWithoutTutorProfileNestedInput
    BookingTutor?: BookingTutorUncheckedUpdateManyWithoutAssignedTutorNestedInput
  }

  export type UserUpsertWithoutReviewsInput = {
    update: XOR<UserUpdateWithoutReviewsInput, UserUncheckedUpdateWithoutReviewsInput>
    create: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReviewsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReviewsInput, UserUncheckedUpdateWithoutReviewsInput>
  }

  export type UserUpdateWithoutReviewsInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tutorProfile?: TutorProfileUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutReviewsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tutorProfile?: TutorProfileUncheckedUpdateOneWithoutUserNestedInput
  }

  export type TutorSubjectCreateWithoutCategoryInput = {
    tutor: TutorProfileCreateNestedOneWithoutTutorSubjectsInput
  }

  export type TutorSubjectUncheckedCreateWithoutCategoryInput = {
    id?: number
    tutorId: number
  }

  export type TutorSubjectCreateOrConnectWithoutCategoryInput = {
    where: TutorSubjectWhereUniqueInput
    create: XOR<TutorSubjectCreateWithoutCategoryInput, TutorSubjectUncheckedCreateWithoutCategoryInput>
  }

  export type TutorSubjectCreateManyCategoryInputEnvelope = {
    data: TutorSubjectCreateManyCategoryInput | TutorSubjectCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type BookingTutorCreateWithoutSubjectInput = {
    fullName: string
    phoneNumber: string
    email?: string | null
    subjectName?: string | null
    level?: string | null
    target?: string | null
    nationalityTeacher?: string | null
    teacherSex?: $Enums.SexMethod | null
    studyingDays?: $Enums.TeachingTime | null
    studyingTimes?: string | null
    startStudyingDate?: string | null
    teachingMethod?: $Enums.TeachingMethod | null
    studyLocation?: string | null
    yourCity?: string | null
    note?: string | null
    status?: $Enums.BookingStatus | null
    createdAt?: Date | string
    updatedAt?: Date | string
    assignedTutor?: TutorProfileCreateNestedOneWithoutBookingTutorInput
  }

  export type BookingTutorUncheckedCreateWithoutSubjectInput = {
    id?: number
    fullName: string
    phoneNumber: string
    email?: string | null
    subjectName?: string | null
    level?: string | null
    target?: string | null
    nationalityTeacher?: string | null
    teacherSex?: $Enums.SexMethod | null
    studyingDays?: $Enums.TeachingTime | null
    studyingTimes?: string | null
    startStudyingDate?: string | null
    teachingMethod?: $Enums.TeachingMethod | null
    studyLocation?: string | null
    yourCity?: string | null
    note?: string | null
    assignedTutorId?: number | null
    status?: $Enums.BookingStatus | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookingTutorCreateOrConnectWithoutSubjectInput = {
    where: BookingTutorWhereUniqueInput
    create: XOR<BookingTutorCreateWithoutSubjectInput, BookingTutorUncheckedCreateWithoutSubjectInput>
  }

  export type BookingTutorCreateManySubjectInputEnvelope = {
    data: BookingTutorCreateManySubjectInput | BookingTutorCreateManySubjectInput[]
    skipDuplicates?: boolean
  }

  export type TutorSubjectUpsertWithWhereUniqueWithoutCategoryInput = {
    where: TutorSubjectWhereUniqueInput
    update: XOR<TutorSubjectUpdateWithoutCategoryInput, TutorSubjectUncheckedUpdateWithoutCategoryInput>
    create: XOR<TutorSubjectCreateWithoutCategoryInput, TutorSubjectUncheckedCreateWithoutCategoryInput>
  }

  export type TutorSubjectUpdateWithWhereUniqueWithoutCategoryInput = {
    where: TutorSubjectWhereUniqueInput
    data: XOR<TutorSubjectUpdateWithoutCategoryInput, TutorSubjectUncheckedUpdateWithoutCategoryInput>
  }

  export type TutorSubjectUpdateManyWithWhereWithoutCategoryInput = {
    where: TutorSubjectScalarWhereInput
    data: XOR<TutorSubjectUpdateManyMutationInput, TutorSubjectUncheckedUpdateManyWithoutCategoryInput>
  }

  export type BookingTutorUpsertWithWhereUniqueWithoutSubjectInput = {
    where: BookingTutorWhereUniqueInput
    update: XOR<BookingTutorUpdateWithoutSubjectInput, BookingTutorUncheckedUpdateWithoutSubjectInput>
    create: XOR<BookingTutorCreateWithoutSubjectInput, BookingTutorUncheckedCreateWithoutSubjectInput>
  }

  export type BookingTutorUpdateWithWhereUniqueWithoutSubjectInput = {
    where: BookingTutorWhereUniqueInput
    data: XOR<BookingTutorUpdateWithoutSubjectInput, BookingTutorUncheckedUpdateWithoutSubjectInput>
  }

  export type BookingTutorUpdateManyWithWhereWithoutSubjectInput = {
    where: BookingTutorScalarWhereInput
    data: XOR<BookingTutorUpdateManyMutationInput, BookingTutorUncheckedUpdateManyWithoutSubjectInput>
  }

  export type TutorProfileCreateWithoutTutorSubjectsInput = {
    tutorName: string
    province: string
    image: string
    pricePerHour: number
    languageTaught?: $Enums.Language
    sex?: $Enums.SexMethod
    description?: string | null
    phoneNumber: string
    verifyed?: boolean
    technique?: string | null
    teachingMethod?: $Enums.TeachingMethod
    teachingTime?: $Enums.TeachingTime
    timeStart: string
    timeEnd: string
    availableTimes?: $Enums.TeachingTime
    user: UserCreateNestedOneWithoutTutorProfileInput
    experiences?: ExperienceCreateNestedManyWithoutTutorInput
    reviews?: ReviewCreateNestedManyWithoutTutorInput
    levels?: TutorLevelCreateNestedManyWithoutTutorProfileInput
    BookingTutor?: BookingTutorCreateNestedManyWithoutAssignedTutorInput
  }

  export type TutorProfileUncheckedCreateWithoutTutorSubjectsInput = {
    id?: number
    userId: number
    tutorName: string
    province: string
    image: string
    pricePerHour: number
    languageTaught?: $Enums.Language
    sex?: $Enums.SexMethod
    description?: string | null
    phoneNumber: string
    verifyed?: boolean
    technique?: string | null
    teachingMethod?: $Enums.TeachingMethod
    teachingTime?: $Enums.TeachingTime
    timeStart: string
    timeEnd: string
    availableTimes?: $Enums.TeachingTime
    experiences?: ExperienceUncheckedCreateNestedManyWithoutTutorInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutTutorInput
    levels?: TutorLevelUncheckedCreateNestedManyWithoutTutorProfileInput
    BookingTutor?: BookingTutorUncheckedCreateNestedManyWithoutAssignedTutorInput
  }

  export type TutorProfileCreateOrConnectWithoutTutorSubjectsInput = {
    where: TutorProfileWhereUniqueInput
    create: XOR<TutorProfileCreateWithoutTutorSubjectsInput, TutorProfileUncheckedCreateWithoutTutorSubjectsInput>
  }

  export type SubjectCategoryCreateWithoutTutorsInput = {
    name: string
    icon?: string | null
    BookingTutor?: BookingTutorCreateNestedManyWithoutSubjectInput
  }

  export type SubjectCategoryUncheckedCreateWithoutTutorsInput = {
    id?: number
    name: string
    icon?: string | null
    BookingTutor?: BookingTutorUncheckedCreateNestedManyWithoutSubjectInput
  }

  export type SubjectCategoryCreateOrConnectWithoutTutorsInput = {
    where: SubjectCategoryWhereUniqueInput
    create: XOR<SubjectCategoryCreateWithoutTutorsInput, SubjectCategoryUncheckedCreateWithoutTutorsInput>
  }

  export type TutorProfileUpsertWithoutTutorSubjectsInput = {
    update: XOR<TutorProfileUpdateWithoutTutorSubjectsInput, TutorProfileUncheckedUpdateWithoutTutorSubjectsInput>
    create: XOR<TutorProfileCreateWithoutTutorSubjectsInput, TutorProfileUncheckedCreateWithoutTutorSubjectsInput>
    where?: TutorProfileWhereInput
  }

  export type TutorProfileUpdateToOneWithWhereWithoutTutorSubjectsInput = {
    where?: TutorProfileWhereInput
    data: XOR<TutorProfileUpdateWithoutTutorSubjectsInput, TutorProfileUncheckedUpdateWithoutTutorSubjectsInput>
  }

  export type TutorProfileUpdateWithoutTutorSubjectsInput = {
    tutorName?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    pricePerHour?: IntFieldUpdateOperationsInput | number
    languageTaught?: EnumLanguageFieldUpdateOperationsInput | $Enums.Language
    sex?: EnumSexMethodFieldUpdateOperationsInput | $Enums.SexMethod
    description?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: StringFieldUpdateOperationsInput | string
    verifyed?: BoolFieldUpdateOperationsInput | boolean
    technique?: NullableStringFieldUpdateOperationsInput | string | null
    teachingMethod?: EnumTeachingMethodFieldUpdateOperationsInput | $Enums.TeachingMethod
    teachingTime?: EnumTeachingTimeFieldUpdateOperationsInput | $Enums.TeachingTime
    timeStart?: StringFieldUpdateOperationsInput | string
    timeEnd?: StringFieldUpdateOperationsInput | string
    availableTimes?: EnumTeachingTimeFieldUpdateOperationsInput | $Enums.TeachingTime
    user?: UserUpdateOneRequiredWithoutTutorProfileNestedInput
    experiences?: ExperienceUpdateManyWithoutTutorNestedInput
    reviews?: ReviewUpdateManyWithoutTutorNestedInput
    levels?: TutorLevelUpdateManyWithoutTutorProfileNestedInput
    BookingTutor?: BookingTutorUpdateManyWithoutAssignedTutorNestedInput
  }

  export type TutorProfileUncheckedUpdateWithoutTutorSubjectsInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    tutorName?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    pricePerHour?: IntFieldUpdateOperationsInput | number
    languageTaught?: EnumLanguageFieldUpdateOperationsInput | $Enums.Language
    sex?: EnumSexMethodFieldUpdateOperationsInput | $Enums.SexMethod
    description?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: StringFieldUpdateOperationsInput | string
    verifyed?: BoolFieldUpdateOperationsInput | boolean
    technique?: NullableStringFieldUpdateOperationsInput | string | null
    teachingMethod?: EnumTeachingMethodFieldUpdateOperationsInput | $Enums.TeachingMethod
    teachingTime?: EnumTeachingTimeFieldUpdateOperationsInput | $Enums.TeachingTime
    timeStart?: StringFieldUpdateOperationsInput | string
    timeEnd?: StringFieldUpdateOperationsInput | string
    availableTimes?: EnumTeachingTimeFieldUpdateOperationsInput | $Enums.TeachingTime
    experiences?: ExperienceUncheckedUpdateManyWithoutTutorNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutTutorNestedInput
    levels?: TutorLevelUncheckedUpdateManyWithoutTutorProfileNestedInput
    BookingTutor?: BookingTutorUncheckedUpdateManyWithoutAssignedTutorNestedInput
  }

  export type SubjectCategoryUpsertWithoutTutorsInput = {
    update: XOR<SubjectCategoryUpdateWithoutTutorsInput, SubjectCategoryUncheckedUpdateWithoutTutorsInput>
    create: XOR<SubjectCategoryCreateWithoutTutorsInput, SubjectCategoryUncheckedCreateWithoutTutorsInput>
    where?: SubjectCategoryWhereInput
  }

  export type SubjectCategoryUpdateToOneWithWhereWithoutTutorsInput = {
    where?: SubjectCategoryWhereInput
    data: XOR<SubjectCategoryUpdateWithoutTutorsInput, SubjectCategoryUncheckedUpdateWithoutTutorsInput>
  }

  export type SubjectCategoryUpdateWithoutTutorsInput = {
    name?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    BookingTutor?: BookingTutorUpdateManyWithoutSubjectNestedInput
  }

  export type SubjectCategoryUncheckedUpdateWithoutTutorsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    BookingTutor?: BookingTutorUncheckedUpdateManyWithoutSubjectNestedInput
  }

  export type ReviewCreateManyUserInput = {
    id?: number
    comment: string
    rating: number
    tutorId: number
    createdAt?: Date | string
  }

  export type ReviewUpdateWithoutUserInput = {
    comment?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tutor?: TutorProfileUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type ReviewUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    tutorId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    tutorId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TutorSubjectCreateManyTutorInput = {
    id?: number
    categoryId: number
  }

  export type ExperienceCreateManyTutorInput = {
    id?: number
    detail: string
  }

  export type ReviewCreateManyTutorInput = {
    id?: number
    comment: string
    rating: number
    userId: number
    createdAt?: Date | string
  }

  export type TutorLevelCreateManyTutorProfileInput = {
    id?: number
    teachingLevelId: number
  }

  export type BookingTutorCreateManyAssignedTutorInput = {
    id?: number
    fullName: string
    phoneNumber: string
    email?: string | null
    subjectId?: number | null
    subjectName?: string | null
    level?: string | null
    target?: string | null
    nationalityTeacher?: string | null
    teacherSex?: $Enums.SexMethod | null
    studyingDays?: $Enums.TeachingTime | null
    studyingTimes?: string | null
    startStudyingDate?: string | null
    teachingMethod?: $Enums.TeachingMethod | null
    studyLocation?: string | null
    yourCity?: string | null
    note?: string | null
    status?: $Enums.BookingStatus | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TutorSubjectUpdateWithoutTutorInput = {
    category?: SubjectCategoryUpdateOneRequiredWithoutTutorsNestedInput
  }

  export type TutorSubjectUncheckedUpdateWithoutTutorInput = {
    id?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
  }

  export type TutorSubjectUncheckedUpdateManyWithoutTutorInput = {
    id?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
  }

  export type ExperienceUpdateWithoutTutorInput = {
    detail?: StringFieldUpdateOperationsInput | string
  }

  export type ExperienceUncheckedUpdateWithoutTutorInput = {
    id?: IntFieldUpdateOperationsInput | number
    detail?: StringFieldUpdateOperationsInput | string
  }

  export type ExperienceUncheckedUpdateManyWithoutTutorInput = {
    id?: IntFieldUpdateOperationsInput | number
    detail?: StringFieldUpdateOperationsInput | string
  }

  export type ReviewUpdateWithoutTutorInput = {
    comment?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type ReviewUncheckedUpdateWithoutTutorInput = {
    id?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUncheckedUpdateManyWithoutTutorInput = {
    id?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TutorLevelUpdateWithoutTutorProfileInput = {
    teachingLevel?: TeachingLevelUpdateOneRequiredWithoutTutorsNestedInput
  }

  export type TutorLevelUncheckedUpdateWithoutTutorProfileInput = {
    id?: IntFieldUpdateOperationsInput | number
    teachingLevelId?: IntFieldUpdateOperationsInput | number
  }

  export type TutorLevelUncheckedUpdateManyWithoutTutorProfileInput = {
    id?: IntFieldUpdateOperationsInput | number
    teachingLevelId?: IntFieldUpdateOperationsInput | number
  }

  export type BookingTutorUpdateWithoutAssignedTutorInput = {
    fullName?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    subjectName?: NullableStringFieldUpdateOperationsInput | string | null
    level?: NullableStringFieldUpdateOperationsInput | string | null
    target?: NullableStringFieldUpdateOperationsInput | string | null
    nationalityTeacher?: NullableStringFieldUpdateOperationsInput | string | null
    teacherSex?: NullableEnumSexMethodFieldUpdateOperationsInput | $Enums.SexMethod | null
    studyingDays?: NullableEnumTeachingTimeFieldUpdateOperationsInput | $Enums.TeachingTime | null
    studyingTimes?: NullableStringFieldUpdateOperationsInput | string | null
    startStudyingDate?: NullableStringFieldUpdateOperationsInput | string | null
    teachingMethod?: NullableEnumTeachingMethodFieldUpdateOperationsInput | $Enums.TeachingMethod | null
    studyLocation?: NullableStringFieldUpdateOperationsInput | string | null
    yourCity?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subject?: SubjectCategoryUpdateOneWithoutBookingTutorNestedInput
  }

  export type BookingTutorUncheckedUpdateWithoutAssignedTutorInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullName?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    subjectId?: NullableIntFieldUpdateOperationsInput | number | null
    subjectName?: NullableStringFieldUpdateOperationsInput | string | null
    level?: NullableStringFieldUpdateOperationsInput | string | null
    target?: NullableStringFieldUpdateOperationsInput | string | null
    nationalityTeacher?: NullableStringFieldUpdateOperationsInput | string | null
    teacherSex?: NullableEnumSexMethodFieldUpdateOperationsInput | $Enums.SexMethod | null
    studyingDays?: NullableEnumTeachingTimeFieldUpdateOperationsInput | $Enums.TeachingTime | null
    studyingTimes?: NullableStringFieldUpdateOperationsInput | string | null
    startStudyingDate?: NullableStringFieldUpdateOperationsInput | string | null
    teachingMethod?: NullableEnumTeachingMethodFieldUpdateOperationsInput | $Enums.TeachingMethod | null
    studyLocation?: NullableStringFieldUpdateOperationsInput | string | null
    yourCity?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingTutorUncheckedUpdateManyWithoutAssignedTutorInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullName?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    subjectId?: NullableIntFieldUpdateOperationsInput | number | null
    subjectName?: NullableStringFieldUpdateOperationsInput | string | null
    level?: NullableStringFieldUpdateOperationsInput | string | null
    target?: NullableStringFieldUpdateOperationsInput | string | null
    nationalityTeacher?: NullableStringFieldUpdateOperationsInput | string | null
    teacherSex?: NullableEnumSexMethodFieldUpdateOperationsInput | $Enums.SexMethod | null
    studyingDays?: NullableEnumTeachingTimeFieldUpdateOperationsInput | $Enums.TeachingTime | null
    studyingTimes?: NullableStringFieldUpdateOperationsInput | string | null
    startStudyingDate?: NullableStringFieldUpdateOperationsInput | string | null
    teachingMethod?: NullableEnumTeachingMethodFieldUpdateOperationsInput | $Enums.TeachingMethod | null
    studyLocation?: NullableStringFieldUpdateOperationsInput | string | null
    yourCity?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TutorLevelCreateManyTeachingLevelInput = {
    id?: number
    tutorProfileId: number
  }

  export type TutorLevelUpdateWithoutTeachingLevelInput = {
    tutorProfile?: TutorProfileUpdateOneRequiredWithoutLevelsNestedInput
  }

  export type TutorLevelUncheckedUpdateWithoutTeachingLevelInput = {
    id?: IntFieldUpdateOperationsInput | number
    tutorProfileId?: IntFieldUpdateOperationsInput | number
  }

  export type TutorLevelUncheckedUpdateManyWithoutTeachingLevelInput = {
    id?: IntFieldUpdateOperationsInput | number
    tutorProfileId?: IntFieldUpdateOperationsInput | number
  }

  export type TutorSubjectCreateManyCategoryInput = {
    id?: number
    tutorId: number
  }

  export type BookingTutorCreateManySubjectInput = {
    id?: number
    fullName: string
    phoneNumber: string
    email?: string | null
    subjectName?: string | null
    level?: string | null
    target?: string | null
    nationalityTeacher?: string | null
    teacherSex?: $Enums.SexMethod | null
    studyingDays?: $Enums.TeachingTime | null
    studyingTimes?: string | null
    startStudyingDate?: string | null
    teachingMethod?: $Enums.TeachingMethod | null
    studyLocation?: string | null
    yourCity?: string | null
    note?: string | null
    assignedTutorId?: number | null
    status?: $Enums.BookingStatus | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TutorSubjectUpdateWithoutCategoryInput = {
    tutor?: TutorProfileUpdateOneRequiredWithoutTutorSubjectsNestedInput
  }

  export type TutorSubjectUncheckedUpdateWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    tutorId?: IntFieldUpdateOperationsInput | number
  }

  export type TutorSubjectUncheckedUpdateManyWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    tutorId?: IntFieldUpdateOperationsInput | number
  }

  export type BookingTutorUpdateWithoutSubjectInput = {
    fullName?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    subjectName?: NullableStringFieldUpdateOperationsInput | string | null
    level?: NullableStringFieldUpdateOperationsInput | string | null
    target?: NullableStringFieldUpdateOperationsInput | string | null
    nationalityTeacher?: NullableStringFieldUpdateOperationsInput | string | null
    teacherSex?: NullableEnumSexMethodFieldUpdateOperationsInput | $Enums.SexMethod | null
    studyingDays?: NullableEnumTeachingTimeFieldUpdateOperationsInput | $Enums.TeachingTime | null
    studyingTimes?: NullableStringFieldUpdateOperationsInput | string | null
    startStudyingDate?: NullableStringFieldUpdateOperationsInput | string | null
    teachingMethod?: NullableEnumTeachingMethodFieldUpdateOperationsInput | $Enums.TeachingMethod | null
    studyLocation?: NullableStringFieldUpdateOperationsInput | string | null
    yourCity?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedTutor?: TutorProfileUpdateOneWithoutBookingTutorNestedInput
  }

  export type BookingTutorUncheckedUpdateWithoutSubjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullName?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    subjectName?: NullableStringFieldUpdateOperationsInput | string | null
    level?: NullableStringFieldUpdateOperationsInput | string | null
    target?: NullableStringFieldUpdateOperationsInput | string | null
    nationalityTeacher?: NullableStringFieldUpdateOperationsInput | string | null
    teacherSex?: NullableEnumSexMethodFieldUpdateOperationsInput | $Enums.SexMethod | null
    studyingDays?: NullableEnumTeachingTimeFieldUpdateOperationsInput | $Enums.TeachingTime | null
    studyingTimes?: NullableStringFieldUpdateOperationsInput | string | null
    startStudyingDate?: NullableStringFieldUpdateOperationsInput | string | null
    teachingMethod?: NullableEnumTeachingMethodFieldUpdateOperationsInput | $Enums.TeachingMethod | null
    studyLocation?: NullableStringFieldUpdateOperationsInput | string | null
    yourCity?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    assignedTutorId?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableEnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingTutorUncheckedUpdateManyWithoutSubjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullName?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    subjectName?: NullableStringFieldUpdateOperationsInput | string | null
    level?: NullableStringFieldUpdateOperationsInput | string | null
    target?: NullableStringFieldUpdateOperationsInput | string | null
    nationalityTeacher?: NullableStringFieldUpdateOperationsInput | string | null
    teacherSex?: NullableEnumSexMethodFieldUpdateOperationsInput | $Enums.SexMethod | null
    studyingDays?: NullableEnumTeachingTimeFieldUpdateOperationsInput | $Enums.TeachingTime | null
    studyingTimes?: NullableStringFieldUpdateOperationsInput | string | null
    startStudyingDate?: NullableStringFieldUpdateOperationsInput | string | null
    teachingMethod?: NullableEnumTeachingMethodFieldUpdateOperationsInput | $Enums.TeachingMethod | null
    studyLocation?: NullableStringFieldUpdateOperationsInput | string | null
    yourCity?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    assignedTutorId?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableEnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}