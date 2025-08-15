
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
 * Model Department
 * 
 */
export type Department = $Result.DefaultSelection<Prisma.$DepartmentPayload>
/**
 * Model LabAssistant
 * 
 */
export type LabAssistant = $Result.DefaultSelection<Prisma.$LabAssistantPayload>
/**
 * Model LabRoom
 * 
 */
export type LabRoom = $Result.DefaultSelection<Prisma.$LabRoomPayload>
/**
 * Model TimeSlot
 * 
 */
export type TimeSlot = $Result.DefaultSelection<Prisma.$TimeSlotPayload>
/**
 * Model Course
 * 
 */
export type Course = $Result.DefaultSelection<Prisma.$CoursePayload>
/**
 * Model CourseOffering
 * 
 */
export type CourseOffering = $Result.DefaultSelection<Prisma.$CourseOfferingPayload>
/**
 * Model Section
 * 
 */
export type Section = $Result.DefaultSelection<Prisma.$SectionPayload>
/**
 * Model ScheduleAssignment
 * 
 */
export type ScheduleAssignment = $Result.DefaultSelection<Prisma.$ScheduleAssignmentPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  ADMIN: 'ADMIN',
  LAB_ASSISTANT: 'LAB_ASSISTANT'
};

export type Role = (typeof Role)[keyof typeof Role]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

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
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * `prisma.department`: Exposes CRUD operations for the **Department** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Departments
    * const departments = await prisma.department.findMany()
    * ```
    */
  get department(): Prisma.DepartmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.labAssistant`: Exposes CRUD operations for the **LabAssistant** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LabAssistants
    * const labAssistants = await prisma.labAssistant.findMany()
    * ```
    */
  get labAssistant(): Prisma.LabAssistantDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.labRoom`: Exposes CRUD operations for the **LabRoom** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LabRooms
    * const labRooms = await prisma.labRoom.findMany()
    * ```
    */
  get labRoom(): Prisma.LabRoomDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.timeSlot`: Exposes CRUD operations for the **TimeSlot** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TimeSlots
    * const timeSlots = await prisma.timeSlot.findMany()
    * ```
    */
  get timeSlot(): Prisma.TimeSlotDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.course`: Exposes CRUD operations for the **Course** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Courses
    * const courses = await prisma.course.findMany()
    * ```
    */
  get course(): Prisma.CourseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.courseOffering`: Exposes CRUD operations for the **CourseOffering** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CourseOfferings
    * const courseOfferings = await prisma.courseOffering.findMany()
    * ```
    */
  get courseOffering(): Prisma.CourseOfferingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.section`: Exposes CRUD operations for the **Section** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sections
    * const sections = await prisma.section.findMany()
    * ```
    */
  get section(): Prisma.SectionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.scheduleAssignment`: Exposes CRUD operations for the **ScheduleAssignment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ScheduleAssignments
    * const scheduleAssignments = await prisma.scheduleAssignment.findMany()
    * ```
    */
  get scheduleAssignment(): Prisma.ScheduleAssignmentDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.14.0
   * Query Engine version: 717184b7b35ea05dfa71a3236b7af656013e1e49
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
    Department: 'Department',
    LabAssistant: 'LabAssistant',
    LabRoom: 'LabRoom',
    TimeSlot: 'TimeSlot',
    Course: 'Course',
    CourseOffering: 'CourseOffering',
    Section: 'Section',
    ScheduleAssignment: 'ScheduleAssignment'
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
      modelProps: "user" | "department" | "labAssistant" | "labRoom" | "timeSlot" | "course" | "courseOffering" | "section" | "scheduleAssignment"
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
      Department: {
        payload: Prisma.$DepartmentPayload<ExtArgs>
        fields: Prisma.DepartmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DepartmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DepartmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          findFirst: {
            args: Prisma.DepartmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DepartmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          findMany: {
            args: Prisma.DepartmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>[]
          }
          create: {
            args: Prisma.DepartmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          createMany: {
            args: Prisma.DepartmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DepartmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>[]
          }
          delete: {
            args: Prisma.DepartmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          update: {
            args: Prisma.DepartmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          deleteMany: {
            args: Prisma.DepartmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DepartmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DepartmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>[]
          }
          upsert: {
            args: Prisma.DepartmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          aggregate: {
            args: Prisma.DepartmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDepartment>
          }
          groupBy: {
            args: Prisma.DepartmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<DepartmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.DepartmentCountArgs<ExtArgs>
            result: $Utils.Optional<DepartmentCountAggregateOutputType> | number
          }
        }
      }
      LabAssistant: {
        payload: Prisma.$LabAssistantPayload<ExtArgs>
        fields: Prisma.LabAssistantFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LabAssistantFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LabAssistantPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LabAssistantFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LabAssistantPayload>
          }
          findFirst: {
            args: Prisma.LabAssistantFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LabAssistantPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LabAssistantFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LabAssistantPayload>
          }
          findMany: {
            args: Prisma.LabAssistantFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LabAssistantPayload>[]
          }
          create: {
            args: Prisma.LabAssistantCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LabAssistantPayload>
          }
          createMany: {
            args: Prisma.LabAssistantCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LabAssistantCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LabAssistantPayload>[]
          }
          delete: {
            args: Prisma.LabAssistantDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LabAssistantPayload>
          }
          update: {
            args: Prisma.LabAssistantUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LabAssistantPayload>
          }
          deleteMany: {
            args: Prisma.LabAssistantDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LabAssistantUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LabAssistantUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LabAssistantPayload>[]
          }
          upsert: {
            args: Prisma.LabAssistantUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LabAssistantPayload>
          }
          aggregate: {
            args: Prisma.LabAssistantAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLabAssistant>
          }
          groupBy: {
            args: Prisma.LabAssistantGroupByArgs<ExtArgs>
            result: $Utils.Optional<LabAssistantGroupByOutputType>[]
          }
          count: {
            args: Prisma.LabAssistantCountArgs<ExtArgs>
            result: $Utils.Optional<LabAssistantCountAggregateOutputType> | number
          }
        }
      }
      LabRoom: {
        payload: Prisma.$LabRoomPayload<ExtArgs>
        fields: Prisma.LabRoomFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LabRoomFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LabRoomPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LabRoomFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LabRoomPayload>
          }
          findFirst: {
            args: Prisma.LabRoomFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LabRoomPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LabRoomFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LabRoomPayload>
          }
          findMany: {
            args: Prisma.LabRoomFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LabRoomPayload>[]
          }
          create: {
            args: Prisma.LabRoomCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LabRoomPayload>
          }
          createMany: {
            args: Prisma.LabRoomCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LabRoomCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LabRoomPayload>[]
          }
          delete: {
            args: Prisma.LabRoomDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LabRoomPayload>
          }
          update: {
            args: Prisma.LabRoomUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LabRoomPayload>
          }
          deleteMany: {
            args: Prisma.LabRoomDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LabRoomUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LabRoomUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LabRoomPayload>[]
          }
          upsert: {
            args: Prisma.LabRoomUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LabRoomPayload>
          }
          aggregate: {
            args: Prisma.LabRoomAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLabRoom>
          }
          groupBy: {
            args: Prisma.LabRoomGroupByArgs<ExtArgs>
            result: $Utils.Optional<LabRoomGroupByOutputType>[]
          }
          count: {
            args: Prisma.LabRoomCountArgs<ExtArgs>
            result: $Utils.Optional<LabRoomCountAggregateOutputType> | number
          }
        }
      }
      TimeSlot: {
        payload: Prisma.$TimeSlotPayload<ExtArgs>
        fields: Prisma.TimeSlotFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TimeSlotFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimeSlotPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TimeSlotFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimeSlotPayload>
          }
          findFirst: {
            args: Prisma.TimeSlotFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimeSlotPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TimeSlotFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimeSlotPayload>
          }
          findMany: {
            args: Prisma.TimeSlotFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimeSlotPayload>[]
          }
          create: {
            args: Prisma.TimeSlotCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimeSlotPayload>
          }
          createMany: {
            args: Prisma.TimeSlotCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TimeSlotCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimeSlotPayload>[]
          }
          delete: {
            args: Prisma.TimeSlotDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimeSlotPayload>
          }
          update: {
            args: Prisma.TimeSlotUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimeSlotPayload>
          }
          deleteMany: {
            args: Prisma.TimeSlotDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TimeSlotUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TimeSlotUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimeSlotPayload>[]
          }
          upsert: {
            args: Prisma.TimeSlotUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimeSlotPayload>
          }
          aggregate: {
            args: Prisma.TimeSlotAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTimeSlot>
          }
          groupBy: {
            args: Prisma.TimeSlotGroupByArgs<ExtArgs>
            result: $Utils.Optional<TimeSlotGroupByOutputType>[]
          }
          count: {
            args: Prisma.TimeSlotCountArgs<ExtArgs>
            result: $Utils.Optional<TimeSlotCountAggregateOutputType> | number
          }
        }
      }
      Course: {
        payload: Prisma.$CoursePayload<ExtArgs>
        fields: Prisma.CourseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CourseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CourseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          findFirst: {
            args: Prisma.CourseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CourseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          findMany: {
            args: Prisma.CourseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>[]
          }
          create: {
            args: Prisma.CourseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          createMany: {
            args: Prisma.CourseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CourseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>[]
          }
          delete: {
            args: Prisma.CourseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          update: {
            args: Prisma.CourseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          deleteMany: {
            args: Prisma.CourseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CourseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CourseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>[]
          }
          upsert: {
            args: Prisma.CourseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          aggregate: {
            args: Prisma.CourseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCourse>
          }
          groupBy: {
            args: Prisma.CourseGroupByArgs<ExtArgs>
            result: $Utils.Optional<CourseGroupByOutputType>[]
          }
          count: {
            args: Prisma.CourseCountArgs<ExtArgs>
            result: $Utils.Optional<CourseCountAggregateOutputType> | number
          }
        }
      }
      CourseOffering: {
        payload: Prisma.$CourseOfferingPayload<ExtArgs>
        fields: Prisma.CourseOfferingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CourseOfferingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseOfferingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CourseOfferingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseOfferingPayload>
          }
          findFirst: {
            args: Prisma.CourseOfferingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseOfferingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CourseOfferingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseOfferingPayload>
          }
          findMany: {
            args: Prisma.CourseOfferingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseOfferingPayload>[]
          }
          create: {
            args: Prisma.CourseOfferingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseOfferingPayload>
          }
          createMany: {
            args: Prisma.CourseOfferingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CourseOfferingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseOfferingPayload>[]
          }
          delete: {
            args: Prisma.CourseOfferingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseOfferingPayload>
          }
          update: {
            args: Prisma.CourseOfferingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseOfferingPayload>
          }
          deleteMany: {
            args: Prisma.CourseOfferingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CourseOfferingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CourseOfferingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseOfferingPayload>[]
          }
          upsert: {
            args: Prisma.CourseOfferingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseOfferingPayload>
          }
          aggregate: {
            args: Prisma.CourseOfferingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCourseOffering>
          }
          groupBy: {
            args: Prisma.CourseOfferingGroupByArgs<ExtArgs>
            result: $Utils.Optional<CourseOfferingGroupByOutputType>[]
          }
          count: {
            args: Prisma.CourseOfferingCountArgs<ExtArgs>
            result: $Utils.Optional<CourseOfferingCountAggregateOutputType> | number
          }
        }
      }
      Section: {
        payload: Prisma.$SectionPayload<ExtArgs>
        fields: Prisma.SectionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SectionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SectionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionPayload>
          }
          findFirst: {
            args: Prisma.SectionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SectionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionPayload>
          }
          findMany: {
            args: Prisma.SectionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionPayload>[]
          }
          create: {
            args: Prisma.SectionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionPayload>
          }
          createMany: {
            args: Prisma.SectionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SectionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionPayload>[]
          }
          delete: {
            args: Prisma.SectionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionPayload>
          }
          update: {
            args: Prisma.SectionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionPayload>
          }
          deleteMany: {
            args: Prisma.SectionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SectionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SectionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionPayload>[]
          }
          upsert: {
            args: Prisma.SectionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionPayload>
          }
          aggregate: {
            args: Prisma.SectionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSection>
          }
          groupBy: {
            args: Prisma.SectionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SectionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SectionCountArgs<ExtArgs>
            result: $Utils.Optional<SectionCountAggregateOutputType> | number
          }
        }
      }
      ScheduleAssignment: {
        payload: Prisma.$ScheduleAssignmentPayload<ExtArgs>
        fields: Prisma.ScheduleAssignmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ScheduleAssignmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScheduleAssignmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ScheduleAssignmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScheduleAssignmentPayload>
          }
          findFirst: {
            args: Prisma.ScheduleAssignmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScheduleAssignmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ScheduleAssignmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScheduleAssignmentPayload>
          }
          findMany: {
            args: Prisma.ScheduleAssignmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScheduleAssignmentPayload>[]
          }
          create: {
            args: Prisma.ScheduleAssignmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScheduleAssignmentPayload>
          }
          createMany: {
            args: Prisma.ScheduleAssignmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ScheduleAssignmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScheduleAssignmentPayload>[]
          }
          delete: {
            args: Prisma.ScheduleAssignmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScheduleAssignmentPayload>
          }
          update: {
            args: Prisma.ScheduleAssignmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScheduleAssignmentPayload>
          }
          deleteMany: {
            args: Prisma.ScheduleAssignmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ScheduleAssignmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ScheduleAssignmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScheduleAssignmentPayload>[]
          }
          upsert: {
            args: Prisma.ScheduleAssignmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScheduleAssignmentPayload>
          }
          aggregate: {
            args: Prisma.ScheduleAssignmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateScheduleAssignment>
          }
          groupBy: {
            args: Prisma.ScheduleAssignmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<ScheduleAssignmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.ScheduleAssignmentCountArgs<ExtArgs>
            result: $Utils.Optional<ScheduleAssignmentCountAggregateOutputType> | number
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
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
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
    department?: DepartmentOmit
    labAssistant?: LabAssistantOmit
    labRoom?: LabRoomOmit
    timeSlot?: TimeSlotOmit
    course?: CourseOmit
    courseOffering?: CourseOfferingOmit
    section?: SectionOmit
    scheduleAssignment?: ScheduleAssignmentOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type DepartmentCountOutputType
   */

  export type DepartmentCountOutputType = {
    courses: number
    labAssistants: number
  }

  export type DepartmentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    courses?: boolean | DepartmentCountOutputTypeCountCoursesArgs
    labAssistants?: boolean | DepartmentCountOutputTypeCountLabAssistantsArgs
  }

  // Custom InputTypes
  /**
   * DepartmentCountOutputType without action
   */
  export type DepartmentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DepartmentCountOutputType
     */
    select?: DepartmentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DepartmentCountOutputType without action
   */
  export type DepartmentCountOutputTypeCountCoursesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CourseWhereInput
  }

  /**
   * DepartmentCountOutputType without action
   */
  export type DepartmentCountOutputTypeCountLabAssistantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LabAssistantWhereInput
  }


  /**
   * Count Type LabAssistantCountOutputType
   */

  export type LabAssistantCountOutputType = {
    assignments: number
  }

  export type LabAssistantCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assignments?: boolean | LabAssistantCountOutputTypeCountAssignmentsArgs
  }

  // Custom InputTypes
  /**
   * LabAssistantCountOutputType without action
   */
  export type LabAssistantCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LabAssistantCountOutputType
     */
    select?: LabAssistantCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LabAssistantCountOutputType without action
   */
  export type LabAssistantCountOutputTypeCountAssignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScheduleAssignmentWhereInput
  }


  /**
   * Count Type LabRoomCountOutputType
   */

  export type LabRoomCountOutputType = {
    assignments: number
  }

  export type LabRoomCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assignments?: boolean | LabRoomCountOutputTypeCountAssignmentsArgs
  }

  // Custom InputTypes
  /**
   * LabRoomCountOutputType without action
   */
  export type LabRoomCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LabRoomCountOutputType
     */
    select?: LabRoomCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LabRoomCountOutputType without action
   */
  export type LabRoomCountOutputTypeCountAssignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScheduleAssignmentWhereInput
  }


  /**
   * Count Type TimeSlotCountOutputType
   */

  export type TimeSlotCountOutputType = {
    assignments: number
  }

  export type TimeSlotCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assignments?: boolean | TimeSlotCountOutputTypeCountAssignmentsArgs
  }

  // Custom InputTypes
  /**
   * TimeSlotCountOutputType without action
   */
  export type TimeSlotCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeSlotCountOutputType
     */
    select?: TimeSlotCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TimeSlotCountOutputType without action
   */
  export type TimeSlotCountOutputTypeCountAssignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScheduleAssignmentWhereInput
  }


  /**
   * Count Type CourseCountOutputType
   */

  export type CourseCountOutputType = {
    courseOfferings: number
  }

  export type CourseCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    courseOfferings?: boolean | CourseCountOutputTypeCountCourseOfferingsArgs
  }

  // Custom InputTypes
  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseCountOutputType
     */
    select?: CourseCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeCountCourseOfferingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CourseOfferingWhereInput
  }


  /**
   * Count Type CourseOfferingCountOutputType
   */

  export type CourseOfferingCountOutputType = {
    sections: number
  }

  export type CourseOfferingCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sections?: boolean | CourseOfferingCountOutputTypeCountSectionsArgs
  }

  // Custom InputTypes
  /**
   * CourseOfferingCountOutputType without action
   */
  export type CourseOfferingCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseOfferingCountOutputType
     */
    select?: CourseOfferingCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CourseOfferingCountOutputType without action
   */
  export type CourseOfferingCountOutputTypeCountSectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SectionWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
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
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    password: string
    role: $Enums.Role
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
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
    labAssistant?: boolean | User$labAssistantArgs<ExtArgs>
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
    labAssistant?: boolean | User$labAssistantArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      labAssistant: Prisma.$LabAssistantPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
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
    labAssistant<T extends User$labAssistantArgs<ExtArgs> = {}>(args?: Subset<T, User$labAssistantArgs<ExtArgs>>): Prisma__LabAssistantClient<$Result.GetResult<Prisma.$LabAssistantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
    readonly id: FieldRef<"User", 'String'>
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
   * User.labAssistant
   */
  export type User$labAssistantArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LabAssistant
     */
    select?: LabAssistantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LabAssistant
     */
    omit?: LabAssistantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabAssistantInclude<ExtArgs> | null
    where?: LabAssistantWhereInput
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
   * Model Department
   */

  export type AggregateDepartment = {
    _count: DepartmentCountAggregateOutputType | null
    _min: DepartmentMinAggregateOutputType | null
    _max: DepartmentMaxAggregateOutputType | null
  }

  export type DepartmentMinAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type DepartmentMaxAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type DepartmentCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type DepartmentMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type DepartmentMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type DepartmentCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type DepartmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Department to aggregate.
     */
    where?: DepartmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Departments to fetch.
     */
    orderBy?: DepartmentOrderByWithRelationInput | DepartmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DepartmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Departments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Departments
    **/
    _count?: true | DepartmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DepartmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DepartmentMaxAggregateInputType
  }

  export type GetDepartmentAggregateType<T extends DepartmentAggregateArgs> = {
        [P in keyof T & keyof AggregateDepartment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDepartment[P]>
      : GetScalarType<T[P], AggregateDepartment[P]>
  }




  export type DepartmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DepartmentWhereInput
    orderBy?: DepartmentOrderByWithAggregationInput | DepartmentOrderByWithAggregationInput[]
    by: DepartmentScalarFieldEnum[] | DepartmentScalarFieldEnum
    having?: DepartmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DepartmentCountAggregateInputType | true
    _min?: DepartmentMinAggregateInputType
    _max?: DepartmentMaxAggregateInputType
  }

  export type DepartmentGroupByOutputType = {
    id: string
    name: string
    _count: DepartmentCountAggregateOutputType | null
    _min: DepartmentMinAggregateOutputType | null
    _max: DepartmentMaxAggregateOutputType | null
  }

  type GetDepartmentGroupByPayload<T extends DepartmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DepartmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DepartmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DepartmentGroupByOutputType[P]>
            : GetScalarType<T[P], DepartmentGroupByOutputType[P]>
        }
      >
    >


  export type DepartmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    courses?: boolean | Department$coursesArgs<ExtArgs>
    labAssistants?: boolean | Department$labAssistantsArgs<ExtArgs>
    _count?: boolean | DepartmentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["department"]>

  export type DepartmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["department"]>

  export type DepartmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["department"]>

  export type DepartmentSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type DepartmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["department"]>
  export type DepartmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    courses?: boolean | Department$coursesArgs<ExtArgs>
    labAssistants?: boolean | Department$labAssistantsArgs<ExtArgs>
    _count?: boolean | DepartmentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DepartmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type DepartmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $DepartmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Department"
    objects: {
      courses: Prisma.$CoursePayload<ExtArgs>[]
      labAssistants: Prisma.$LabAssistantPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
    }, ExtArgs["result"]["department"]>
    composites: {}
  }

  type DepartmentGetPayload<S extends boolean | null | undefined | DepartmentDefaultArgs> = $Result.GetResult<Prisma.$DepartmentPayload, S>

  type DepartmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DepartmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DepartmentCountAggregateInputType | true
    }

  export interface DepartmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Department'], meta: { name: 'Department' } }
    /**
     * Find zero or one Department that matches the filter.
     * @param {DepartmentFindUniqueArgs} args - Arguments to find a Department
     * @example
     * // Get one Department
     * const department = await prisma.department.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DepartmentFindUniqueArgs>(args: SelectSubset<T, DepartmentFindUniqueArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Department that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DepartmentFindUniqueOrThrowArgs} args - Arguments to find a Department
     * @example
     * // Get one Department
     * const department = await prisma.department.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DepartmentFindUniqueOrThrowArgs>(args: SelectSubset<T, DepartmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Department that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentFindFirstArgs} args - Arguments to find a Department
     * @example
     * // Get one Department
     * const department = await prisma.department.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DepartmentFindFirstArgs>(args?: SelectSubset<T, DepartmentFindFirstArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Department that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentFindFirstOrThrowArgs} args - Arguments to find a Department
     * @example
     * // Get one Department
     * const department = await prisma.department.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DepartmentFindFirstOrThrowArgs>(args?: SelectSubset<T, DepartmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Departments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Departments
     * const departments = await prisma.department.findMany()
     * 
     * // Get first 10 Departments
     * const departments = await prisma.department.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const departmentWithIdOnly = await prisma.department.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DepartmentFindManyArgs>(args?: SelectSubset<T, DepartmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Department.
     * @param {DepartmentCreateArgs} args - Arguments to create a Department.
     * @example
     * // Create one Department
     * const Department = await prisma.department.create({
     *   data: {
     *     // ... data to create a Department
     *   }
     * })
     * 
     */
    create<T extends DepartmentCreateArgs>(args: SelectSubset<T, DepartmentCreateArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Departments.
     * @param {DepartmentCreateManyArgs} args - Arguments to create many Departments.
     * @example
     * // Create many Departments
     * const department = await prisma.department.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DepartmentCreateManyArgs>(args?: SelectSubset<T, DepartmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Departments and returns the data saved in the database.
     * @param {DepartmentCreateManyAndReturnArgs} args - Arguments to create many Departments.
     * @example
     * // Create many Departments
     * const department = await prisma.department.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Departments and only return the `id`
     * const departmentWithIdOnly = await prisma.department.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DepartmentCreateManyAndReturnArgs>(args?: SelectSubset<T, DepartmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Department.
     * @param {DepartmentDeleteArgs} args - Arguments to delete one Department.
     * @example
     * // Delete one Department
     * const Department = await prisma.department.delete({
     *   where: {
     *     // ... filter to delete one Department
     *   }
     * })
     * 
     */
    delete<T extends DepartmentDeleteArgs>(args: SelectSubset<T, DepartmentDeleteArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Department.
     * @param {DepartmentUpdateArgs} args - Arguments to update one Department.
     * @example
     * // Update one Department
     * const department = await prisma.department.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DepartmentUpdateArgs>(args: SelectSubset<T, DepartmentUpdateArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Departments.
     * @param {DepartmentDeleteManyArgs} args - Arguments to filter Departments to delete.
     * @example
     * // Delete a few Departments
     * const { count } = await prisma.department.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DepartmentDeleteManyArgs>(args?: SelectSubset<T, DepartmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Departments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Departments
     * const department = await prisma.department.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DepartmentUpdateManyArgs>(args: SelectSubset<T, DepartmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Departments and returns the data updated in the database.
     * @param {DepartmentUpdateManyAndReturnArgs} args - Arguments to update many Departments.
     * @example
     * // Update many Departments
     * const department = await prisma.department.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Departments and only return the `id`
     * const departmentWithIdOnly = await prisma.department.updateManyAndReturn({
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
    updateManyAndReturn<T extends DepartmentUpdateManyAndReturnArgs>(args: SelectSubset<T, DepartmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Department.
     * @param {DepartmentUpsertArgs} args - Arguments to update or create a Department.
     * @example
     * // Update or create a Department
     * const department = await prisma.department.upsert({
     *   create: {
     *     // ... data to create a Department
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Department we want to update
     *   }
     * })
     */
    upsert<T extends DepartmentUpsertArgs>(args: SelectSubset<T, DepartmentUpsertArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Departments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentCountArgs} args - Arguments to filter Departments to count.
     * @example
     * // Count the number of Departments
     * const count = await prisma.department.count({
     *   where: {
     *     // ... the filter for the Departments we want to count
     *   }
     * })
    **/
    count<T extends DepartmentCountArgs>(
      args?: Subset<T, DepartmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DepartmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Department.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DepartmentAggregateArgs>(args: Subset<T, DepartmentAggregateArgs>): Prisma.PrismaPromise<GetDepartmentAggregateType<T>>

    /**
     * Group by Department.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentGroupByArgs} args - Group by arguments.
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
      T extends DepartmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DepartmentGroupByArgs['orderBy'] }
        : { orderBy?: DepartmentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DepartmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDepartmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Department model
   */
  readonly fields: DepartmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Department.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DepartmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    courses<T extends Department$coursesArgs<ExtArgs> = {}>(args?: Subset<T, Department$coursesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    labAssistants<T extends Department$labAssistantsArgs<ExtArgs> = {}>(args?: Subset<T, Department$labAssistantsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LabAssistantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Department model
   */
  interface DepartmentFieldRefs {
    readonly id: FieldRef<"Department", 'String'>
    readonly name: FieldRef<"Department", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Department findUnique
   */
  export type DepartmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter, which Department to fetch.
     */
    where: DepartmentWhereUniqueInput
  }

  /**
   * Department findUniqueOrThrow
   */
  export type DepartmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter, which Department to fetch.
     */
    where: DepartmentWhereUniqueInput
  }

  /**
   * Department findFirst
   */
  export type DepartmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter, which Department to fetch.
     */
    where?: DepartmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Departments to fetch.
     */
    orderBy?: DepartmentOrderByWithRelationInput | DepartmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Departments.
     */
    cursor?: DepartmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Departments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Departments.
     */
    distinct?: DepartmentScalarFieldEnum | DepartmentScalarFieldEnum[]
  }

  /**
   * Department findFirstOrThrow
   */
  export type DepartmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter, which Department to fetch.
     */
    where?: DepartmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Departments to fetch.
     */
    orderBy?: DepartmentOrderByWithRelationInput | DepartmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Departments.
     */
    cursor?: DepartmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Departments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Departments.
     */
    distinct?: DepartmentScalarFieldEnum | DepartmentScalarFieldEnum[]
  }

  /**
   * Department findMany
   */
  export type DepartmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter, which Departments to fetch.
     */
    where?: DepartmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Departments to fetch.
     */
    orderBy?: DepartmentOrderByWithRelationInput | DepartmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Departments.
     */
    cursor?: DepartmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Departments.
     */
    skip?: number
    distinct?: DepartmentScalarFieldEnum | DepartmentScalarFieldEnum[]
  }

  /**
   * Department create
   */
  export type DepartmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * The data needed to create a Department.
     */
    data: XOR<DepartmentCreateInput, DepartmentUncheckedCreateInput>
  }

  /**
   * Department createMany
   */
  export type DepartmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Departments.
     */
    data: DepartmentCreateManyInput | DepartmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Department createManyAndReturn
   */
  export type DepartmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * The data used to create many Departments.
     */
    data: DepartmentCreateManyInput | DepartmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Department update
   */
  export type DepartmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * The data needed to update a Department.
     */
    data: XOR<DepartmentUpdateInput, DepartmentUncheckedUpdateInput>
    /**
     * Choose, which Department to update.
     */
    where: DepartmentWhereUniqueInput
  }

  /**
   * Department updateMany
   */
  export type DepartmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Departments.
     */
    data: XOR<DepartmentUpdateManyMutationInput, DepartmentUncheckedUpdateManyInput>
    /**
     * Filter which Departments to update
     */
    where?: DepartmentWhereInput
    /**
     * Limit how many Departments to update.
     */
    limit?: number
  }

  /**
   * Department updateManyAndReturn
   */
  export type DepartmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * The data used to update Departments.
     */
    data: XOR<DepartmentUpdateManyMutationInput, DepartmentUncheckedUpdateManyInput>
    /**
     * Filter which Departments to update
     */
    where?: DepartmentWhereInput
    /**
     * Limit how many Departments to update.
     */
    limit?: number
  }

  /**
   * Department upsert
   */
  export type DepartmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * The filter to search for the Department to update in case it exists.
     */
    where: DepartmentWhereUniqueInput
    /**
     * In case the Department found by the `where` argument doesn't exist, create a new Department with this data.
     */
    create: XOR<DepartmentCreateInput, DepartmentUncheckedCreateInput>
    /**
     * In case the Department was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DepartmentUpdateInput, DepartmentUncheckedUpdateInput>
  }

  /**
   * Department delete
   */
  export type DepartmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter which Department to delete.
     */
    where: DepartmentWhereUniqueInput
  }

  /**
   * Department deleteMany
   */
  export type DepartmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Departments to delete
     */
    where?: DepartmentWhereInput
    /**
     * Limit how many Departments to delete.
     */
    limit?: number
  }

  /**
   * Department.courses
   */
  export type Department$coursesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    where?: CourseWhereInput
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    cursor?: CourseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * Department.labAssistants
   */
  export type Department$labAssistantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LabAssistant
     */
    select?: LabAssistantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LabAssistant
     */
    omit?: LabAssistantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabAssistantInclude<ExtArgs> | null
    where?: LabAssistantWhereInput
    orderBy?: LabAssistantOrderByWithRelationInput | LabAssistantOrderByWithRelationInput[]
    cursor?: LabAssistantWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LabAssistantScalarFieldEnum | LabAssistantScalarFieldEnum[]
  }

  /**
   * Department without action
   */
  export type DepartmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
  }


  /**
   * Model LabAssistant
   */

  export type AggregateLabAssistant = {
    _count: LabAssistantCountAggregateOutputType | null
    _min: LabAssistantMinAggregateOutputType | null
    _max: LabAssistantMaxAggregateOutputType | null
  }

  export type LabAssistantMinAggregateOutputType = {
    id: string | null
    userId: string | null
    firstName: string | null
    lastName: string | null
    departmentId: string | null
  }

  export type LabAssistantMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    firstName: string | null
    lastName: string | null
    departmentId: string | null
  }

  export type LabAssistantCountAggregateOutputType = {
    id: number
    userId: number
    firstName: number
    lastName: number
    departmentId: number
    _all: number
  }


  export type LabAssistantMinAggregateInputType = {
    id?: true
    userId?: true
    firstName?: true
    lastName?: true
    departmentId?: true
  }

  export type LabAssistantMaxAggregateInputType = {
    id?: true
    userId?: true
    firstName?: true
    lastName?: true
    departmentId?: true
  }

  export type LabAssistantCountAggregateInputType = {
    id?: true
    userId?: true
    firstName?: true
    lastName?: true
    departmentId?: true
    _all?: true
  }

  export type LabAssistantAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LabAssistant to aggregate.
     */
    where?: LabAssistantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LabAssistants to fetch.
     */
    orderBy?: LabAssistantOrderByWithRelationInput | LabAssistantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LabAssistantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LabAssistants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LabAssistants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LabAssistants
    **/
    _count?: true | LabAssistantCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LabAssistantMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LabAssistantMaxAggregateInputType
  }

  export type GetLabAssistantAggregateType<T extends LabAssistantAggregateArgs> = {
        [P in keyof T & keyof AggregateLabAssistant]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLabAssistant[P]>
      : GetScalarType<T[P], AggregateLabAssistant[P]>
  }




  export type LabAssistantGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LabAssistantWhereInput
    orderBy?: LabAssistantOrderByWithAggregationInput | LabAssistantOrderByWithAggregationInput[]
    by: LabAssistantScalarFieldEnum[] | LabAssistantScalarFieldEnum
    having?: LabAssistantScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LabAssistantCountAggregateInputType | true
    _min?: LabAssistantMinAggregateInputType
    _max?: LabAssistantMaxAggregateInputType
  }

  export type LabAssistantGroupByOutputType = {
    id: string
    userId: string
    firstName: string
    lastName: string
    departmentId: string
    _count: LabAssistantCountAggregateOutputType | null
    _min: LabAssistantMinAggregateOutputType | null
    _max: LabAssistantMaxAggregateOutputType | null
  }

  type GetLabAssistantGroupByPayload<T extends LabAssistantGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LabAssistantGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LabAssistantGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LabAssistantGroupByOutputType[P]>
            : GetScalarType<T[P], LabAssistantGroupByOutputType[P]>
        }
      >
    >


  export type LabAssistantSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    firstName?: boolean
    lastName?: boolean
    departmentId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    department?: boolean | DepartmentDefaultArgs<ExtArgs>
    assignments?: boolean | LabAssistant$assignmentsArgs<ExtArgs>
    _count?: boolean | LabAssistantCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["labAssistant"]>

  export type LabAssistantSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    firstName?: boolean
    lastName?: boolean
    departmentId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    department?: boolean | DepartmentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["labAssistant"]>

  export type LabAssistantSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    firstName?: boolean
    lastName?: boolean
    departmentId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    department?: boolean | DepartmentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["labAssistant"]>

  export type LabAssistantSelectScalar = {
    id?: boolean
    userId?: boolean
    firstName?: boolean
    lastName?: boolean
    departmentId?: boolean
  }

  export type LabAssistantOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "firstName" | "lastName" | "departmentId", ExtArgs["result"]["labAssistant"]>
  export type LabAssistantInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    department?: boolean | DepartmentDefaultArgs<ExtArgs>
    assignments?: boolean | LabAssistant$assignmentsArgs<ExtArgs>
    _count?: boolean | LabAssistantCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type LabAssistantIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    department?: boolean | DepartmentDefaultArgs<ExtArgs>
  }
  export type LabAssistantIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    department?: boolean | DepartmentDefaultArgs<ExtArgs>
  }

  export type $LabAssistantPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LabAssistant"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      department: Prisma.$DepartmentPayload<ExtArgs>
      assignments: Prisma.$ScheduleAssignmentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      firstName: string
      lastName: string
      departmentId: string
    }, ExtArgs["result"]["labAssistant"]>
    composites: {}
  }

  type LabAssistantGetPayload<S extends boolean | null | undefined | LabAssistantDefaultArgs> = $Result.GetResult<Prisma.$LabAssistantPayload, S>

  type LabAssistantCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LabAssistantFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LabAssistantCountAggregateInputType | true
    }

  export interface LabAssistantDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LabAssistant'], meta: { name: 'LabAssistant' } }
    /**
     * Find zero or one LabAssistant that matches the filter.
     * @param {LabAssistantFindUniqueArgs} args - Arguments to find a LabAssistant
     * @example
     * // Get one LabAssistant
     * const labAssistant = await prisma.labAssistant.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LabAssistantFindUniqueArgs>(args: SelectSubset<T, LabAssistantFindUniqueArgs<ExtArgs>>): Prisma__LabAssistantClient<$Result.GetResult<Prisma.$LabAssistantPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LabAssistant that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LabAssistantFindUniqueOrThrowArgs} args - Arguments to find a LabAssistant
     * @example
     * // Get one LabAssistant
     * const labAssistant = await prisma.labAssistant.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LabAssistantFindUniqueOrThrowArgs>(args: SelectSubset<T, LabAssistantFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LabAssistantClient<$Result.GetResult<Prisma.$LabAssistantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LabAssistant that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LabAssistantFindFirstArgs} args - Arguments to find a LabAssistant
     * @example
     * // Get one LabAssistant
     * const labAssistant = await prisma.labAssistant.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LabAssistantFindFirstArgs>(args?: SelectSubset<T, LabAssistantFindFirstArgs<ExtArgs>>): Prisma__LabAssistantClient<$Result.GetResult<Prisma.$LabAssistantPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LabAssistant that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LabAssistantFindFirstOrThrowArgs} args - Arguments to find a LabAssistant
     * @example
     * // Get one LabAssistant
     * const labAssistant = await prisma.labAssistant.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LabAssistantFindFirstOrThrowArgs>(args?: SelectSubset<T, LabAssistantFindFirstOrThrowArgs<ExtArgs>>): Prisma__LabAssistantClient<$Result.GetResult<Prisma.$LabAssistantPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LabAssistants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LabAssistantFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LabAssistants
     * const labAssistants = await prisma.labAssistant.findMany()
     * 
     * // Get first 10 LabAssistants
     * const labAssistants = await prisma.labAssistant.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const labAssistantWithIdOnly = await prisma.labAssistant.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LabAssistantFindManyArgs>(args?: SelectSubset<T, LabAssistantFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LabAssistantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LabAssistant.
     * @param {LabAssistantCreateArgs} args - Arguments to create a LabAssistant.
     * @example
     * // Create one LabAssistant
     * const LabAssistant = await prisma.labAssistant.create({
     *   data: {
     *     // ... data to create a LabAssistant
     *   }
     * })
     * 
     */
    create<T extends LabAssistantCreateArgs>(args: SelectSubset<T, LabAssistantCreateArgs<ExtArgs>>): Prisma__LabAssistantClient<$Result.GetResult<Prisma.$LabAssistantPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LabAssistants.
     * @param {LabAssistantCreateManyArgs} args - Arguments to create many LabAssistants.
     * @example
     * // Create many LabAssistants
     * const labAssistant = await prisma.labAssistant.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LabAssistantCreateManyArgs>(args?: SelectSubset<T, LabAssistantCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LabAssistants and returns the data saved in the database.
     * @param {LabAssistantCreateManyAndReturnArgs} args - Arguments to create many LabAssistants.
     * @example
     * // Create many LabAssistants
     * const labAssistant = await prisma.labAssistant.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LabAssistants and only return the `id`
     * const labAssistantWithIdOnly = await prisma.labAssistant.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LabAssistantCreateManyAndReturnArgs>(args?: SelectSubset<T, LabAssistantCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LabAssistantPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LabAssistant.
     * @param {LabAssistantDeleteArgs} args - Arguments to delete one LabAssistant.
     * @example
     * // Delete one LabAssistant
     * const LabAssistant = await prisma.labAssistant.delete({
     *   where: {
     *     // ... filter to delete one LabAssistant
     *   }
     * })
     * 
     */
    delete<T extends LabAssistantDeleteArgs>(args: SelectSubset<T, LabAssistantDeleteArgs<ExtArgs>>): Prisma__LabAssistantClient<$Result.GetResult<Prisma.$LabAssistantPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LabAssistant.
     * @param {LabAssistantUpdateArgs} args - Arguments to update one LabAssistant.
     * @example
     * // Update one LabAssistant
     * const labAssistant = await prisma.labAssistant.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LabAssistantUpdateArgs>(args: SelectSubset<T, LabAssistantUpdateArgs<ExtArgs>>): Prisma__LabAssistantClient<$Result.GetResult<Prisma.$LabAssistantPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LabAssistants.
     * @param {LabAssistantDeleteManyArgs} args - Arguments to filter LabAssistants to delete.
     * @example
     * // Delete a few LabAssistants
     * const { count } = await prisma.labAssistant.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LabAssistantDeleteManyArgs>(args?: SelectSubset<T, LabAssistantDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LabAssistants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LabAssistantUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LabAssistants
     * const labAssistant = await prisma.labAssistant.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LabAssistantUpdateManyArgs>(args: SelectSubset<T, LabAssistantUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LabAssistants and returns the data updated in the database.
     * @param {LabAssistantUpdateManyAndReturnArgs} args - Arguments to update many LabAssistants.
     * @example
     * // Update many LabAssistants
     * const labAssistant = await prisma.labAssistant.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LabAssistants and only return the `id`
     * const labAssistantWithIdOnly = await prisma.labAssistant.updateManyAndReturn({
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
    updateManyAndReturn<T extends LabAssistantUpdateManyAndReturnArgs>(args: SelectSubset<T, LabAssistantUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LabAssistantPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LabAssistant.
     * @param {LabAssistantUpsertArgs} args - Arguments to update or create a LabAssistant.
     * @example
     * // Update or create a LabAssistant
     * const labAssistant = await prisma.labAssistant.upsert({
     *   create: {
     *     // ... data to create a LabAssistant
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LabAssistant we want to update
     *   }
     * })
     */
    upsert<T extends LabAssistantUpsertArgs>(args: SelectSubset<T, LabAssistantUpsertArgs<ExtArgs>>): Prisma__LabAssistantClient<$Result.GetResult<Prisma.$LabAssistantPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LabAssistants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LabAssistantCountArgs} args - Arguments to filter LabAssistants to count.
     * @example
     * // Count the number of LabAssistants
     * const count = await prisma.labAssistant.count({
     *   where: {
     *     // ... the filter for the LabAssistants we want to count
     *   }
     * })
    **/
    count<T extends LabAssistantCountArgs>(
      args?: Subset<T, LabAssistantCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LabAssistantCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LabAssistant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LabAssistantAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LabAssistantAggregateArgs>(args: Subset<T, LabAssistantAggregateArgs>): Prisma.PrismaPromise<GetLabAssistantAggregateType<T>>

    /**
     * Group by LabAssistant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LabAssistantGroupByArgs} args - Group by arguments.
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
      T extends LabAssistantGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LabAssistantGroupByArgs['orderBy'] }
        : { orderBy?: LabAssistantGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LabAssistantGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLabAssistantGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LabAssistant model
   */
  readonly fields: LabAssistantFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LabAssistant.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LabAssistantClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    department<T extends DepartmentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DepartmentDefaultArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    assignments<T extends LabAssistant$assignmentsArgs<ExtArgs> = {}>(args?: Subset<T, LabAssistant$assignmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScheduleAssignmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the LabAssistant model
   */
  interface LabAssistantFieldRefs {
    readonly id: FieldRef<"LabAssistant", 'String'>
    readonly userId: FieldRef<"LabAssistant", 'String'>
    readonly firstName: FieldRef<"LabAssistant", 'String'>
    readonly lastName: FieldRef<"LabAssistant", 'String'>
    readonly departmentId: FieldRef<"LabAssistant", 'String'>
  }
    

  // Custom InputTypes
  /**
   * LabAssistant findUnique
   */
  export type LabAssistantFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LabAssistant
     */
    select?: LabAssistantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LabAssistant
     */
    omit?: LabAssistantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabAssistantInclude<ExtArgs> | null
    /**
     * Filter, which LabAssistant to fetch.
     */
    where: LabAssistantWhereUniqueInput
  }

  /**
   * LabAssistant findUniqueOrThrow
   */
  export type LabAssistantFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LabAssistant
     */
    select?: LabAssistantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LabAssistant
     */
    omit?: LabAssistantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabAssistantInclude<ExtArgs> | null
    /**
     * Filter, which LabAssistant to fetch.
     */
    where: LabAssistantWhereUniqueInput
  }

  /**
   * LabAssistant findFirst
   */
  export type LabAssistantFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LabAssistant
     */
    select?: LabAssistantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LabAssistant
     */
    omit?: LabAssistantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabAssistantInclude<ExtArgs> | null
    /**
     * Filter, which LabAssistant to fetch.
     */
    where?: LabAssistantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LabAssistants to fetch.
     */
    orderBy?: LabAssistantOrderByWithRelationInput | LabAssistantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LabAssistants.
     */
    cursor?: LabAssistantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LabAssistants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LabAssistants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LabAssistants.
     */
    distinct?: LabAssistantScalarFieldEnum | LabAssistantScalarFieldEnum[]
  }

  /**
   * LabAssistant findFirstOrThrow
   */
  export type LabAssistantFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LabAssistant
     */
    select?: LabAssistantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LabAssistant
     */
    omit?: LabAssistantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabAssistantInclude<ExtArgs> | null
    /**
     * Filter, which LabAssistant to fetch.
     */
    where?: LabAssistantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LabAssistants to fetch.
     */
    orderBy?: LabAssistantOrderByWithRelationInput | LabAssistantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LabAssistants.
     */
    cursor?: LabAssistantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LabAssistants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LabAssistants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LabAssistants.
     */
    distinct?: LabAssistantScalarFieldEnum | LabAssistantScalarFieldEnum[]
  }

  /**
   * LabAssistant findMany
   */
  export type LabAssistantFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LabAssistant
     */
    select?: LabAssistantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LabAssistant
     */
    omit?: LabAssistantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabAssistantInclude<ExtArgs> | null
    /**
     * Filter, which LabAssistants to fetch.
     */
    where?: LabAssistantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LabAssistants to fetch.
     */
    orderBy?: LabAssistantOrderByWithRelationInput | LabAssistantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LabAssistants.
     */
    cursor?: LabAssistantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LabAssistants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LabAssistants.
     */
    skip?: number
    distinct?: LabAssistantScalarFieldEnum | LabAssistantScalarFieldEnum[]
  }

  /**
   * LabAssistant create
   */
  export type LabAssistantCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LabAssistant
     */
    select?: LabAssistantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LabAssistant
     */
    omit?: LabAssistantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabAssistantInclude<ExtArgs> | null
    /**
     * The data needed to create a LabAssistant.
     */
    data: XOR<LabAssistantCreateInput, LabAssistantUncheckedCreateInput>
  }

  /**
   * LabAssistant createMany
   */
  export type LabAssistantCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LabAssistants.
     */
    data: LabAssistantCreateManyInput | LabAssistantCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LabAssistant createManyAndReturn
   */
  export type LabAssistantCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LabAssistant
     */
    select?: LabAssistantSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LabAssistant
     */
    omit?: LabAssistantOmit<ExtArgs> | null
    /**
     * The data used to create many LabAssistants.
     */
    data: LabAssistantCreateManyInput | LabAssistantCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabAssistantIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * LabAssistant update
   */
  export type LabAssistantUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LabAssistant
     */
    select?: LabAssistantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LabAssistant
     */
    omit?: LabAssistantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabAssistantInclude<ExtArgs> | null
    /**
     * The data needed to update a LabAssistant.
     */
    data: XOR<LabAssistantUpdateInput, LabAssistantUncheckedUpdateInput>
    /**
     * Choose, which LabAssistant to update.
     */
    where: LabAssistantWhereUniqueInput
  }

  /**
   * LabAssistant updateMany
   */
  export type LabAssistantUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LabAssistants.
     */
    data: XOR<LabAssistantUpdateManyMutationInput, LabAssistantUncheckedUpdateManyInput>
    /**
     * Filter which LabAssistants to update
     */
    where?: LabAssistantWhereInput
    /**
     * Limit how many LabAssistants to update.
     */
    limit?: number
  }

  /**
   * LabAssistant updateManyAndReturn
   */
  export type LabAssistantUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LabAssistant
     */
    select?: LabAssistantSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LabAssistant
     */
    omit?: LabAssistantOmit<ExtArgs> | null
    /**
     * The data used to update LabAssistants.
     */
    data: XOR<LabAssistantUpdateManyMutationInput, LabAssistantUncheckedUpdateManyInput>
    /**
     * Filter which LabAssistants to update
     */
    where?: LabAssistantWhereInput
    /**
     * Limit how many LabAssistants to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabAssistantIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * LabAssistant upsert
   */
  export type LabAssistantUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LabAssistant
     */
    select?: LabAssistantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LabAssistant
     */
    omit?: LabAssistantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabAssistantInclude<ExtArgs> | null
    /**
     * The filter to search for the LabAssistant to update in case it exists.
     */
    where: LabAssistantWhereUniqueInput
    /**
     * In case the LabAssistant found by the `where` argument doesn't exist, create a new LabAssistant with this data.
     */
    create: XOR<LabAssistantCreateInput, LabAssistantUncheckedCreateInput>
    /**
     * In case the LabAssistant was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LabAssistantUpdateInput, LabAssistantUncheckedUpdateInput>
  }

  /**
   * LabAssistant delete
   */
  export type LabAssistantDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LabAssistant
     */
    select?: LabAssistantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LabAssistant
     */
    omit?: LabAssistantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabAssistantInclude<ExtArgs> | null
    /**
     * Filter which LabAssistant to delete.
     */
    where: LabAssistantWhereUniqueInput
  }

  /**
   * LabAssistant deleteMany
   */
  export type LabAssistantDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LabAssistants to delete
     */
    where?: LabAssistantWhereInput
    /**
     * Limit how many LabAssistants to delete.
     */
    limit?: number
  }

  /**
   * LabAssistant.assignments
   */
  export type LabAssistant$assignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduleAssignment
     */
    select?: ScheduleAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduleAssignment
     */
    omit?: ScheduleAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleAssignmentInclude<ExtArgs> | null
    where?: ScheduleAssignmentWhereInput
    orderBy?: ScheduleAssignmentOrderByWithRelationInput | ScheduleAssignmentOrderByWithRelationInput[]
    cursor?: ScheduleAssignmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ScheduleAssignmentScalarFieldEnum | ScheduleAssignmentScalarFieldEnum[]
  }

  /**
   * LabAssistant without action
   */
  export type LabAssistantDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LabAssistant
     */
    select?: LabAssistantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LabAssistant
     */
    omit?: LabAssistantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabAssistantInclude<ExtArgs> | null
  }


  /**
   * Model LabRoom
   */

  export type AggregateLabRoom = {
    _count: LabRoomCountAggregateOutputType | null
    _avg: LabRoomAvgAggregateOutputType | null
    _sum: LabRoomSumAggregateOutputType | null
    _min: LabRoomMinAggregateOutputType | null
    _max: LabRoomMaxAggregateOutputType | null
  }

  export type LabRoomAvgAggregateOutputType = {
    capacity: number | null
  }

  export type LabRoomSumAggregateOutputType = {
    capacity: number | null
  }

  export type LabRoomMinAggregateOutputType = {
    id: string | null
    name: string | null
    capacity: number | null
    status: string | null
  }

  export type LabRoomMaxAggregateOutputType = {
    id: string | null
    name: string | null
    capacity: number | null
    status: string | null
  }

  export type LabRoomCountAggregateOutputType = {
    id: number
    name: number
    capacity: number
    status: number
    _all: number
  }


  export type LabRoomAvgAggregateInputType = {
    capacity?: true
  }

  export type LabRoomSumAggregateInputType = {
    capacity?: true
  }

  export type LabRoomMinAggregateInputType = {
    id?: true
    name?: true
    capacity?: true
    status?: true
  }

  export type LabRoomMaxAggregateInputType = {
    id?: true
    name?: true
    capacity?: true
    status?: true
  }

  export type LabRoomCountAggregateInputType = {
    id?: true
    name?: true
    capacity?: true
    status?: true
    _all?: true
  }

  export type LabRoomAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LabRoom to aggregate.
     */
    where?: LabRoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LabRooms to fetch.
     */
    orderBy?: LabRoomOrderByWithRelationInput | LabRoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LabRoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LabRooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LabRooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LabRooms
    **/
    _count?: true | LabRoomCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LabRoomAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LabRoomSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LabRoomMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LabRoomMaxAggregateInputType
  }

  export type GetLabRoomAggregateType<T extends LabRoomAggregateArgs> = {
        [P in keyof T & keyof AggregateLabRoom]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLabRoom[P]>
      : GetScalarType<T[P], AggregateLabRoom[P]>
  }




  export type LabRoomGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LabRoomWhereInput
    orderBy?: LabRoomOrderByWithAggregationInput | LabRoomOrderByWithAggregationInput[]
    by: LabRoomScalarFieldEnum[] | LabRoomScalarFieldEnum
    having?: LabRoomScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LabRoomCountAggregateInputType | true
    _avg?: LabRoomAvgAggregateInputType
    _sum?: LabRoomSumAggregateInputType
    _min?: LabRoomMinAggregateInputType
    _max?: LabRoomMaxAggregateInputType
  }

  export type LabRoomGroupByOutputType = {
    id: string
    name: string
    capacity: number
    status: string
    _count: LabRoomCountAggregateOutputType | null
    _avg: LabRoomAvgAggregateOutputType | null
    _sum: LabRoomSumAggregateOutputType | null
    _min: LabRoomMinAggregateOutputType | null
    _max: LabRoomMaxAggregateOutputType | null
  }

  type GetLabRoomGroupByPayload<T extends LabRoomGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LabRoomGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LabRoomGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LabRoomGroupByOutputType[P]>
            : GetScalarType<T[P], LabRoomGroupByOutputType[P]>
        }
      >
    >


  export type LabRoomSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    capacity?: boolean
    status?: boolean
    assignments?: boolean | LabRoom$assignmentsArgs<ExtArgs>
    _count?: boolean | LabRoomCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["labRoom"]>

  export type LabRoomSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    capacity?: boolean
    status?: boolean
  }, ExtArgs["result"]["labRoom"]>

  export type LabRoomSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    capacity?: boolean
    status?: boolean
  }, ExtArgs["result"]["labRoom"]>

  export type LabRoomSelectScalar = {
    id?: boolean
    name?: boolean
    capacity?: boolean
    status?: boolean
  }

  export type LabRoomOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "capacity" | "status", ExtArgs["result"]["labRoom"]>
  export type LabRoomInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assignments?: boolean | LabRoom$assignmentsArgs<ExtArgs>
    _count?: boolean | LabRoomCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type LabRoomIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type LabRoomIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $LabRoomPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LabRoom"
    objects: {
      assignments: Prisma.$ScheduleAssignmentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      capacity: number
      status: string
    }, ExtArgs["result"]["labRoom"]>
    composites: {}
  }

  type LabRoomGetPayload<S extends boolean | null | undefined | LabRoomDefaultArgs> = $Result.GetResult<Prisma.$LabRoomPayload, S>

  type LabRoomCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LabRoomFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LabRoomCountAggregateInputType | true
    }

  export interface LabRoomDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LabRoom'], meta: { name: 'LabRoom' } }
    /**
     * Find zero or one LabRoom that matches the filter.
     * @param {LabRoomFindUniqueArgs} args - Arguments to find a LabRoom
     * @example
     * // Get one LabRoom
     * const labRoom = await prisma.labRoom.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LabRoomFindUniqueArgs>(args: SelectSubset<T, LabRoomFindUniqueArgs<ExtArgs>>): Prisma__LabRoomClient<$Result.GetResult<Prisma.$LabRoomPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LabRoom that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LabRoomFindUniqueOrThrowArgs} args - Arguments to find a LabRoom
     * @example
     * // Get one LabRoom
     * const labRoom = await prisma.labRoom.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LabRoomFindUniqueOrThrowArgs>(args: SelectSubset<T, LabRoomFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LabRoomClient<$Result.GetResult<Prisma.$LabRoomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LabRoom that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LabRoomFindFirstArgs} args - Arguments to find a LabRoom
     * @example
     * // Get one LabRoom
     * const labRoom = await prisma.labRoom.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LabRoomFindFirstArgs>(args?: SelectSubset<T, LabRoomFindFirstArgs<ExtArgs>>): Prisma__LabRoomClient<$Result.GetResult<Prisma.$LabRoomPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LabRoom that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LabRoomFindFirstOrThrowArgs} args - Arguments to find a LabRoom
     * @example
     * // Get one LabRoom
     * const labRoom = await prisma.labRoom.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LabRoomFindFirstOrThrowArgs>(args?: SelectSubset<T, LabRoomFindFirstOrThrowArgs<ExtArgs>>): Prisma__LabRoomClient<$Result.GetResult<Prisma.$LabRoomPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LabRooms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LabRoomFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LabRooms
     * const labRooms = await prisma.labRoom.findMany()
     * 
     * // Get first 10 LabRooms
     * const labRooms = await prisma.labRoom.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const labRoomWithIdOnly = await prisma.labRoom.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LabRoomFindManyArgs>(args?: SelectSubset<T, LabRoomFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LabRoomPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LabRoom.
     * @param {LabRoomCreateArgs} args - Arguments to create a LabRoom.
     * @example
     * // Create one LabRoom
     * const LabRoom = await prisma.labRoom.create({
     *   data: {
     *     // ... data to create a LabRoom
     *   }
     * })
     * 
     */
    create<T extends LabRoomCreateArgs>(args: SelectSubset<T, LabRoomCreateArgs<ExtArgs>>): Prisma__LabRoomClient<$Result.GetResult<Prisma.$LabRoomPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LabRooms.
     * @param {LabRoomCreateManyArgs} args - Arguments to create many LabRooms.
     * @example
     * // Create many LabRooms
     * const labRoom = await prisma.labRoom.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LabRoomCreateManyArgs>(args?: SelectSubset<T, LabRoomCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LabRooms and returns the data saved in the database.
     * @param {LabRoomCreateManyAndReturnArgs} args - Arguments to create many LabRooms.
     * @example
     * // Create many LabRooms
     * const labRoom = await prisma.labRoom.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LabRooms and only return the `id`
     * const labRoomWithIdOnly = await prisma.labRoom.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LabRoomCreateManyAndReturnArgs>(args?: SelectSubset<T, LabRoomCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LabRoomPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LabRoom.
     * @param {LabRoomDeleteArgs} args - Arguments to delete one LabRoom.
     * @example
     * // Delete one LabRoom
     * const LabRoom = await prisma.labRoom.delete({
     *   where: {
     *     // ... filter to delete one LabRoom
     *   }
     * })
     * 
     */
    delete<T extends LabRoomDeleteArgs>(args: SelectSubset<T, LabRoomDeleteArgs<ExtArgs>>): Prisma__LabRoomClient<$Result.GetResult<Prisma.$LabRoomPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LabRoom.
     * @param {LabRoomUpdateArgs} args - Arguments to update one LabRoom.
     * @example
     * // Update one LabRoom
     * const labRoom = await prisma.labRoom.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LabRoomUpdateArgs>(args: SelectSubset<T, LabRoomUpdateArgs<ExtArgs>>): Prisma__LabRoomClient<$Result.GetResult<Prisma.$LabRoomPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LabRooms.
     * @param {LabRoomDeleteManyArgs} args - Arguments to filter LabRooms to delete.
     * @example
     * // Delete a few LabRooms
     * const { count } = await prisma.labRoom.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LabRoomDeleteManyArgs>(args?: SelectSubset<T, LabRoomDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LabRooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LabRoomUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LabRooms
     * const labRoom = await prisma.labRoom.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LabRoomUpdateManyArgs>(args: SelectSubset<T, LabRoomUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LabRooms and returns the data updated in the database.
     * @param {LabRoomUpdateManyAndReturnArgs} args - Arguments to update many LabRooms.
     * @example
     * // Update many LabRooms
     * const labRoom = await prisma.labRoom.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LabRooms and only return the `id`
     * const labRoomWithIdOnly = await prisma.labRoom.updateManyAndReturn({
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
    updateManyAndReturn<T extends LabRoomUpdateManyAndReturnArgs>(args: SelectSubset<T, LabRoomUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LabRoomPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LabRoom.
     * @param {LabRoomUpsertArgs} args - Arguments to update or create a LabRoom.
     * @example
     * // Update or create a LabRoom
     * const labRoom = await prisma.labRoom.upsert({
     *   create: {
     *     // ... data to create a LabRoom
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LabRoom we want to update
     *   }
     * })
     */
    upsert<T extends LabRoomUpsertArgs>(args: SelectSubset<T, LabRoomUpsertArgs<ExtArgs>>): Prisma__LabRoomClient<$Result.GetResult<Prisma.$LabRoomPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LabRooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LabRoomCountArgs} args - Arguments to filter LabRooms to count.
     * @example
     * // Count the number of LabRooms
     * const count = await prisma.labRoom.count({
     *   where: {
     *     // ... the filter for the LabRooms we want to count
     *   }
     * })
    **/
    count<T extends LabRoomCountArgs>(
      args?: Subset<T, LabRoomCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LabRoomCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LabRoom.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LabRoomAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LabRoomAggregateArgs>(args: Subset<T, LabRoomAggregateArgs>): Prisma.PrismaPromise<GetLabRoomAggregateType<T>>

    /**
     * Group by LabRoom.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LabRoomGroupByArgs} args - Group by arguments.
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
      T extends LabRoomGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LabRoomGroupByArgs['orderBy'] }
        : { orderBy?: LabRoomGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LabRoomGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLabRoomGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LabRoom model
   */
  readonly fields: LabRoomFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LabRoom.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LabRoomClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    assignments<T extends LabRoom$assignmentsArgs<ExtArgs> = {}>(args?: Subset<T, LabRoom$assignmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScheduleAssignmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the LabRoom model
   */
  interface LabRoomFieldRefs {
    readonly id: FieldRef<"LabRoom", 'String'>
    readonly name: FieldRef<"LabRoom", 'String'>
    readonly capacity: FieldRef<"LabRoom", 'Int'>
    readonly status: FieldRef<"LabRoom", 'String'>
  }
    

  // Custom InputTypes
  /**
   * LabRoom findUnique
   */
  export type LabRoomFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LabRoom
     */
    select?: LabRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LabRoom
     */
    omit?: LabRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabRoomInclude<ExtArgs> | null
    /**
     * Filter, which LabRoom to fetch.
     */
    where: LabRoomWhereUniqueInput
  }

  /**
   * LabRoom findUniqueOrThrow
   */
  export type LabRoomFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LabRoom
     */
    select?: LabRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LabRoom
     */
    omit?: LabRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabRoomInclude<ExtArgs> | null
    /**
     * Filter, which LabRoom to fetch.
     */
    where: LabRoomWhereUniqueInput
  }

  /**
   * LabRoom findFirst
   */
  export type LabRoomFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LabRoom
     */
    select?: LabRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LabRoom
     */
    omit?: LabRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabRoomInclude<ExtArgs> | null
    /**
     * Filter, which LabRoom to fetch.
     */
    where?: LabRoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LabRooms to fetch.
     */
    orderBy?: LabRoomOrderByWithRelationInput | LabRoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LabRooms.
     */
    cursor?: LabRoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LabRooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LabRooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LabRooms.
     */
    distinct?: LabRoomScalarFieldEnum | LabRoomScalarFieldEnum[]
  }

  /**
   * LabRoom findFirstOrThrow
   */
  export type LabRoomFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LabRoom
     */
    select?: LabRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LabRoom
     */
    omit?: LabRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabRoomInclude<ExtArgs> | null
    /**
     * Filter, which LabRoom to fetch.
     */
    where?: LabRoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LabRooms to fetch.
     */
    orderBy?: LabRoomOrderByWithRelationInput | LabRoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LabRooms.
     */
    cursor?: LabRoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LabRooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LabRooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LabRooms.
     */
    distinct?: LabRoomScalarFieldEnum | LabRoomScalarFieldEnum[]
  }

  /**
   * LabRoom findMany
   */
  export type LabRoomFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LabRoom
     */
    select?: LabRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LabRoom
     */
    omit?: LabRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabRoomInclude<ExtArgs> | null
    /**
     * Filter, which LabRooms to fetch.
     */
    where?: LabRoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LabRooms to fetch.
     */
    orderBy?: LabRoomOrderByWithRelationInput | LabRoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LabRooms.
     */
    cursor?: LabRoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LabRooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LabRooms.
     */
    skip?: number
    distinct?: LabRoomScalarFieldEnum | LabRoomScalarFieldEnum[]
  }

  /**
   * LabRoom create
   */
  export type LabRoomCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LabRoom
     */
    select?: LabRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LabRoom
     */
    omit?: LabRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabRoomInclude<ExtArgs> | null
    /**
     * The data needed to create a LabRoom.
     */
    data: XOR<LabRoomCreateInput, LabRoomUncheckedCreateInput>
  }

  /**
   * LabRoom createMany
   */
  export type LabRoomCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LabRooms.
     */
    data: LabRoomCreateManyInput | LabRoomCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LabRoom createManyAndReturn
   */
  export type LabRoomCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LabRoom
     */
    select?: LabRoomSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LabRoom
     */
    omit?: LabRoomOmit<ExtArgs> | null
    /**
     * The data used to create many LabRooms.
     */
    data: LabRoomCreateManyInput | LabRoomCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LabRoom update
   */
  export type LabRoomUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LabRoom
     */
    select?: LabRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LabRoom
     */
    omit?: LabRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabRoomInclude<ExtArgs> | null
    /**
     * The data needed to update a LabRoom.
     */
    data: XOR<LabRoomUpdateInput, LabRoomUncheckedUpdateInput>
    /**
     * Choose, which LabRoom to update.
     */
    where: LabRoomWhereUniqueInput
  }

  /**
   * LabRoom updateMany
   */
  export type LabRoomUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LabRooms.
     */
    data: XOR<LabRoomUpdateManyMutationInput, LabRoomUncheckedUpdateManyInput>
    /**
     * Filter which LabRooms to update
     */
    where?: LabRoomWhereInput
    /**
     * Limit how many LabRooms to update.
     */
    limit?: number
  }

  /**
   * LabRoom updateManyAndReturn
   */
  export type LabRoomUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LabRoom
     */
    select?: LabRoomSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LabRoom
     */
    omit?: LabRoomOmit<ExtArgs> | null
    /**
     * The data used to update LabRooms.
     */
    data: XOR<LabRoomUpdateManyMutationInput, LabRoomUncheckedUpdateManyInput>
    /**
     * Filter which LabRooms to update
     */
    where?: LabRoomWhereInput
    /**
     * Limit how many LabRooms to update.
     */
    limit?: number
  }

  /**
   * LabRoom upsert
   */
  export type LabRoomUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LabRoom
     */
    select?: LabRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LabRoom
     */
    omit?: LabRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabRoomInclude<ExtArgs> | null
    /**
     * The filter to search for the LabRoom to update in case it exists.
     */
    where: LabRoomWhereUniqueInput
    /**
     * In case the LabRoom found by the `where` argument doesn't exist, create a new LabRoom with this data.
     */
    create: XOR<LabRoomCreateInput, LabRoomUncheckedCreateInput>
    /**
     * In case the LabRoom was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LabRoomUpdateInput, LabRoomUncheckedUpdateInput>
  }

  /**
   * LabRoom delete
   */
  export type LabRoomDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LabRoom
     */
    select?: LabRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LabRoom
     */
    omit?: LabRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabRoomInclude<ExtArgs> | null
    /**
     * Filter which LabRoom to delete.
     */
    where: LabRoomWhereUniqueInput
  }

  /**
   * LabRoom deleteMany
   */
  export type LabRoomDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LabRooms to delete
     */
    where?: LabRoomWhereInput
    /**
     * Limit how many LabRooms to delete.
     */
    limit?: number
  }

  /**
   * LabRoom.assignments
   */
  export type LabRoom$assignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduleAssignment
     */
    select?: ScheduleAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduleAssignment
     */
    omit?: ScheduleAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleAssignmentInclude<ExtArgs> | null
    where?: ScheduleAssignmentWhereInput
    orderBy?: ScheduleAssignmentOrderByWithRelationInput | ScheduleAssignmentOrderByWithRelationInput[]
    cursor?: ScheduleAssignmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ScheduleAssignmentScalarFieldEnum | ScheduleAssignmentScalarFieldEnum[]
  }

  /**
   * LabRoom without action
   */
  export type LabRoomDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LabRoom
     */
    select?: LabRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LabRoom
     */
    omit?: LabRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabRoomInclude<ExtArgs> | null
  }


  /**
   * Model TimeSlot
   */

  export type AggregateTimeSlot = {
    _count: TimeSlotCountAggregateOutputType | null
    _min: TimeSlotMinAggregateOutputType | null
    _max: TimeSlotMaxAggregateOutputType | null
  }

  export type TimeSlotMinAggregateOutputType = {
    id: string | null
    dayOfWeek: string | null
    startTime: string | null
    endTime: string | null
  }

  export type TimeSlotMaxAggregateOutputType = {
    id: string | null
    dayOfWeek: string | null
    startTime: string | null
    endTime: string | null
  }

  export type TimeSlotCountAggregateOutputType = {
    id: number
    dayOfWeek: number
    startTime: number
    endTime: number
    _all: number
  }


  export type TimeSlotMinAggregateInputType = {
    id?: true
    dayOfWeek?: true
    startTime?: true
    endTime?: true
  }

  export type TimeSlotMaxAggregateInputType = {
    id?: true
    dayOfWeek?: true
    startTime?: true
    endTime?: true
  }

  export type TimeSlotCountAggregateInputType = {
    id?: true
    dayOfWeek?: true
    startTime?: true
    endTime?: true
    _all?: true
  }

  export type TimeSlotAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TimeSlot to aggregate.
     */
    where?: TimeSlotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TimeSlots to fetch.
     */
    orderBy?: TimeSlotOrderByWithRelationInput | TimeSlotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TimeSlotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TimeSlots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TimeSlots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TimeSlots
    **/
    _count?: true | TimeSlotCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TimeSlotMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TimeSlotMaxAggregateInputType
  }

  export type GetTimeSlotAggregateType<T extends TimeSlotAggregateArgs> = {
        [P in keyof T & keyof AggregateTimeSlot]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTimeSlot[P]>
      : GetScalarType<T[P], AggregateTimeSlot[P]>
  }




  export type TimeSlotGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TimeSlotWhereInput
    orderBy?: TimeSlotOrderByWithAggregationInput | TimeSlotOrderByWithAggregationInput[]
    by: TimeSlotScalarFieldEnum[] | TimeSlotScalarFieldEnum
    having?: TimeSlotScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TimeSlotCountAggregateInputType | true
    _min?: TimeSlotMinAggregateInputType
    _max?: TimeSlotMaxAggregateInputType
  }

  export type TimeSlotGroupByOutputType = {
    id: string
    dayOfWeek: string
    startTime: string
    endTime: string
    _count: TimeSlotCountAggregateOutputType | null
    _min: TimeSlotMinAggregateOutputType | null
    _max: TimeSlotMaxAggregateOutputType | null
  }

  type GetTimeSlotGroupByPayload<T extends TimeSlotGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TimeSlotGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TimeSlotGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TimeSlotGroupByOutputType[P]>
            : GetScalarType<T[P], TimeSlotGroupByOutputType[P]>
        }
      >
    >


  export type TimeSlotSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dayOfWeek?: boolean
    startTime?: boolean
    endTime?: boolean
    assignments?: boolean | TimeSlot$assignmentsArgs<ExtArgs>
    _count?: boolean | TimeSlotCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["timeSlot"]>

  export type TimeSlotSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dayOfWeek?: boolean
    startTime?: boolean
    endTime?: boolean
  }, ExtArgs["result"]["timeSlot"]>

  export type TimeSlotSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dayOfWeek?: boolean
    startTime?: boolean
    endTime?: boolean
  }, ExtArgs["result"]["timeSlot"]>

  export type TimeSlotSelectScalar = {
    id?: boolean
    dayOfWeek?: boolean
    startTime?: boolean
    endTime?: boolean
  }

  export type TimeSlotOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "dayOfWeek" | "startTime" | "endTime", ExtArgs["result"]["timeSlot"]>
  export type TimeSlotInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assignments?: boolean | TimeSlot$assignmentsArgs<ExtArgs>
    _count?: boolean | TimeSlotCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TimeSlotIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TimeSlotIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TimeSlotPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TimeSlot"
    objects: {
      assignments: Prisma.$ScheduleAssignmentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      dayOfWeek: string
      startTime: string
      endTime: string
    }, ExtArgs["result"]["timeSlot"]>
    composites: {}
  }

  type TimeSlotGetPayload<S extends boolean | null | undefined | TimeSlotDefaultArgs> = $Result.GetResult<Prisma.$TimeSlotPayload, S>

  type TimeSlotCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TimeSlotFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TimeSlotCountAggregateInputType | true
    }

  export interface TimeSlotDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TimeSlot'], meta: { name: 'TimeSlot' } }
    /**
     * Find zero or one TimeSlot that matches the filter.
     * @param {TimeSlotFindUniqueArgs} args - Arguments to find a TimeSlot
     * @example
     * // Get one TimeSlot
     * const timeSlot = await prisma.timeSlot.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TimeSlotFindUniqueArgs>(args: SelectSubset<T, TimeSlotFindUniqueArgs<ExtArgs>>): Prisma__TimeSlotClient<$Result.GetResult<Prisma.$TimeSlotPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TimeSlot that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TimeSlotFindUniqueOrThrowArgs} args - Arguments to find a TimeSlot
     * @example
     * // Get one TimeSlot
     * const timeSlot = await prisma.timeSlot.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TimeSlotFindUniqueOrThrowArgs>(args: SelectSubset<T, TimeSlotFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TimeSlotClient<$Result.GetResult<Prisma.$TimeSlotPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TimeSlot that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimeSlotFindFirstArgs} args - Arguments to find a TimeSlot
     * @example
     * // Get one TimeSlot
     * const timeSlot = await prisma.timeSlot.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TimeSlotFindFirstArgs>(args?: SelectSubset<T, TimeSlotFindFirstArgs<ExtArgs>>): Prisma__TimeSlotClient<$Result.GetResult<Prisma.$TimeSlotPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TimeSlot that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimeSlotFindFirstOrThrowArgs} args - Arguments to find a TimeSlot
     * @example
     * // Get one TimeSlot
     * const timeSlot = await prisma.timeSlot.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TimeSlotFindFirstOrThrowArgs>(args?: SelectSubset<T, TimeSlotFindFirstOrThrowArgs<ExtArgs>>): Prisma__TimeSlotClient<$Result.GetResult<Prisma.$TimeSlotPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TimeSlots that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimeSlotFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TimeSlots
     * const timeSlots = await prisma.timeSlot.findMany()
     * 
     * // Get first 10 TimeSlots
     * const timeSlots = await prisma.timeSlot.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const timeSlotWithIdOnly = await prisma.timeSlot.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TimeSlotFindManyArgs>(args?: SelectSubset<T, TimeSlotFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TimeSlotPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TimeSlot.
     * @param {TimeSlotCreateArgs} args - Arguments to create a TimeSlot.
     * @example
     * // Create one TimeSlot
     * const TimeSlot = await prisma.timeSlot.create({
     *   data: {
     *     // ... data to create a TimeSlot
     *   }
     * })
     * 
     */
    create<T extends TimeSlotCreateArgs>(args: SelectSubset<T, TimeSlotCreateArgs<ExtArgs>>): Prisma__TimeSlotClient<$Result.GetResult<Prisma.$TimeSlotPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TimeSlots.
     * @param {TimeSlotCreateManyArgs} args - Arguments to create many TimeSlots.
     * @example
     * // Create many TimeSlots
     * const timeSlot = await prisma.timeSlot.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TimeSlotCreateManyArgs>(args?: SelectSubset<T, TimeSlotCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TimeSlots and returns the data saved in the database.
     * @param {TimeSlotCreateManyAndReturnArgs} args - Arguments to create many TimeSlots.
     * @example
     * // Create many TimeSlots
     * const timeSlot = await prisma.timeSlot.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TimeSlots and only return the `id`
     * const timeSlotWithIdOnly = await prisma.timeSlot.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TimeSlotCreateManyAndReturnArgs>(args?: SelectSubset<T, TimeSlotCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TimeSlotPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TimeSlot.
     * @param {TimeSlotDeleteArgs} args - Arguments to delete one TimeSlot.
     * @example
     * // Delete one TimeSlot
     * const TimeSlot = await prisma.timeSlot.delete({
     *   where: {
     *     // ... filter to delete one TimeSlot
     *   }
     * })
     * 
     */
    delete<T extends TimeSlotDeleteArgs>(args: SelectSubset<T, TimeSlotDeleteArgs<ExtArgs>>): Prisma__TimeSlotClient<$Result.GetResult<Prisma.$TimeSlotPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TimeSlot.
     * @param {TimeSlotUpdateArgs} args - Arguments to update one TimeSlot.
     * @example
     * // Update one TimeSlot
     * const timeSlot = await prisma.timeSlot.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TimeSlotUpdateArgs>(args: SelectSubset<T, TimeSlotUpdateArgs<ExtArgs>>): Prisma__TimeSlotClient<$Result.GetResult<Prisma.$TimeSlotPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TimeSlots.
     * @param {TimeSlotDeleteManyArgs} args - Arguments to filter TimeSlots to delete.
     * @example
     * // Delete a few TimeSlots
     * const { count } = await prisma.timeSlot.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TimeSlotDeleteManyArgs>(args?: SelectSubset<T, TimeSlotDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TimeSlots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimeSlotUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TimeSlots
     * const timeSlot = await prisma.timeSlot.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TimeSlotUpdateManyArgs>(args: SelectSubset<T, TimeSlotUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TimeSlots and returns the data updated in the database.
     * @param {TimeSlotUpdateManyAndReturnArgs} args - Arguments to update many TimeSlots.
     * @example
     * // Update many TimeSlots
     * const timeSlot = await prisma.timeSlot.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TimeSlots and only return the `id`
     * const timeSlotWithIdOnly = await prisma.timeSlot.updateManyAndReturn({
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
    updateManyAndReturn<T extends TimeSlotUpdateManyAndReturnArgs>(args: SelectSubset<T, TimeSlotUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TimeSlotPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TimeSlot.
     * @param {TimeSlotUpsertArgs} args - Arguments to update or create a TimeSlot.
     * @example
     * // Update or create a TimeSlot
     * const timeSlot = await prisma.timeSlot.upsert({
     *   create: {
     *     // ... data to create a TimeSlot
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TimeSlot we want to update
     *   }
     * })
     */
    upsert<T extends TimeSlotUpsertArgs>(args: SelectSubset<T, TimeSlotUpsertArgs<ExtArgs>>): Prisma__TimeSlotClient<$Result.GetResult<Prisma.$TimeSlotPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TimeSlots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimeSlotCountArgs} args - Arguments to filter TimeSlots to count.
     * @example
     * // Count the number of TimeSlots
     * const count = await prisma.timeSlot.count({
     *   where: {
     *     // ... the filter for the TimeSlots we want to count
     *   }
     * })
    **/
    count<T extends TimeSlotCountArgs>(
      args?: Subset<T, TimeSlotCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TimeSlotCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TimeSlot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimeSlotAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TimeSlotAggregateArgs>(args: Subset<T, TimeSlotAggregateArgs>): Prisma.PrismaPromise<GetTimeSlotAggregateType<T>>

    /**
     * Group by TimeSlot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimeSlotGroupByArgs} args - Group by arguments.
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
      T extends TimeSlotGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TimeSlotGroupByArgs['orderBy'] }
        : { orderBy?: TimeSlotGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TimeSlotGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTimeSlotGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TimeSlot model
   */
  readonly fields: TimeSlotFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TimeSlot.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TimeSlotClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    assignments<T extends TimeSlot$assignmentsArgs<ExtArgs> = {}>(args?: Subset<T, TimeSlot$assignmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScheduleAssignmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the TimeSlot model
   */
  interface TimeSlotFieldRefs {
    readonly id: FieldRef<"TimeSlot", 'String'>
    readonly dayOfWeek: FieldRef<"TimeSlot", 'String'>
    readonly startTime: FieldRef<"TimeSlot", 'String'>
    readonly endTime: FieldRef<"TimeSlot", 'String'>
  }
    

  // Custom InputTypes
  /**
   * TimeSlot findUnique
   */
  export type TimeSlotFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeSlot
     */
    select?: TimeSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TimeSlot
     */
    omit?: TimeSlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeSlotInclude<ExtArgs> | null
    /**
     * Filter, which TimeSlot to fetch.
     */
    where: TimeSlotWhereUniqueInput
  }

  /**
   * TimeSlot findUniqueOrThrow
   */
  export type TimeSlotFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeSlot
     */
    select?: TimeSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TimeSlot
     */
    omit?: TimeSlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeSlotInclude<ExtArgs> | null
    /**
     * Filter, which TimeSlot to fetch.
     */
    where: TimeSlotWhereUniqueInput
  }

  /**
   * TimeSlot findFirst
   */
  export type TimeSlotFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeSlot
     */
    select?: TimeSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TimeSlot
     */
    omit?: TimeSlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeSlotInclude<ExtArgs> | null
    /**
     * Filter, which TimeSlot to fetch.
     */
    where?: TimeSlotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TimeSlots to fetch.
     */
    orderBy?: TimeSlotOrderByWithRelationInput | TimeSlotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TimeSlots.
     */
    cursor?: TimeSlotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TimeSlots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TimeSlots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TimeSlots.
     */
    distinct?: TimeSlotScalarFieldEnum | TimeSlotScalarFieldEnum[]
  }

  /**
   * TimeSlot findFirstOrThrow
   */
  export type TimeSlotFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeSlot
     */
    select?: TimeSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TimeSlot
     */
    omit?: TimeSlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeSlotInclude<ExtArgs> | null
    /**
     * Filter, which TimeSlot to fetch.
     */
    where?: TimeSlotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TimeSlots to fetch.
     */
    orderBy?: TimeSlotOrderByWithRelationInput | TimeSlotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TimeSlots.
     */
    cursor?: TimeSlotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TimeSlots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TimeSlots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TimeSlots.
     */
    distinct?: TimeSlotScalarFieldEnum | TimeSlotScalarFieldEnum[]
  }

  /**
   * TimeSlot findMany
   */
  export type TimeSlotFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeSlot
     */
    select?: TimeSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TimeSlot
     */
    omit?: TimeSlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeSlotInclude<ExtArgs> | null
    /**
     * Filter, which TimeSlots to fetch.
     */
    where?: TimeSlotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TimeSlots to fetch.
     */
    orderBy?: TimeSlotOrderByWithRelationInput | TimeSlotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TimeSlots.
     */
    cursor?: TimeSlotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TimeSlots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TimeSlots.
     */
    skip?: number
    distinct?: TimeSlotScalarFieldEnum | TimeSlotScalarFieldEnum[]
  }

  /**
   * TimeSlot create
   */
  export type TimeSlotCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeSlot
     */
    select?: TimeSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TimeSlot
     */
    omit?: TimeSlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeSlotInclude<ExtArgs> | null
    /**
     * The data needed to create a TimeSlot.
     */
    data: XOR<TimeSlotCreateInput, TimeSlotUncheckedCreateInput>
  }

  /**
   * TimeSlot createMany
   */
  export type TimeSlotCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TimeSlots.
     */
    data: TimeSlotCreateManyInput | TimeSlotCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TimeSlot createManyAndReturn
   */
  export type TimeSlotCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeSlot
     */
    select?: TimeSlotSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TimeSlot
     */
    omit?: TimeSlotOmit<ExtArgs> | null
    /**
     * The data used to create many TimeSlots.
     */
    data: TimeSlotCreateManyInput | TimeSlotCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TimeSlot update
   */
  export type TimeSlotUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeSlot
     */
    select?: TimeSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TimeSlot
     */
    omit?: TimeSlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeSlotInclude<ExtArgs> | null
    /**
     * The data needed to update a TimeSlot.
     */
    data: XOR<TimeSlotUpdateInput, TimeSlotUncheckedUpdateInput>
    /**
     * Choose, which TimeSlot to update.
     */
    where: TimeSlotWhereUniqueInput
  }

  /**
   * TimeSlot updateMany
   */
  export type TimeSlotUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TimeSlots.
     */
    data: XOR<TimeSlotUpdateManyMutationInput, TimeSlotUncheckedUpdateManyInput>
    /**
     * Filter which TimeSlots to update
     */
    where?: TimeSlotWhereInput
    /**
     * Limit how many TimeSlots to update.
     */
    limit?: number
  }

  /**
   * TimeSlot updateManyAndReturn
   */
  export type TimeSlotUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeSlot
     */
    select?: TimeSlotSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TimeSlot
     */
    omit?: TimeSlotOmit<ExtArgs> | null
    /**
     * The data used to update TimeSlots.
     */
    data: XOR<TimeSlotUpdateManyMutationInput, TimeSlotUncheckedUpdateManyInput>
    /**
     * Filter which TimeSlots to update
     */
    where?: TimeSlotWhereInput
    /**
     * Limit how many TimeSlots to update.
     */
    limit?: number
  }

  /**
   * TimeSlot upsert
   */
  export type TimeSlotUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeSlot
     */
    select?: TimeSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TimeSlot
     */
    omit?: TimeSlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeSlotInclude<ExtArgs> | null
    /**
     * The filter to search for the TimeSlot to update in case it exists.
     */
    where: TimeSlotWhereUniqueInput
    /**
     * In case the TimeSlot found by the `where` argument doesn't exist, create a new TimeSlot with this data.
     */
    create: XOR<TimeSlotCreateInput, TimeSlotUncheckedCreateInput>
    /**
     * In case the TimeSlot was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TimeSlotUpdateInput, TimeSlotUncheckedUpdateInput>
  }

  /**
   * TimeSlot delete
   */
  export type TimeSlotDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeSlot
     */
    select?: TimeSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TimeSlot
     */
    omit?: TimeSlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeSlotInclude<ExtArgs> | null
    /**
     * Filter which TimeSlot to delete.
     */
    where: TimeSlotWhereUniqueInput
  }

  /**
   * TimeSlot deleteMany
   */
  export type TimeSlotDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TimeSlots to delete
     */
    where?: TimeSlotWhereInput
    /**
     * Limit how many TimeSlots to delete.
     */
    limit?: number
  }

  /**
   * TimeSlot.assignments
   */
  export type TimeSlot$assignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduleAssignment
     */
    select?: ScheduleAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduleAssignment
     */
    omit?: ScheduleAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleAssignmentInclude<ExtArgs> | null
    where?: ScheduleAssignmentWhereInput
    orderBy?: ScheduleAssignmentOrderByWithRelationInput | ScheduleAssignmentOrderByWithRelationInput[]
    cursor?: ScheduleAssignmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ScheduleAssignmentScalarFieldEnum | ScheduleAssignmentScalarFieldEnum[]
  }

  /**
   * TimeSlot without action
   */
  export type TimeSlotDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeSlot
     */
    select?: TimeSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TimeSlot
     */
    omit?: TimeSlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeSlotInclude<ExtArgs> | null
  }


  /**
   * Model Course
   */

  export type AggregateCourse = {
    _count: CourseCountAggregateOutputType | null
    _min: CourseMinAggregateOutputType | null
    _max: CourseMaxAggregateOutputType | null
  }

  export type CourseMinAggregateOutputType = {
    id: string | null
    name: string | null
    courseCode: string | null
    departmentId: string | null
  }

  export type CourseMaxAggregateOutputType = {
    id: string | null
    name: string | null
    courseCode: string | null
    departmentId: string | null
  }

  export type CourseCountAggregateOutputType = {
    id: number
    name: number
    courseCode: number
    departmentId: number
    _all: number
  }


  export type CourseMinAggregateInputType = {
    id?: true
    name?: true
    courseCode?: true
    departmentId?: true
  }

  export type CourseMaxAggregateInputType = {
    id?: true
    name?: true
    courseCode?: true
    departmentId?: true
  }

  export type CourseCountAggregateInputType = {
    id?: true
    name?: true
    courseCode?: true
    departmentId?: true
    _all?: true
  }

  export type CourseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Course to aggregate.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Courses
    **/
    _count?: true | CourseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CourseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CourseMaxAggregateInputType
  }

  export type GetCourseAggregateType<T extends CourseAggregateArgs> = {
        [P in keyof T & keyof AggregateCourse]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCourse[P]>
      : GetScalarType<T[P], AggregateCourse[P]>
  }




  export type CourseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CourseWhereInput
    orderBy?: CourseOrderByWithAggregationInput | CourseOrderByWithAggregationInput[]
    by: CourseScalarFieldEnum[] | CourseScalarFieldEnum
    having?: CourseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CourseCountAggregateInputType | true
    _min?: CourseMinAggregateInputType
    _max?: CourseMaxAggregateInputType
  }

  export type CourseGroupByOutputType = {
    id: string
    name: string
    courseCode: string
    departmentId: string
    _count: CourseCountAggregateOutputType | null
    _min: CourseMinAggregateOutputType | null
    _max: CourseMaxAggregateOutputType | null
  }

  type GetCourseGroupByPayload<T extends CourseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CourseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CourseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CourseGroupByOutputType[P]>
            : GetScalarType<T[P], CourseGroupByOutputType[P]>
        }
      >
    >


  export type CourseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    courseCode?: boolean
    departmentId?: boolean
    department?: boolean | DepartmentDefaultArgs<ExtArgs>
    courseOfferings?: boolean | Course$courseOfferingsArgs<ExtArgs>
    _count?: boolean | CourseCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["course"]>

  export type CourseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    courseCode?: boolean
    departmentId?: boolean
    department?: boolean | DepartmentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["course"]>

  export type CourseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    courseCode?: boolean
    departmentId?: boolean
    department?: boolean | DepartmentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["course"]>

  export type CourseSelectScalar = {
    id?: boolean
    name?: boolean
    courseCode?: boolean
    departmentId?: boolean
  }

  export type CourseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "courseCode" | "departmentId", ExtArgs["result"]["course"]>
  export type CourseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    department?: boolean | DepartmentDefaultArgs<ExtArgs>
    courseOfferings?: boolean | Course$courseOfferingsArgs<ExtArgs>
    _count?: boolean | CourseCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CourseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    department?: boolean | DepartmentDefaultArgs<ExtArgs>
  }
  export type CourseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    department?: boolean | DepartmentDefaultArgs<ExtArgs>
  }

  export type $CoursePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Course"
    objects: {
      department: Prisma.$DepartmentPayload<ExtArgs>
      courseOfferings: Prisma.$CourseOfferingPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      courseCode: string
      departmentId: string
    }, ExtArgs["result"]["course"]>
    composites: {}
  }

  type CourseGetPayload<S extends boolean | null | undefined | CourseDefaultArgs> = $Result.GetResult<Prisma.$CoursePayload, S>

  type CourseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CourseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CourseCountAggregateInputType | true
    }

  export interface CourseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Course'], meta: { name: 'Course' } }
    /**
     * Find zero or one Course that matches the filter.
     * @param {CourseFindUniqueArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CourseFindUniqueArgs>(args: SelectSubset<T, CourseFindUniqueArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Course that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CourseFindUniqueOrThrowArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CourseFindUniqueOrThrowArgs>(args: SelectSubset<T, CourseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Course that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseFindFirstArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CourseFindFirstArgs>(args?: SelectSubset<T, CourseFindFirstArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Course that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseFindFirstOrThrowArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CourseFindFirstOrThrowArgs>(args?: SelectSubset<T, CourseFindFirstOrThrowArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Courses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Courses
     * const courses = await prisma.course.findMany()
     * 
     * // Get first 10 Courses
     * const courses = await prisma.course.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const courseWithIdOnly = await prisma.course.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CourseFindManyArgs>(args?: SelectSubset<T, CourseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Course.
     * @param {CourseCreateArgs} args - Arguments to create a Course.
     * @example
     * // Create one Course
     * const Course = await prisma.course.create({
     *   data: {
     *     // ... data to create a Course
     *   }
     * })
     * 
     */
    create<T extends CourseCreateArgs>(args: SelectSubset<T, CourseCreateArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Courses.
     * @param {CourseCreateManyArgs} args - Arguments to create many Courses.
     * @example
     * // Create many Courses
     * const course = await prisma.course.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CourseCreateManyArgs>(args?: SelectSubset<T, CourseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Courses and returns the data saved in the database.
     * @param {CourseCreateManyAndReturnArgs} args - Arguments to create many Courses.
     * @example
     * // Create many Courses
     * const course = await prisma.course.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Courses and only return the `id`
     * const courseWithIdOnly = await prisma.course.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CourseCreateManyAndReturnArgs>(args?: SelectSubset<T, CourseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Course.
     * @param {CourseDeleteArgs} args - Arguments to delete one Course.
     * @example
     * // Delete one Course
     * const Course = await prisma.course.delete({
     *   where: {
     *     // ... filter to delete one Course
     *   }
     * })
     * 
     */
    delete<T extends CourseDeleteArgs>(args: SelectSubset<T, CourseDeleteArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Course.
     * @param {CourseUpdateArgs} args - Arguments to update one Course.
     * @example
     * // Update one Course
     * const course = await prisma.course.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CourseUpdateArgs>(args: SelectSubset<T, CourseUpdateArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Courses.
     * @param {CourseDeleteManyArgs} args - Arguments to filter Courses to delete.
     * @example
     * // Delete a few Courses
     * const { count } = await prisma.course.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CourseDeleteManyArgs>(args?: SelectSubset<T, CourseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Courses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Courses
     * const course = await prisma.course.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CourseUpdateManyArgs>(args: SelectSubset<T, CourseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Courses and returns the data updated in the database.
     * @param {CourseUpdateManyAndReturnArgs} args - Arguments to update many Courses.
     * @example
     * // Update many Courses
     * const course = await prisma.course.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Courses and only return the `id`
     * const courseWithIdOnly = await prisma.course.updateManyAndReturn({
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
    updateManyAndReturn<T extends CourseUpdateManyAndReturnArgs>(args: SelectSubset<T, CourseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Course.
     * @param {CourseUpsertArgs} args - Arguments to update or create a Course.
     * @example
     * // Update or create a Course
     * const course = await prisma.course.upsert({
     *   create: {
     *     // ... data to create a Course
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Course we want to update
     *   }
     * })
     */
    upsert<T extends CourseUpsertArgs>(args: SelectSubset<T, CourseUpsertArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Courses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseCountArgs} args - Arguments to filter Courses to count.
     * @example
     * // Count the number of Courses
     * const count = await prisma.course.count({
     *   where: {
     *     // ... the filter for the Courses we want to count
     *   }
     * })
    **/
    count<T extends CourseCountArgs>(
      args?: Subset<T, CourseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CourseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Course.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CourseAggregateArgs>(args: Subset<T, CourseAggregateArgs>): Prisma.PrismaPromise<GetCourseAggregateType<T>>

    /**
     * Group by Course.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseGroupByArgs} args - Group by arguments.
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
      T extends CourseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CourseGroupByArgs['orderBy'] }
        : { orderBy?: CourseGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CourseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCourseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Course model
   */
  readonly fields: CourseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Course.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CourseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    department<T extends DepartmentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DepartmentDefaultArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    courseOfferings<T extends Course$courseOfferingsArgs<ExtArgs> = {}>(args?: Subset<T, Course$courseOfferingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CourseOfferingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Course model
   */
  interface CourseFieldRefs {
    readonly id: FieldRef<"Course", 'String'>
    readonly name: FieldRef<"Course", 'String'>
    readonly courseCode: FieldRef<"Course", 'String'>
    readonly departmentId: FieldRef<"Course", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Course findUnique
   */
  export type CourseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where: CourseWhereUniqueInput
  }

  /**
   * Course findUniqueOrThrow
   */
  export type CourseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where: CourseWhereUniqueInput
  }

  /**
   * Course findFirst
   */
  export type CourseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Courses.
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Courses.
     */
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * Course findFirstOrThrow
   */
  export type CourseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Courses.
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Courses.
     */
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * Course findMany
   */
  export type CourseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Courses to fetch.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Courses.
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * Course create
   */
  export type CourseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * The data needed to create a Course.
     */
    data: XOR<CourseCreateInput, CourseUncheckedCreateInput>
  }

  /**
   * Course createMany
   */
  export type CourseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Courses.
     */
    data: CourseCreateManyInput | CourseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Course createManyAndReturn
   */
  export type CourseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * The data used to create many Courses.
     */
    data: CourseCreateManyInput | CourseCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Course update
   */
  export type CourseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * The data needed to update a Course.
     */
    data: XOR<CourseUpdateInput, CourseUncheckedUpdateInput>
    /**
     * Choose, which Course to update.
     */
    where: CourseWhereUniqueInput
  }

  /**
   * Course updateMany
   */
  export type CourseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Courses.
     */
    data: XOR<CourseUpdateManyMutationInput, CourseUncheckedUpdateManyInput>
    /**
     * Filter which Courses to update
     */
    where?: CourseWhereInput
    /**
     * Limit how many Courses to update.
     */
    limit?: number
  }

  /**
   * Course updateManyAndReturn
   */
  export type CourseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * The data used to update Courses.
     */
    data: XOR<CourseUpdateManyMutationInput, CourseUncheckedUpdateManyInput>
    /**
     * Filter which Courses to update
     */
    where?: CourseWhereInput
    /**
     * Limit how many Courses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Course upsert
   */
  export type CourseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * The filter to search for the Course to update in case it exists.
     */
    where: CourseWhereUniqueInput
    /**
     * In case the Course found by the `where` argument doesn't exist, create a new Course with this data.
     */
    create: XOR<CourseCreateInput, CourseUncheckedCreateInput>
    /**
     * In case the Course was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CourseUpdateInput, CourseUncheckedUpdateInput>
  }

  /**
   * Course delete
   */
  export type CourseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter which Course to delete.
     */
    where: CourseWhereUniqueInput
  }

  /**
   * Course deleteMany
   */
  export type CourseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Courses to delete
     */
    where?: CourseWhereInput
    /**
     * Limit how many Courses to delete.
     */
    limit?: number
  }

  /**
   * Course.courseOfferings
   */
  export type Course$courseOfferingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseOffering
     */
    select?: CourseOfferingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseOffering
     */
    omit?: CourseOfferingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseOfferingInclude<ExtArgs> | null
    where?: CourseOfferingWhereInput
    orderBy?: CourseOfferingOrderByWithRelationInput | CourseOfferingOrderByWithRelationInput[]
    cursor?: CourseOfferingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CourseOfferingScalarFieldEnum | CourseOfferingScalarFieldEnum[]
  }

  /**
   * Course without action
   */
  export type CourseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
  }


  /**
   * Model CourseOffering
   */

  export type AggregateCourseOffering = {
    _count: CourseOfferingCountAggregateOutputType | null
    _avg: CourseOfferingAvgAggregateOutputType | null
    _sum: CourseOfferingSumAggregateOutputType | null
    _min: CourseOfferingMinAggregateOutputType | null
    _max: CourseOfferingMaxAggregateOutputType | null
  }

  export type CourseOfferingAvgAggregateOutputType = {
    year: number | null
  }

  export type CourseOfferingSumAggregateOutputType = {
    year: number | null
  }

  export type CourseOfferingMinAggregateOutputType = {
    id: string | null
    courseId: string | null
    semester: string | null
    year: number | null
  }

  export type CourseOfferingMaxAggregateOutputType = {
    id: string | null
    courseId: string | null
    semester: string | null
    year: number | null
  }

  export type CourseOfferingCountAggregateOutputType = {
    id: number
    courseId: number
    semester: number
    year: number
    _all: number
  }


  export type CourseOfferingAvgAggregateInputType = {
    year?: true
  }

  export type CourseOfferingSumAggregateInputType = {
    year?: true
  }

  export type CourseOfferingMinAggregateInputType = {
    id?: true
    courseId?: true
    semester?: true
    year?: true
  }

  export type CourseOfferingMaxAggregateInputType = {
    id?: true
    courseId?: true
    semester?: true
    year?: true
  }

  export type CourseOfferingCountAggregateInputType = {
    id?: true
    courseId?: true
    semester?: true
    year?: true
    _all?: true
  }

  export type CourseOfferingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CourseOffering to aggregate.
     */
    where?: CourseOfferingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CourseOfferings to fetch.
     */
    orderBy?: CourseOfferingOrderByWithRelationInput | CourseOfferingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CourseOfferingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CourseOfferings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CourseOfferings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CourseOfferings
    **/
    _count?: true | CourseOfferingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CourseOfferingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CourseOfferingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CourseOfferingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CourseOfferingMaxAggregateInputType
  }

  export type GetCourseOfferingAggregateType<T extends CourseOfferingAggregateArgs> = {
        [P in keyof T & keyof AggregateCourseOffering]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCourseOffering[P]>
      : GetScalarType<T[P], AggregateCourseOffering[P]>
  }




  export type CourseOfferingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CourseOfferingWhereInput
    orderBy?: CourseOfferingOrderByWithAggregationInput | CourseOfferingOrderByWithAggregationInput[]
    by: CourseOfferingScalarFieldEnum[] | CourseOfferingScalarFieldEnum
    having?: CourseOfferingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CourseOfferingCountAggregateInputType | true
    _avg?: CourseOfferingAvgAggregateInputType
    _sum?: CourseOfferingSumAggregateInputType
    _min?: CourseOfferingMinAggregateInputType
    _max?: CourseOfferingMaxAggregateInputType
  }

  export type CourseOfferingGroupByOutputType = {
    id: string
    courseId: string
    semester: string
    year: number
    _count: CourseOfferingCountAggregateOutputType | null
    _avg: CourseOfferingAvgAggregateOutputType | null
    _sum: CourseOfferingSumAggregateOutputType | null
    _min: CourseOfferingMinAggregateOutputType | null
    _max: CourseOfferingMaxAggregateOutputType | null
  }

  type GetCourseOfferingGroupByPayload<T extends CourseOfferingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CourseOfferingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CourseOfferingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CourseOfferingGroupByOutputType[P]>
            : GetScalarType<T[P], CourseOfferingGroupByOutputType[P]>
        }
      >
    >


  export type CourseOfferingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    courseId?: boolean
    semester?: boolean
    year?: boolean
    course?: boolean | CourseDefaultArgs<ExtArgs>
    sections?: boolean | CourseOffering$sectionsArgs<ExtArgs>
    _count?: boolean | CourseOfferingCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["courseOffering"]>

  export type CourseOfferingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    courseId?: boolean
    semester?: boolean
    year?: boolean
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["courseOffering"]>

  export type CourseOfferingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    courseId?: boolean
    semester?: boolean
    year?: boolean
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["courseOffering"]>

  export type CourseOfferingSelectScalar = {
    id?: boolean
    courseId?: boolean
    semester?: boolean
    year?: boolean
  }

  export type CourseOfferingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "courseId" | "semester" | "year", ExtArgs["result"]["courseOffering"]>
  export type CourseOfferingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | CourseDefaultArgs<ExtArgs>
    sections?: boolean | CourseOffering$sectionsArgs<ExtArgs>
    _count?: boolean | CourseOfferingCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CourseOfferingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }
  export type CourseOfferingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }

  export type $CourseOfferingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CourseOffering"
    objects: {
      course: Prisma.$CoursePayload<ExtArgs>
      sections: Prisma.$SectionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      courseId: string
      semester: string
      year: number
    }, ExtArgs["result"]["courseOffering"]>
    composites: {}
  }

  type CourseOfferingGetPayload<S extends boolean | null | undefined | CourseOfferingDefaultArgs> = $Result.GetResult<Prisma.$CourseOfferingPayload, S>

  type CourseOfferingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CourseOfferingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CourseOfferingCountAggregateInputType | true
    }

  export interface CourseOfferingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CourseOffering'], meta: { name: 'CourseOffering' } }
    /**
     * Find zero or one CourseOffering that matches the filter.
     * @param {CourseOfferingFindUniqueArgs} args - Arguments to find a CourseOffering
     * @example
     * // Get one CourseOffering
     * const courseOffering = await prisma.courseOffering.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CourseOfferingFindUniqueArgs>(args: SelectSubset<T, CourseOfferingFindUniqueArgs<ExtArgs>>): Prisma__CourseOfferingClient<$Result.GetResult<Prisma.$CourseOfferingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CourseOffering that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CourseOfferingFindUniqueOrThrowArgs} args - Arguments to find a CourseOffering
     * @example
     * // Get one CourseOffering
     * const courseOffering = await prisma.courseOffering.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CourseOfferingFindUniqueOrThrowArgs>(args: SelectSubset<T, CourseOfferingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CourseOfferingClient<$Result.GetResult<Prisma.$CourseOfferingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CourseOffering that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseOfferingFindFirstArgs} args - Arguments to find a CourseOffering
     * @example
     * // Get one CourseOffering
     * const courseOffering = await prisma.courseOffering.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CourseOfferingFindFirstArgs>(args?: SelectSubset<T, CourseOfferingFindFirstArgs<ExtArgs>>): Prisma__CourseOfferingClient<$Result.GetResult<Prisma.$CourseOfferingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CourseOffering that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseOfferingFindFirstOrThrowArgs} args - Arguments to find a CourseOffering
     * @example
     * // Get one CourseOffering
     * const courseOffering = await prisma.courseOffering.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CourseOfferingFindFirstOrThrowArgs>(args?: SelectSubset<T, CourseOfferingFindFirstOrThrowArgs<ExtArgs>>): Prisma__CourseOfferingClient<$Result.GetResult<Prisma.$CourseOfferingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CourseOfferings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseOfferingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CourseOfferings
     * const courseOfferings = await prisma.courseOffering.findMany()
     * 
     * // Get first 10 CourseOfferings
     * const courseOfferings = await prisma.courseOffering.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const courseOfferingWithIdOnly = await prisma.courseOffering.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CourseOfferingFindManyArgs>(args?: SelectSubset<T, CourseOfferingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CourseOfferingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CourseOffering.
     * @param {CourseOfferingCreateArgs} args - Arguments to create a CourseOffering.
     * @example
     * // Create one CourseOffering
     * const CourseOffering = await prisma.courseOffering.create({
     *   data: {
     *     // ... data to create a CourseOffering
     *   }
     * })
     * 
     */
    create<T extends CourseOfferingCreateArgs>(args: SelectSubset<T, CourseOfferingCreateArgs<ExtArgs>>): Prisma__CourseOfferingClient<$Result.GetResult<Prisma.$CourseOfferingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CourseOfferings.
     * @param {CourseOfferingCreateManyArgs} args - Arguments to create many CourseOfferings.
     * @example
     * // Create many CourseOfferings
     * const courseOffering = await prisma.courseOffering.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CourseOfferingCreateManyArgs>(args?: SelectSubset<T, CourseOfferingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CourseOfferings and returns the data saved in the database.
     * @param {CourseOfferingCreateManyAndReturnArgs} args - Arguments to create many CourseOfferings.
     * @example
     * // Create many CourseOfferings
     * const courseOffering = await prisma.courseOffering.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CourseOfferings and only return the `id`
     * const courseOfferingWithIdOnly = await prisma.courseOffering.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CourseOfferingCreateManyAndReturnArgs>(args?: SelectSubset<T, CourseOfferingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CourseOfferingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CourseOffering.
     * @param {CourseOfferingDeleteArgs} args - Arguments to delete one CourseOffering.
     * @example
     * // Delete one CourseOffering
     * const CourseOffering = await prisma.courseOffering.delete({
     *   where: {
     *     // ... filter to delete one CourseOffering
     *   }
     * })
     * 
     */
    delete<T extends CourseOfferingDeleteArgs>(args: SelectSubset<T, CourseOfferingDeleteArgs<ExtArgs>>): Prisma__CourseOfferingClient<$Result.GetResult<Prisma.$CourseOfferingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CourseOffering.
     * @param {CourseOfferingUpdateArgs} args - Arguments to update one CourseOffering.
     * @example
     * // Update one CourseOffering
     * const courseOffering = await prisma.courseOffering.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CourseOfferingUpdateArgs>(args: SelectSubset<T, CourseOfferingUpdateArgs<ExtArgs>>): Prisma__CourseOfferingClient<$Result.GetResult<Prisma.$CourseOfferingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CourseOfferings.
     * @param {CourseOfferingDeleteManyArgs} args - Arguments to filter CourseOfferings to delete.
     * @example
     * // Delete a few CourseOfferings
     * const { count } = await prisma.courseOffering.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CourseOfferingDeleteManyArgs>(args?: SelectSubset<T, CourseOfferingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CourseOfferings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseOfferingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CourseOfferings
     * const courseOffering = await prisma.courseOffering.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CourseOfferingUpdateManyArgs>(args: SelectSubset<T, CourseOfferingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CourseOfferings and returns the data updated in the database.
     * @param {CourseOfferingUpdateManyAndReturnArgs} args - Arguments to update many CourseOfferings.
     * @example
     * // Update many CourseOfferings
     * const courseOffering = await prisma.courseOffering.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CourseOfferings and only return the `id`
     * const courseOfferingWithIdOnly = await prisma.courseOffering.updateManyAndReturn({
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
    updateManyAndReturn<T extends CourseOfferingUpdateManyAndReturnArgs>(args: SelectSubset<T, CourseOfferingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CourseOfferingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CourseOffering.
     * @param {CourseOfferingUpsertArgs} args - Arguments to update or create a CourseOffering.
     * @example
     * // Update or create a CourseOffering
     * const courseOffering = await prisma.courseOffering.upsert({
     *   create: {
     *     // ... data to create a CourseOffering
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CourseOffering we want to update
     *   }
     * })
     */
    upsert<T extends CourseOfferingUpsertArgs>(args: SelectSubset<T, CourseOfferingUpsertArgs<ExtArgs>>): Prisma__CourseOfferingClient<$Result.GetResult<Prisma.$CourseOfferingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CourseOfferings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseOfferingCountArgs} args - Arguments to filter CourseOfferings to count.
     * @example
     * // Count the number of CourseOfferings
     * const count = await prisma.courseOffering.count({
     *   where: {
     *     // ... the filter for the CourseOfferings we want to count
     *   }
     * })
    **/
    count<T extends CourseOfferingCountArgs>(
      args?: Subset<T, CourseOfferingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CourseOfferingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CourseOffering.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseOfferingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CourseOfferingAggregateArgs>(args: Subset<T, CourseOfferingAggregateArgs>): Prisma.PrismaPromise<GetCourseOfferingAggregateType<T>>

    /**
     * Group by CourseOffering.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseOfferingGroupByArgs} args - Group by arguments.
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
      T extends CourseOfferingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CourseOfferingGroupByArgs['orderBy'] }
        : { orderBy?: CourseOfferingGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CourseOfferingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCourseOfferingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CourseOffering model
   */
  readonly fields: CourseOfferingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CourseOffering.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CourseOfferingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    course<T extends CourseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CourseDefaultArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    sections<T extends CourseOffering$sectionsArgs<ExtArgs> = {}>(args?: Subset<T, CourseOffering$sectionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the CourseOffering model
   */
  interface CourseOfferingFieldRefs {
    readonly id: FieldRef<"CourseOffering", 'String'>
    readonly courseId: FieldRef<"CourseOffering", 'String'>
    readonly semester: FieldRef<"CourseOffering", 'String'>
    readonly year: FieldRef<"CourseOffering", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * CourseOffering findUnique
   */
  export type CourseOfferingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseOffering
     */
    select?: CourseOfferingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseOffering
     */
    omit?: CourseOfferingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseOfferingInclude<ExtArgs> | null
    /**
     * Filter, which CourseOffering to fetch.
     */
    where: CourseOfferingWhereUniqueInput
  }

  /**
   * CourseOffering findUniqueOrThrow
   */
  export type CourseOfferingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseOffering
     */
    select?: CourseOfferingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseOffering
     */
    omit?: CourseOfferingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseOfferingInclude<ExtArgs> | null
    /**
     * Filter, which CourseOffering to fetch.
     */
    where: CourseOfferingWhereUniqueInput
  }

  /**
   * CourseOffering findFirst
   */
  export type CourseOfferingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseOffering
     */
    select?: CourseOfferingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseOffering
     */
    omit?: CourseOfferingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseOfferingInclude<ExtArgs> | null
    /**
     * Filter, which CourseOffering to fetch.
     */
    where?: CourseOfferingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CourseOfferings to fetch.
     */
    orderBy?: CourseOfferingOrderByWithRelationInput | CourseOfferingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CourseOfferings.
     */
    cursor?: CourseOfferingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CourseOfferings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CourseOfferings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CourseOfferings.
     */
    distinct?: CourseOfferingScalarFieldEnum | CourseOfferingScalarFieldEnum[]
  }

  /**
   * CourseOffering findFirstOrThrow
   */
  export type CourseOfferingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseOffering
     */
    select?: CourseOfferingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseOffering
     */
    omit?: CourseOfferingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseOfferingInclude<ExtArgs> | null
    /**
     * Filter, which CourseOffering to fetch.
     */
    where?: CourseOfferingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CourseOfferings to fetch.
     */
    orderBy?: CourseOfferingOrderByWithRelationInput | CourseOfferingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CourseOfferings.
     */
    cursor?: CourseOfferingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CourseOfferings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CourseOfferings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CourseOfferings.
     */
    distinct?: CourseOfferingScalarFieldEnum | CourseOfferingScalarFieldEnum[]
  }

  /**
   * CourseOffering findMany
   */
  export type CourseOfferingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseOffering
     */
    select?: CourseOfferingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseOffering
     */
    omit?: CourseOfferingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseOfferingInclude<ExtArgs> | null
    /**
     * Filter, which CourseOfferings to fetch.
     */
    where?: CourseOfferingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CourseOfferings to fetch.
     */
    orderBy?: CourseOfferingOrderByWithRelationInput | CourseOfferingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CourseOfferings.
     */
    cursor?: CourseOfferingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CourseOfferings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CourseOfferings.
     */
    skip?: number
    distinct?: CourseOfferingScalarFieldEnum | CourseOfferingScalarFieldEnum[]
  }

  /**
   * CourseOffering create
   */
  export type CourseOfferingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseOffering
     */
    select?: CourseOfferingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseOffering
     */
    omit?: CourseOfferingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseOfferingInclude<ExtArgs> | null
    /**
     * The data needed to create a CourseOffering.
     */
    data: XOR<CourseOfferingCreateInput, CourseOfferingUncheckedCreateInput>
  }

  /**
   * CourseOffering createMany
   */
  export type CourseOfferingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CourseOfferings.
     */
    data: CourseOfferingCreateManyInput | CourseOfferingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CourseOffering createManyAndReturn
   */
  export type CourseOfferingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseOffering
     */
    select?: CourseOfferingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CourseOffering
     */
    omit?: CourseOfferingOmit<ExtArgs> | null
    /**
     * The data used to create many CourseOfferings.
     */
    data: CourseOfferingCreateManyInput | CourseOfferingCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseOfferingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CourseOffering update
   */
  export type CourseOfferingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseOffering
     */
    select?: CourseOfferingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseOffering
     */
    omit?: CourseOfferingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseOfferingInclude<ExtArgs> | null
    /**
     * The data needed to update a CourseOffering.
     */
    data: XOR<CourseOfferingUpdateInput, CourseOfferingUncheckedUpdateInput>
    /**
     * Choose, which CourseOffering to update.
     */
    where: CourseOfferingWhereUniqueInput
  }

  /**
   * CourseOffering updateMany
   */
  export type CourseOfferingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CourseOfferings.
     */
    data: XOR<CourseOfferingUpdateManyMutationInput, CourseOfferingUncheckedUpdateManyInput>
    /**
     * Filter which CourseOfferings to update
     */
    where?: CourseOfferingWhereInput
    /**
     * Limit how many CourseOfferings to update.
     */
    limit?: number
  }

  /**
   * CourseOffering updateManyAndReturn
   */
  export type CourseOfferingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseOffering
     */
    select?: CourseOfferingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CourseOffering
     */
    omit?: CourseOfferingOmit<ExtArgs> | null
    /**
     * The data used to update CourseOfferings.
     */
    data: XOR<CourseOfferingUpdateManyMutationInput, CourseOfferingUncheckedUpdateManyInput>
    /**
     * Filter which CourseOfferings to update
     */
    where?: CourseOfferingWhereInput
    /**
     * Limit how many CourseOfferings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseOfferingIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CourseOffering upsert
   */
  export type CourseOfferingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseOffering
     */
    select?: CourseOfferingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseOffering
     */
    omit?: CourseOfferingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseOfferingInclude<ExtArgs> | null
    /**
     * The filter to search for the CourseOffering to update in case it exists.
     */
    where: CourseOfferingWhereUniqueInput
    /**
     * In case the CourseOffering found by the `where` argument doesn't exist, create a new CourseOffering with this data.
     */
    create: XOR<CourseOfferingCreateInput, CourseOfferingUncheckedCreateInput>
    /**
     * In case the CourseOffering was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CourseOfferingUpdateInput, CourseOfferingUncheckedUpdateInput>
  }

  /**
   * CourseOffering delete
   */
  export type CourseOfferingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseOffering
     */
    select?: CourseOfferingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseOffering
     */
    omit?: CourseOfferingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseOfferingInclude<ExtArgs> | null
    /**
     * Filter which CourseOffering to delete.
     */
    where: CourseOfferingWhereUniqueInput
  }

  /**
   * CourseOffering deleteMany
   */
  export type CourseOfferingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CourseOfferings to delete
     */
    where?: CourseOfferingWhereInput
    /**
     * Limit how many CourseOfferings to delete.
     */
    limit?: number
  }

  /**
   * CourseOffering.sections
   */
  export type CourseOffering$sectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Section
     */
    omit?: SectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionInclude<ExtArgs> | null
    where?: SectionWhereInput
    orderBy?: SectionOrderByWithRelationInput | SectionOrderByWithRelationInput[]
    cursor?: SectionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SectionScalarFieldEnum | SectionScalarFieldEnum[]
  }

  /**
   * CourseOffering without action
   */
  export type CourseOfferingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseOffering
     */
    select?: CourseOfferingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseOffering
     */
    omit?: CourseOfferingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseOfferingInclude<ExtArgs> | null
  }


  /**
   * Model Section
   */

  export type AggregateSection = {
    _count: SectionCountAggregateOutputType | null
    _avg: SectionAvgAggregateOutputType | null
    _sum: SectionSumAggregateOutputType | null
    _min: SectionMinAggregateOutputType | null
    _max: SectionMaxAggregateOutputType | null
  }

  export type SectionAvgAggregateOutputType = {
    requiredLabSize: number | null
  }

  export type SectionSumAggregateOutputType = {
    requiredLabSize: number | null
  }

  export type SectionMinAggregateOutputType = {
    id: string | null
    sectionNumber: string | null
    requiredLabSize: number | null
    courseOfferingId: string | null
  }

  export type SectionMaxAggregateOutputType = {
    id: string | null
    sectionNumber: string | null
    requiredLabSize: number | null
    courseOfferingId: string | null
  }

  export type SectionCountAggregateOutputType = {
    id: number
    sectionNumber: number
    requiredLabSize: number
    courseOfferingId: number
    _all: number
  }


  export type SectionAvgAggregateInputType = {
    requiredLabSize?: true
  }

  export type SectionSumAggregateInputType = {
    requiredLabSize?: true
  }

  export type SectionMinAggregateInputType = {
    id?: true
    sectionNumber?: true
    requiredLabSize?: true
    courseOfferingId?: true
  }

  export type SectionMaxAggregateInputType = {
    id?: true
    sectionNumber?: true
    requiredLabSize?: true
    courseOfferingId?: true
  }

  export type SectionCountAggregateInputType = {
    id?: true
    sectionNumber?: true
    requiredLabSize?: true
    courseOfferingId?: true
    _all?: true
  }

  export type SectionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Section to aggregate.
     */
    where?: SectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sections to fetch.
     */
    orderBy?: SectionOrderByWithRelationInput | SectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sections
    **/
    _count?: true | SectionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SectionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SectionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SectionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SectionMaxAggregateInputType
  }

  export type GetSectionAggregateType<T extends SectionAggregateArgs> = {
        [P in keyof T & keyof AggregateSection]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSection[P]>
      : GetScalarType<T[P], AggregateSection[P]>
  }




  export type SectionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SectionWhereInput
    orderBy?: SectionOrderByWithAggregationInput | SectionOrderByWithAggregationInput[]
    by: SectionScalarFieldEnum[] | SectionScalarFieldEnum
    having?: SectionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SectionCountAggregateInputType | true
    _avg?: SectionAvgAggregateInputType
    _sum?: SectionSumAggregateInputType
    _min?: SectionMinAggregateInputType
    _max?: SectionMaxAggregateInputType
  }

  export type SectionGroupByOutputType = {
    id: string
    sectionNumber: string
    requiredLabSize: number
    courseOfferingId: string
    _count: SectionCountAggregateOutputType | null
    _avg: SectionAvgAggregateOutputType | null
    _sum: SectionSumAggregateOutputType | null
    _min: SectionMinAggregateOutputType | null
    _max: SectionMaxAggregateOutputType | null
  }

  type GetSectionGroupByPayload<T extends SectionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SectionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SectionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SectionGroupByOutputType[P]>
            : GetScalarType<T[P], SectionGroupByOutputType[P]>
        }
      >
    >


  export type SectionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sectionNumber?: boolean
    requiredLabSize?: boolean
    courseOfferingId?: boolean
    courseOffering?: boolean | CourseOfferingDefaultArgs<ExtArgs>
    assignment?: boolean | Section$assignmentArgs<ExtArgs>
  }, ExtArgs["result"]["section"]>

  export type SectionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sectionNumber?: boolean
    requiredLabSize?: boolean
    courseOfferingId?: boolean
    courseOffering?: boolean | CourseOfferingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["section"]>

  export type SectionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sectionNumber?: boolean
    requiredLabSize?: boolean
    courseOfferingId?: boolean
    courseOffering?: boolean | CourseOfferingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["section"]>

  export type SectionSelectScalar = {
    id?: boolean
    sectionNumber?: boolean
    requiredLabSize?: boolean
    courseOfferingId?: boolean
  }

  export type SectionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sectionNumber" | "requiredLabSize" | "courseOfferingId", ExtArgs["result"]["section"]>
  export type SectionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    courseOffering?: boolean | CourseOfferingDefaultArgs<ExtArgs>
    assignment?: boolean | Section$assignmentArgs<ExtArgs>
  }
  export type SectionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    courseOffering?: boolean | CourseOfferingDefaultArgs<ExtArgs>
  }
  export type SectionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    courseOffering?: boolean | CourseOfferingDefaultArgs<ExtArgs>
  }

  export type $SectionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Section"
    objects: {
      courseOffering: Prisma.$CourseOfferingPayload<ExtArgs>
      assignment: Prisma.$ScheduleAssignmentPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sectionNumber: string
      requiredLabSize: number
      courseOfferingId: string
    }, ExtArgs["result"]["section"]>
    composites: {}
  }

  type SectionGetPayload<S extends boolean | null | undefined | SectionDefaultArgs> = $Result.GetResult<Prisma.$SectionPayload, S>

  type SectionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SectionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SectionCountAggregateInputType | true
    }

  export interface SectionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Section'], meta: { name: 'Section' } }
    /**
     * Find zero or one Section that matches the filter.
     * @param {SectionFindUniqueArgs} args - Arguments to find a Section
     * @example
     * // Get one Section
     * const section = await prisma.section.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SectionFindUniqueArgs>(args: SelectSubset<T, SectionFindUniqueArgs<ExtArgs>>): Prisma__SectionClient<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Section that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SectionFindUniqueOrThrowArgs} args - Arguments to find a Section
     * @example
     * // Get one Section
     * const section = await prisma.section.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SectionFindUniqueOrThrowArgs>(args: SelectSubset<T, SectionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SectionClient<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Section that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectionFindFirstArgs} args - Arguments to find a Section
     * @example
     * // Get one Section
     * const section = await prisma.section.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SectionFindFirstArgs>(args?: SelectSubset<T, SectionFindFirstArgs<ExtArgs>>): Prisma__SectionClient<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Section that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectionFindFirstOrThrowArgs} args - Arguments to find a Section
     * @example
     * // Get one Section
     * const section = await prisma.section.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SectionFindFirstOrThrowArgs>(args?: SelectSubset<T, SectionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SectionClient<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sections that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sections
     * const sections = await prisma.section.findMany()
     * 
     * // Get first 10 Sections
     * const sections = await prisma.section.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sectionWithIdOnly = await prisma.section.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SectionFindManyArgs>(args?: SelectSubset<T, SectionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Section.
     * @param {SectionCreateArgs} args - Arguments to create a Section.
     * @example
     * // Create one Section
     * const Section = await prisma.section.create({
     *   data: {
     *     // ... data to create a Section
     *   }
     * })
     * 
     */
    create<T extends SectionCreateArgs>(args: SelectSubset<T, SectionCreateArgs<ExtArgs>>): Prisma__SectionClient<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sections.
     * @param {SectionCreateManyArgs} args - Arguments to create many Sections.
     * @example
     * // Create many Sections
     * const section = await prisma.section.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SectionCreateManyArgs>(args?: SelectSubset<T, SectionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sections and returns the data saved in the database.
     * @param {SectionCreateManyAndReturnArgs} args - Arguments to create many Sections.
     * @example
     * // Create many Sections
     * const section = await prisma.section.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sections and only return the `id`
     * const sectionWithIdOnly = await prisma.section.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SectionCreateManyAndReturnArgs>(args?: SelectSubset<T, SectionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Section.
     * @param {SectionDeleteArgs} args - Arguments to delete one Section.
     * @example
     * // Delete one Section
     * const Section = await prisma.section.delete({
     *   where: {
     *     // ... filter to delete one Section
     *   }
     * })
     * 
     */
    delete<T extends SectionDeleteArgs>(args: SelectSubset<T, SectionDeleteArgs<ExtArgs>>): Prisma__SectionClient<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Section.
     * @param {SectionUpdateArgs} args - Arguments to update one Section.
     * @example
     * // Update one Section
     * const section = await prisma.section.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SectionUpdateArgs>(args: SelectSubset<T, SectionUpdateArgs<ExtArgs>>): Prisma__SectionClient<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sections.
     * @param {SectionDeleteManyArgs} args - Arguments to filter Sections to delete.
     * @example
     * // Delete a few Sections
     * const { count } = await prisma.section.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SectionDeleteManyArgs>(args?: SelectSubset<T, SectionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sections
     * const section = await prisma.section.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SectionUpdateManyArgs>(args: SelectSubset<T, SectionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sections and returns the data updated in the database.
     * @param {SectionUpdateManyAndReturnArgs} args - Arguments to update many Sections.
     * @example
     * // Update many Sections
     * const section = await prisma.section.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sections and only return the `id`
     * const sectionWithIdOnly = await prisma.section.updateManyAndReturn({
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
    updateManyAndReturn<T extends SectionUpdateManyAndReturnArgs>(args: SelectSubset<T, SectionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Section.
     * @param {SectionUpsertArgs} args - Arguments to update or create a Section.
     * @example
     * // Update or create a Section
     * const section = await prisma.section.upsert({
     *   create: {
     *     // ... data to create a Section
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Section we want to update
     *   }
     * })
     */
    upsert<T extends SectionUpsertArgs>(args: SelectSubset<T, SectionUpsertArgs<ExtArgs>>): Prisma__SectionClient<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectionCountArgs} args - Arguments to filter Sections to count.
     * @example
     * // Count the number of Sections
     * const count = await prisma.section.count({
     *   where: {
     *     // ... the filter for the Sections we want to count
     *   }
     * })
    **/
    count<T extends SectionCountArgs>(
      args?: Subset<T, SectionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SectionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Section.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SectionAggregateArgs>(args: Subset<T, SectionAggregateArgs>): Prisma.PrismaPromise<GetSectionAggregateType<T>>

    /**
     * Group by Section.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectionGroupByArgs} args - Group by arguments.
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
      T extends SectionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SectionGroupByArgs['orderBy'] }
        : { orderBy?: SectionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SectionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSectionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Section model
   */
  readonly fields: SectionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Section.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SectionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    courseOffering<T extends CourseOfferingDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CourseOfferingDefaultArgs<ExtArgs>>): Prisma__CourseOfferingClient<$Result.GetResult<Prisma.$CourseOfferingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    assignment<T extends Section$assignmentArgs<ExtArgs> = {}>(args?: Subset<T, Section$assignmentArgs<ExtArgs>>): Prisma__ScheduleAssignmentClient<$Result.GetResult<Prisma.$ScheduleAssignmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Section model
   */
  interface SectionFieldRefs {
    readonly id: FieldRef<"Section", 'String'>
    readonly sectionNumber: FieldRef<"Section", 'String'>
    readonly requiredLabSize: FieldRef<"Section", 'Int'>
    readonly courseOfferingId: FieldRef<"Section", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Section findUnique
   */
  export type SectionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Section
     */
    omit?: SectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionInclude<ExtArgs> | null
    /**
     * Filter, which Section to fetch.
     */
    where: SectionWhereUniqueInput
  }

  /**
   * Section findUniqueOrThrow
   */
  export type SectionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Section
     */
    omit?: SectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionInclude<ExtArgs> | null
    /**
     * Filter, which Section to fetch.
     */
    where: SectionWhereUniqueInput
  }

  /**
   * Section findFirst
   */
  export type SectionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Section
     */
    omit?: SectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionInclude<ExtArgs> | null
    /**
     * Filter, which Section to fetch.
     */
    where?: SectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sections to fetch.
     */
    orderBy?: SectionOrderByWithRelationInput | SectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sections.
     */
    cursor?: SectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sections.
     */
    distinct?: SectionScalarFieldEnum | SectionScalarFieldEnum[]
  }

  /**
   * Section findFirstOrThrow
   */
  export type SectionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Section
     */
    omit?: SectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionInclude<ExtArgs> | null
    /**
     * Filter, which Section to fetch.
     */
    where?: SectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sections to fetch.
     */
    orderBy?: SectionOrderByWithRelationInput | SectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sections.
     */
    cursor?: SectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sections.
     */
    distinct?: SectionScalarFieldEnum | SectionScalarFieldEnum[]
  }

  /**
   * Section findMany
   */
  export type SectionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Section
     */
    omit?: SectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionInclude<ExtArgs> | null
    /**
     * Filter, which Sections to fetch.
     */
    where?: SectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sections to fetch.
     */
    orderBy?: SectionOrderByWithRelationInput | SectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sections.
     */
    cursor?: SectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sections.
     */
    skip?: number
    distinct?: SectionScalarFieldEnum | SectionScalarFieldEnum[]
  }

  /**
   * Section create
   */
  export type SectionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Section
     */
    omit?: SectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionInclude<ExtArgs> | null
    /**
     * The data needed to create a Section.
     */
    data: XOR<SectionCreateInput, SectionUncheckedCreateInput>
  }

  /**
   * Section createMany
   */
  export type SectionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sections.
     */
    data: SectionCreateManyInput | SectionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Section createManyAndReturn
   */
  export type SectionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Section
     */
    omit?: SectionOmit<ExtArgs> | null
    /**
     * The data used to create many Sections.
     */
    data: SectionCreateManyInput | SectionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Section update
   */
  export type SectionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Section
     */
    omit?: SectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionInclude<ExtArgs> | null
    /**
     * The data needed to update a Section.
     */
    data: XOR<SectionUpdateInput, SectionUncheckedUpdateInput>
    /**
     * Choose, which Section to update.
     */
    where: SectionWhereUniqueInput
  }

  /**
   * Section updateMany
   */
  export type SectionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sections.
     */
    data: XOR<SectionUpdateManyMutationInput, SectionUncheckedUpdateManyInput>
    /**
     * Filter which Sections to update
     */
    where?: SectionWhereInput
    /**
     * Limit how many Sections to update.
     */
    limit?: number
  }

  /**
   * Section updateManyAndReturn
   */
  export type SectionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Section
     */
    omit?: SectionOmit<ExtArgs> | null
    /**
     * The data used to update Sections.
     */
    data: XOR<SectionUpdateManyMutationInput, SectionUncheckedUpdateManyInput>
    /**
     * Filter which Sections to update
     */
    where?: SectionWhereInput
    /**
     * Limit how many Sections to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Section upsert
   */
  export type SectionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Section
     */
    omit?: SectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionInclude<ExtArgs> | null
    /**
     * The filter to search for the Section to update in case it exists.
     */
    where: SectionWhereUniqueInput
    /**
     * In case the Section found by the `where` argument doesn't exist, create a new Section with this data.
     */
    create: XOR<SectionCreateInput, SectionUncheckedCreateInput>
    /**
     * In case the Section was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SectionUpdateInput, SectionUncheckedUpdateInput>
  }

  /**
   * Section delete
   */
  export type SectionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Section
     */
    omit?: SectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionInclude<ExtArgs> | null
    /**
     * Filter which Section to delete.
     */
    where: SectionWhereUniqueInput
  }

  /**
   * Section deleteMany
   */
  export type SectionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sections to delete
     */
    where?: SectionWhereInput
    /**
     * Limit how many Sections to delete.
     */
    limit?: number
  }

  /**
   * Section.assignment
   */
  export type Section$assignmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduleAssignment
     */
    select?: ScheduleAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduleAssignment
     */
    omit?: ScheduleAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleAssignmentInclude<ExtArgs> | null
    where?: ScheduleAssignmentWhereInput
  }

  /**
   * Section without action
   */
  export type SectionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Section
     */
    omit?: SectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionInclude<ExtArgs> | null
  }


  /**
   * Model ScheduleAssignment
   */

  export type AggregateScheduleAssignment = {
    _count: ScheduleAssignmentCountAggregateOutputType | null
    _min: ScheduleAssignmentMinAggregateOutputType | null
    _max: ScheduleAssignmentMaxAggregateOutputType | null
  }

  export type ScheduleAssignmentMinAggregateOutputType = {
    id: string | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
    sectionId: string | null
    labRoomId: string | null
    labAssistantId: string | null
    timeSlotId: string | null
  }

  export type ScheduleAssignmentMaxAggregateOutputType = {
    id: string | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
    sectionId: string | null
    labRoomId: string | null
    labAssistantId: string | null
    timeSlotId: string | null
  }

  export type ScheduleAssignmentCountAggregateOutputType = {
    id: number
    status: number
    createdAt: number
    updatedAt: number
    sectionId: number
    labRoomId: number
    labAssistantId: number
    timeSlotId: number
    _all: number
  }


  export type ScheduleAssignmentMinAggregateInputType = {
    id?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    sectionId?: true
    labRoomId?: true
    labAssistantId?: true
    timeSlotId?: true
  }

  export type ScheduleAssignmentMaxAggregateInputType = {
    id?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    sectionId?: true
    labRoomId?: true
    labAssistantId?: true
    timeSlotId?: true
  }

  export type ScheduleAssignmentCountAggregateInputType = {
    id?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    sectionId?: true
    labRoomId?: true
    labAssistantId?: true
    timeSlotId?: true
    _all?: true
  }

  export type ScheduleAssignmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ScheduleAssignment to aggregate.
     */
    where?: ScheduleAssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScheduleAssignments to fetch.
     */
    orderBy?: ScheduleAssignmentOrderByWithRelationInput | ScheduleAssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ScheduleAssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScheduleAssignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScheduleAssignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ScheduleAssignments
    **/
    _count?: true | ScheduleAssignmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ScheduleAssignmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ScheduleAssignmentMaxAggregateInputType
  }

  export type GetScheduleAssignmentAggregateType<T extends ScheduleAssignmentAggregateArgs> = {
        [P in keyof T & keyof AggregateScheduleAssignment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateScheduleAssignment[P]>
      : GetScalarType<T[P], AggregateScheduleAssignment[P]>
  }




  export type ScheduleAssignmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScheduleAssignmentWhereInput
    orderBy?: ScheduleAssignmentOrderByWithAggregationInput | ScheduleAssignmentOrderByWithAggregationInput[]
    by: ScheduleAssignmentScalarFieldEnum[] | ScheduleAssignmentScalarFieldEnum
    having?: ScheduleAssignmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ScheduleAssignmentCountAggregateInputType | true
    _min?: ScheduleAssignmentMinAggregateInputType
    _max?: ScheduleAssignmentMaxAggregateInputType
  }

  export type ScheduleAssignmentGroupByOutputType = {
    id: string
    status: string
    createdAt: Date
    updatedAt: Date
    sectionId: string
    labRoomId: string
    labAssistantId: string
    timeSlotId: string
    _count: ScheduleAssignmentCountAggregateOutputType | null
    _min: ScheduleAssignmentMinAggregateOutputType | null
    _max: ScheduleAssignmentMaxAggregateOutputType | null
  }

  type GetScheduleAssignmentGroupByPayload<T extends ScheduleAssignmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ScheduleAssignmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ScheduleAssignmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ScheduleAssignmentGroupByOutputType[P]>
            : GetScalarType<T[P], ScheduleAssignmentGroupByOutputType[P]>
        }
      >
    >


  export type ScheduleAssignmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    sectionId?: boolean
    labRoomId?: boolean
    labAssistantId?: boolean
    timeSlotId?: boolean
    section?: boolean | SectionDefaultArgs<ExtArgs>
    labRoom?: boolean | LabRoomDefaultArgs<ExtArgs>
    labAssistant?: boolean | LabAssistantDefaultArgs<ExtArgs>
    timeSlot?: boolean | TimeSlotDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["scheduleAssignment"]>

  export type ScheduleAssignmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    sectionId?: boolean
    labRoomId?: boolean
    labAssistantId?: boolean
    timeSlotId?: boolean
    section?: boolean | SectionDefaultArgs<ExtArgs>
    labRoom?: boolean | LabRoomDefaultArgs<ExtArgs>
    labAssistant?: boolean | LabAssistantDefaultArgs<ExtArgs>
    timeSlot?: boolean | TimeSlotDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["scheduleAssignment"]>

  export type ScheduleAssignmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    sectionId?: boolean
    labRoomId?: boolean
    labAssistantId?: boolean
    timeSlotId?: boolean
    section?: boolean | SectionDefaultArgs<ExtArgs>
    labRoom?: boolean | LabRoomDefaultArgs<ExtArgs>
    labAssistant?: boolean | LabAssistantDefaultArgs<ExtArgs>
    timeSlot?: boolean | TimeSlotDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["scheduleAssignment"]>

  export type ScheduleAssignmentSelectScalar = {
    id?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    sectionId?: boolean
    labRoomId?: boolean
    labAssistantId?: boolean
    timeSlotId?: boolean
  }

  export type ScheduleAssignmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "status" | "createdAt" | "updatedAt" | "sectionId" | "labRoomId" | "labAssistantId" | "timeSlotId", ExtArgs["result"]["scheduleAssignment"]>
  export type ScheduleAssignmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    section?: boolean | SectionDefaultArgs<ExtArgs>
    labRoom?: boolean | LabRoomDefaultArgs<ExtArgs>
    labAssistant?: boolean | LabAssistantDefaultArgs<ExtArgs>
    timeSlot?: boolean | TimeSlotDefaultArgs<ExtArgs>
  }
  export type ScheduleAssignmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    section?: boolean | SectionDefaultArgs<ExtArgs>
    labRoom?: boolean | LabRoomDefaultArgs<ExtArgs>
    labAssistant?: boolean | LabAssistantDefaultArgs<ExtArgs>
    timeSlot?: boolean | TimeSlotDefaultArgs<ExtArgs>
  }
  export type ScheduleAssignmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    section?: boolean | SectionDefaultArgs<ExtArgs>
    labRoom?: boolean | LabRoomDefaultArgs<ExtArgs>
    labAssistant?: boolean | LabAssistantDefaultArgs<ExtArgs>
    timeSlot?: boolean | TimeSlotDefaultArgs<ExtArgs>
  }

  export type $ScheduleAssignmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ScheduleAssignment"
    objects: {
      section: Prisma.$SectionPayload<ExtArgs>
      labRoom: Prisma.$LabRoomPayload<ExtArgs>
      labAssistant: Prisma.$LabAssistantPayload<ExtArgs>
      timeSlot: Prisma.$TimeSlotPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      status: string
      createdAt: Date
      updatedAt: Date
      sectionId: string
      labRoomId: string
      labAssistantId: string
      timeSlotId: string
    }, ExtArgs["result"]["scheduleAssignment"]>
    composites: {}
  }

  type ScheduleAssignmentGetPayload<S extends boolean | null | undefined | ScheduleAssignmentDefaultArgs> = $Result.GetResult<Prisma.$ScheduleAssignmentPayload, S>

  type ScheduleAssignmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ScheduleAssignmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ScheduleAssignmentCountAggregateInputType | true
    }

  export interface ScheduleAssignmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ScheduleAssignment'], meta: { name: 'ScheduleAssignment' } }
    /**
     * Find zero or one ScheduleAssignment that matches the filter.
     * @param {ScheduleAssignmentFindUniqueArgs} args - Arguments to find a ScheduleAssignment
     * @example
     * // Get one ScheduleAssignment
     * const scheduleAssignment = await prisma.scheduleAssignment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ScheduleAssignmentFindUniqueArgs>(args: SelectSubset<T, ScheduleAssignmentFindUniqueArgs<ExtArgs>>): Prisma__ScheduleAssignmentClient<$Result.GetResult<Prisma.$ScheduleAssignmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ScheduleAssignment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ScheduleAssignmentFindUniqueOrThrowArgs} args - Arguments to find a ScheduleAssignment
     * @example
     * // Get one ScheduleAssignment
     * const scheduleAssignment = await prisma.scheduleAssignment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ScheduleAssignmentFindUniqueOrThrowArgs>(args: SelectSubset<T, ScheduleAssignmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ScheduleAssignmentClient<$Result.GetResult<Prisma.$ScheduleAssignmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ScheduleAssignment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleAssignmentFindFirstArgs} args - Arguments to find a ScheduleAssignment
     * @example
     * // Get one ScheduleAssignment
     * const scheduleAssignment = await prisma.scheduleAssignment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ScheduleAssignmentFindFirstArgs>(args?: SelectSubset<T, ScheduleAssignmentFindFirstArgs<ExtArgs>>): Prisma__ScheduleAssignmentClient<$Result.GetResult<Prisma.$ScheduleAssignmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ScheduleAssignment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleAssignmentFindFirstOrThrowArgs} args - Arguments to find a ScheduleAssignment
     * @example
     * // Get one ScheduleAssignment
     * const scheduleAssignment = await prisma.scheduleAssignment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ScheduleAssignmentFindFirstOrThrowArgs>(args?: SelectSubset<T, ScheduleAssignmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__ScheduleAssignmentClient<$Result.GetResult<Prisma.$ScheduleAssignmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ScheduleAssignments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleAssignmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ScheduleAssignments
     * const scheduleAssignments = await prisma.scheduleAssignment.findMany()
     * 
     * // Get first 10 ScheduleAssignments
     * const scheduleAssignments = await prisma.scheduleAssignment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const scheduleAssignmentWithIdOnly = await prisma.scheduleAssignment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ScheduleAssignmentFindManyArgs>(args?: SelectSubset<T, ScheduleAssignmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScheduleAssignmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ScheduleAssignment.
     * @param {ScheduleAssignmentCreateArgs} args - Arguments to create a ScheduleAssignment.
     * @example
     * // Create one ScheduleAssignment
     * const ScheduleAssignment = await prisma.scheduleAssignment.create({
     *   data: {
     *     // ... data to create a ScheduleAssignment
     *   }
     * })
     * 
     */
    create<T extends ScheduleAssignmentCreateArgs>(args: SelectSubset<T, ScheduleAssignmentCreateArgs<ExtArgs>>): Prisma__ScheduleAssignmentClient<$Result.GetResult<Prisma.$ScheduleAssignmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ScheduleAssignments.
     * @param {ScheduleAssignmentCreateManyArgs} args - Arguments to create many ScheduleAssignments.
     * @example
     * // Create many ScheduleAssignments
     * const scheduleAssignment = await prisma.scheduleAssignment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ScheduleAssignmentCreateManyArgs>(args?: SelectSubset<T, ScheduleAssignmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ScheduleAssignments and returns the data saved in the database.
     * @param {ScheduleAssignmentCreateManyAndReturnArgs} args - Arguments to create many ScheduleAssignments.
     * @example
     * // Create many ScheduleAssignments
     * const scheduleAssignment = await prisma.scheduleAssignment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ScheduleAssignments and only return the `id`
     * const scheduleAssignmentWithIdOnly = await prisma.scheduleAssignment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ScheduleAssignmentCreateManyAndReturnArgs>(args?: SelectSubset<T, ScheduleAssignmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScheduleAssignmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ScheduleAssignment.
     * @param {ScheduleAssignmentDeleteArgs} args - Arguments to delete one ScheduleAssignment.
     * @example
     * // Delete one ScheduleAssignment
     * const ScheduleAssignment = await prisma.scheduleAssignment.delete({
     *   where: {
     *     // ... filter to delete one ScheduleAssignment
     *   }
     * })
     * 
     */
    delete<T extends ScheduleAssignmentDeleteArgs>(args: SelectSubset<T, ScheduleAssignmentDeleteArgs<ExtArgs>>): Prisma__ScheduleAssignmentClient<$Result.GetResult<Prisma.$ScheduleAssignmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ScheduleAssignment.
     * @param {ScheduleAssignmentUpdateArgs} args - Arguments to update one ScheduleAssignment.
     * @example
     * // Update one ScheduleAssignment
     * const scheduleAssignment = await prisma.scheduleAssignment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ScheduleAssignmentUpdateArgs>(args: SelectSubset<T, ScheduleAssignmentUpdateArgs<ExtArgs>>): Prisma__ScheduleAssignmentClient<$Result.GetResult<Prisma.$ScheduleAssignmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ScheduleAssignments.
     * @param {ScheduleAssignmentDeleteManyArgs} args - Arguments to filter ScheduleAssignments to delete.
     * @example
     * // Delete a few ScheduleAssignments
     * const { count } = await prisma.scheduleAssignment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ScheduleAssignmentDeleteManyArgs>(args?: SelectSubset<T, ScheduleAssignmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ScheduleAssignments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleAssignmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ScheduleAssignments
     * const scheduleAssignment = await prisma.scheduleAssignment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ScheduleAssignmentUpdateManyArgs>(args: SelectSubset<T, ScheduleAssignmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ScheduleAssignments and returns the data updated in the database.
     * @param {ScheduleAssignmentUpdateManyAndReturnArgs} args - Arguments to update many ScheduleAssignments.
     * @example
     * // Update many ScheduleAssignments
     * const scheduleAssignment = await prisma.scheduleAssignment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ScheduleAssignments and only return the `id`
     * const scheduleAssignmentWithIdOnly = await prisma.scheduleAssignment.updateManyAndReturn({
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
    updateManyAndReturn<T extends ScheduleAssignmentUpdateManyAndReturnArgs>(args: SelectSubset<T, ScheduleAssignmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScheduleAssignmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ScheduleAssignment.
     * @param {ScheduleAssignmentUpsertArgs} args - Arguments to update or create a ScheduleAssignment.
     * @example
     * // Update or create a ScheduleAssignment
     * const scheduleAssignment = await prisma.scheduleAssignment.upsert({
     *   create: {
     *     // ... data to create a ScheduleAssignment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ScheduleAssignment we want to update
     *   }
     * })
     */
    upsert<T extends ScheduleAssignmentUpsertArgs>(args: SelectSubset<T, ScheduleAssignmentUpsertArgs<ExtArgs>>): Prisma__ScheduleAssignmentClient<$Result.GetResult<Prisma.$ScheduleAssignmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ScheduleAssignments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleAssignmentCountArgs} args - Arguments to filter ScheduleAssignments to count.
     * @example
     * // Count the number of ScheduleAssignments
     * const count = await prisma.scheduleAssignment.count({
     *   where: {
     *     // ... the filter for the ScheduleAssignments we want to count
     *   }
     * })
    **/
    count<T extends ScheduleAssignmentCountArgs>(
      args?: Subset<T, ScheduleAssignmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ScheduleAssignmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ScheduleAssignment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleAssignmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ScheduleAssignmentAggregateArgs>(args: Subset<T, ScheduleAssignmentAggregateArgs>): Prisma.PrismaPromise<GetScheduleAssignmentAggregateType<T>>

    /**
     * Group by ScheduleAssignment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleAssignmentGroupByArgs} args - Group by arguments.
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
      T extends ScheduleAssignmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ScheduleAssignmentGroupByArgs['orderBy'] }
        : { orderBy?: ScheduleAssignmentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ScheduleAssignmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetScheduleAssignmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ScheduleAssignment model
   */
  readonly fields: ScheduleAssignmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ScheduleAssignment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ScheduleAssignmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    section<T extends SectionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SectionDefaultArgs<ExtArgs>>): Prisma__SectionClient<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    labRoom<T extends LabRoomDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LabRoomDefaultArgs<ExtArgs>>): Prisma__LabRoomClient<$Result.GetResult<Prisma.$LabRoomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    labAssistant<T extends LabAssistantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LabAssistantDefaultArgs<ExtArgs>>): Prisma__LabAssistantClient<$Result.GetResult<Prisma.$LabAssistantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    timeSlot<T extends TimeSlotDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TimeSlotDefaultArgs<ExtArgs>>): Prisma__TimeSlotClient<$Result.GetResult<Prisma.$TimeSlotPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ScheduleAssignment model
   */
  interface ScheduleAssignmentFieldRefs {
    readonly id: FieldRef<"ScheduleAssignment", 'String'>
    readonly status: FieldRef<"ScheduleAssignment", 'String'>
    readonly createdAt: FieldRef<"ScheduleAssignment", 'DateTime'>
    readonly updatedAt: FieldRef<"ScheduleAssignment", 'DateTime'>
    readonly sectionId: FieldRef<"ScheduleAssignment", 'String'>
    readonly labRoomId: FieldRef<"ScheduleAssignment", 'String'>
    readonly labAssistantId: FieldRef<"ScheduleAssignment", 'String'>
    readonly timeSlotId: FieldRef<"ScheduleAssignment", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ScheduleAssignment findUnique
   */
  export type ScheduleAssignmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduleAssignment
     */
    select?: ScheduleAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduleAssignment
     */
    omit?: ScheduleAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which ScheduleAssignment to fetch.
     */
    where: ScheduleAssignmentWhereUniqueInput
  }

  /**
   * ScheduleAssignment findUniqueOrThrow
   */
  export type ScheduleAssignmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduleAssignment
     */
    select?: ScheduleAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduleAssignment
     */
    omit?: ScheduleAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which ScheduleAssignment to fetch.
     */
    where: ScheduleAssignmentWhereUniqueInput
  }

  /**
   * ScheduleAssignment findFirst
   */
  export type ScheduleAssignmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduleAssignment
     */
    select?: ScheduleAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduleAssignment
     */
    omit?: ScheduleAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which ScheduleAssignment to fetch.
     */
    where?: ScheduleAssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScheduleAssignments to fetch.
     */
    orderBy?: ScheduleAssignmentOrderByWithRelationInput | ScheduleAssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ScheduleAssignments.
     */
    cursor?: ScheduleAssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScheduleAssignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScheduleAssignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ScheduleAssignments.
     */
    distinct?: ScheduleAssignmentScalarFieldEnum | ScheduleAssignmentScalarFieldEnum[]
  }

  /**
   * ScheduleAssignment findFirstOrThrow
   */
  export type ScheduleAssignmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduleAssignment
     */
    select?: ScheduleAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduleAssignment
     */
    omit?: ScheduleAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which ScheduleAssignment to fetch.
     */
    where?: ScheduleAssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScheduleAssignments to fetch.
     */
    orderBy?: ScheduleAssignmentOrderByWithRelationInput | ScheduleAssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ScheduleAssignments.
     */
    cursor?: ScheduleAssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScheduleAssignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScheduleAssignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ScheduleAssignments.
     */
    distinct?: ScheduleAssignmentScalarFieldEnum | ScheduleAssignmentScalarFieldEnum[]
  }

  /**
   * ScheduleAssignment findMany
   */
  export type ScheduleAssignmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduleAssignment
     */
    select?: ScheduleAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduleAssignment
     */
    omit?: ScheduleAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which ScheduleAssignments to fetch.
     */
    where?: ScheduleAssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScheduleAssignments to fetch.
     */
    orderBy?: ScheduleAssignmentOrderByWithRelationInput | ScheduleAssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ScheduleAssignments.
     */
    cursor?: ScheduleAssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScheduleAssignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScheduleAssignments.
     */
    skip?: number
    distinct?: ScheduleAssignmentScalarFieldEnum | ScheduleAssignmentScalarFieldEnum[]
  }

  /**
   * ScheduleAssignment create
   */
  export type ScheduleAssignmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduleAssignment
     */
    select?: ScheduleAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduleAssignment
     */
    omit?: ScheduleAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleAssignmentInclude<ExtArgs> | null
    /**
     * The data needed to create a ScheduleAssignment.
     */
    data: XOR<ScheduleAssignmentCreateInput, ScheduleAssignmentUncheckedCreateInput>
  }

  /**
   * ScheduleAssignment createMany
   */
  export type ScheduleAssignmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ScheduleAssignments.
     */
    data: ScheduleAssignmentCreateManyInput | ScheduleAssignmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ScheduleAssignment createManyAndReturn
   */
  export type ScheduleAssignmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduleAssignment
     */
    select?: ScheduleAssignmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduleAssignment
     */
    omit?: ScheduleAssignmentOmit<ExtArgs> | null
    /**
     * The data used to create many ScheduleAssignments.
     */
    data: ScheduleAssignmentCreateManyInput | ScheduleAssignmentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleAssignmentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ScheduleAssignment update
   */
  export type ScheduleAssignmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduleAssignment
     */
    select?: ScheduleAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduleAssignment
     */
    omit?: ScheduleAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleAssignmentInclude<ExtArgs> | null
    /**
     * The data needed to update a ScheduleAssignment.
     */
    data: XOR<ScheduleAssignmentUpdateInput, ScheduleAssignmentUncheckedUpdateInput>
    /**
     * Choose, which ScheduleAssignment to update.
     */
    where: ScheduleAssignmentWhereUniqueInput
  }

  /**
   * ScheduleAssignment updateMany
   */
  export type ScheduleAssignmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ScheduleAssignments.
     */
    data: XOR<ScheduleAssignmentUpdateManyMutationInput, ScheduleAssignmentUncheckedUpdateManyInput>
    /**
     * Filter which ScheduleAssignments to update
     */
    where?: ScheduleAssignmentWhereInput
    /**
     * Limit how many ScheduleAssignments to update.
     */
    limit?: number
  }

  /**
   * ScheduleAssignment updateManyAndReturn
   */
  export type ScheduleAssignmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduleAssignment
     */
    select?: ScheduleAssignmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduleAssignment
     */
    omit?: ScheduleAssignmentOmit<ExtArgs> | null
    /**
     * The data used to update ScheduleAssignments.
     */
    data: XOR<ScheduleAssignmentUpdateManyMutationInput, ScheduleAssignmentUncheckedUpdateManyInput>
    /**
     * Filter which ScheduleAssignments to update
     */
    where?: ScheduleAssignmentWhereInput
    /**
     * Limit how many ScheduleAssignments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleAssignmentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ScheduleAssignment upsert
   */
  export type ScheduleAssignmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduleAssignment
     */
    select?: ScheduleAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduleAssignment
     */
    omit?: ScheduleAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleAssignmentInclude<ExtArgs> | null
    /**
     * The filter to search for the ScheduleAssignment to update in case it exists.
     */
    where: ScheduleAssignmentWhereUniqueInput
    /**
     * In case the ScheduleAssignment found by the `where` argument doesn't exist, create a new ScheduleAssignment with this data.
     */
    create: XOR<ScheduleAssignmentCreateInput, ScheduleAssignmentUncheckedCreateInput>
    /**
     * In case the ScheduleAssignment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ScheduleAssignmentUpdateInput, ScheduleAssignmentUncheckedUpdateInput>
  }

  /**
   * ScheduleAssignment delete
   */
  export type ScheduleAssignmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduleAssignment
     */
    select?: ScheduleAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduleAssignment
     */
    omit?: ScheduleAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleAssignmentInclude<ExtArgs> | null
    /**
     * Filter which ScheduleAssignment to delete.
     */
    where: ScheduleAssignmentWhereUniqueInput
  }

  /**
   * ScheduleAssignment deleteMany
   */
  export type ScheduleAssignmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ScheduleAssignments to delete
     */
    where?: ScheduleAssignmentWhereInput
    /**
     * Limit how many ScheduleAssignments to delete.
     */
    limit?: number
  }

  /**
   * ScheduleAssignment without action
   */
  export type ScheduleAssignmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduleAssignment
     */
    select?: ScheduleAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduleAssignment
     */
    omit?: ScheduleAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleAssignmentInclude<ExtArgs> | null
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


  export const DepartmentScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type DepartmentScalarFieldEnum = (typeof DepartmentScalarFieldEnum)[keyof typeof DepartmentScalarFieldEnum]


  export const LabAssistantScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    firstName: 'firstName',
    lastName: 'lastName',
    departmentId: 'departmentId'
  };

  export type LabAssistantScalarFieldEnum = (typeof LabAssistantScalarFieldEnum)[keyof typeof LabAssistantScalarFieldEnum]


  export const LabRoomScalarFieldEnum: {
    id: 'id',
    name: 'name',
    capacity: 'capacity',
    status: 'status'
  };

  export type LabRoomScalarFieldEnum = (typeof LabRoomScalarFieldEnum)[keyof typeof LabRoomScalarFieldEnum]


  export const TimeSlotScalarFieldEnum: {
    id: 'id',
    dayOfWeek: 'dayOfWeek',
    startTime: 'startTime',
    endTime: 'endTime'
  };

  export type TimeSlotScalarFieldEnum = (typeof TimeSlotScalarFieldEnum)[keyof typeof TimeSlotScalarFieldEnum]


  export const CourseScalarFieldEnum: {
    id: 'id',
    name: 'name',
    courseCode: 'courseCode',
    departmentId: 'departmentId'
  };

  export type CourseScalarFieldEnum = (typeof CourseScalarFieldEnum)[keyof typeof CourseScalarFieldEnum]


  export const CourseOfferingScalarFieldEnum: {
    id: 'id',
    courseId: 'courseId',
    semester: 'semester',
    year: 'year'
  };

  export type CourseOfferingScalarFieldEnum = (typeof CourseOfferingScalarFieldEnum)[keyof typeof CourseOfferingScalarFieldEnum]


  export const SectionScalarFieldEnum: {
    id: 'id',
    sectionNumber: 'sectionNumber',
    requiredLabSize: 'requiredLabSize',
    courseOfferingId: 'courseOfferingId'
  };

  export type SectionScalarFieldEnum = (typeof SectionScalarFieldEnum)[keyof typeof SectionScalarFieldEnum]


  export const ScheduleAssignmentScalarFieldEnum: {
    id: 'id',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    sectionId: 'sectionId',
    labRoomId: 'labRoomId',
    labAssistantId: 'labAssistantId',
    timeSlotId: 'timeSlotId'
  };

  export type ScheduleAssignmentScalarFieldEnum = (typeof ScheduleAssignmentScalarFieldEnum)[keyof typeof ScheduleAssignmentScalarFieldEnum]


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


  /**
   * Field references
   */


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


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
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    labAssistant?: XOR<LabAssistantNullableScalarRelationFilter, LabAssistantWhereInput> | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    labAssistant?: LabAssistantOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    labAssistant?: XOR<LabAssistantNullableScalarRelationFilter, LabAssistantWhereInput> | null
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type DepartmentWhereInput = {
    AND?: DepartmentWhereInput | DepartmentWhereInput[]
    OR?: DepartmentWhereInput[]
    NOT?: DepartmentWhereInput | DepartmentWhereInput[]
    id?: StringFilter<"Department"> | string
    name?: StringFilter<"Department"> | string
    courses?: CourseListRelationFilter
    labAssistants?: LabAssistantListRelationFilter
  }

  export type DepartmentOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    courses?: CourseOrderByRelationAggregateInput
    labAssistants?: LabAssistantOrderByRelationAggregateInput
  }

  export type DepartmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: DepartmentWhereInput | DepartmentWhereInput[]
    OR?: DepartmentWhereInput[]
    NOT?: DepartmentWhereInput | DepartmentWhereInput[]
    courses?: CourseListRelationFilter
    labAssistants?: LabAssistantListRelationFilter
  }, "id" | "name">

  export type DepartmentOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: DepartmentCountOrderByAggregateInput
    _max?: DepartmentMaxOrderByAggregateInput
    _min?: DepartmentMinOrderByAggregateInput
  }

  export type DepartmentScalarWhereWithAggregatesInput = {
    AND?: DepartmentScalarWhereWithAggregatesInput | DepartmentScalarWhereWithAggregatesInput[]
    OR?: DepartmentScalarWhereWithAggregatesInput[]
    NOT?: DepartmentScalarWhereWithAggregatesInput | DepartmentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Department"> | string
    name?: StringWithAggregatesFilter<"Department"> | string
  }

  export type LabAssistantWhereInput = {
    AND?: LabAssistantWhereInput | LabAssistantWhereInput[]
    OR?: LabAssistantWhereInput[]
    NOT?: LabAssistantWhereInput | LabAssistantWhereInput[]
    id?: StringFilter<"LabAssistant"> | string
    userId?: StringFilter<"LabAssistant"> | string
    firstName?: StringFilter<"LabAssistant"> | string
    lastName?: StringFilter<"LabAssistant"> | string
    departmentId?: StringFilter<"LabAssistant"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    department?: XOR<DepartmentScalarRelationFilter, DepartmentWhereInput>
    assignments?: ScheduleAssignmentListRelationFilter
  }

  export type LabAssistantOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    departmentId?: SortOrder
    user?: UserOrderByWithRelationInput
    department?: DepartmentOrderByWithRelationInput
    assignments?: ScheduleAssignmentOrderByRelationAggregateInput
  }

  export type LabAssistantWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: LabAssistantWhereInput | LabAssistantWhereInput[]
    OR?: LabAssistantWhereInput[]
    NOT?: LabAssistantWhereInput | LabAssistantWhereInput[]
    firstName?: StringFilter<"LabAssistant"> | string
    lastName?: StringFilter<"LabAssistant"> | string
    departmentId?: StringFilter<"LabAssistant"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    department?: XOR<DepartmentScalarRelationFilter, DepartmentWhereInput>
    assignments?: ScheduleAssignmentListRelationFilter
  }, "id" | "userId">

  export type LabAssistantOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    departmentId?: SortOrder
    _count?: LabAssistantCountOrderByAggregateInput
    _max?: LabAssistantMaxOrderByAggregateInput
    _min?: LabAssistantMinOrderByAggregateInput
  }

  export type LabAssistantScalarWhereWithAggregatesInput = {
    AND?: LabAssistantScalarWhereWithAggregatesInput | LabAssistantScalarWhereWithAggregatesInput[]
    OR?: LabAssistantScalarWhereWithAggregatesInput[]
    NOT?: LabAssistantScalarWhereWithAggregatesInput | LabAssistantScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"LabAssistant"> | string
    userId?: StringWithAggregatesFilter<"LabAssistant"> | string
    firstName?: StringWithAggregatesFilter<"LabAssistant"> | string
    lastName?: StringWithAggregatesFilter<"LabAssistant"> | string
    departmentId?: StringWithAggregatesFilter<"LabAssistant"> | string
  }

  export type LabRoomWhereInput = {
    AND?: LabRoomWhereInput | LabRoomWhereInput[]
    OR?: LabRoomWhereInput[]
    NOT?: LabRoomWhereInput | LabRoomWhereInput[]
    id?: StringFilter<"LabRoom"> | string
    name?: StringFilter<"LabRoom"> | string
    capacity?: IntFilter<"LabRoom"> | number
    status?: StringFilter<"LabRoom"> | string
    assignments?: ScheduleAssignmentListRelationFilter
  }

  export type LabRoomOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    capacity?: SortOrder
    status?: SortOrder
    assignments?: ScheduleAssignmentOrderByRelationAggregateInput
  }

  export type LabRoomWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: LabRoomWhereInput | LabRoomWhereInput[]
    OR?: LabRoomWhereInput[]
    NOT?: LabRoomWhereInput | LabRoomWhereInput[]
    capacity?: IntFilter<"LabRoom"> | number
    status?: StringFilter<"LabRoom"> | string
    assignments?: ScheduleAssignmentListRelationFilter
  }, "id" | "name">

  export type LabRoomOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    capacity?: SortOrder
    status?: SortOrder
    _count?: LabRoomCountOrderByAggregateInput
    _avg?: LabRoomAvgOrderByAggregateInput
    _max?: LabRoomMaxOrderByAggregateInput
    _min?: LabRoomMinOrderByAggregateInput
    _sum?: LabRoomSumOrderByAggregateInput
  }

  export type LabRoomScalarWhereWithAggregatesInput = {
    AND?: LabRoomScalarWhereWithAggregatesInput | LabRoomScalarWhereWithAggregatesInput[]
    OR?: LabRoomScalarWhereWithAggregatesInput[]
    NOT?: LabRoomScalarWhereWithAggregatesInput | LabRoomScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"LabRoom"> | string
    name?: StringWithAggregatesFilter<"LabRoom"> | string
    capacity?: IntWithAggregatesFilter<"LabRoom"> | number
    status?: StringWithAggregatesFilter<"LabRoom"> | string
  }

  export type TimeSlotWhereInput = {
    AND?: TimeSlotWhereInput | TimeSlotWhereInput[]
    OR?: TimeSlotWhereInput[]
    NOT?: TimeSlotWhereInput | TimeSlotWhereInput[]
    id?: StringFilter<"TimeSlot"> | string
    dayOfWeek?: StringFilter<"TimeSlot"> | string
    startTime?: StringFilter<"TimeSlot"> | string
    endTime?: StringFilter<"TimeSlot"> | string
    assignments?: ScheduleAssignmentListRelationFilter
  }

  export type TimeSlotOrderByWithRelationInput = {
    id?: SortOrder
    dayOfWeek?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    assignments?: ScheduleAssignmentOrderByRelationAggregateInput
  }

  export type TimeSlotWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TimeSlotWhereInput | TimeSlotWhereInput[]
    OR?: TimeSlotWhereInput[]
    NOT?: TimeSlotWhereInput | TimeSlotWhereInput[]
    dayOfWeek?: StringFilter<"TimeSlot"> | string
    startTime?: StringFilter<"TimeSlot"> | string
    endTime?: StringFilter<"TimeSlot"> | string
    assignments?: ScheduleAssignmentListRelationFilter
  }, "id">

  export type TimeSlotOrderByWithAggregationInput = {
    id?: SortOrder
    dayOfWeek?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    _count?: TimeSlotCountOrderByAggregateInput
    _max?: TimeSlotMaxOrderByAggregateInput
    _min?: TimeSlotMinOrderByAggregateInput
  }

  export type TimeSlotScalarWhereWithAggregatesInput = {
    AND?: TimeSlotScalarWhereWithAggregatesInput | TimeSlotScalarWhereWithAggregatesInput[]
    OR?: TimeSlotScalarWhereWithAggregatesInput[]
    NOT?: TimeSlotScalarWhereWithAggregatesInput | TimeSlotScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TimeSlot"> | string
    dayOfWeek?: StringWithAggregatesFilter<"TimeSlot"> | string
    startTime?: StringWithAggregatesFilter<"TimeSlot"> | string
    endTime?: StringWithAggregatesFilter<"TimeSlot"> | string
  }

  export type CourseWhereInput = {
    AND?: CourseWhereInput | CourseWhereInput[]
    OR?: CourseWhereInput[]
    NOT?: CourseWhereInput | CourseWhereInput[]
    id?: StringFilter<"Course"> | string
    name?: StringFilter<"Course"> | string
    courseCode?: StringFilter<"Course"> | string
    departmentId?: StringFilter<"Course"> | string
    department?: XOR<DepartmentScalarRelationFilter, DepartmentWhereInput>
    courseOfferings?: CourseOfferingListRelationFilter
  }

  export type CourseOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    courseCode?: SortOrder
    departmentId?: SortOrder
    department?: DepartmentOrderByWithRelationInput
    courseOfferings?: CourseOfferingOrderByRelationAggregateInput
  }

  export type CourseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    courseCode?: string
    AND?: CourseWhereInput | CourseWhereInput[]
    OR?: CourseWhereInput[]
    NOT?: CourseWhereInput | CourseWhereInput[]
    name?: StringFilter<"Course"> | string
    departmentId?: StringFilter<"Course"> | string
    department?: XOR<DepartmentScalarRelationFilter, DepartmentWhereInput>
    courseOfferings?: CourseOfferingListRelationFilter
  }, "id" | "courseCode">

  export type CourseOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    courseCode?: SortOrder
    departmentId?: SortOrder
    _count?: CourseCountOrderByAggregateInput
    _max?: CourseMaxOrderByAggregateInput
    _min?: CourseMinOrderByAggregateInput
  }

  export type CourseScalarWhereWithAggregatesInput = {
    AND?: CourseScalarWhereWithAggregatesInput | CourseScalarWhereWithAggregatesInput[]
    OR?: CourseScalarWhereWithAggregatesInput[]
    NOT?: CourseScalarWhereWithAggregatesInput | CourseScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Course"> | string
    name?: StringWithAggregatesFilter<"Course"> | string
    courseCode?: StringWithAggregatesFilter<"Course"> | string
    departmentId?: StringWithAggregatesFilter<"Course"> | string
  }

  export type CourseOfferingWhereInput = {
    AND?: CourseOfferingWhereInput | CourseOfferingWhereInput[]
    OR?: CourseOfferingWhereInput[]
    NOT?: CourseOfferingWhereInput | CourseOfferingWhereInput[]
    id?: StringFilter<"CourseOffering"> | string
    courseId?: StringFilter<"CourseOffering"> | string
    semester?: StringFilter<"CourseOffering"> | string
    year?: IntFilter<"CourseOffering"> | number
    course?: XOR<CourseScalarRelationFilter, CourseWhereInput>
    sections?: SectionListRelationFilter
  }

  export type CourseOfferingOrderByWithRelationInput = {
    id?: SortOrder
    courseId?: SortOrder
    semester?: SortOrder
    year?: SortOrder
    course?: CourseOrderByWithRelationInput
    sections?: SectionOrderByRelationAggregateInput
  }

  export type CourseOfferingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CourseOfferingWhereInput | CourseOfferingWhereInput[]
    OR?: CourseOfferingWhereInput[]
    NOT?: CourseOfferingWhereInput | CourseOfferingWhereInput[]
    courseId?: StringFilter<"CourseOffering"> | string
    semester?: StringFilter<"CourseOffering"> | string
    year?: IntFilter<"CourseOffering"> | number
    course?: XOR<CourseScalarRelationFilter, CourseWhereInput>
    sections?: SectionListRelationFilter
  }, "id">

  export type CourseOfferingOrderByWithAggregationInput = {
    id?: SortOrder
    courseId?: SortOrder
    semester?: SortOrder
    year?: SortOrder
    _count?: CourseOfferingCountOrderByAggregateInput
    _avg?: CourseOfferingAvgOrderByAggregateInput
    _max?: CourseOfferingMaxOrderByAggregateInput
    _min?: CourseOfferingMinOrderByAggregateInput
    _sum?: CourseOfferingSumOrderByAggregateInput
  }

  export type CourseOfferingScalarWhereWithAggregatesInput = {
    AND?: CourseOfferingScalarWhereWithAggregatesInput | CourseOfferingScalarWhereWithAggregatesInput[]
    OR?: CourseOfferingScalarWhereWithAggregatesInput[]
    NOT?: CourseOfferingScalarWhereWithAggregatesInput | CourseOfferingScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CourseOffering"> | string
    courseId?: StringWithAggregatesFilter<"CourseOffering"> | string
    semester?: StringWithAggregatesFilter<"CourseOffering"> | string
    year?: IntWithAggregatesFilter<"CourseOffering"> | number
  }

  export type SectionWhereInput = {
    AND?: SectionWhereInput | SectionWhereInput[]
    OR?: SectionWhereInput[]
    NOT?: SectionWhereInput | SectionWhereInput[]
    id?: StringFilter<"Section"> | string
    sectionNumber?: StringFilter<"Section"> | string
    requiredLabSize?: IntFilter<"Section"> | number
    courseOfferingId?: StringFilter<"Section"> | string
    courseOffering?: XOR<CourseOfferingScalarRelationFilter, CourseOfferingWhereInput>
    assignment?: XOR<ScheduleAssignmentNullableScalarRelationFilter, ScheduleAssignmentWhereInput> | null
  }

  export type SectionOrderByWithRelationInput = {
    id?: SortOrder
    sectionNumber?: SortOrder
    requiredLabSize?: SortOrder
    courseOfferingId?: SortOrder
    courseOffering?: CourseOfferingOrderByWithRelationInput
    assignment?: ScheduleAssignmentOrderByWithRelationInput
  }

  export type SectionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SectionWhereInput | SectionWhereInput[]
    OR?: SectionWhereInput[]
    NOT?: SectionWhereInput | SectionWhereInput[]
    sectionNumber?: StringFilter<"Section"> | string
    requiredLabSize?: IntFilter<"Section"> | number
    courseOfferingId?: StringFilter<"Section"> | string
    courseOffering?: XOR<CourseOfferingScalarRelationFilter, CourseOfferingWhereInput>
    assignment?: XOR<ScheduleAssignmentNullableScalarRelationFilter, ScheduleAssignmentWhereInput> | null
  }, "id">

  export type SectionOrderByWithAggregationInput = {
    id?: SortOrder
    sectionNumber?: SortOrder
    requiredLabSize?: SortOrder
    courseOfferingId?: SortOrder
    _count?: SectionCountOrderByAggregateInput
    _avg?: SectionAvgOrderByAggregateInput
    _max?: SectionMaxOrderByAggregateInput
    _min?: SectionMinOrderByAggregateInput
    _sum?: SectionSumOrderByAggregateInput
  }

  export type SectionScalarWhereWithAggregatesInput = {
    AND?: SectionScalarWhereWithAggregatesInput | SectionScalarWhereWithAggregatesInput[]
    OR?: SectionScalarWhereWithAggregatesInput[]
    NOT?: SectionScalarWhereWithAggregatesInput | SectionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Section"> | string
    sectionNumber?: StringWithAggregatesFilter<"Section"> | string
    requiredLabSize?: IntWithAggregatesFilter<"Section"> | number
    courseOfferingId?: StringWithAggregatesFilter<"Section"> | string
  }

  export type ScheduleAssignmentWhereInput = {
    AND?: ScheduleAssignmentWhereInput | ScheduleAssignmentWhereInput[]
    OR?: ScheduleAssignmentWhereInput[]
    NOT?: ScheduleAssignmentWhereInput | ScheduleAssignmentWhereInput[]
    id?: StringFilter<"ScheduleAssignment"> | string
    status?: StringFilter<"ScheduleAssignment"> | string
    createdAt?: DateTimeFilter<"ScheduleAssignment"> | Date | string
    updatedAt?: DateTimeFilter<"ScheduleAssignment"> | Date | string
    sectionId?: StringFilter<"ScheduleAssignment"> | string
    labRoomId?: StringFilter<"ScheduleAssignment"> | string
    labAssistantId?: StringFilter<"ScheduleAssignment"> | string
    timeSlotId?: StringFilter<"ScheduleAssignment"> | string
    section?: XOR<SectionScalarRelationFilter, SectionWhereInput>
    labRoom?: XOR<LabRoomScalarRelationFilter, LabRoomWhereInput>
    labAssistant?: XOR<LabAssistantScalarRelationFilter, LabAssistantWhereInput>
    timeSlot?: XOR<TimeSlotScalarRelationFilter, TimeSlotWhereInput>
  }

  export type ScheduleAssignmentOrderByWithRelationInput = {
    id?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    sectionId?: SortOrder
    labRoomId?: SortOrder
    labAssistantId?: SortOrder
    timeSlotId?: SortOrder
    section?: SectionOrderByWithRelationInput
    labRoom?: LabRoomOrderByWithRelationInput
    labAssistant?: LabAssistantOrderByWithRelationInput
    timeSlot?: TimeSlotOrderByWithRelationInput
  }

  export type ScheduleAssignmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    sectionId?: string
    AND?: ScheduleAssignmentWhereInput | ScheduleAssignmentWhereInput[]
    OR?: ScheduleAssignmentWhereInput[]
    NOT?: ScheduleAssignmentWhereInput | ScheduleAssignmentWhereInput[]
    status?: StringFilter<"ScheduleAssignment"> | string
    createdAt?: DateTimeFilter<"ScheduleAssignment"> | Date | string
    updatedAt?: DateTimeFilter<"ScheduleAssignment"> | Date | string
    labRoomId?: StringFilter<"ScheduleAssignment"> | string
    labAssistantId?: StringFilter<"ScheduleAssignment"> | string
    timeSlotId?: StringFilter<"ScheduleAssignment"> | string
    section?: XOR<SectionScalarRelationFilter, SectionWhereInput>
    labRoom?: XOR<LabRoomScalarRelationFilter, LabRoomWhereInput>
    labAssistant?: XOR<LabAssistantScalarRelationFilter, LabAssistantWhereInput>
    timeSlot?: XOR<TimeSlotScalarRelationFilter, TimeSlotWhereInput>
  }, "id" | "sectionId">

  export type ScheduleAssignmentOrderByWithAggregationInput = {
    id?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    sectionId?: SortOrder
    labRoomId?: SortOrder
    labAssistantId?: SortOrder
    timeSlotId?: SortOrder
    _count?: ScheduleAssignmentCountOrderByAggregateInput
    _max?: ScheduleAssignmentMaxOrderByAggregateInput
    _min?: ScheduleAssignmentMinOrderByAggregateInput
  }

  export type ScheduleAssignmentScalarWhereWithAggregatesInput = {
    AND?: ScheduleAssignmentScalarWhereWithAggregatesInput | ScheduleAssignmentScalarWhereWithAggregatesInput[]
    OR?: ScheduleAssignmentScalarWhereWithAggregatesInput[]
    NOT?: ScheduleAssignmentScalarWhereWithAggregatesInput | ScheduleAssignmentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ScheduleAssignment"> | string
    status?: StringWithAggregatesFilter<"ScheduleAssignment"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ScheduleAssignment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ScheduleAssignment"> | Date | string
    sectionId?: StringWithAggregatesFilter<"ScheduleAssignment"> | string
    labRoomId?: StringWithAggregatesFilter<"ScheduleAssignment"> | string
    labAssistantId?: StringWithAggregatesFilter<"ScheduleAssignment"> | string
    timeSlotId?: StringWithAggregatesFilter<"ScheduleAssignment"> | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    labAssistant?: LabAssistantCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    labAssistant?: LabAssistantUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    labAssistant?: LabAssistantUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    labAssistant?: LabAssistantUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DepartmentCreateInput = {
    id?: string
    name: string
    courses?: CourseCreateNestedManyWithoutDepartmentInput
    labAssistants?: LabAssistantCreateNestedManyWithoutDepartmentInput
  }

  export type DepartmentUncheckedCreateInput = {
    id?: string
    name: string
    courses?: CourseUncheckedCreateNestedManyWithoutDepartmentInput
    labAssistants?: LabAssistantUncheckedCreateNestedManyWithoutDepartmentInput
  }

  export type DepartmentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    courses?: CourseUpdateManyWithoutDepartmentNestedInput
    labAssistants?: LabAssistantUpdateManyWithoutDepartmentNestedInput
  }

  export type DepartmentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    courses?: CourseUncheckedUpdateManyWithoutDepartmentNestedInput
    labAssistants?: LabAssistantUncheckedUpdateManyWithoutDepartmentNestedInput
  }

  export type DepartmentCreateManyInput = {
    id?: string
    name: string
  }

  export type DepartmentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type DepartmentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type LabAssistantCreateInput = {
    id?: string
    firstName: string
    lastName: string
    user: UserCreateNestedOneWithoutLabAssistantInput
    department: DepartmentCreateNestedOneWithoutLabAssistantsInput
    assignments?: ScheduleAssignmentCreateNestedManyWithoutLabAssistantInput
  }

  export type LabAssistantUncheckedCreateInput = {
    id?: string
    userId: string
    firstName: string
    lastName: string
    departmentId: string
    assignments?: ScheduleAssignmentUncheckedCreateNestedManyWithoutLabAssistantInput
  }

  export type LabAssistantUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutLabAssistantNestedInput
    department?: DepartmentUpdateOneRequiredWithoutLabAssistantsNestedInput
    assignments?: ScheduleAssignmentUpdateManyWithoutLabAssistantNestedInput
  }

  export type LabAssistantUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    departmentId?: StringFieldUpdateOperationsInput | string
    assignments?: ScheduleAssignmentUncheckedUpdateManyWithoutLabAssistantNestedInput
  }

  export type LabAssistantCreateManyInput = {
    id?: string
    userId: string
    firstName: string
    lastName: string
    departmentId: string
  }

  export type LabAssistantUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
  }

  export type LabAssistantUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    departmentId?: StringFieldUpdateOperationsInput | string
  }

  export type LabRoomCreateInput = {
    id?: string
    name: string
    capacity: number
    status?: string
    assignments?: ScheduleAssignmentCreateNestedManyWithoutLabRoomInput
  }

  export type LabRoomUncheckedCreateInput = {
    id?: string
    name: string
    capacity: number
    status?: string
    assignments?: ScheduleAssignmentUncheckedCreateNestedManyWithoutLabRoomInput
  }

  export type LabRoomUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    assignments?: ScheduleAssignmentUpdateManyWithoutLabRoomNestedInput
  }

  export type LabRoomUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    assignments?: ScheduleAssignmentUncheckedUpdateManyWithoutLabRoomNestedInput
  }

  export type LabRoomCreateManyInput = {
    id?: string
    name: string
    capacity: number
    status?: string
  }

  export type LabRoomUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
  }

  export type LabRoomUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
  }

  export type TimeSlotCreateInput = {
    id?: string
    dayOfWeek: string
    startTime: string
    endTime: string
    assignments?: ScheduleAssignmentCreateNestedManyWithoutTimeSlotInput
  }

  export type TimeSlotUncheckedCreateInput = {
    id?: string
    dayOfWeek: string
    startTime: string
    endTime: string
    assignments?: ScheduleAssignmentUncheckedCreateNestedManyWithoutTimeSlotInput
  }

  export type TimeSlotUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    dayOfWeek?: StringFieldUpdateOperationsInput | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    assignments?: ScheduleAssignmentUpdateManyWithoutTimeSlotNestedInput
  }

  export type TimeSlotUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    dayOfWeek?: StringFieldUpdateOperationsInput | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    assignments?: ScheduleAssignmentUncheckedUpdateManyWithoutTimeSlotNestedInput
  }

  export type TimeSlotCreateManyInput = {
    id?: string
    dayOfWeek: string
    startTime: string
    endTime: string
  }

  export type TimeSlotUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    dayOfWeek?: StringFieldUpdateOperationsInput | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
  }

  export type TimeSlotUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    dayOfWeek?: StringFieldUpdateOperationsInput | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
  }

  export type CourseCreateInput = {
    id?: string
    name: string
    courseCode: string
    department: DepartmentCreateNestedOneWithoutCoursesInput
    courseOfferings?: CourseOfferingCreateNestedManyWithoutCourseInput
  }

  export type CourseUncheckedCreateInput = {
    id?: string
    name: string
    courseCode: string
    departmentId: string
    courseOfferings?: CourseOfferingUncheckedCreateNestedManyWithoutCourseInput
  }

  export type CourseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    courseCode?: StringFieldUpdateOperationsInput | string
    department?: DepartmentUpdateOneRequiredWithoutCoursesNestedInput
    courseOfferings?: CourseOfferingUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    courseCode?: StringFieldUpdateOperationsInput | string
    departmentId?: StringFieldUpdateOperationsInput | string
    courseOfferings?: CourseOfferingUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type CourseCreateManyInput = {
    id?: string
    name: string
    courseCode: string
    departmentId: string
  }

  export type CourseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    courseCode?: StringFieldUpdateOperationsInput | string
  }

  export type CourseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    courseCode?: StringFieldUpdateOperationsInput | string
    departmentId?: StringFieldUpdateOperationsInput | string
  }

  export type CourseOfferingCreateInput = {
    id?: string
    semester: string
    year: number
    course: CourseCreateNestedOneWithoutCourseOfferingsInput
    sections?: SectionCreateNestedManyWithoutCourseOfferingInput
  }

  export type CourseOfferingUncheckedCreateInput = {
    id?: string
    courseId: string
    semester: string
    year: number
    sections?: SectionUncheckedCreateNestedManyWithoutCourseOfferingInput
  }

  export type CourseOfferingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    semester?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    course?: CourseUpdateOneRequiredWithoutCourseOfferingsNestedInput
    sections?: SectionUpdateManyWithoutCourseOfferingNestedInput
  }

  export type CourseOfferingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    semester?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    sections?: SectionUncheckedUpdateManyWithoutCourseOfferingNestedInput
  }

  export type CourseOfferingCreateManyInput = {
    id?: string
    courseId: string
    semester: string
    year: number
  }

  export type CourseOfferingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    semester?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
  }

  export type CourseOfferingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    semester?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
  }

  export type SectionCreateInput = {
    id?: string
    sectionNumber: string
    requiredLabSize: number
    courseOffering: CourseOfferingCreateNestedOneWithoutSectionsInput
    assignment?: ScheduleAssignmentCreateNestedOneWithoutSectionInput
  }

  export type SectionUncheckedCreateInput = {
    id?: string
    sectionNumber: string
    requiredLabSize: number
    courseOfferingId: string
    assignment?: ScheduleAssignmentUncheckedCreateNestedOneWithoutSectionInput
  }

  export type SectionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sectionNumber?: StringFieldUpdateOperationsInput | string
    requiredLabSize?: IntFieldUpdateOperationsInput | number
    courseOffering?: CourseOfferingUpdateOneRequiredWithoutSectionsNestedInput
    assignment?: ScheduleAssignmentUpdateOneWithoutSectionNestedInput
  }

  export type SectionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sectionNumber?: StringFieldUpdateOperationsInput | string
    requiredLabSize?: IntFieldUpdateOperationsInput | number
    courseOfferingId?: StringFieldUpdateOperationsInput | string
    assignment?: ScheduleAssignmentUncheckedUpdateOneWithoutSectionNestedInput
  }

  export type SectionCreateManyInput = {
    id?: string
    sectionNumber: string
    requiredLabSize: number
    courseOfferingId: string
  }

  export type SectionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sectionNumber?: StringFieldUpdateOperationsInput | string
    requiredLabSize?: IntFieldUpdateOperationsInput | number
  }

  export type SectionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sectionNumber?: StringFieldUpdateOperationsInput | string
    requiredLabSize?: IntFieldUpdateOperationsInput | number
    courseOfferingId?: StringFieldUpdateOperationsInput | string
  }

  export type ScheduleAssignmentCreateInput = {
    id?: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    section: SectionCreateNestedOneWithoutAssignmentInput
    labRoom: LabRoomCreateNestedOneWithoutAssignmentsInput
    labAssistant: LabAssistantCreateNestedOneWithoutAssignmentsInput
    timeSlot: TimeSlotCreateNestedOneWithoutAssignmentsInput
  }

  export type ScheduleAssignmentUncheckedCreateInput = {
    id?: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    sectionId: string
    labRoomId: string
    labAssistantId: string
    timeSlotId: string
  }

  export type ScheduleAssignmentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    section?: SectionUpdateOneRequiredWithoutAssignmentNestedInput
    labRoom?: LabRoomUpdateOneRequiredWithoutAssignmentsNestedInput
    labAssistant?: LabAssistantUpdateOneRequiredWithoutAssignmentsNestedInput
    timeSlot?: TimeSlotUpdateOneRequiredWithoutAssignmentsNestedInput
  }

  export type ScheduleAssignmentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sectionId?: StringFieldUpdateOperationsInput | string
    labRoomId?: StringFieldUpdateOperationsInput | string
    labAssistantId?: StringFieldUpdateOperationsInput | string
    timeSlotId?: StringFieldUpdateOperationsInput | string
  }

  export type ScheduleAssignmentCreateManyInput = {
    id?: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    sectionId: string
    labRoomId: string
    labAssistantId: string
    timeSlotId: string
  }

  export type ScheduleAssignmentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScheduleAssignmentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sectionId?: StringFieldUpdateOperationsInput | string
    labRoomId?: StringFieldUpdateOperationsInput | string
    labAssistantId?: StringFieldUpdateOperationsInput | string
    timeSlotId?: StringFieldUpdateOperationsInput | string
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

  export type LabAssistantNullableScalarRelationFilter = {
    is?: LabAssistantWhereInput | null
    isNot?: LabAssistantWhereInput | null
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type CourseListRelationFilter = {
    every?: CourseWhereInput
    some?: CourseWhereInput
    none?: CourseWhereInput
  }

  export type LabAssistantListRelationFilter = {
    every?: LabAssistantWhereInput
    some?: LabAssistantWhereInput
    none?: LabAssistantWhereInput
  }

  export type CourseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LabAssistantOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DepartmentCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type DepartmentMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type DepartmentMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type DepartmentScalarRelationFilter = {
    is?: DepartmentWhereInput
    isNot?: DepartmentWhereInput
  }

  export type ScheduleAssignmentListRelationFilter = {
    every?: ScheduleAssignmentWhereInput
    some?: ScheduleAssignmentWhereInput
    none?: ScheduleAssignmentWhereInput
  }

  export type ScheduleAssignmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LabAssistantCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    departmentId?: SortOrder
  }

  export type LabAssistantMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    departmentId?: SortOrder
  }

  export type LabAssistantMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    departmentId?: SortOrder
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

  export type LabRoomCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    capacity?: SortOrder
    status?: SortOrder
  }

  export type LabRoomAvgOrderByAggregateInput = {
    capacity?: SortOrder
  }

  export type LabRoomMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    capacity?: SortOrder
    status?: SortOrder
  }

  export type LabRoomMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    capacity?: SortOrder
    status?: SortOrder
  }

  export type LabRoomSumOrderByAggregateInput = {
    capacity?: SortOrder
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

  export type TimeSlotCountOrderByAggregateInput = {
    id?: SortOrder
    dayOfWeek?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
  }

  export type TimeSlotMaxOrderByAggregateInput = {
    id?: SortOrder
    dayOfWeek?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
  }

  export type TimeSlotMinOrderByAggregateInput = {
    id?: SortOrder
    dayOfWeek?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
  }

  export type CourseOfferingListRelationFilter = {
    every?: CourseOfferingWhereInput
    some?: CourseOfferingWhereInput
    none?: CourseOfferingWhereInput
  }

  export type CourseOfferingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CourseCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    courseCode?: SortOrder
    departmentId?: SortOrder
  }

  export type CourseMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    courseCode?: SortOrder
    departmentId?: SortOrder
  }

  export type CourseMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    courseCode?: SortOrder
    departmentId?: SortOrder
  }

  export type CourseScalarRelationFilter = {
    is?: CourseWhereInput
    isNot?: CourseWhereInput
  }

  export type SectionListRelationFilter = {
    every?: SectionWhereInput
    some?: SectionWhereInput
    none?: SectionWhereInput
  }

  export type SectionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CourseOfferingCountOrderByAggregateInput = {
    id?: SortOrder
    courseId?: SortOrder
    semester?: SortOrder
    year?: SortOrder
  }

  export type CourseOfferingAvgOrderByAggregateInput = {
    year?: SortOrder
  }

  export type CourseOfferingMaxOrderByAggregateInput = {
    id?: SortOrder
    courseId?: SortOrder
    semester?: SortOrder
    year?: SortOrder
  }

  export type CourseOfferingMinOrderByAggregateInput = {
    id?: SortOrder
    courseId?: SortOrder
    semester?: SortOrder
    year?: SortOrder
  }

  export type CourseOfferingSumOrderByAggregateInput = {
    year?: SortOrder
  }

  export type CourseOfferingScalarRelationFilter = {
    is?: CourseOfferingWhereInput
    isNot?: CourseOfferingWhereInput
  }

  export type ScheduleAssignmentNullableScalarRelationFilter = {
    is?: ScheduleAssignmentWhereInput | null
    isNot?: ScheduleAssignmentWhereInput | null
  }

  export type SectionCountOrderByAggregateInput = {
    id?: SortOrder
    sectionNumber?: SortOrder
    requiredLabSize?: SortOrder
    courseOfferingId?: SortOrder
  }

  export type SectionAvgOrderByAggregateInput = {
    requiredLabSize?: SortOrder
  }

  export type SectionMaxOrderByAggregateInput = {
    id?: SortOrder
    sectionNumber?: SortOrder
    requiredLabSize?: SortOrder
    courseOfferingId?: SortOrder
  }

  export type SectionMinOrderByAggregateInput = {
    id?: SortOrder
    sectionNumber?: SortOrder
    requiredLabSize?: SortOrder
    courseOfferingId?: SortOrder
  }

  export type SectionSumOrderByAggregateInput = {
    requiredLabSize?: SortOrder
  }

  export type SectionScalarRelationFilter = {
    is?: SectionWhereInput
    isNot?: SectionWhereInput
  }

  export type LabRoomScalarRelationFilter = {
    is?: LabRoomWhereInput
    isNot?: LabRoomWhereInput
  }

  export type LabAssistantScalarRelationFilter = {
    is?: LabAssistantWhereInput
    isNot?: LabAssistantWhereInput
  }

  export type TimeSlotScalarRelationFilter = {
    is?: TimeSlotWhereInput
    isNot?: TimeSlotWhereInput
  }

  export type ScheduleAssignmentCountOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    sectionId?: SortOrder
    labRoomId?: SortOrder
    labAssistantId?: SortOrder
    timeSlotId?: SortOrder
  }

  export type ScheduleAssignmentMaxOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    sectionId?: SortOrder
    labRoomId?: SortOrder
    labAssistantId?: SortOrder
    timeSlotId?: SortOrder
  }

  export type ScheduleAssignmentMinOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    sectionId?: SortOrder
    labRoomId?: SortOrder
    labAssistantId?: SortOrder
    timeSlotId?: SortOrder
  }

  export type LabAssistantCreateNestedOneWithoutUserInput = {
    create?: XOR<LabAssistantCreateWithoutUserInput, LabAssistantUncheckedCreateWithoutUserInput>
    connectOrCreate?: LabAssistantCreateOrConnectWithoutUserInput
    connect?: LabAssistantWhereUniqueInput
  }

  export type LabAssistantUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<LabAssistantCreateWithoutUserInput, LabAssistantUncheckedCreateWithoutUserInput>
    connectOrCreate?: LabAssistantCreateOrConnectWithoutUserInput
    connect?: LabAssistantWhereUniqueInput
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

  export type LabAssistantUpdateOneWithoutUserNestedInput = {
    create?: XOR<LabAssistantCreateWithoutUserInput, LabAssistantUncheckedCreateWithoutUserInput>
    connectOrCreate?: LabAssistantCreateOrConnectWithoutUserInput
    upsert?: LabAssistantUpsertWithoutUserInput
    disconnect?: LabAssistantWhereInput | boolean
    delete?: LabAssistantWhereInput | boolean
    connect?: LabAssistantWhereUniqueInput
    update?: XOR<XOR<LabAssistantUpdateToOneWithWhereWithoutUserInput, LabAssistantUpdateWithoutUserInput>, LabAssistantUncheckedUpdateWithoutUserInput>
  }

  export type LabAssistantUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<LabAssistantCreateWithoutUserInput, LabAssistantUncheckedCreateWithoutUserInput>
    connectOrCreate?: LabAssistantCreateOrConnectWithoutUserInput
    upsert?: LabAssistantUpsertWithoutUserInput
    disconnect?: LabAssistantWhereInput | boolean
    delete?: LabAssistantWhereInput | boolean
    connect?: LabAssistantWhereUniqueInput
    update?: XOR<XOR<LabAssistantUpdateToOneWithWhereWithoutUserInput, LabAssistantUpdateWithoutUserInput>, LabAssistantUncheckedUpdateWithoutUserInput>
  }

  export type CourseCreateNestedManyWithoutDepartmentInput = {
    create?: XOR<CourseCreateWithoutDepartmentInput, CourseUncheckedCreateWithoutDepartmentInput> | CourseCreateWithoutDepartmentInput[] | CourseUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: CourseCreateOrConnectWithoutDepartmentInput | CourseCreateOrConnectWithoutDepartmentInput[]
    createMany?: CourseCreateManyDepartmentInputEnvelope
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
  }

  export type LabAssistantCreateNestedManyWithoutDepartmentInput = {
    create?: XOR<LabAssistantCreateWithoutDepartmentInput, LabAssistantUncheckedCreateWithoutDepartmentInput> | LabAssistantCreateWithoutDepartmentInput[] | LabAssistantUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: LabAssistantCreateOrConnectWithoutDepartmentInput | LabAssistantCreateOrConnectWithoutDepartmentInput[]
    createMany?: LabAssistantCreateManyDepartmentInputEnvelope
    connect?: LabAssistantWhereUniqueInput | LabAssistantWhereUniqueInput[]
  }

  export type CourseUncheckedCreateNestedManyWithoutDepartmentInput = {
    create?: XOR<CourseCreateWithoutDepartmentInput, CourseUncheckedCreateWithoutDepartmentInput> | CourseCreateWithoutDepartmentInput[] | CourseUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: CourseCreateOrConnectWithoutDepartmentInput | CourseCreateOrConnectWithoutDepartmentInput[]
    createMany?: CourseCreateManyDepartmentInputEnvelope
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
  }

  export type LabAssistantUncheckedCreateNestedManyWithoutDepartmentInput = {
    create?: XOR<LabAssistantCreateWithoutDepartmentInput, LabAssistantUncheckedCreateWithoutDepartmentInput> | LabAssistantCreateWithoutDepartmentInput[] | LabAssistantUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: LabAssistantCreateOrConnectWithoutDepartmentInput | LabAssistantCreateOrConnectWithoutDepartmentInput[]
    createMany?: LabAssistantCreateManyDepartmentInputEnvelope
    connect?: LabAssistantWhereUniqueInput | LabAssistantWhereUniqueInput[]
  }

  export type CourseUpdateManyWithoutDepartmentNestedInput = {
    create?: XOR<CourseCreateWithoutDepartmentInput, CourseUncheckedCreateWithoutDepartmentInput> | CourseCreateWithoutDepartmentInput[] | CourseUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: CourseCreateOrConnectWithoutDepartmentInput | CourseCreateOrConnectWithoutDepartmentInput[]
    upsert?: CourseUpsertWithWhereUniqueWithoutDepartmentInput | CourseUpsertWithWhereUniqueWithoutDepartmentInput[]
    createMany?: CourseCreateManyDepartmentInputEnvelope
    set?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    disconnect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    delete?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    update?: CourseUpdateWithWhereUniqueWithoutDepartmentInput | CourseUpdateWithWhereUniqueWithoutDepartmentInput[]
    updateMany?: CourseUpdateManyWithWhereWithoutDepartmentInput | CourseUpdateManyWithWhereWithoutDepartmentInput[]
    deleteMany?: CourseScalarWhereInput | CourseScalarWhereInput[]
  }

  export type LabAssistantUpdateManyWithoutDepartmentNestedInput = {
    create?: XOR<LabAssistantCreateWithoutDepartmentInput, LabAssistantUncheckedCreateWithoutDepartmentInput> | LabAssistantCreateWithoutDepartmentInput[] | LabAssistantUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: LabAssistantCreateOrConnectWithoutDepartmentInput | LabAssistantCreateOrConnectWithoutDepartmentInput[]
    upsert?: LabAssistantUpsertWithWhereUniqueWithoutDepartmentInput | LabAssistantUpsertWithWhereUniqueWithoutDepartmentInput[]
    createMany?: LabAssistantCreateManyDepartmentInputEnvelope
    set?: LabAssistantWhereUniqueInput | LabAssistantWhereUniqueInput[]
    disconnect?: LabAssistantWhereUniqueInput | LabAssistantWhereUniqueInput[]
    delete?: LabAssistantWhereUniqueInput | LabAssistantWhereUniqueInput[]
    connect?: LabAssistantWhereUniqueInput | LabAssistantWhereUniqueInput[]
    update?: LabAssistantUpdateWithWhereUniqueWithoutDepartmentInput | LabAssistantUpdateWithWhereUniqueWithoutDepartmentInput[]
    updateMany?: LabAssistantUpdateManyWithWhereWithoutDepartmentInput | LabAssistantUpdateManyWithWhereWithoutDepartmentInput[]
    deleteMany?: LabAssistantScalarWhereInput | LabAssistantScalarWhereInput[]
  }

  export type CourseUncheckedUpdateManyWithoutDepartmentNestedInput = {
    create?: XOR<CourseCreateWithoutDepartmentInput, CourseUncheckedCreateWithoutDepartmentInput> | CourseCreateWithoutDepartmentInput[] | CourseUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: CourseCreateOrConnectWithoutDepartmentInput | CourseCreateOrConnectWithoutDepartmentInput[]
    upsert?: CourseUpsertWithWhereUniqueWithoutDepartmentInput | CourseUpsertWithWhereUniqueWithoutDepartmentInput[]
    createMany?: CourseCreateManyDepartmentInputEnvelope
    set?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    disconnect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    delete?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    update?: CourseUpdateWithWhereUniqueWithoutDepartmentInput | CourseUpdateWithWhereUniqueWithoutDepartmentInput[]
    updateMany?: CourseUpdateManyWithWhereWithoutDepartmentInput | CourseUpdateManyWithWhereWithoutDepartmentInput[]
    deleteMany?: CourseScalarWhereInput | CourseScalarWhereInput[]
  }

  export type LabAssistantUncheckedUpdateManyWithoutDepartmentNestedInput = {
    create?: XOR<LabAssistantCreateWithoutDepartmentInput, LabAssistantUncheckedCreateWithoutDepartmentInput> | LabAssistantCreateWithoutDepartmentInput[] | LabAssistantUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: LabAssistantCreateOrConnectWithoutDepartmentInput | LabAssistantCreateOrConnectWithoutDepartmentInput[]
    upsert?: LabAssistantUpsertWithWhereUniqueWithoutDepartmentInput | LabAssistantUpsertWithWhereUniqueWithoutDepartmentInput[]
    createMany?: LabAssistantCreateManyDepartmentInputEnvelope
    set?: LabAssistantWhereUniqueInput | LabAssistantWhereUniqueInput[]
    disconnect?: LabAssistantWhereUniqueInput | LabAssistantWhereUniqueInput[]
    delete?: LabAssistantWhereUniqueInput | LabAssistantWhereUniqueInput[]
    connect?: LabAssistantWhereUniqueInput | LabAssistantWhereUniqueInput[]
    update?: LabAssistantUpdateWithWhereUniqueWithoutDepartmentInput | LabAssistantUpdateWithWhereUniqueWithoutDepartmentInput[]
    updateMany?: LabAssistantUpdateManyWithWhereWithoutDepartmentInput | LabAssistantUpdateManyWithWhereWithoutDepartmentInput[]
    deleteMany?: LabAssistantScalarWhereInput | LabAssistantScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutLabAssistantInput = {
    create?: XOR<UserCreateWithoutLabAssistantInput, UserUncheckedCreateWithoutLabAssistantInput>
    connectOrCreate?: UserCreateOrConnectWithoutLabAssistantInput
    connect?: UserWhereUniqueInput
  }

  export type DepartmentCreateNestedOneWithoutLabAssistantsInput = {
    create?: XOR<DepartmentCreateWithoutLabAssistantsInput, DepartmentUncheckedCreateWithoutLabAssistantsInput>
    connectOrCreate?: DepartmentCreateOrConnectWithoutLabAssistantsInput
    connect?: DepartmentWhereUniqueInput
  }

  export type ScheduleAssignmentCreateNestedManyWithoutLabAssistantInput = {
    create?: XOR<ScheduleAssignmentCreateWithoutLabAssistantInput, ScheduleAssignmentUncheckedCreateWithoutLabAssistantInput> | ScheduleAssignmentCreateWithoutLabAssistantInput[] | ScheduleAssignmentUncheckedCreateWithoutLabAssistantInput[]
    connectOrCreate?: ScheduleAssignmentCreateOrConnectWithoutLabAssistantInput | ScheduleAssignmentCreateOrConnectWithoutLabAssistantInput[]
    createMany?: ScheduleAssignmentCreateManyLabAssistantInputEnvelope
    connect?: ScheduleAssignmentWhereUniqueInput | ScheduleAssignmentWhereUniqueInput[]
  }

  export type ScheduleAssignmentUncheckedCreateNestedManyWithoutLabAssistantInput = {
    create?: XOR<ScheduleAssignmentCreateWithoutLabAssistantInput, ScheduleAssignmentUncheckedCreateWithoutLabAssistantInput> | ScheduleAssignmentCreateWithoutLabAssistantInput[] | ScheduleAssignmentUncheckedCreateWithoutLabAssistantInput[]
    connectOrCreate?: ScheduleAssignmentCreateOrConnectWithoutLabAssistantInput | ScheduleAssignmentCreateOrConnectWithoutLabAssistantInput[]
    createMany?: ScheduleAssignmentCreateManyLabAssistantInputEnvelope
    connect?: ScheduleAssignmentWhereUniqueInput | ScheduleAssignmentWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutLabAssistantNestedInput = {
    create?: XOR<UserCreateWithoutLabAssistantInput, UserUncheckedCreateWithoutLabAssistantInput>
    connectOrCreate?: UserCreateOrConnectWithoutLabAssistantInput
    upsert?: UserUpsertWithoutLabAssistantInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutLabAssistantInput, UserUpdateWithoutLabAssistantInput>, UserUncheckedUpdateWithoutLabAssistantInput>
  }

  export type DepartmentUpdateOneRequiredWithoutLabAssistantsNestedInput = {
    create?: XOR<DepartmentCreateWithoutLabAssistantsInput, DepartmentUncheckedCreateWithoutLabAssistantsInput>
    connectOrCreate?: DepartmentCreateOrConnectWithoutLabAssistantsInput
    upsert?: DepartmentUpsertWithoutLabAssistantsInput
    connect?: DepartmentWhereUniqueInput
    update?: XOR<XOR<DepartmentUpdateToOneWithWhereWithoutLabAssistantsInput, DepartmentUpdateWithoutLabAssistantsInput>, DepartmentUncheckedUpdateWithoutLabAssistantsInput>
  }

  export type ScheduleAssignmentUpdateManyWithoutLabAssistantNestedInput = {
    create?: XOR<ScheduleAssignmentCreateWithoutLabAssistantInput, ScheduleAssignmentUncheckedCreateWithoutLabAssistantInput> | ScheduleAssignmentCreateWithoutLabAssistantInput[] | ScheduleAssignmentUncheckedCreateWithoutLabAssistantInput[]
    connectOrCreate?: ScheduleAssignmentCreateOrConnectWithoutLabAssistantInput | ScheduleAssignmentCreateOrConnectWithoutLabAssistantInput[]
    upsert?: ScheduleAssignmentUpsertWithWhereUniqueWithoutLabAssistantInput | ScheduleAssignmentUpsertWithWhereUniqueWithoutLabAssistantInput[]
    createMany?: ScheduleAssignmentCreateManyLabAssistantInputEnvelope
    set?: ScheduleAssignmentWhereUniqueInput | ScheduleAssignmentWhereUniqueInput[]
    disconnect?: ScheduleAssignmentWhereUniqueInput | ScheduleAssignmentWhereUniqueInput[]
    delete?: ScheduleAssignmentWhereUniqueInput | ScheduleAssignmentWhereUniqueInput[]
    connect?: ScheduleAssignmentWhereUniqueInput | ScheduleAssignmentWhereUniqueInput[]
    update?: ScheduleAssignmentUpdateWithWhereUniqueWithoutLabAssistantInput | ScheduleAssignmentUpdateWithWhereUniqueWithoutLabAssistantInput[]
    updateMany?: ScheduleAssignmentUpdateManyWithWhereWithoutLabAssistantInput | ScheduleAssignmentUpdateManyWithWhereWithoutLabAssistantInput[]
    deleteMany?: ScheduleAssignmentScalarWhereInput | ScheduleAssignmentScalarWhereInput[]
  }

  export type ScheduleAssignmentUncheckedUpdateManyWithoutLabAssistantNestedInput = {
    create?: XOR<ScheduleAssignmentCreateWithoutLabAssistantInput, ScheduleAssignmentUncheckedCreateWithoutLabAssistantInput> | ScheduleAssignmentCreateWithoutLabAssistantInput[] | ScheduleAssignmentUncheckedCreateWithoutLabAssistantInput[]
    connectOrCreate?: ScheduleAssignmentCreateOrConnectWithoutLabAssistantInput | ScheduleAssignmentCreateOrConnectWithoutLabAssistantInput[]
    upsert?: ScheduleAssignmentUpsertWithWhereUniqueWithoutLabAssistantInput | ScheduleAssignmentUpsertWithWhereUniqueWithoutLabAssistantInput[]
    createMany?: ScheduleAssignmentCreateManyLabAssistantInputEnvelope
    set?: ScheduleAssignmentWhereUniqueInput | ScheduleAssignmentWhereUniqueInput[]
    disconnect?: ScheduleAssignmentWhereUniqueInput | ScheduleAssignmentWhereUniqueInput[]
    delete?: ScheduleAssignmentWhereUniqueInput | ScheduleAssignmentWhereUniqueInput[]
    connect?: ScheduleAssignmentWhereUniqueInput | ScheduleAssignmentWhereUniqueInput[]
    update?: ScheduleAssignmentUpdateWithWhereUniqueWithoutLabAssistantInput | ScheduleAssignmentUpdateWithWhereUniqueWithoutLabAssistantInput[]
    updateMany?: ScheduleAssignmentUpdateManyWithWhereWithoutLabAssistantInput | ScheduleAssignmentUpdateManyWithWhereWithoutLabAssistantInput[]
    deleteMany?: ScheduleAssignmentScalarWhereInput | ScheduleAssignmentScalarWhereInput[]
  }

  export type ScheduleAssignmentCreateNestedManyWithoutLabRoomInput = {
    create?: XOR<ScheduleAssignmentCreateWithoutLabRoomInput, ScheduleAssignmentUncheckedCreateWithoutLabRoomInput> | ScheduleAssignmentCreateWithoutLabRoomInput[] | ScheduleAssignmentUncheckedCreateWithoutLabRoomInput[]
    connectOrCreate?: ScheduleAssignmentCreateOrConnectWithoutLabRoomInput | ScheduleAssignmentCreateOrConnectWithoutLabRoomInput[]
    createMany?: ScheduleAssignmentCreateManyLabRoomInputEnvelope
    connect?: ScheduleAssignmentWhereUniqueInput | ScheduleAssignmentWhereUniqueInput[]
  }

  export type ScheduleAssignmentUncheckedCreateNestedManyWithoutLabRoomInput = {
    create?: XOR<ScheduleAssignmentCreateWithoutLabRoomInput, ScheduleAssignmentUncheckedCreateWithoutLabRoomInput> | ScheduleAssignmentCreateWithoutLabRoomInput[] | ScheduleAssignmentUncheckedCreateWithoutLabRoomInput[]
    connectOrCreate?: ScheduleAssignmentCreateOrConnectWithoutLabRoomInput | ScheduleAssignmentCreateOrConnectWithoutLabRoomInput[]
    createMany?: ScheduleAssignmentCreateManyLabRoomInputEnvelope
    connect?: ScheduleAssignmentWhereUniqueInput | ScheduleAssignmentWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ScheduleAssignmentUpdateManyWithoutLabRoomNestedInput = {
    create?: XOR<ScheduleAssignmentCreateWithoutLabRoomInput, ScheduleAssignmentUncheckedCreateWithoutLabRoomInput> | ScheduleAssignmentCreateWithoutLabRoomInput[] | ScheduleAssignmentUncheckedCreateWithoutLabRoomInput[]
    connectOrCreate?: ScheduleAssignmentCreateOrConnectWithoutLabRoomInput | ScheduleAssignmentCreateOrConnectWithoutLabRoomInput[]
    upsert?: ScheduleAssignmentUpsertWithWhereUniqueWithoutLabRoomInput | ScheduleAssignmentUpsertWithWhereUniqueWithoutLabRoomInput[]
    createMany?: ScheduleAssignmentCreateManyLabRoomInputEnvelope
    set?: ScheduleAssignmentWhereUniqueInput | ScheduleAssignmentWhereUniqueInput[]
    disconnect?: ScheduleAssignmentWhereUniqueInput | ScheduleAssignmentWhereUniqueInput[]
    delete?: ScheduleAssignmentWhereUniqueInput | ScheduleAssignmentWhereUniqueInput[]
    connect?: ScheduleAssignmentWhereUniqueInput | ScheduleAssignmentWhereUniqueInput[]
    update?: ScheduleAssignmentUpdateWithWhereUniqueWithoutLabRoomInput | ScheduleAssignmentUpdateWithWhereUniqueWithoutLabRoomInput[]
    updateMany?: ScheduleAssignmentUpdateManyWithWhereWithoutLabRoomInput | ScheduleAssignmentUpdateManyWithWhereWithoutLabRoomInput[]
    deleteMany?: ScheduleAssignmentScalarWhereInput | ScheduleAssignmentScalarWhereInput[]
  }

  export type ScheduleAssignmentUncheckedUpdateManyWithoutLabRoomNestedInput = {
    create?: XOR<ScheduleAssignmentCreateWithoutLabRoomInput, ScheduleAssignmentUncheckedCreateWithoutLabRoomInput> | ScheduleAssignmentCreateWithoutLabRoomInput[] | ScheduleAssignmentUncheckedCreateWithoutLabRoomInput[]
    connectOrCreate?: ScheduleAssignmentCreateOrConnectWithoutLabRoomInput | ScheduleAssignmentCreateOrConnectWithoutLabRoomInput[]
    upsert?: ScheduleAssignmentUpsertWithWhereUniqueWithoutLabRoomInput | ScheduleAssignmentUpsertWithWhereUniqueWithoutLabRoomInput[]
    createMany?: ScheduleAssignmentCreateManyLabRoomInputEnvelope
    set?: ScheduleAssignmentWhereUniqueInput | ScheduleAssignmentWhereUniqueInput[]
    disconnect?: ScheduleAssignmentWhereUniqueInput | ScheduleAssignmentWhereUniqueInput[]
    delete?: ScheduleAssignmentWhereUniqueInput | ScheduleAssignmentWhereUniqueInput[]
    connect?: ScheduleAssignmentWhereUniqueInput | ScheduleAssignmentWhereUniqueInput[]
    update?: ScheduleAssignmentUpdateWithWhereUniqueWithoutLabRoomInput | ScheduleAssignmentUpdateWithWhereUniqueWithoutLabRoomInput[]
    updateMany?: ScheduleAssignmentUpdateManyWithWhereWithoutLabRoomInput | ScheduleAssignmentUpdateManyWithWhereWithoutLabRoomInput[]
    deleteMany?: ScheduleAssignmentScalarWhereInput | ScheduleAssignmentScalarWhereInput[]
  }

  export type ScheduleAssignmentCreateNestedManyWithoutTimeSlotInput = {
    create?: XOR<ScheduleAssignmentCreateWithoutTimeSlotInput, ScheduleAssignmentUncheckedCreateWithoutTimeSlotInput> | ScheduleAssignmentCreateWithoutTimeSlotInput[] | ScheduleAssignmentUncheckedCreateWithoutTimeSlotInput[]
    connectOrCreate?: ScheduleAssignmentCreateOrConnectWithoutTimeSlotInput | ScheduleAssignmentCreateOrConnectWithoutTimeSlotInput[]
    createMany?: ScheduleAssignmentCreateManyTimeSlotInputEnvelope
    connect?: ScheduleAssignmentWhereUniqueInput | ScheduleAssignmentWhereUniqueInput[]
  }

  export type ScheduleAssignmentUncheckedCreateNestedManyWithoutTimeSlotInput = {
    create?: XOR<ScheduleAssignmentCreateWithoutTimeSlotInput, ScheduleAssignmentUncheckedCreateWithoutTimeSlotInput> | ScheduleAssignmentCreateWithoutTimeSlotInput[] | ScheduleAssignmentUncheckedCreateWithoutTimeSlotInput[]
    connectOrCreate?: ScheduleAssignmentCreateOrConnectWithoutTimeSlotInput | ScheduleAssignmentCreateOrConnectWithoutTimeSlotInput[]
    createMany?: ScheduleAssignmentCreateManyTimeSlotInputEnvelope
    connect?: ScheduleAssignmentWhereUniqueInput | ScheduleAssignmentWhereUniqueInput[]
  }

  export type ScheduleAssignmentUpdateManyWithoutTimeSlotNestedInput = {
    create?: XOR<ScheduleAssignmentCreateWithoutTimeSlotInput, ScheduleAssignmentUncheckedCreateWithoutTimeSlotInput> | ScheduleAssignmentCreateWithoutTimeSlotInput[] | ScheduleAssignmentUncheckedCreateWithoutTimeSlotInput[]
    connectOrCreate?: ScheduleAssignmentCreateOrConnectWithoutTimeSlotInput | ScheduleAssignmentCreateOrConnectWithoutTimeSlotInput[]
    upsert?: ScheduleAssignmentUpsertWithWhereUniqueWithoutTimeSlotInput | ScheduleAssignmentUpsertWithWhereUniqueWithoutTimeSlotInput[]
    createMany?: ScheduleAssignmentCreateManyTimeSlotInputEnvelope
    set?: ScheduleAssignmentWhereUniqueInput | ScheduleAssignmentWhereUniqueInput[]
    disconnect?: ScheduleAssignmentWhereUniqueInput | ScheduleAssignmentWhereUniqueInput[]
    delete?: ScheduleAssignmentWhereUniqueInput | ScheduleAssignmentWhereUniqueInput[]
    connect?: ScheduleAssignmentWhereUniqueInput | ScheduleAssignmentWhereUniqueInput[]
    update?: ScheduleAssignmentUpdateWithWhereUniqueWithoutTimeSlotInput | ScheduleAssignmentUpdateWithWhereUniqueWithoutTimeSlotInput[]
    updateMany?: ScheduleAssignmentUpdateManyWithWhereWithoutTimeSlotInput | ScheduleAssignmentUpdateManyWithWhereWithoutTimeSlotInput[]
    deleteMany?: ScheduleAssignmentScalarWhereInput | ScheduleAssignmentScalarWhereInput[]
  }

  export type ScheduleAssignmentUncheckedUpdateManyWithoutTimeSlotNestedInput = {
    create?: XOR<ScheduleAssignmentCreateWithoutTimeSlotInput, ScheduleAssignmentUncheckedCreateWithoutTimeSlotInput> | ScheduleAssignmentCreateWithoutTimeSlotInput[] | ScheduleAssignmentUncheckedCreateWithoutTimeSlotInput[]
    connectOrCreate?: ScheduleAssignmentCreateOrConnectWithoutTimeSlotInput | ScheduleAssignmentCreateOrConnectWithoutTimeSlotInput[]
    upsert?: ScheduleAssignmentUpsertWithWhereUniqueWithoutTimeSlotInput | ScheduleAssignmentUpsertWithWhereUniqueWithoutTimeSlotInput[]
    createMany?: ScheduleAssignmentCreateManyTimeSlotInputEnvelope
    set?: ScheduleAssignmentWhereUniqueInput | ScheduleAssignmentWhereUniqueInput[]
    disconnect?: ScheduleAssignmentWhereUniqueInput | ScheduleAssignmentWhereUniqueInput[]
    delete?: ScheduleAssignmentWhereUniqueInput | ScheduleAssignmentWhereUniqueInput[]
    connect?: ScheduleAssignmentWhereUniqueInput | ScheduleAssignmentWhereUniqueInput[]
    update?: ScheduleAssignmentUpdateWithWhereUniqueWithoutTimeSlotInput | ScheduleAssignmentUpdateWithWhereUniqueWithoutTimeSlotInput[]
    updateMany?: ScheduleAssignmentUpdateManyWithWhereWithoutTimeSlotInput | ScheduleAssignmentUpdateManyWithWhereWithoutTimeSlotInput[]
    deleteMany?: ScheduleAssignmentScalarWhereInput | ScheduleAssignmentScalarWhereInput[]
  }

  export type DepartmentCreateNestedOneWithoutCoursesInput = {
    create?: XOR<DepartmentCreateWithoutCoursesInput, DepartmentUncheckedCreateWithoutCoursesInput>
    connectOrCreate?: DepartmentCreateOrConnectWithoutCoursesInput
    connect?: DepartmentWhereUniqueInput
  }

  export type CourseOfferingCreateNestedManyWithoutCourseInput = {
    create?: XOR<CourseOfferingCreateWithoutCourseInput, CourseOfferingUncheckedCreateWithoutCourseInput> | CourseOfferingCreateWithoutCourseInput[] | CourseOfferingUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: CourseOfferingCreateOrConnectWithoutCourseInput | CourseOfferingCreateOrConnectWithoutCourseInput[]
    createMany?: CourseOfferingCreateManyCourseInputEnvelope
    connect?: CourseOfferingWhereUniqueInput | CourseOfferingWhereUniqueInput[]
  }

  export type CourseOfferingUncheckedCreateNestedManyWithoutCourseInput = {
    create?: XOR<CourseOfferingCreateWithoutCourseInput, CourseOfferingUncheckedCreateWithoutCourseInput> | CourseOfferingCreateWithoutCourseInput[] | CourseOfferingUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: CourseOfferingCreateOrConnectWithoutCourseInput | CourseOfferingCreateOrConnectWithoutCourseInput[]
    createMany?: CourseOfferingCreateManyCourseInputEnvelope
    connect?: CourseOfferingWhereUniqueInput | CourseOfferingWhereUniqueInput[]
  }

  export type DepartmentUpdateOneRequiredWithoutCoursesNestedInput = {
    create?: XOR<DepartmentCreateWithoutCoursesInput, DepartmentUncheckedCreateWithoutCoursesInput>
    connectOrCreate?: DepartmentCreateOrConnectWithoutCoursesInput
    upsert?: DepartmentUpsertWithoutCoursesInput
    connect?: DepartmentWhereUniqueInput
    update?: XOR<XOR<DepartmentUpdateToOneWithWhereWithoutCoursesInput, DepartmentUpdateWithoutCoursesInput>, DepartmentUncheckedUpdateWithoutCoursesInput>
  }

  export type CourseOfferingUpdateManyWithoutCourseNestedInput = {
    create?: XOR<CourseOfferingCreateWithoutCourseInput, CourseOfferingUncheckedCreateWithoutCourseInput> | CourseOfferingCreateWithoutCourseInput[] | CourseOfferingUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: CourseOfferingCreateOrConnectWithoutCourseInput | CourseOfferingCreateOrConnectWithoutCourseInput[]
    upsert?: CourseOfferingUpsertWithWhereUniqueWithoutCourseInput | CourseOfferingUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: CourseOfferingCreateManyCourseInputEnvelope
    set?: CourseOfferingWhereUniqueInput | CourseOfferingWhereUniqueInput[]
    disconnect?: CourseOfferingWhereUniqueInput | CourseOfferingWhereUniqueInput[]
    delete?: CourseOfferingWhereUniqueInput | CourseOfferingWhereUniqueInput[]
    connect?: CourseOfferingWhereUniqueInput | CourseOfferingWhereUniqueInput[]
    update?: CourseOfferingUpdateWithWhereUniqueWithoutCourseInput | CourseOfferingUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: CourseOfferingUpdateManyWithWhereWithoutCourseInput | CourseOfferingUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: CourseOfferingScalarWhereInput | CourseOfferingScalarWhereInput[]
  }

  export type CourseOfferingUncheckedUpdateManyWithoutCourseNestedInput = {
    create?: XOR<CourseOfferingCreateWithoutCourseInput, CourseOfferingUncheckedCreateWithoutCourseInput> | CourseOfferingCreateWithoutCourseInput[] | CourseOfferingUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: CourseOfferingCreateOrConnectWithoutCourseInput | CourseOfferingCreateOrConnectWithoutCourseInput[]
    upsert?: CourseOfferingUpsertWithWhereUniqueWithoutCourseInput | CourseOfferingUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: CourseOfferingCreateManyCourseInputEnvelope
    set?: CourseOfferingWhereUniqueInput | CourseOfferingWhereUniqueInput[]
    disconnect?: CourseOfferingWhereUniqueInput | CourseOfferingWhereUniqueInput[]
    delete?: CourseOfferingWhereUniqueInput | CourseOfferingWhereUniqueInput[]
    connect?: CourseOfferingWhereUniqueInput | CourseOfferingWhereUniqueInput[]
    update?: CourseOfferingUpdateWithWhereUniqueWithoutCourseInput | CourseOfferingUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: CourseOfferingUpdateManyWithWhereWithoutCourseInput | CourseOfferingUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: CourseOfferingScalarWhereInput | CourseOfferingScalarWhereInput[]
  }

  export type CourseCreateNestedOneWithoutCourseOfferingsInput = {
    create?: XOR<CourseCreateWithoutCourseOfferingsInput, CourseUncheckedCreateWithoutCourseOfferingsInput>
    connectOrCreate?: CourseCreateOrConnectWithoutCourseOfferingsInput
    connect?: CourseWhereUniqueInput
  }

  export type SectionCreateNestedManyWithoutCourseOfferingInput = {
    create?: XOR<SectionCreateWithoutCourseOfferingInput, SectionUncheckedCreateWithoutCourseOfferingInput> | SectionCreateWithoutCourseOfferingInput[] | SectionUncheckedCreateWithoutCourseOfferingInput[]
    connectOrCreate?: SectionCreateOrConnectWithoutCourseOfferingInput | SectionCreateOrConnectWithoutCourseOfferingInput[]
    createMany?: SectionCreateManyCourseOfferingInputEnvelope
    connect?: SectionWhereUniqueInput | SectionWhereUniqueInput[]
  }

  export type SectionUncheckedCreateNestedManyWithoutCourseOfferingInput = {
    create?: XOR<SectionCreateWithoutCourseOfferingInput, SectionUncheckedCreateWithoutCourseOfferingInput> | SectionCreateWithoutCourseOfferingInput[] | SectionUncheckedCreateWithoutCourseOfferingInput[]
    connectOrCreate?: SectionCreateOrConnectWithoutCourseOfferingInput | SectionCreateOrConnectWithoutCourseOfferingInput[]
    createMany?: SectionCreateManyCourseOfferingInputEnvelope
    connect?: SectionWhereUniqueInput | SectionWhereUniqueInput[]
  }

  export type CourseUpdateOneRequiredWithoutCourseOfferingsNestedInput = {
    create?: XOR<CourseCreateWithoutCourseOfferingsInput, CourseUncheckedCreateWithoutCourseOfferingsInput>
    connectOrCreate?: CourseCreateOrConnectWithoutCourseOfferingsInput
    upsert?: CourseUpsertWithoutCourseOfferingsInput
    connect?: CourseWhereUniqueInput
    update?: XOR<XOR<CourseUpdateToOneWithWhereWithoutCourseOfferingsInput, CourseUpdateWithoutCourseOfferingsInput>, CourseUncheckedUpdateWithoutCourseOfferingsInput>
  }

  export type SectionUpdateManyWithoutCourseOfferingNestedInput = {
    create?: XOR<SectionCreateWithoutCourseOfferingInput, SectionUncheckedCreateWithoutCourseOfferingInput> | SectionCreateWithoutCourseOfferingInput[] | SectionUncheckedCreateWithoutCourseOfferingInput[]
    connectOrCreate?: SectionCreateOrConnectWithoutCourseOfferingInput | SectionCreateOrConnectWithoutCourseOfferingInput[]
    upsert?: SectionUpsertWithWhereUniqueWithoutCourseOfferingInput | SectionUpsertWithWhereUniqueWithoutCourseOfferingInput[]
    createMany?: SectionCreateManyCourseOfferingInputEnvelope
    set?: SectionWhereUniqueInput | SectionWhereUniqueInput[]
    disconnect?: SectionWhereUniqueInput | SectionWhereUniqueInput[]
    delete?: SectionWhereUniqueInput | SectionWhereUniqueInput[]
    connect?: SectionWhereUniqueInput | SectionWhereUniqueInput[]
    update?: SectionUpdateWithWhereUniqueWithoutCourseOfferingInput | SectionUpdateWithWhereUniqueWithoutCourseOfferingInput[]
    updateMany?: SectionUpdateManyWithWhereWithoutCourseOfferingInput | SectionUpdateManyWithWhereWithoutCourseOfferingInput[]
    deleteMany?: SectionScalarWhereInput | SectionScalarWhereInput[]
  }

  export type SectionUncheckedUpdateManyWithoutCourseOfferingNestedInput = {
    create?: XOR<SectionCreateWithoutCourseOfferingInput, SectionUncheckedCreateWithoutCourseOfferingInput> | SectionCreateWithoutCourseOfferingInput[] | SectionUncheckedCreateWithoutCourseOfferingInput[]
    connectOrCreate?: SectionCreateOrConnectWithoutCourseOfferingInput | SectionCreateOrConnectWithoutCourseOfferingInput[]
    upsert?: SectionUpsertWithWhereUniqueWithoutCourseOfferingInput | SectionUpsertWithWhereUniqueWithoutCourseOfferingInput[]
    createMany?: SectionCreateManyCourseOfferingInputEnvelope
    set?: SectionWhereUniqueInput | SectionWhereUniqueInput[]
    disconnect?: SectionWhereUniqueInput | SectionWhereUniqueInput[]
    delete?: SectionWhereUniqueInput | SectionWhereUniqueInput[]
    connect?: SectionWhereUniqueInput | SectionWhereUniqueInput[]
    update?: SectionUpdateWithWhereUniqueWithoutCourseOfferingInput | SectionUpdateWithWhereUniqueWithoutCourseOfferingInput[]
    updateMany?: SectionUpdateManyWithWhereWithoutCourseOfferingInput | SectionUpdateManyWithWhereWithoutCourseOfferingInput[]
    deleteMany?: SectionScalarWhereInput | SectionScalarWhereInput[]
  }

  export type CourseOfferingCreateNestedOneWithoutSectionsInput = {
    create?: XOR<CourseOfferingCreateWithoutSectionsInput, CourseOfferingUncheckedCreateWithoutSectionsInput>
    connectOrCreate?: CourseOfferingCreateOrConnectWithoutSectionsInput
    connect?: CourseOfferingWhereUniqueInput
  }

  export type ScheduleAssignmentCreateNestedOneWithoutSectionInput = {
    create?: XOR<ScheduleAssignmentCreateWithoutSectionInput, ScheduleAssignmentUncheckedCreateWithoutSectionInput>
    connectOrCreate?: ScheduleAssignmentCreateOrConnectWithoutSectionInput
    connect?: ScheduleAssignmentWhereUniqueInput
  }

  export type ScheduleAssignmentUncheckedCreateNestedOneWithoutSectionInput = {
    create?: XOR<ScheduleAssignmentCreateWithoutSectionInput, ScheduleAssignmentUncheckedCreateWithoutSectionInput>
    connectOrCreate?: ScheduleAssignmentCreateOrConnectWithoutSectionInput
    connect?: ScheduleAssignmentWhereUniqueInput
  }

  export type CourseOfferingUpdateOneRequiredWithoutSectionsNestedInput = {
    create?: XOR<CourseOfferingCreateWithoutSectionsInput, CourseOfferingUncheckedCreateWithoutSectionsInput>
    connectOrCreate?: CourseOfferingCreateOrConnectWithoutSectionsInput
    upsert?: CourseOfferingUpsertWithoutSectionsInput
    connect?: CourseOfferingWhereUniqueInput
    update?: XOR<XOR<CourseOfferingUpdateToOneWithWhereWithoutSectionsInput, CourseOfferingUpdateWithoutSectionsInput>, CourseOfferingUncheckedUpdateWithoutSectionsInput>
  }

  export type ScheduleAssignmentUpdateOneWithoutSectionNestedInput = {
    create?: XOR<ScheduleAssignmentCreateWithoutSectionInput, ScheduleAssignmentUncheckedCreateWithoutSectionInput>
    connectOrCreate?: ScheduleAssignmentCreateOrConnectWithoutSectionInput
    upsert?: ScheduleAssignmentUpsertWithoutSectionInput
    disconnect?: ScheduleAssignmentWhereInput | boolean
    delete?: ScheduleAssignmentWhereInput | boolean
    connect?: ScheduleAssignmentWhereUniqueInput
    update?: XOR<XOR<ScheduleAssignmentUpdateToOneWithWhereWithoutSectionInput, ScheduleAssignmentUpdateWithoutSectionInput>, ScheduleAssignmentUncheckedUpdateWithoutSectionInput>
  }

  export type ScheduleAssignmentUncheckedUpdateOneWithoutSectionNestedInput = {
    create?: XOR<ScheduleAssignmentCreateWithoutSectionInput, ScheduleAssignmentUncheckedCreateWithoutSectionInput>
    connectOrCreate?: ScheduleAssignmentCreateOrConnectWithoutSectionInput
    upsert?: ScheduleAssignmentUpsertWithoutSectionInput
    disconnect?: ScheduleAssignmentWhereInput | boolean
    delete?: ScheduleAssignmentWhereInput | boolean
    connect?: ScheduleAssignmentWhereUniqueInput
    update?: XOR<XOR<ScheduleAssignmentUpdateToOneWithWhereWithoutSectionInput, ScheduleAssignmentUpdateWithoutSectionInput>, ScheduleAssignmentUncheckedUpdateWithoutSectionInput>
  }

  export type SectionCreateNestedOneWithoutAssignmentInput = {
    create?: XOR<SectionCreateWithoutAssignmentInput, SectionUncheckedCreateWithoutAssignmentInput>
    connectOrCreate?: SectionCreateOrConnectWithoutAssignmentInput
    connect?: SectionWhereUniqueInput
  }

  export type LabRoomCreateNestedOneWithoutAssignmentsInput = {
    create?: XOR<LabRoomCreateWithoutAssignmentsInput, LabRoomUncheckedCreateWithoutAssignmentsInput>
    connectOrCreate?: LabRoomCreateOrConnectWithoutAssignmentsInput
    connect?: LabRoomWhereUniqueInput
  }

  export type LabAssistantCreateNestedOneWithoutAssignmentsInput = {
    create?: XOR<LabAssistantCreateWithoutAssignmentsInput, LabAssistantUncheckedCreateWithoutAssignmentsInput>
    connectOrCreate?: LabAssistantCreateOrConnectWithoutAssignmentsInput
    connect?: LabAssistantWhereUniqueInput
  }

  export type TimeSlotCreateNestedOneWithoutAssignmentsInput = {
    create?: XOR<TimeSlotCreateWithoutAssignmentsInput, TimeSlotUncheckedCreateWithoutAssignmentsInput>
    connectOrCreate?: TimeSlotCreateOrConnectWithoutAssignmentsInput
    connect?: TimeSlotWhereUniqueInput
  }

  export type SectionUpdateOneRequiredWithoutAssignmentNestedInput = {
    create?: XOR<SectionCreateWithoutAssignmentInput, SectionUncheckedCreateWithoutAssignmentInput>
    connectOrCreate?: SectionCreateOrConnectWithoutAssignmentInput
    upsert?: SectionUpsertWithoutAssignmentInput
    connect?: SectionWhereUniqueInput
    update?: XOR<XOR<SectionUpdateToOneWithWhereWithoutAssignmentInput, SectionUpdateWithoutAssignmentInput>, SectionUncheckedUpdateWithoutAssignmentInput>
  }

  export type LabRoomUpdateOneRequiredWithoutAssignmentsNestedInput = {
    create?: XOR<LabRoomCreateWithoutAssignmentsInput, LabRoomUncheckedCreateWithoutAssignmentsInput>
    connectOrCreate?: LabRoomCreateOrConnectWithoutAssignmentsInput
    upsert?: LabRoomUpsertWithoutAssignmentsInput
    connect?: LabRoomWhereUniqueInput
    update?: XOR<XOR<LabRoomUpdateToOneWithWhereWithoutAssignmentsInput, LabRoomUpdateWithoutAssignmentsInput>, LabRoomUncheckedUpdateWithoutAssignmentsInput>
  }

  export type LabAssistantUpdateOneRequiredWithoutAssignmentsNestedInput = {
    create?: XOR<LabAssistantCreateWithoutAssignmentsInput, LabAssistantUncheckedCreateWithoutAssignmentsInput>
    connectOrCreate?: LabAssistantCreateOrConnectWithoutAssignmentsInput
    upsert?: LabAssistantUpsertWithoutAssignmentsInput
    connect?: LabAssistantWhereUniqueInput
    update?: XOR<XOR<LabAssistantUpdateToOneWithWhereWithoutAssignmentsInput, LabAssistantUpdateWithoutAssignmentsInput>, LabAssistantUncheckedUpdateWithoutAssignmentsInput>
  }

  export type TimeSlotUpdateOneRequiredWithoutAssignmentsNestedInput = {
    create?: XOR<TimeSlotCreateWithoutAssignmentsInput, TimeSlotUncheckedCreateWithoutAssignmentsInput>
    connectOrCreate?: TimeSlotCreateOrConnectWithoutAssignmentsInput
    upsert?: TimeSlotUpsertWithoutAssignmentsInput
    connect?: TimeSlotWhereUniqueInput
    update?: XOR<XOR<TimeSlotUpdateToOneWithWhereWithoutAssignmentsInput, TimeSlotUpdateWithoutAssignmentsInput>, TimeSlotUncheckedUpdateWithoutAssignmentsInput>
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

  export type LabAssistantCreateWithoutUserInput = {
    id?: string
    firstName: string
    lastName: string
    department: DepartmentCreateNestedOneWithoutLabAssistantsInput
    assignments?: ScheduleAssignmentCreateNestedManyWithoutLabAssistantInput
  }

  export type LabAssistantUncheckedCreateWithoutUserInput = {
    id?: string
    firstName: string
    lastName: string
    departmentId: string
    assignments?: ScheduleAssignmentUncheckedCreateNestedManyWithoutLabAssistantInput
  }

  export type LabAssistantCreateOrConnectWithoutUserInput = {
    where: LabAssistantWhereUniqueInput
    create: XOR<LabAssistantCreateWithoutUserInput, LabAssistantUncheckedCreateWithoutUserInput>
  }

  export type LabAssistantUpsertWithoutUserInput = {
    update: XOR<LabAssistantUpdateWithoutUserInput, LabAssistantUncheckedUpdateWithoutUserInput>
    create: XOR<LabAssistantCreateWithoutUserInput, LabAssistantUncheckedCreateWithoutUserInput>
    where?: LabAssistantWhereInput
  }

  export type LabAssistantUpdateToOneWithWhereWithoutUserInput = {
    where?: LabAssistantWhereInput
    data: XOR<LabAssistantUpdateWithoutUserInput, LabAssistantUncheckedUpdateWithoutUserInput>
  }

  export type LabAssistantUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    department?: DepartmentUpdateOneRequiredWithoutLabAssistantsNestedInput
    assignments?: ScheduleAssignmentUpdateManyWithoutLabAssistantNestedInput
  }

  export type LabAssistantUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    departmentId?: StringFieldUpdateOperationsInput | string
    assignments?: ScheduleAssignmentUncheckedUpdateManyWithoutLabAssistantNestedInput
  }

  export type CourseCreateWithoutDepartmentInput = {
    id?: string
    name: string
    courseCode: string
    courseOfferings?: CourseOfferingCreateNestedManyWithoutCourseInput
  }

  export type CourseUncheckedCreateWithoutDepartmentInput = {
    id?: string
    name: string
    courseCode: string
    courseOfferings?: CourseOfferingUncheckedCreateNestedManyWithoutCourseInput
  }

  export type CourseCreateOrConnectWithoutDepartmentInput = {
    where: CourseWhereUniqueInput
    create: XOR<CourseCreateWithoutDepartmentInput, CourseUncheckedCreateWithoutDepartmentInput>
  }

  export type CourseCreateManyDepartmentInputEnvelope = {
    data: CourseCreateManyDepartmentInput | CourseCreateManyDepartmentInput[]
    skipDuplicates?: boolean
  }

  export type LabAssistantCreateWithoutDepartmentInput = {
    id?: string
    firstName: string
    lastName: string
    user: UserCreateNestedOneWithoutLabAssistantInput
    assignments?: ScheduleAssignmentCreateNestedManyWithoutLabAssistantInput
  }

  export type LabAssistantUncheckedCreateWithoutDepartmentInput = {
    id?: string
    userId: string
    firstName: string
    lastName: string
    assignments?: ScheduleAssignmentUncheckedCreateNestedManyWithoutLabAssistantInput
  }

  export type LabAssistantCreateOrConnectWithoutDepartmentInput = {
    where: LabAssistantWhereUniqueInput
    create: XOR<LabAssistantCreateWithoutDepartmentInput, LabAssistantUncheckedCreateWithoutDepartmentInput>
  }

  export type LabAssistantCreateManyDepartmentInputEnvelope = {
    data: LabAssistantCreateManyDepartmentInput | LabAssistantCreateManyDepartmentInput[]
    skipDuplicates?: boolean
  }

  export type CourseUpsertWithWhereUniqueWithoutDepartmentInput = {
    where: CourseWhereUniqueInput
    update: XOR<CourseUpdateWithoutDepartmentInput, CourseUncheckedUpdateWithoutDepartmentInput>
    create: XOR<CourseCreateWithoutDepartmentInput, CourseUncheckedCreateWithoutDepartmentInput>
  }

  export type CourseUpdateWithWhereUniqueWithoutDepartmentInput = {
    where: CourseWhereUniqueInput
    data: XOR<CourseUpdateWithoutDepartmentInput, CourseUncheckedUpdateWithoutDepartmentInput>
  }

  export type CourseUpdateManyWithWhereWithoutDepartmentInput = {
    where: CourseScalarWhereInput
    data: XOR<CourseUpdateManyMutationInput, CourseUncheckedUpdateManyWithoutDepartmentInput>
  }

  export type CourseScalarWhereInput = {
    AND?: CourseScalarWhereInput | CourseScalarWhereInput[]
    OR?: CourseScalarWhereInput[]
    NOT?: CourseScalarWhereInput | CourseScalarWhereInput[]
    id?: StringFilter<"Course"> | string
    name?: StringFilter<"Course"> | string
    courseCode?: StringFilter<"Course"> | string
    departmentId?: StringFilter<"Course"> | string
  }

  export type LabAssistantUpsertWithWhereUniqueWithoutDepartmentInput = {
    where: LabAssistantWhereUniqueInput
    update: XOR<LabAssistantUpdateWithoutDepartmentInput, LabAssistantUncheckedUpdateWithoutDepartmentInput>
    create: XOR<LabAssistantCreateWithoutDepartmentInput, LabAssistantUncheckedCreateWithoutDepartmentInput>
  }

  export type LabAssistantUpdateWithWhereUniqueWithoutDepartmentInput = {
    where: LabAssistantWhereUniqueInput
    data: XOR<LabAssistantUpdateWithoutDepartmentInput, LabAssistantUncheckedUpdateWithoutDepartmentInput>
  }

  export type LabAssistantUpdateManyWithWhereWithoutDepartmentInput = {
    where: LabAssistantScalarWhereInput
    data: XOR<LabAssistantUpdateManyMutationInput, LabAssistantUncheckedUpdateManyWithoutDepartmentInput>
  }

  export type LabAssistantScalarWhereInput = {
    AND?: LabAssistantScalarWhereInput | LabAssistantScalarWhereInput[]
    OR?: LabAssistantScalarWhereInput[]
    NOT?: LabAssistantScalarWhereInput | LabAssistantScalarWhereInput[]
    id?: StringFilter<"LabAssistant"> | string
    userId?: StringFilter<"LabAssistant"> | string
    firstName?: StringFilter<"LabAssistant"> | string
    lastName?: StringFilter<"LabAssistant"> | string
    departmentId?: StringFilter<"LabAssistant"> | string
  }

  export type UserCreateWithoutLabAssistantInput = {
    id?: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateWithoutLabAssistantInput = {
    id?: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateOrConnectWithoutLabAssistantInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutLabAssistantInput, UserUncheckedCreateWithoutLabAssistantInput>
  }

  export type DepartmentCreateWithoutLabAssistantsInput = {
    id?: string
    name: string
    courses?: CourseCreateNestedManyWithoutDepartmentInput
  }

  export type DepartmentUncheckedCreateWithoutLabAssistantsInput = {
    id?: string
    name: string
    courses?: CourseUncheckedCreateNestedManyWithoutDepartmentInput
  }

  export type DepartmentCreateOrConnectWithoutLabAssistantsInput = {
    where: DepartmentWhereUniqueInput
    create: XOR<DepartmentCreateWithoutLabAssistantsInput, DepartmentUncheckedCreateWithoutLabAssistantsInput>
  }

  export type ScheduleAssignmentCreateWithoutLabAssistantInput = {
    id?: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    section: SectionCreateNestedOneWithoutAssignmentInput
    labRoom: LabRoomCreateNestedOneWithoutAssignmentsInput
    timeSlot: TimeSlotCreateNestedOneWithoutAssignmentsInput
  }

  export type ScheduleAssignmentUncheckedCreateWithoutLabAssistantInput = {
    id?: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    sectionId: string
    labRoomId: string
    timeSlotId: string
  }

  export type ScheduleAssignmentCreateOrConnectWithoutLabAssistantInput = {
    where: ScheduleAssignmentWhereUniqueInput
    create: XOR<ScheduleAssignmentCreateWithoutLabAssistantInput, ScheduleAssignmentUncheckedCreateWithoutLabAssistantInput>
  }

  export type ScheduleAssignmentCreateManyLabAssistantInputEnvelope = {
    data: ScheduleAssignmentCreateManyLabAssistantInput | ScheduleAssignmentCreateManyLabAssistantInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutLabAssistantInput = {
    update: XOR<UserUpdateWithoutLabAssistantInput, UserUncheckedUpdateWithoutLabAssistantInput>
    create: XOR<UserCreateWithoutLabAssistantInput, UserUncheckedCreateWithoutLabAssistantInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutLabAssistantInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutLabAssistantInput, UserUncheckedUpdateWithoutLabAssistantInput>
  }

  export type UserUpdateWithoutLabAssistantInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutLabAssistantInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DepartmentUpsertWithoutLabAssistantsInput = {
    update: XOR<DepartmentUpdateWithoutLabAssistantsInput, DepartmentUncheckedUpdateWithoutLabAssistantsInput>
    create: XOR<DepartmentCreateWithoutLabAssistantsInput, DepartmentUncheckedCreateWithoutLabAssistantsInput>
    where?: DepartmentWhereInput
  }

  export type DepartmentUpdateToOneWithWhereWithoutLabAssistantsInput = {
    where?: DepartmentWhereInput
    data: XOR<DepartmentUpdateWithoutLabAssistantsInput, DepartmentUncheckedUpdateWithoutLabAssistantsInput>
  }

  export type DepartmentUpdateWithoutLabAssistantsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    courses?: CourseUpdateManyWithoutDepartmentNestedInput
  }

  export type DepartmentUncheckedUpdateWithoutLabAssistantsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    courses?: CourseUncheckedUpdateManyWithoutDepartmentNestedInput
  }

  export type ScheduleAssignmentUpsertWithWhereUniqueWithoutLabAssistantInput = {
    where: ScheduleAssignmentWhereUniqueInput
    update: XOR<ScheduleAssignmentUpdateWithoutLabAssistantInput, ScheduleAssignmentUncheckedUpdateWithoutLabAssistantInput>
    create: XOR<ScheduleAssignmentCreateWithoutLabAssistantInput, ScheduleAssignmentUncheckedCreateWithoutLabAssistantInput>
  }

  export type ScheduleAssignmentUpdateWithWhereUniqueWithoutLabAssistantInput = {
    where: ScheduleAssignmentWhereUniqueInput
    data: XOR<ScheduleAssignmentUpdateWithoutLabAssistantInput, ScheduleAssignmentUncheckedUpdateWithoutLabAssistantInput>
  }

  export type ScheduleAssignmentUpdateManyWithWhereWithoutLabAssistantInput = {
    where: ScheduleAssignmentScalarWhereInput
    data: XOR<ScheduleAssignmentUpdateManyMutationInput, ScheduleAssignmentUncheckedUpdateManyWithoutLabAssistantInput>
  }

  export type ScheduleAssignmentScalarWhereInput = {
    AND?: ScheduleAssignmentScalarWhereInput | ScheduleAssignmentScalarWhereInput[]
    OR?: ScheduleAssignmentScalarWhereInput[]
    NOT?: ScheduleAssignmentScalarWhereInput | ScheduleAssignmentScalarWhereInput[]
    id?: StringFilter<"ScheduleAssignment"> | string
    status?: StringFilter<"ScheduleAssignment"> | string
    createdAt?: DateTimeFilter<"ScheduleAssignment"> | Date | string
    updatedAt?: DateTimeFilter<"ScheduleAssignment"> | Date | string
    sectionId?: StringFilter<"ScheduleAssignment"> | string
    labRoomId?: StringFilter<"ScheduleAssignment"> | string
    labAssistantId?: StringFilter<"ScheduleAssignment"> | string
    timeSlotId?: StringFilter<"ScheduleAssignment"> | string
  }

  export type ScheduleAssignmentCreateWithoutLabRoomInput = {
    id?: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    section: SectionCreateNestedOneWithoutAssignmentInput
    labAssistant: LabAssistantCreateNestedOneWithoutAssignmentsInput
    timeSlot: TimeSlotCreateNestedOneWithoutAssignmentsInput
  }

  export type ScheduleAssignmentUncheckedCreateWithoutLabRoomInput = {
    id?: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    sectionId: string
    labAssistantId: string
    timeSlotId: string
  }

  export type ScheduleAssignmentCreateOrConnectWithoutLabRoomInput = {
    where: ScheduleAssignmentWhereUniqueInput
    create: XOR<ScheduleAssignmentCreateWithoutLabRoomInput, ScheduleAssignmentUncheckedCreateWithoutLabRoomInput>
  }

  export type ScheduleAssignmentCreateManyLabRoomInputEnvelope = {
    data: ScheduleAssignmentCreateManyLabRoomInput | ScheduleAssignmentCreateManyLabRoomInput[]
    skipDuplicates?: boolean
  }

  export type ScheduleAssignmentUpsertWithWhereUniqueWithoutLabRoomInput = {
    where: ScheduleAssignmentWhereUniqueInput
    update: XOR<ScheduleAssignmentUpdateWithoutLabRoomInput, ScheduleAssignmentUncheckedUpdateWithoutLabRoomInput>
    create: XOR<ScheduleAssignmentCreateWithoutLabRoomInput, ScheduleAssignmentUncheckedCreateWithoutLabRoomInput>
  }

  export type ScheduleAssignmentUpdateWithWhereUniqueWithoutLabRoomInput = {
    where: ScheduleAssignmentWhereUniqueInput
    data: XOR<ScheduleAssignmentUpdateWithoutLabRoomInput, ScheduleAssignmentUncheckedUpdateWithoutLabRoomInput>
  }

  export type ScheduleAssignmentUpdateManyWithWhereWithoutLabRoomInput = {
    where: ScheduleAssignmentScalarWhereInput
    data: XOR<ScheduleAssignmentUpdateManyMutationInput, ScheduleAssignmentUncheckedUpdateManyWithoutLabRoomInput>
  }

  export type ScheduleAssignmentCreateWithoutTimeSlotInput = {
    id?: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    section: SectionCreateNestedOneWithoutAssignmentInput
    labRoom: LabRoomCreateNestedOneWithoutAssignmentsInput
    labAssistant: LabAssistantCreateNestedOneWithoutAssignmentsInput
  }

  export type ScheduleAssignmentUncheckedCreateWithoutTimeSlotInput = {
    id?: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    sectionId: string
    labRoomId: string
    labAssistantId: string
  }

  export type ScheduleAssignmentCreateOrConnectWithoutTimeSlotInput = {
    where: ScheduleAssignmentWhereUniqueInput
    create: XOR<ScheduleAssignmentCreateWithoutTimeSlotInput, ScheduleAssignmentUncheckedCreateWithoutTimeSlotInput>
  }

  export type ScheduleAssignmentCreateManyTimeSlotInputEnvelope = {
    data: ScheduleAssignmentCreateManyTimeSlotInput | ScheduleAssignmentCreateManyTimeSlotInput[]
    skipDuplicates?: boolean
  }

  export type ScheduleAssignmentUpsertWithWhereUniqueWithoutTimeSlotInput = {
    where: ScheduleAssignmentWhereUniqueInput
    update: XOR<ScheduleAssignmentUpdateWithoutTimeSlotInput, ScheduleAssignmentUncheckedUpdateWithoutTimeSlotInput>
    create: XOR<ScheduleAssignmentCreateWithoutTimeSlotInput, ScheduleAssignmentUncheckedCreateWithoutTimeSlotInput>
  }

  export type ScheduleAssignmentUpdateWithWhereUniqueWithoutTimeSlotInput = {
    where: ScheduleAssignmentWhereUniqueInput
    data: XOR<ScheduleAssignmentUpdateWithoutTimeSlotInput, ScheduleAssignmentUncheckedUpdateWithoutTimeSlotInput>
  }

  export type ScheduleAssignmentUpdateManyWithWhereWithoutTimeSlotInput = {
    where: ScheduleAssignmentScalarWhereInput
    data: XOR<ScheduleAssignmentUpdateManyMutationInput, ScheduleAssignmentUncheckedUpdateManyWithoutTimeSlotInput>
  }

  export type DepartmentCreateWithoutCoursesInput = {
    id?: string
    name: string
    labAssistants?: LabAssistantCreateNestedManyWithoutDepartmentInput
  }

  export type DepartmentUncheckedCreateWithoutCoursesInput = {
    id?: string
    name: string
    labAssistants?: LabAssistantUncheckedCreateNestedManyWithoutDepartmentInput
  }

  export type DepartmentCreateOrConnectWithoutCoursesInput = {
    where: DepartmentWhereUniqueInput
    create: XOR<DepartmentCreateWithoutCoursesInput, DepartmentUncheckedCreateWithoutCoursesInput>
  }

  export type CourseOfferingCreateWithoutCourseInput = {
    id?: string
    semester: string
    year: number
    sections?: SectionCreateNestedManyWithoutCourseOfferingInput
  }

  export type CourseOfferingUncheckedCreateWithoutCourseInput = {
    id?: string
    semester: string
    year: number
    sections?: SectionUncheckedCreateNestedManyWithoutCourseOfferingInput
  }

  export type CourseOfferingCreateOrConnectWithoutCourseInput = {
    where: CourseOfferingWhereUniqueInput
    create: XOR<CourseOfferingCreateWithoutCourseInput, CourseOfferingUncheckedCreateWithoutCourseInput>
  }

  export type CourseOfferingCreateManyCourseInputEnvelope = {
    data: CourseOfferingCreateManyCourseInput | CourseOfferingCreateManyCourseInput[]
    skipDuplicates?: boolean
  }

  export type DepartmentUpsertWithoutCoursesInput = {
    update: XOR<DepartmentUpdateWithoutCoursesInput, DepartmentUncheckedUpdateWithoutCoursesInput>
    create: XOR<DepartmentCreateWithoutCoursesInput, DepartmentUncheckedCreateWithoutCoursesInput>
    where?: DepartmentWhereInput
  }

  export type DepartmentUpdateToOneWithWhereWithoutCoursesInput = {
    where?: DepartmentWhereInput
    data: XOR<DepartmentUpdateWithoutCoursesInput, DepartmentUncheckedUpdateWithoutCoursesInput>
  }

  export type DepartmentUpdateWithoutCoursesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    labAssistants?: LabAssistantUpdateManyWithoutDepartmentNestedInput
  }

  export type DepartmentUncheckedUpdateWithoutCoursesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    labAssistants?: LabAssistantUncheckedUpdateManyWithoutDepartmentNestedInput
  }

  export type CourseOfferingUpsertWithWhereUniqueWithoutCourseInput = {
    where: CourseOfferingWhereUniqueInput
    update: XOR<CourseOfferingUpdateWithoutCourseInput, CourseOfferingUncheckedUpdateWithoutCourseInput>
    create: XOR<CourseOfferingCreateWithoutCourseInput, CourseOfferingUncheckedCreateWithoutCourseInput>
  }

  export type CourseOfferingUpdateWithWhereUniqueWithoutCourseInput = {
    where: CourseOfferingWhereUniqueInput
    data: XOR<CourseOfferingUpdateWithoutCourseInput, CourseOfferingUncheckedUpdateWithoutCourseInput>
  }

  export type CourseOfferingUpdateManyWithWhereWithoutCourseInput = {
    where: CourseOfferingScalarWhereInput
    data: XOR<CourseOfferingUpdateManyMutationInput, CourseOfferingUncheckedUpdateManyWithoutCourseInput>
  }

  export type CourseOfferingScalarWhereInput = {
    AND?: CourseOfferingScalarWhereInput | CourseOfferingScalarWhereInput[]
    OR?: CourseOfferingScalarWhereInput[]
    NOT?: CourseOfferingScalarWhereInput | CourseOfferingScalarWhereInput[]
    id?: StringFilter<"CourseOffering"> | string
    courseId?: StringFilter<"CourseOffering"> | string
    semester?: StringFilter<"CourseOffering"> | string
    year?: IntFilter<"CourseOffering"> | number
  }

  export type CourseCreateWithoutCourseOfferingsInput = {
    id?: string
    name: string
    courseCode: string
    department: DepartmentCreateNestedOneWithoutCoursesInput
  }

  export type CourseUncheckedCreateWithoutCourseOfferingsInput = {
    id?: string
    name: string
    courseCode: string
    departmentId: string
  }

  export type CourseCreateOrConnectWithoutCourseOfferingsInput = {
    where: CourseWhereUniqueInput
    create: XOR<CourseCreateWithoutCourseOfferingsInput, CourseUncheckedCreateWithoutCourseOfferingsInput>
  }

  export type SectionCreateWithoutCourseOfferingInput = {
    id?: string
    sectionNumber: string
    requiredLabSize: number
    assignment?: ScheduleAssignmentCreateNestedOneWithoutSectionInput
  }

  export type SectionUncheckedCreateWithoutCourseOfferingInput = {
    id?: string
    sectionNumber: string
    requiredLabSize: number
    assignment?: ScheduleAssignmentUncheckedCreateNestedOneWithoutSectionInput
  }

  export type SectionCreateOrConnectWithoutCourseOfferingInput = {
    where: SectionWhereUniqueInput
    create: XOR<SectionCreateWithoutCourseOfferingInput, SectionUncheckedCreateWithoutCourseOfferingInput>
  }

  export type SectionCreateManyCourseOfferingInputEnvelope = {
    data: SectionCreateManyCourseOfferingInput | SectionCreateManyCourseOfferingInput[]
    skipDuplicates?: boolean
  }

  export type CourseUpsertWithoutCourseOfferingsInput = {
    update: XOR<CourseUpdateWithoutCourseOfferingsInput, CourseUncheckedUpdateWithoutCourseOfferingsInput>
    create: XOR<CourseCreateWithoutCourseOfferingsInput, CourseUncheckedCreateWithoutCourseOfferingsInput>
    where?: CourseWhereInput
  }

  export type CourseUpdateToOneWithWhereWithoutCourseOfferingsInput = {
    where?: CourseWhereInput
    data: XOR<CourseUpdateWithoutCourseOfferingsInput, CourseUncheckedUpdateWithoutCourseOfferingsInput>
  }

  export type CourseUpdateWithoutCourseOfferingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    courseCode?: StringFieldUpdateOperationsInput | string
    department?: DepartmentUpdateOneRequiredWithoutCoursesNestedInput
  }

  export type CourseUncheckedUpdateWithoutCourseOfferingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    courseCode?: StringFieldUpdateOperationsInput | string
    departmentId?: StringFieldUpdateOperationsInput | string
  }

  export type SectionUpsertWithWhereUniqueWithoutCourseOfferingInput = {
    where: SectionWhereUniqueInput
    update: XOR<SectionUpdateWithoutCourseOfferingInput, SectionUncheckedUpdateWithoutCourseOfferingInput>
    create: XOR<SectionCreateWithoutCourseOfferingInput, SectionUncheckedCreateWithoutCourseOfferingInput>
  }

  export type SectionUpdateWithWhereUniqueWithoutCourseOfferingInput = {
    where: SectionWhereUniqueInput
    data: XOR<SectionUpdateWithoutCourseOfferingInput, SectionUncheckedUpdateWithoutCourseOfferingInput>
  }

  export type SectionUpdateManyWithWhereWithoutCourseOfferingInput = {
    where: SectionScalarWhereInput
    data: XOR<SectionUpdateManyMutationInput, SectionUncheckedUpdateManyWithoutCourseOfferingInput>
  }

  export type SectionScalarWhereInput = {
    AND?: SectionScalarWhereInput | SectionScalarWhereInput[]
    OR?: SectionScalarWhereInput[]
    NOT?: SectionScalarWhereInput | SectionScalarWhereInput[]
    id?: StringFilter<"Section"> | string
    sectionNumber?: StringFilter<"Section"> | string
    requiredLabSize?: IntFilter<"Section"> | number
    courseOfferingId?: StringFilter<"Section"> | string
  }

  export type CourseOfferingCreateWithoutSectionsInput = {
    id?: string
    semester: string
    year: number
    course: CourseCreateNestedOneWithoutCourseOfferingsInput
  }

  export type CourseOfferingUncheckedCreateWithoutSectionsInput = {
    id?: string
    courseId: string
    semester: string
    year: number
  }

  export type CourseOfferingCreateOrConnectWithoutSectionsInput = {
    where: CourseOfferingWhereUniqueInput
    create: XOR<CourseOfferingCreateWithoutSectionsInput, CourseOfferingUncheckedCreateWithoutSectionsInput>
  }

  export type ScheduleAssignmentCreateWithoutSectionInput = {
    id?: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    labRoom: LabRoomCreateNestedOneWithoutAssignmentsInput
    labAssistant: LabAssistantCreateNestedOneWithoutAssignmentsInput
    timeSlot: TimeSlotCreateNestedOneWithoutAssignmentsInput
  }

  export type ScheduleAssignmentUncheckedCreateWithoutSectionInput = {
    id?: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    labRoomId: string
    labAssistantId: string
    timeSlotId: string
  }

  export type ScheduleAssignmentCreateOrConnectWithoutSectionInput = {
    where: ScheduleAssignmentWhereUniqueInput
    create: XOR<ScheduleAssignmentCreateWithoutSectionInput, ScheduleAssignmentUncheckedCreateWithoutSectionInput>
  }

  export type CourseOfferingUpsertWithoutSectionsInput = {
    update: XOR<CourseOfferingUpdateWithoutSectionsInput, CourseOfferingUncheckedUpdateWithoutSectionsInput>
    create: XOR<CourseOfferingCreateWithoutSectionsInput, CourseOfferingUncheckedCreateWithoutSectionsInput>
    where?: CourseOfferingWhereInput
  }

  export type CourseOfferingUpdateToOneWithWhereWithoutSectionsInput = {
    where?: CourseOfferingWhereInput
    data: XOR<CourseOfferingUpdateWithoutSectionsInput, CourseOfferingUncheckedUpdateWithoutSectionsInput>
  }

  export type CourseOfferingUpdateWithoutSectionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    semester?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    course?: CourseUpdateOneRequiredWithoutCourseOfferingsNestedInput
  }

  export type CourseOfferingUncheckedUpdateWithoutSectionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    semester?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
  }

  export type ScheduleAssignmentUpsertWithoutSectionInput = {
    update: XOR<ScheduleAssignmentUpdateWithoutSectionInput, ScheduleAssignmentUncheckedUpdateWithoutSectionInput>
    create: XOR<ScheduleAssignmentCreateWithoutSectionInput, ScheduleAssignmentUncheckedCreateWithoutSectionInput>
    where?: ScheduleAssignmentWhereInput
  }

  export type ScheduleAssignmentUpdateToOneWithWhereWithoutSectionInput = {
    where?: ScheduleAssignmentWhereInput
    data: XOR<ScheduleAssignmentUpdateWithoutSectionInput, ScheduleAssignmentUncheckedUpdateWithoutSectionInput>
  }

  export type ScheduleAssignmentUpdateWithoutSectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    labRoom?: LabRoomUpdateOneRequiredWithoutAssignmentsNestedInput
    labAssistant?: LabAssistantUpdateOneRequiredWithoutAssignmentsNestedInput
    timeSlot?: TimeSlotUpdateOneRequiredWithoutAssignmentsNestedInput
  }

  export type ScheduleAssignmentUncheckedUpdateWithoutSectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    labRoomId?: StringFieldUpdateOperationsInput | string
    labAssistantId?: StringFieldUpdateOperationsInput | string
    timeSlotId?: StringFieldUpdateOperationsInput | string
  }

  export type SectionCreateWithoutAssignmentInput = {
    id?: string
    sectionNumber: string
    requiredLabSize: number
    courseOffering: CourseOfferingCreateNestedOneWithoutSectionsInput
  }

  export type SectionUncheckedCreateWithoutAssignmentInput = {
    id?: string
    sectionNumber: string
    requiredLabSize: number
    courseOfferingId: string
  }

  export type SectionCreateOrConnectWithoutAssignmentInput = {
    where: SectionWhereUniqueInput
    create: XOR<SectionCreateWithoutAssignmentInput, SectionUncheckedCreateWithoutAssignmentInput>
  }

  export type LabRoomCreateWithoutAssignmentsInput = {
    id?: string
    name: string
    capacity: number
    status?: string
  }

  export type LabRoomUncheckedCreateWithoutAssignmentsInput = {
    id?: string
    name: string
    capacity: number
    status?: string
  }

  export type LabRoomCreateOrConnectWithoutAssignmentsInput = {
    where: LabRoomWhereUniqueInput
    create: XOR<LabRoomCreateWithoutAssignmentsInput, LabRoomUncheckedCreateWithoutAssignmentsInput>
  }

  export type LabAssistantCreateWithoutAssignmentsInput = {
    id?: string
    firstName: string
    lastName: string
    user: UserCreateNestedOneWithoutLabAssistantInput
    department: DepartmentCreateNestedOneWithoutLabAssistantsInput
  }

  export type LabAssistantUncheckedCreateWithoutAssignmentsInput = {
    id?: string
    userId: string
    firstName: string
    lastName: string
    departmentId: string
  }

  export type LabAssistantCreateOrConnectWithoutAssignmentsInput = {
    where: LabAssistantWhereUniqueInput
    create: XOR<LabAssistantCreateWithoutAssignmentsInput, LabAssistantUncheckedCreateWithoutAssignmentsInput>
  }

  export type TimeSlotCreateWithoutAssignmentsInput = {
    id?: string
    dayOfWeek: string
    startTime: string
    endTime: string
  }

  export type TimeSlotUncheckedCreateWithoutAssignmentsInput = {
    id?: string
    dayOfWeek: string
    startTime: string
    endTime: string
  }

  export type TimeSlotCreateOrConnectWithoutAssignmentsInput = {
    where: TimeSlotWhereUniqueInput
    create: XOR<TimeSlotCreateWithoutAssignmentsInput, TimeSlotUncheckedCreateWithoutAssignmentsInput>
  }

  export type SectionUpsertWithoutAssignmentInput = {
    update: XOR<SectionUpdateWithoutAssignmentInput, SectionUncheckedUpdateWithoutAssignmentInput>
    create: XOR<SectionCreateWithoutAssignmentInput, SectionUncheckedCreateWithoutAssignmentInput>
    where?: SectionWhereInput
  }

  export type SectionUpdateToOneWithWhereWithoutAssignmentInput = {
    where?: SectionWhereInput
    data: XOR<SectionUpdateWithoutAssignmentInput, SectionUncheckedUpdateWithoutAssignmentInput>
  }

  export type SectionUpdateWithoutAssignmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    sectionNumber?: StringFieldUpdateOperationsInput | string
    requiredLabSize?: IntFieldUpdateOperationsInput | number
    courseOffering?: CourseOfferingUpdateOneRequiredWithoutSectionsNestedInput
  }

  export type SectionUncheckedUpdateWithoutAssignmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    sectionNumber?: StringFieldUpdateOperationsInput | string
    requiredLabSize?: IntFieldUpdateOperationsInput | number
    courseOfferingId?: StringFieldUpdateOperationsInput | string
  }

  export type LabRoomUpsertWithoutAssignmentsInput = {
    update: XOR<LabRoomUpdateWithoutAssignmentsInput, LabRoomUncheckedUpdateWithoutAssignmentsInput>
    create: XOR<LabRoomCreateWithoutAssignmentsInput, LabRoomUncheckedCreateWithoutAssignmentsInput>
    where?: LabRoomWhereInput
  }

  export type LabRoomUpdateToOneWithWhereWithoutAssignmentsInput = {
    where?: LabRoomWhereInput
    data: XOR<LabRoomUpdateWithoutAssignmentsInput, LabRoomUncheckedUpdateWithoutAssignmentsInput>
  }

  export type LabRoomUpdateWithoutAssignmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
  }

  export type LabRoomUncheckedUpdateWithoutAssignmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
  }

  export type LabAssistantUpsertWithoutAssignmentsInput = {
    update: XOR<LabAssistantUpdateWithoutAssignmentsInput, LabAssistantUncheckedUpdateWithoutAssignmentsInput>
    create: XOR<LabAssistantCreateWithoutAssignmentsInput, LabAssistantUncheckedCreateWithoutAssignmentsInput>
    where?: LabAssistantWhereInput
  }

  export type LabAssistantUpdateToOneWithWhereWithoutAssignmentsInput = {
    where?: LabAssistantWhereInput
    data: XOR<LabAssistantUpdateWithoutAssignmentsInput, LabAssistantUncheckedUpdateWithoutAssignmentsInput>
  }

  export type LabAssistantUpdateWithoutAssignmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutLabAssistantNestedInput
    department?: DepartmentUpdateOneRequiredWithoutLabAssistantsNestedInput
  }

  export type LabAssistantUncheckedUpdateWithoutAssignmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    departmentId?: StringFieldUpdateOperationsInput | string
  }

  export type TimeSlotUpsertWithoutAssignmentsInput = {
    update: XOR<TimeSlotUpdateWithoutAssignmentsInput, TimeSlotUncheckedUpdateWithoutAssignmentsInput>
    create: XOR<TimeSlotCreateWithoutAssignmentsInput, TimeSlotUncheckedCreateWithoutAssignmentsInput>
    where?: TimeSlotWhereInput
  }

  export type TimeSlotUpdateToOneWithWhereWithoutAssignmentsInput = {
    where?: TimeSlotWhereInput
    data: XOR<TimeSlotUpdateWithoutAssignmentsInput, TimeSlotUncheckedUpdateWithoutAssignmentsInput>
  }

  export type TimeSlotUpdateWithoutAssignmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    dayOfWeek?: StringFieldUpdateOperationsInput | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
  }

  export type TimeSlotUncheckedUpdateWithoutAssignmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    dayOfWeek?: StringFieldUpdateOperationsInput | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
  }

  export type CourseCreateManyDepartmentInput = {
    id?: string
    name: string
    courseCode: string
  }

  export type LabAssistantCreateManyDepartmentInput = {
    id?: string
    userId: string
    firstName: string
    lastName: string
  }

  export type CourseUpdateWithoutDepartmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    courseCode?: StringFieldUpdateOperationsInput | string
    courseOfferings?: CourseOfferingUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateWithoutDepartmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    courseCode?: StringFieldUpdateOperationsInput | string
    courseOfferings?: CourseOfferingUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateManyWithoutDepartmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    courseCode?: StringFieldUpdateOperationsInput | string
  }

  export type LabAssistantUpdateWithoutDepartmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutLabAssistantNestedInput
    assignments?: ScheduleAssignmentUpdateManyWithoutLabAssistantNestedInput
  }

  export type LabAssistantUncheckedUpdateWithoutDepartmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    assignments?: ScheduleAssignmentUncheckedUpdateManyWithoutLabAssistantNestedInput
  }

  export type LabAssistantUncheckedUpdateManyWithoutDepartmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
  }

  export type ScheduleAssignmentCreateManyLabAssistantInput = {
    id?: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    sectionId: string
    labRoomId: string
    timeSlotId: string
  }

  export type ScheduleAssignmentUpdateWithoutLabAssistantInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    section?: SectionUpdateOneRequiredWithoutAssignmentNestedInput
    labRoom?: LabRoomUpdateOneRequiredWithoutAssignmentsNestedInput
    timeSlot?: TimeSlotUpdateOneRequiredWithoutAssignmentsNestedInput
  }

  export type ScheduleAssignmentUncheckedUpdateWithoutLabAssistantInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sectionId?: StringFieldUpdateOperationsInput | string
    labRoomId?: StringFieldUpdateOperationsInput | string
    timeSlotId?: StringFieldUpdateOperationsInput | string
  }

  export type ScheduleAssignmentUncheckedUpdateManyWithoutLabAssistantInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sectionId?: StringFieldUpdateOperationsInput | string
    labRoomId?: StringFieldUpdateOperationsInput | string
    timeSlotId?: StringFieldUpdateOperationsInput | string
  }

  export type ScheduleAssignmentCreateManyLabRoomInput = {
    id?: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    sectionId: string
    labAssistantId: string
    timeSlotId: string
  }

  export type ScheduleAssignmentUpdateWithoutLabRoomInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    section?: SectionUpdateOneRequiredWithoutAssignmentNestedInput
    labAssistant?: LabAssistantUpdateOneRequiredWithoutAssignmentsNestedInput
    timeSlot?: TimeSlotUpdateOneRequiredWithoutAssignmentsNestedInput
  }

  export type ScheduleAssignmentUncheckedUpdateWithoutLabRoomInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sectionId?: StringFieldUpdateOperationsInput | string
    labAssistantId?: StringFieldUpdateOperationsInput | string
    timeSlotId?: StringFieldUpdateOperationsInput | string
  }

  export type ScheduleAssignmentUncheckedUpdateManyWithoutLabRoomInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sectionId?: StringFieldUpdateOperationsInput | string
    labAssistantId?: StringFieldUpdateOperationsInput | string
    timeSlotId?: StringFieldUpdateOperationsInput | string
  }

  export type ScheduleAssignmentCreateManyTimeSlotInput = {
    id?: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    sectionId: string
    labRoomId: string
    labAssistantId: string
  }

  export type ScheduleAssignmentUpdateWithoutTimeSlotInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    section?: SectionUpdateOneRequiredWithoutAssignmentNestedInput
    labRoom?: LabRoomUpdateOneRequiredWithoutAssignmentsNestedInput
    labAssistant?: LabAssistantUpdateOneRequiredWithoutAssignmentsNestedInput
  }

  export type ScheduleAssignmentUncheckedUpdateWithoutTimeSlotInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sectionId?: StringFieldUpdateOperationsInput | string
    labRoomId?: StringFieldUpdateOperationsInput | string
    labAssistantId?: StringFieldUpdateOperationsInput | string
  }

  export type ScheduleAssignmentUncheckedUpdateManyWithoutTimeSlotInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sectionId?: StringFieldUpdateOperationsInput | string
    labRoomId?: StringFieldUpdateOperationsInput | string
    labAssistantId?: StringFieldUpdateOperationsInput | string
  }

  export type CourseOfferingCreateManyCourseInput = {
    id?: string
    semester: string
    year: number
  }

  export type CourseOfferingUpdateWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    semester?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    sections?: SectionUpdateManyWithoutCourseOfferingNestedInput
  }

  export type CourseOfferingUncheckedUpdateWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    semester?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    sections?: SectionUncheckedUpdateManyWithoutCourseOfferingNestedInput
  }

  export type CourseOfferingUncheckedUpdateManyWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    semester?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
  }

  export type SectionCreateManyCourseOfferingInput = {
    id?: string
    sectionNumber: string
    requiredLabSize: number
  }

  export type SectionUpdateWithoutCourseOfferingInput = {
    id?: StringFieldUpdateOperationsInput | string
    sectionNumber?: StringFieldUpdateOperationsInput | string
    requiredLabSize?: IntFieldUpdateOperationsInput | number
    assignment?: ScheduleAssignmentUpdateOneWithoutSectionNestedInput
  }

  export type SectionUncheckedUpdateWithoutCourseOfferingInput = {
    id?: StringFieldUpdateOperationsInput | string
    sectionNumber?: StringFieldUpdateOperationsInput | string
    requiredLabSize?: IntFieldUpdateOperationsInput | number
    assignment?: ScheduleAssignmentUncheckedUpdateOneWithoutSectionNestedInput
  }

  export type SectionUncheckedUpdateManyWithoutCourseOfferingInput = {
    id?: StringFieldUpdateOperationsInput | string
    sectionNumber?: StringFieldUpdateOperationsInput | string
    requiredLabSize?: IntFieldUpdateOperationsInput | number
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