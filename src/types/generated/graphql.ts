import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { Context } from '../context';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
};

export type CrateMenuInput = {
  cost?: InputMaybe<Scalars['Int']>;
  createdAt?: InputMaybe<Scalars['String']>;
  imgUrl?: InputMaybe<Scalars['String']>;
  recipeName?: InputMaybe<Scalars['String']>;
  time?: InputMaybe<Scalars['Int']>;
  tips?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
};

export type CreateFoodstuffInput = {
  name?: InputMaybe<Scalars['String']>;
  nutrition?: InputMaybe<CreateNutritionInput>;
  weight?: InputMaybe<Scalars['Int']>;
};

export type CreateNutritionInput = {
  biotin?: InputMaybe<Scalars['Int']>;
  ca?: InputMaybe<Scalars['Int']>;
  calorie?: InputMaybe<Scalars['Int']>;
  carbohydrates?: InputMaybe<Scalars['Int']>;
  cr?: InputMaybe<Scalars['Int']>;
  cu?: InputMaybe<Scalars['Int']>;
  dietaryFiber?: InputMaybe<Scalars['Int']>;
  fe?: InputMaybe<Scalars['Int']>;
  folate?: InputMaybe<Scalars['Int']>;
  i?: InputMaybe<Scalars['Int']>;
  k?: InputMaybe<Scalars['Int']>;
  lipids?: InputMaybe<Scalars['Int']>;
  mg?: InputMaybe<Scalars['Int']>;
  mn?: InputMaybe<Scalars['Int']>;
  mo?: InputMaybe<Scalars['Int']>;
  na?: InputMaybe<Scalars['Int']>;
  niacin?: InputMaybe<Scalars['Int']>;
  p?: InputMaybe<Scalars['Int']>;
  pantothenicAcid?: InputMaybe<Scalars['Int']>;
  protein?: InputMaybe<Scalars['Int']>;
  salt?: InputMaybe<Scalars['Int']>;
  se?: InputMaybe<Scalars['Int']>;
  suger?: InputMaybe<Scalars['Int']>;
  vitA?: InputMaybe<Scalars['Int']>;
  vitB1?: InputMaybe<Scalars['Int']>;
  vitB2?: InputMaybe<Scalars['Int']>;
  vitB6?: InputMaybe<Scalars['Int']>;
  vitB12?: InputMaybe<Scalars['Int']>;
  vitC?: InputMaybe<Scalars['Int']>;
  vitD?: InputMaybe<Scalars['Int']>;
  vitE?: InputMaybe<Scalars['Int']>;
  vitK?: InputMaybe<Scalars['Int']>;
  zn?: InputMaybe<Scalars['Int']>;
};

export type CreateRecipeInput = {
  content?: InputMaybe<Scalars['String']>;
};

export type Foodstuff = {
  __typename?: 'Foodstuff';
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  nutrition?: Maybe<Nutrition>;
  weight?: Maybe<Scalars['Int']>;
};

export type Menu = {
  __typename?: 'Menu';
  cost?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['String']>;
  foodstuffs?: Maybe<Array<Maybe<Foodstuff>>>;
  id: Scalars['ID'];
  imgUrl?: Maybe<Scalars['String']>;
  mealTime?: Maybe<Scalars['String']>;
  recipeName?: Maybe<Scalars['String']>;
  recipes?: Maybe<Array<Maybe<Recipe>>>;
  time?: Maybe<Scalars['Int']>;
  tips?: Maybe<Scalars['String']>;
  totalNutrition?: Maybe<Nutrition>;
  type?: Maybe<Scalars['String']>;
  userId: Scalars['ID'];
};

export type Mutation = {
  __typename?: 'Mutation';
  CreateFoodstuff: Array<Foodstuff>;
  CreateNutrition?: Maybe<Nutrition>;
  CreateRecipe: Array<Recipe>;
  UpdateFoodstuff: Array<Foodstuff>;
  UpdateMenu: Menu;
  UpdateNutrition?: Maybe<Nutrition>;
  UpdateRecipe: Array<Recipe>;
  createMenu: Menu;
  createUser: User;
};


export type MutationCreateFoodstuffArgs = {
  input?: InputMaybe<CreateFoodstuffInput>;
};


