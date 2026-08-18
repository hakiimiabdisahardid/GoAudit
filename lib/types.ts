/**
 * Domain types for Hiil Audit.
 *
 * These mirror the intended Supabase schema so a backend developer can map them
 * directly to database tables/rows. UI code imports only from here and from
 * `lib/mock-data.ts`, so swapping mock data for real API/Supabase calls is
 * isolated to the data layer.
 */

export type ID = string

/** High-level role in the org hierarchy (franchisor → manager → auditor). */
export type RoleKey = "owner" | "manager" | "auditor" | "viewer"

export type ResponseValue = "pass" | "fail" | "na" | null

export type AuditStatus = "draft" | "in_progress" | "submitted" | "reviewed"

export type CorrectiveActionStatus = "open" | "in_progress" | "done" | "overdue"

export type Priority = "low" | "medium" | "high"

export interface Company {
  id: ID
  name: string
  logoText: string
  industry: string
  branchCount: number
  employeeCount: number
  avgScore: number // 0-100
  createdAt: string
}

export interface Branch {
  id: ID
  companyId: ID
  name: string
  city: string
  address: string
  manager: string
  employeeCount: number
  lastAuditScore: number | null
  lastAuditAt: string | null
  status: "active" | "inactive"
}

export interface Employee {
  id: ID
  name: string
  email: string
  phone: string
  role: RoleKey
  branchId: ID | null
  branchName: string | null
  active: boolean
  avatarText: string
  joinedAt: string
}

export interface RoleDefinition {
  key: RoleKey
  labelSo: string
  labelEn: string
  description: string
  permissions: string[]
  userCount: number
}

export type QuestionType = "pass_fail_na" | "score" | "text" | "number" | "photo" | "multiple_choice"

export interface Question {
  id: ID
  text: string
  type: QuestionType
  weight: number
  requirePhotoOnFail: boolean
  requireNoteOnFail: boolean
  options?: string[]
}

export interface TemplateSection {
  id: ID
  title: string
  questions: Question[]
}

export interface AuditTemplate {
  id: ID
  name: string
  category: string
  description: string
  sections: TemplateSection[]
  questionCount: number
  usageCount: number
  updatedAt: string
  published: boolean
}

export interface AuditResponse {
  questionId: ID
  value: ResponseValue
  note?: string
  photoCount?: number
}

export interface CorrectiveAction {
  id: ID
  auditId: ID
  branchName: string
  questionText: string
  description: string
  assignedTo: string
  status: CorrectiveActionStatus
  priority: Priority
  dueDate: string
  linkedSop?: string
  linkedTraining?: string
}

export interface Audit {
  id: ID
  templateName: string
  branchName: string
  auditorName: string
  status: AuditStatus
  score: number | null
  totalItems: number
  failedItems: number
  startedAt: string
  submittedAt: string | null
}

export interface AppNotification {
  id: ID
  title: string
  body: string
  type: "corrective" | "audit" | "training" | "system"
  read: boolean
  createdAt: string
}
