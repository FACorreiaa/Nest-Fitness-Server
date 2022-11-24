import { Module } from '@nestjs/common';
import { UserService } from './user/user.service';
import { UserResolver } from './user/user.resolver';
import { UserModule } from './user/user.module';
import { PrismaService } from './prisma.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { UserProfileModule } from './user-profile/user-profile.module';
import { DeleteMeAfterModule } from './delete-me-after/delete-me-after.module';
import { MealPlanModule } from './meal-plan/meal-plan.module';
import { ExercisePlanModule } from './exercise-plan/exercise-plan.module';
import { UserBioDataModule } from './user-bio-data/user-bio-data.module';
@Module({
  imports: [
    UserModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      typePaths: ['./**/*.graphql'],
      installSubscriptionHandlers: true,
    }),
    UserProfileModule,
    DeleteMeAfterModule,
    MealPlanModule,
    ExercisePlanModule,
    UserBioDataModule,
  ],
  providers: [UserService, PrismaService, UserResolver],
})
export class AppModule {}