export type MutationCreateNutritionArgs = {
  input?: InputMaybe<CreateNutritionInput>;
};


export type MutationCreateRecipeArgs = {
  input?: InputMaybe<CreateRecipeInput>;
};


export type MutationUpdateFoodstuffArgs = {
  input?: InputMaybe<UpdateFoodstuffInput>;
};


export type MutationUpdateMenuArgs = {
  foodstuffs: Array<UpdateFoodstuffInput>;
  input: UpdateMenuInput;
  recipes: Array<UpdateRecipeInput>;
  totalNutrition: UpdateNutritionInput;
};


export type MutationUpdateNutritionArgs = {
  input?: InputMaybe<UpdateNutritionInput>;
};


export type MutationUpdateRecipeArgs = {
  input?: InputMaybe<UpdateRecipeInput>;
};


export type MutationCreateMenuArgs = {
  foodstuffs: Array<CreateFoodstuffInput>;
  input: CrateMenuInput;
  recipes: Array<CreateRecipeInput>;
  totalNutrition?: InputMaybe<CreateNutritionInput>;
};


export type MutationCreateUserArgs = {
  input: NewUser;
};

export type NewUser = {
  activeLevel: Scalars['Int'];
  age: Scalars['Int'];
  gender: Scalars['String'];
  height: Scalars['Int'];
  name: Scalars['String'];
  weight: Scalars['Int'];
};

export type Nutrition = {
  __typename?: 'Nutrition';
  biotin?: Maybe<Scalars['Int']>;
  ca?: Maybe<Scalars['Int']>;
  calorie?: Maybe<Scalars['Int']>;
  carbohydrates?: Maybe<Scalars['Int']>;
  cr?: Maybe<Scalars['Int']>;
  cu?: Maybe<Scalars['Int']>;
  dietaryFiber?: Maybe<Scalars['Int']>;
  fe?: Maybe<Scalars['Int']>;
  folate?: Maybe<Scalars['Int']>;
  i?: Maybe<Scalars['Int']>;
  k?: Maybe<Scalars['Int']>;
  lipids?: Maybe<Scalars['Int']>;
  mg?: Maybe<Scalars['Int']>;
  mn?: Maybe<Scalars['Int']>;
  mo?: Maybe<Scalars['Int']>;
  na?: Maybe<Scalars['Int']>;
  niacin?: Maybe<Scalars['Int']>;
  p?: Maybe<Scalars['Int']>;
  pantothenicAcid?: Maybe<Scalars['Int']>;
  protein?: Maybe<Scalars['Int']>;
  salt?: Maybe<Scalars['Int']>;
  se?: Maybe<Scalars['Int']>;
  suger?: Maybe<Scalars['Int']>;
  vitA?: Maybe<Scalars['Int']>;
  vitB1?: Maybe<Scalars['Int']>;
  vitB2?: Maybe<Scalars['Int']>;
  vitB6?: Maybe<Scalars['Int']>;
  vitB12?: Maybe<Scalars['Int']>;
  vitC?: Maybe<Scalars['Int']>;
  vitD?: Maybe<Scalars['Int']>;
  vitE?: Maybe<Scalars['Int']>;
  vitK?: Maybe<Scalars['Int']>;
  zn?: Maybe<Scalars['Int']>;
};

export type Query = {
  __typename?: 'Query';
  getMenuById?: Maybe<Menu>;
  getMenusById?: Maybe<Array<Maybe<Menu>>>;
  getUser?: Maybe<User>;
};


export type QueryGetMenuByIdArgs = {
  userId: Scalars['Int'];
};


export type QueryGetMenusByIdArgs = {
  mealTime?: InputMaybe<Scalars['String']>;
  userId: Scalars['Int'];
};

export type Recipe = {
  __typename?: 'Recipe';
  content?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
};

export type UpdateFoodstuffInput = {
  id: Scalars['ID'];
  name?: InputMaybe<Scalars['String']>;
  nutrition?: InputMaybe<UpdateNutritionInput>;
  weight?: InputMaybe<Scalars['Int']>;
};

