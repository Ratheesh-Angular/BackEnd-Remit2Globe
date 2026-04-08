export type UserRole = 'INDIVIDUAL' | 'CORPORATE' | 'ADMIN' | 'FINANCE';

export type KycStatus = 'PENDING' | 'APPROVED' | 'REJECTED' | 'SUSPENDED';

export type TransactionStatus =
  | 'PENDING'
  | 'AWAITING_PAYMENT'
  | 'PAYMENT_RECEIVED'
  | 'IN_REVIEW'
  | 'PROCESSING'
  | 'COMPLETED'
  | 'REJECTED'
  | 'CANCELLED';

export interface JwtPayload {
  userId: string;
  email: string;
  role: UserRole;
}
