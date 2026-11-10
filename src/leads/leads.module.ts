import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { LeadsService } from "./leads.service";
import { LeadsController } from "./leads.controller";
import { Lead, LeadSchema } from "./schemas/lead.schema";
import {
  LeadContactAttempt,
  LeadContactAttemptSchema,
} from "./schemas/lead-contact-attempt.schema";
import { Sale, SaleSchema } from "../sales/schemas/sale.schema";
import { User, UserSchema } from "../users/schemas/user.schema";
import { ReportingConversionDateBackfill } from "./reporting-conversion-date.backfill";

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Lead.name, schema: LeadSchema },
      { name: LeadContactAttempt.name, schema: LeadContactAttemptSchema },
      { name: Sale.name, schema: SaleSchema },
      { name: User.name, schema: UserSchema },
    ]),
  ],
  controllers: [LeadsController],
  providers: [LeadsService, ReportingConversionDateBackfill],
  exports: [LeadsService],
})
export class LeadsModule {}