export type UpdateMenuInput = {
  cost?: InputMaybe<Scalars['Int']>;
  createdAt?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  imgUrl?: InputMaybe<Scalars['String']>;
  recipeName?: InputMaybe<Scalars['String']>;
  time?: InputMaybe<Scalars['Int']>;
  tips?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
};

export type UpdateNutritionInput = {
  biotin?: InputMaybe<Scalars['Int']>;
  ca?: InputMaybe<Scalars['Int']>;
  calorie?: InputMaybe<Scalars['Int']>;
  carbohydrates?: InputMaybe<Scalars['Int']>;
  cr?: InputMaybe<Scalars['Int']>;
  cu?: InputMaybe<Scalars['Int']>;
  dietaryFiber?: InputMaybe<Scalars['Int']>;
  fe?: InputMaybe<Scalars['Int']>;
  folate?: InputMaybe<Scalars['Int']>;
  i?: InputMaybe<Scalars['Int']>;
  k?: InputMaybe<Scalars['Int']>;
  lipids?: InputMaybe<Scalars['Int']>;
  mg?: InputMaybe<Scalars['Int']>;
  mn?: InputMaybe<Scalars['Int']>;
  mo?: InputMaybe<Scalars['Int']>;
  na?: InputMaybe<Scalars['Int']>;
  niacin?: InputMaybe<Scalars['Int']>;
  p?: InputMaybe<Scalars['Int']>;
  pantothenicAcid?: InputMaybe<Scalars['Int']>;
  protein?: InputMaybe<Scalars['Int']>;
  salt?: InputMaybe<Scalars['Int']>;
  se?: InputMaybe<Scalars['Int']>;
  suger?: InputMaybe<Scalars['Int']>;
  vitA?: InputMaybe<Scalars['Int']>;
  vitB1?: InputMaybe<Scalars['Int']>;
  vitB2?: InputMaybe<Scalars['Int']>;
  vitB6?: InputMaybe<Scalars['Int']>;
  vitB12?: InputMaybe<Scalars['Int']>;
  vitC?: InputMaybe<Scalars['Int']>;
  vitD?: InputMaybe<Scalars['Int']>;
  vitE?: InputMaybe<Scalars['Int']>;
  vitK?: InputMaybe<Scalars['Int']>;
  zn?: InputMaybe<Scalars['Int']>;
};

export type UpdateRecipeInput = {
  content?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
};

export type User = {
  __typename?: 'User';
  activeLevel?: Maybe<Scalars['Int']>;
  age?: Maybe<Scalars['Int']>;
  gender?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  weight?: Maybe<Scalars['Int']>;
};

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  CrateMenuInput: CrateMenuInput;
  CreateFoodstuffInput: CreateFoodstuffInput;
  CreateNutritionInput: CreateNutritionInput;
  CreateRecipeInput: CreateRecipeInput;
  Date: ResolverTypeWrapper<Scalars['Date']>;
  Foodstuff: ResolverTypeWrapper<Foodstuff>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Menu: ResolverTypeWrapper<Menu>;
  Mutation: ResolverTypeWrapper<{}>;
  NewUser: NewUser;
  Nutrition: ResolverTypeWrapper<Nutrition>;
  Query: ResolverTypeWrapper<{}>;
  Recipe: ResolverTypeWrapper<Recipe>;
  String: ResolverTypeWrapper<Scalars['String']>;
  UpdateFoodstuffInput: UpdateFoodstuffInput;
  UpdateMenuInput: UpdateMenuInput;
  UpdateNutritionInput: UpdateNutritionInput;
  UpdateRecipeInput: UpdateRecipeInput;
  User: ResolverTypeWrapper<User>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Boolean: Scalars['Boolean'];
  CrateMenuInput: CrateMenuInput;
  CreateFoodstuffInput: CreateFoodstuffInput;
  CreateNutritionInput: CreateNutritionInput;
  CreateRecipeInput: CreateRecipeInput;
  Date: Scalars['Date'];
  Foodstuff: Foodstuff;
  ID: Scalars['ID'];
  Int: Scalars['Int'];
  Menu: Menu;
  Mutation: {};
  NewUser: NewUser;
  Nutrition: Nutrition;
  Query: {};
  Recipe: Recipe;
  String: Scalars['String'];
  UpdateFoodstuffInput: UpdateFoodstuffInput;
  UpdateMenuInput: UpdateMenuInput;
  UpdateNutritionInput: UpdateNutritionInput;
  UpdateRecipeInput: UpdateRecipeInput;
  User: User;
}>;

