/*
  Warnings:

  - You are about to drop the `agreement` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `applicant` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `applicantinterview` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `articles` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `assetcategory` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `assetitem` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `assetitembatch` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `assettransaction` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `assettransactionitems` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `assettype` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `assetunit` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `bidevaluation` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `branch` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `businessinfo` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `company` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `companyaddress` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `dailyreport` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `department` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `disciplineactions` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `docfile` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `doctype` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `doctypeform` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `employee` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `employeeaddress` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `employeecontact` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `employeediscipline` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `employeedisciplineaction` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `employeeeducationalbackground` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `employeefingerprint` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `employeepayroll` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `employeeprofile` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `employeeproject` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `employeerelatedinfo` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `employeesalarystructure` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `employeesurety` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `employeeworkdetail` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `employeeworkhistory` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `evaluationcriteria` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `holiday` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `interview` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `leaveallocation` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `leaveapplication` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `leavebalance` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `leavetype` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `payroll` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `position` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `project` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `projectplan` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `question` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `salarycomponent` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `salarystructure` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `salarystructureform` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `systemtasks` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `systemuser` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `systemuseraccess` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `systemusertasks` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `tender` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `tenderapplicant` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `tenderapplicantevaluation` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `timesheet` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `vacancy` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `witnesses` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `agreement` DROP FOREIGN KEY `Agreement_positionId_fkey`;

-- DropForeignKey
ALTER TABLE `applicant` DROP FOREIGN KEY `Applicant_employeeId_fkey`;

-- DropForeignKey
ALTER TABLE `applicant` DROP FOREIGN KEY `Applicant_vacancyId_fkey`;

-- DropForeignKey
ALTER TABLE `applicantinterview` DROP FOREIGN KEY `ApplicantInterview_applicantId_fkey`;

-- DropForeignKey
ALTER TABLE `articles` DROP FOREIGN KEY `Articles_agreementId_fkey`;

-- DropForeignKey
ALTER TABLE `assetitem` DROP FOREIGN KEY `AssetItem_categoryId_fkey`;

-- DropForeignKey
ALTER TABLE `assetitem` DROP FOREIGN KEY `AssetItem_typeId_fkey`;

-- DropForeignKey
ALTER TABLE `assetitem` DROP FOREIGN KEY `AssetItem_unitId_fkey`;

-- DropForeignKey
ALTER TABLE `assetitembatch` DROP FOREIGN KEY `AssetItemBatch_assetItemId_fkey`;

-- DropForeignKey
ALTER TABLE `assettransactionitems` DROP FOREIGN KEY `AssetTransactionItems_batchItemId_fkey`;

-- DropForeignKey
ALTER TABLE `assettransactionitems` DROP FOREIGN KEY `AssetTransactionItems_transactionId_fkey`;

-- DropForeignKey
ALTER TABLE `assettransactionitems` DROP FOREIGN KEY `AssetTransactionItems_workDetailId_fkey`;

-- DropForeignKey
ALTER TABLE `companyaddress` DROP FOREIGN KEY `CompanyAddress_companyId_fkey`;

-- DropForeignKey
ALTER TABLE `department` DROP FOREIGN KEY `Department_branchId_fkey`;

-- DropForeignKey
ALTER TABLE `docfile` DROP FOREIGN KEY `DocFile_typeId_fkey`;

-- DropForeignKey
ALTER TABLE `doctypeform` DROP FOREIGN KEY `DocTypeForm_docTypeId_fkey`;

-- DropForeignKey
ALTER TABLE `employeeaddress` DROP FOREIGN KEY `EmployeeAddress_employeeId_fkey`;

-- DropForeignKey
ALTER TABLE `employeecontact` DROP FOREIGN KEY `EmployeeContact_employeeId_fkey`;

-- DropForeignKey
ALTER TABLE `employeediscipline` DROP FOREIGN KEY `EmployeeDiscipline_employeeWorkId_fkey`;

-- DropForeignKey
ALTER TABLE `employeedisciplineaction` DROP FOREIGN KEY `EmployeeDisciplineAction_actionTakenId_fkey`;

-- DropForeignKey
ALTER TABLE `employeedisciplineaction` DROP FOREIGN KEY `EmployeeDisciplineAction_disciplineId_fkey`;

-- DropForeignKey
ALTER TABLE `employeeeducationalbackground` DROP FOREIGN KEY `EmployeeEducationalBackground_employeeId_fkey`;

-- DropForeignKey
ALTER TABLE `employeefingerprint` DROP FOREIGN KEY `EmployeeFingerPrint_employeeId_fkey`;

-- DropForeignKey
ALTER TABLE `employeepayroll` DROP FOREIGN KEY `EmployeePayroll_employeeWorkDetailId_fkey`;

-- DropForeignKey
ALTER TABLE `employeepayroll` DROP FOREIGN KEY `EmployeePayroll_payrollId_fkey`;

-- DropForeignKey
ALTER TABLE `employeeprofile` DROP FOREIGN KEY `EmployeeProfile_employeeId_fkey`;

-- DropForeignKey
ALTER TABLE `employeeproject` DROP FOREIGN KEY `EmployeeProject_projectId_fkey`;

-- DropForeignKey
ALTER TABLE `employeeproject` DROP FOREIGN KEY `EmployeeProject_workDetailId_fkey`;

-- DropForeignKey
ALTER TABLE `employeerelatedinfo` DROP FOREIGN KEY `EmployeeRelatedInfo_employeeId_fkey`;

-- DropForeignKey
ALTER TABLE `employeesalarystructure` DROP FOREIGN KEY `EmployeeSalaryStructure_employeeWorkDetailId_fkey`;

-- DropForeignKey
ALTER TABLE `employeesalarystructure` DROP FOREIGN KEY `EmployeeSalaryStructure_salaryStructureFormId_fkey`;

-- DropForeignKey
ALTER TABLE `employeesurety` DROP FOREIGN KEY `EmployeeSurety_employeeId_fkey`;

-- DropForeignKey
ALTER TABLE `employeeworkdetail` DROP FOREIGN KEY `EmployeeWorkDetail_employeeId_fkey`;

-- DropForeignKey
ALTER TABLE `employeeworkdetail` DROP FOREIGN KEY `EmployeeWorkDetail_positionId_fkey`;

-- DropForeignKey
ALTER TABLE `employeeworkhistory` DROP FOREIGN KEY `EmployeeWorkHistory_employeeId_fkey`;

-- DropForeignKey
ALTER TABLE `evaluationcriteria` DROP FOREIGN KEY `EvaluationCriteria_bidEvaluationId_fkey`;

-- DropForeignKey
ALTER TABLE `interview` DROP FOREIGN KEY `Interview_positionId_fkey`;

-- DropForeignKey
ALTER TABLE `leaveapplication` DROP FOREIGN KEY `LeaveApplication_employeeId_fkey`;

-- DropForeignKey
ALTER TABLE `leaveapplication` DROP FOREIGN KEY `LeaveApplication_leaveTypeId_fkey`;

-- DropForeignKey
ALTER TABLE `leavebalance` DROP FOREIGN KEY `LeaveBalance_employeeId_fkey`;

-- DropForeignKey
ALTER TABLE `payroll` DROP FOREIGN KEY `Payroll_projectId_fkey`;

-- DropForeignKey
ALTER TABLE `position` DROP FOREIGN KEY `Position_departmentId_fkey`;

-- DropForeignKey
ALTER TABLE `project` DROP FOREIGN KEY `Project_companyId_fkey`;

-- DropForeignKey
ALTER TABLE `projectplan` DROP FOREIGN KEY `ProjectPlan_companyId_fkey`;

-- DropForeignKey
ALTER TABLE `question` DROP FOREIGN KEY `Question_interviewId_fkey`;

-- DropForeignKey
ALTER TABLE `salarystructure` DROP FOREIGN KEY `SalaryStructure_salaryComponentId_fkey`;

-- DropForeignKey
ALTER TABLE `salarystructure` DROP FOREIGN KEY `SalaryStructure_salaryStructureFormId_fkey`;

-- DropForeignKey
ALTER TABLE `systemuser` DROP FOREIGN KEY `SystemUser_employeeId_fkey`;

-- DropForeignKey
ALTER TABLE `systemuseraccess` DROP FOREIGN KEY `SystemUserAccess_userId_fkey`;

-- DropForeignKey
ALTER TABLE `systemusertasks` DROP FOREIGN KEY `SystemUserTasks_taskId_fkey`;

-- DropForeignKey
ALTER TABLE `systemusertasks` DROP FOREIGN KEY `SystemUserTasks_userId_fkey`;

-- DropForeignKey
ALTER TABLE `tender` DROP FOREIGN KEY `Tender_bidEvaluationId_fkey`;

-- DropForeignKey
ALTER TABLE `tenderapplicant` DROP FOREIGN KEY `TenderApplicant_tenderId_fkey`;

-- DropForeignKey
ALTER TABLE `tenderapplicantevaluation` DROP FOREIGN KEY `TenderApplicantEvaluation_applicantId_fkey`;

-- DropForeignKey
ALTER TABLE `timesheet` DROP FOREIGN KEY `TimeSheet_employeeProjectId_fkey`;

-- DropForeignKey
ALTER TABLE `vacancy` DROP FOREIGN KEY `Vacancy_interviewId_fkey`;

-- DropForeignKey
ALTER TABLE `vacancy` DROP FOREIGN KEY `Vacancy_positionId_fkey`;

-- DropForeignKey
ALTER TABLE `witnesses` DROP FOREIGN KEY `Witnesses_employeeDisciplineId_fkey`;

-- DropForeignKey
ALTER TABLE `witnesses` DROP FOREIGN KEY `Witnesses_employeeWorkId_fkey`;

-- DropTable
DROP TABLE `agreement`;

-- DropTable
DROP TABLE `applicant`;

-- DropTable
DROP TABLE `applicantinterview`;

-- DropTable
DROP TABLE `articles`;

-- DropTable
DROP TABLE `assetcategory`;

-- DropTable
DROP TABLE `assetitem`;

-- DropTable
DROP TABLE `assetitembatch`;

-- DropTable
DROP TABLE `assettransaction`;

-- DropTable
DROP TABLE `assettransactionitems`;

-- DropTable
DROP TABLE `assettype`;

-- DropTable
DROP TABLE `assetunit`;

-- DropTable
DROP TABLE `bidevaluation`;

-- DropTable
DROP TABLE `branch`;

-- DropTable
DROP TABLE `businessinfo`;

-- DropTable
DROP TABLE `company`;

-- DropTable
DROP TABLE `companyaddress`;

-- DropTable
DROP TABLE `dailyreport`;

-- DropTable
DROP TABLE `department`;

-- DropTable
DROP TABLE `disciplineactions`;

-- DropTable
DROP TABLE `docfile`;

-- DropTable
DROP TABLE `doctype`;

-- DropTable
DROP TABLE `doctypeform`;

-- DropTable
DROP TABLE `employee`;

-- DropTable
DROP TABLE `employeeaddress`;

-- DropTable
DROP TABLE `employeecontact`;

-- DropTable
DROP TABLE `employeediscipline`;

-- DropTable
DROP TABLE `employeedisciplineaction`;

-- DropTable
DROP TABLE `employeeeducationalbackground`;

-- DropTable
DROP TABLE `employeefingerprint`;

-- DropTable
DROP TABLE `employeepayroll`;

-- DropTable
DROP TABLE `employeeprofile`;

-- DropTable
DROP TABLE `employeeproject`;

-- DropTable
DROP TABLE `employeerelatedinfo`;

-- DropTable
DROP TABLE `employeesalarystructure`;

-- DropTable
DROP TABLE `employeesurety`;

-- DropTable
DROP TABLE `employeeworkdetail`;

-- DropTable
DROP TABLE `employeeworkhistory`;

-- DropTable
DROP TABLE `evaluationcriteria`;

-- DropTable
DROP TABLE `holiday`;

-- DropTable
DROP TABLE `interview`;

-- DropTable
DROP TABLE `leaveallocation`;

-- DropTable
DROP TABLE `leaveapplication`;

-- DropTable
DROP TABLE `leavebalance`;

-- DropTable
DROP TABLE `leavetype`;

-- DropTable
DROP TABLE `payroll`;

-- DropTable
DROP TABLE `position`;

-- DropTable
DROP TABLE `project`;

-- DropTable
DROP TABLE `projectplan`;

-- DropTable
DROP TABLE `question`;

-- DropTable
DROP TABLE `salarycomponent`;

-- DropTable
DROP TABLE `salarystructure`;

-- DropTable
DROP TABLE `salarystructureform`;

-- DropTable
DROP TABLE `systemtasks`;

-- DropTable
DROP TABLE `systemuser`;

-- DropTable
DROP TABLE `systemuseraccess`;

-- DropTable
DROP TABLE `systemusertasks`;

-- DropTable
DROP TABLE `tender`;

-- DropTable
DROP TABLE `tenderapplicant`;

-- DropTable
DROP TABLE `tenderapplicantevaluation`;

-- DropTable
DROP TABLE `timesheet`;

-- DropTable
DROP TABLE `vacancy`;

-- DropTable
DROP TABLE `witnesses`;

-- CreateTable
CREATE TABLE `Slider` (
    `id` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `photo` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
