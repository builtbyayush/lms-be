import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Types } from "mongoose";

export type LeadContactAttemptDocument = LeadContactAttempt & Document;

/** One row per user per lead per calendar day (Asia/Kolkata) — enforces at most +1 attempt per day. */
@Schema({ timestamps: { createdAt: true, updatedAt: false } })
export class LeadContactAttempt {
  @Prop({ type: Types.ObjectId, ref: "Lead", required: true, index: true })
  leadId: Types.ObjectId;

  @Prop({ type: Types.ObjectId, required: true, index: true })
  userId: Types.ObjectId;

  /** YYYY-MM-DD in Asia/Kolkata */
  @Prop({ required: true })
  dayKey: string;
}

export const LeadContactAttemptSchema =
  SchemaFactory.createForClass(LeadContactAttempt);

LeadContactAttemptSchema.index(
  { leadId: 1, userId: 1, dayKey: 1 },
  { unique: true },
);