export interface DateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Date'], any> {
  name: 'Date';
}

export type FoodstuffResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Foodstuff'] = ResolversParentTypes['Foodstuff']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nutrition?: Resolver<Maybe<ResolversTypes['Nutrition']>, ParentType, ContextType>;
  weight?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MenuResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Menu'] = ResolversParentTypes['Menu']> = ResolversObject<{
  cost?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  foodstuffs?: Resolver<Maybe<Array<Maybe<ResolversTypes['Foodstuff']>>>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  imgUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  mealTime?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  recipeName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  recipes?: Resolver<Maybe<Array<Maybe<ResolversTypes['Recipe']>>>, ParentType, ContextType>;
  time?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  tips?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  totalNutrition?: Resolver<Maybe<ResolversTypes['Nutrition']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MutationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  CreateFoodstuff?: Resolver<Array<ResolversTypes['Foodstuff']>, ParentType, ContextType, Partial<MutationCreateFoodstuffArgs>>;
  CreateNutrition?: Resolver<Maybe<ResolversTypes['Nutrition']>, ParentType, ContextType, Partial<MutationCreateNutritionArgs>>;
  CreateRecipe?: Resolver<Array<ResolversTypes['Recipe']>, ParentType, ContextType, Partial<MutationCreateRecipeArgs>>;
  UpdateFoodstuff?: Resolver<Array<ResolversTypes['Foodstuff']>, ParentType, ContextType, Partial<MutationUpdateFoodstuffArgs>>;
  UpdateMenu?: Resolver<ResolversTypes['Menu'], ParentType, ContextType, RequireFields<MutationUpdateMenuArgs, 'foodstuffs' | 'input' | 'recipes' | 'totalNutrition'>>;
  UpdateNutrition?: Resolver<Maybe<ResolversTypes['Nutrition']>, ParentType, ContextType, Partial<MutationUpdateNutritionArgs>>;
  UpdateRecipe?: Resolver<Array<ResolversTypes['Recipe']>, ParentType, ContextType, Partial<MutationUpdateRecipeArgs>>;
  createMenu?: Resolver<ResolversTypes['Menu'], ParentType, ContextType, RequireFields<MutationCreateMenuArgs, 'foodstuffs' | 'input' | 'recipes'>>;
  createUser?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<MutationCreateUserArgs, 'input'>>;
}>;

export type NutritionResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Nutrition'] = ResolversParentTypes['Nutrition']> = ResolversObject<{
  biotin?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  ca?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  calorie?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  carbohydrates?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  cr?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  cu?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  dietaryFiber?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  fe?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  folate?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  i?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  k?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  lipids?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  mg?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  mn?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  mo?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  na?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  niacin?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  p?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  pantothenicAcid?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  protein?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  salt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  se?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  suger?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  vitA?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  vitB1?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  vitB2?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  vitB6?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  vitB12?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  vitC?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  vitD?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  vitE?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  vitK?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  zn?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QueryResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  getMenuById?: Resolver<Maybe<ResolversTypes['Menu']>, ParentType, ContextType, RequireFields<QueryGetMenuByIdArgs, 'userId'>>;
  getMenusById?: Resolver<Maybe<Array<Maybe<ResolversTypes['Menu']>>>, ParentType, ContextType, RequireFields<QueryGetMenusByIdArgs, 'userId'>>;
  getUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
}>;

export type RecipeResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Recipe'] = ResolversParentTypes['Recipe']> = ResolversObject<{
  content?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserResolvers<ContextType = Context, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = ResolversObject<{
  activeLevel?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  age?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  gender?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  height?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  weight?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = Context> = ResolversObject<{
  Date?: GraphQLScalarType;
  Foodstuff?: FoodstuffResolvers<ContextType>;
  Menu?: MenuResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Nutrition?: NutritionResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Recipe?: RecipeResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
}>;

