import { z } from 'zod';
import { baseProcedure, createTRPCRouter } from '@/trpc/init';
import prisma from "@/lib/db"

export const appRouter = createTRPCRouter({
  getUser: baseProcedure
    .query((opts) => {
      return  
  ),
});

// export type definition of API
export type AppRouter = typeof appRouter;
