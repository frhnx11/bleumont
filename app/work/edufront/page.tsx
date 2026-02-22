"use client";

import { useState } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import { GraduationCap, Wallet, CalendarRange, RefreshCw, Receipt, ClipboardList, ArrowRight, ArrowDown } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

const tools = [
  {
    name: "EduLabs",
    logo: "/work/edufront/edulabs.png",
    purpose: "Student Information System",
    cost: "$450/mo",
  },
  {
    name: "Wizlearn",
    logo: "/work/edufront/wizlearn.jpg",
    purpose: "Learning Management System",
    cost: "$500/mo",
  },
  {
    name: "Xero",
    logo: "/work/edufront/xero.svg",
    purpose: "Accounting",
    cost: "$69/mo",
  },
  {
    name: "Payboy",
    logo: "/work/edufront/payboy.png",
    purpose: "HR & Payroll",
    cost: "$390/mo",
  },
  {
    name: "Engages AI",
    logo: "/work/edufront/engages.jpg",
    purpose: "Customer Service",
    cost: "$300/mo",
  },
  {
    name: "Trello",
    logo: "/work/edufront/trello.png",
    purpose: "Internal Communication",
    cost: "$650/mo",
  },
];

const salarySteps = [
  {
    step: 1,
    description: "Super Admin decides salary template (paid based on grade level & students attended)",
    image: "/work/edufront/teachersalary/salarytemplate.png",
  },
  {
    step: 2,
    description: "Center Admin marks attendance for each class",
    image: "/work/edufront/teachersalary/centeradminmarksattendance.png",
  },
  {
    step: 3,
    description: "Earnings calculated and reflected in Teacher Account",
    image: "/work/edufront/teachersalary/teacheraccountearnings.png",
  },
  {
    step: 4,
    description: "Center Admin views salary breakdown and confirms",
    image: "/work/edufront/teachersalary/centeradminteachersalarybreakdown.png",
  },
];

const courseScreens = [
  { title: "Courses", description: "Manage courses by level with pricing and program subjects", image: "/work/edufront/coursemanagement/Screenshot 2026-02-19 065427.png" },
  { title: "Teachers", description: "Manage teaching staff with profiles and schedule assignments", image: "/work/edufront/coursemanagement/Screenshot 2026-02-19 065437.png" },
  { title: "Students", description: "Manage enrolled students with search and schedule enrollments", image: "/work/edufront/coursemanagement/Screenshot 2026-02-19 065456.png" },
];

const leaveSteps = [
  { step: 1, description: "Teacher selects leave dates on calendar and provides reason", image: "/work/edufront/teacherleave/Screenshot 2026-02-22 175107.png" },
  { step: 2, description: "Teacher chooses substitute assignment — pick one or let admin find", image: "/work/edufront/teacherleave/Screenshot 2026-02-22 175126.png" },
  { step: 3, description: "Admin reviews leave application, affected classes, and approves or rejects", image: "/work/edufront/teacherleave/Screenshot 2026-02-22 175205.png" },
  { step: 4, description: "Substitute teacher receives notification of new teaching assignment", image: "/work/edufront/teacherleave/Screenshot 2026-02-22 175349.png" },
  { step: 5, description: "Substitute views full class details — date, time, center, and original teacher", image: "/work/edufront/teacherleave/Screenshot 2026-02-22 175406.png" },
];

const rescheduleSteps = [
  { step: 1, description: "Student picks a date on calendar and sees the class they'll miss", image: "/work/edufront/studentleave/Screenshot 2026-02-22 180749.png" },
  { step: 2, description: "Student browses available makeup classes at other centers and times", image: "/work/edufront/studentleave/Screenshot 2026-02-22 180806.png" },
  { step: 3, description: "Admin reviews reschedule request — missed class paired with makeup class", image: "/work/edufront/studentleave/Screenshot 2026-02-22 180853.png" },
  { step: 4, description: "Student's calendar updates showing absent/rescheduled and makeup sessions", image: "/work/edufront/studentleave/Screenshot 2026-02-22 180925.png" },
];

const assignmentSteps = [
  { step: 1, description: "Center Admin uploads assignment with title, instructions, total marks, due date, and worksheet PDF", image: "/work/edufront/assignments/Screenshot 2026-02-22 182211.png" },
  { step: 2, description: "Student sees the assignment in their dashboard with pending status and due date", image: "/work/edufront/assignments/Screenshot 2026-02-22 182235.png" },
  { step: 3, description: "Student submits their solution by uploading images of completed work", image: "/work/edufront/assignments/Screenshot 2026-02-22 182307.png" },
  { step: 4, description: "Teacher views all student submissions with pending and submitted statuses", image: "/work/edufront/assignments/Screenshot 2026-02-22 182339.png" },
  { step: 5, description: "Teacher annotates and marks student work using pen, text, and eraser tools", image: "/work/edufront/assignments/Screenshot 2026-02-22 182421.png" },
  { step: 6, description: "Marks are saved and recorded for each student", image: "/work/edufront/assignments/Screenshot 2026-02-22 182442.png" },
];

const feeSteps = [
  { step: 1, description: "Student views monthly fee breakdown with course details, base fee, GST, and total amount", image: "/work/edufront/studentfees/Screenshot 2026-02-22 185210.png" },
  { step: 2, description: "Student proceeds to HitPay payment gateway with QR code for secure payment", image: "/work/edufront/studentfees/Screenshot 2026-02-22 185233.png" },
  { step: 3, description: "Payment is confirmed with a success screen", image: "/work/edufront/studentfees/Screenshot 2026-02-22 185316.png" },
  { step: 4, description: "Center Admin views Student Fees Management dashboard with collection stats and payment records", image: "/work/edufront/studentfees/Screenshot 2026-02-22 185838.png" },
  { step: 5, description: "Payment is auto-verified and marked as Paid in the student's record", image: "/work/edufront/studentfees/Screenshot 2026-02-22 185853.png" },
];

export default function EdufrontPage() {
  const [salaryOpen, setSalaryOpen] = useState(false);
  const [courseOpen, setCourseOpen] = useState(false);
  const [leaveOpen, setLeaveOpen] = useState(false);
  const [rescheduleOpen, setRescheduleOpen] = useState(false);
  const [assignmentOpen, setAssignmentOpen] = useState(false);
  const [feeOpen, setFeeOpen] = useState(false);

  return (
    <div>
      <Navbar />
      <section className="bg-[#90e0ef] min-h-screen pt-44 pb-24 px-8">
        <div className="mx-auto max-w-4xl bg-orange-200 rounded-3xl py-12 px-8 shadow-lg">
          <div className="text-center">
            <h2 className="font-[family-name:var(--font-geist-sans)] text-5xl font-bold text-gray-900 tracking-tight">
              Before Bleumont:
            </h2>
            <p className="font-[family-name:var(--font-geist-sans)] mt-4 text-xl text-gray-600 tracking-tight">
              80 teachers, 1,000 students, 50 employees — paying for 6 separate
              tools
            </p>
          </div>

          <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 gap-4">
            {tools.map((tool) => (
              <div
                key={tool.name}
                className="bg-white rounded-2xl shadow-md p-4 flex flex-col items-center text-center"
              >
                <Image
                  src={tool.logo}
                  alt={`${tool.name} logo`}
                  width={96}
                  height={48}
                  className="h-[48px] w-auto object-contain"
                />
                <h3 className="mt-3 text-sm font-bold text-gray-900">
                  {tool.name}
                </h3>
                <p className="mt-1 text-xs text-gray-500">{tool.purpose}</p>
                <p className="mt-2 text-lg font-bold text-gray-900">
                  {tool.cost}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center bg-white rounded-3xl py-8 px-12 shadow-lg mx-auto max-w-xl">
            <p className="font-[family-name:var(--font-geist-sans)] text-lg text-gray-600 tracking-tight">
              Estimated total
            </p>
            <p className="font-[family-name:var(--font-geist-sans)] mt-2 text-4xl font-bold text-black tracking-tight">
              ~$2,359/month
            </p>
          </div>
        </div>

        <div className="mt-12 mx-auto max-w-4xl bg-[#c8ee44] rounded-3xl py-12 px-8 shadow-lg">
          <div className="text-center">
            <h2 className="font-[family-name:var(--font-geist-sans)] text-5xl font-bold text-gray-900 tracking-tight">
              With Bleumont:
            </h2>
          </div>

          <p className="font-[family-name:var(--font-geist-sans)] mt-4 text-xl text-gray-800 text-center tracking-tight">
            All 6 tools replaced by one connected ERP platform — student
            information, learning management, accounting, HR & payroll, customer
            service, and internal communication — all in one place.
          </p>

          <div className="mt-10">
            <Image
              src="/work/edufront/edufront1.png"
              alt="EduFront ERP screenshot"
              width={1200}
              height={800}
              className="w-full rounded-2xl shadow-lg"
            />
          </div>

          <div className="mt-10 text-center bg-white rounded-3xl py-8 px-12 shadow-lg mx-auto max-w-xl">
            <p className="font-[family-name:var(--font-geist-sans)] text-lg text-gray-600 tracking-tight">
              Everything included
            </p>
            <p className="font-[family-name:var(--font-geist-sans)] mt-2 text-4xl font-bold text-black tracking-tight">
              $100/month
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#90e0ef] -mt-12 pb-24 px-8">
        <div className="mx-auto max-w-4xl bg-white rounded-3xl py-12 px-8 shadow-lg">
          <h2 className="font-[family-name:var(--font-geist-sans)] text-5xl font-bold text-gray-900 tracking-tight text-center">
            Key Features
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-10">
            {[
              { icon: GraduationCap, name: "Course Management", bg: "bg-blue-100", iconColor: "text-blue-600" },
              { icon: Wallet, name: "Teacher Salary Calculation", bg: "bg-emerald-100", iconColor: "text-emerald-600" },
              { icon: CalendarRange, name: "Teacher Leave and Substitutes", bg: "bg-amber-100", iconColor: "text-amber-600" },
              { icon: RefreshCw, name: "Student Re-scheduling", bg: "bg-indigo-100", iconColor: "text-indigo-600" },
              { icon: ClipboardList, name: "Worksheet Assignments", bg: "bg-rose-100", iconColor: "text-rose-600" },
              { icon: Receipt, name: "Student Fee Payment", bg: "bg-purple-100", iconColor: "text-purple-600" },
            ].map((feature) => (
              <div
                key={feature.name}
                className={`${feature.bg} rounded-2xl p-8 text-center${
                  feature.name === "Teacher Salary Calculation" || feature.name === "Course Management" || feature.name === "Teacher Leave and Substitutes" || feature.name === "Student Re-scheduling" || feature.name === "Worksheet Assignments" || feature.name === "Student Fee Payment"
                    ? " cursor-pointer hover:scale-105 transition-transform"
                    : ""
                }`}
                {...(feature.name === "Teacher Salary Calculation"
                  ? { onClick: () => setSalaryOpen(true) }
                  : feature.name === "Course Management"
                  ? { onClick: () => setCourseOpen(true) }
                  : feature.name === "Teacher Leave and Substitutes"
                  ? { onClick: () => setLeaveOpen(true) }
                  : feature.name === "Student Re-scheduling"
                  ? { onClick: () => setRescheduleOpen(true) }
                  : feature.name === "Worksheet Assignments"
                  ? { onClick: () => setAssignmentOpen(true) }
                  : feature.name === "Student Fee Payment"
                  ? { onClick: () => setFeeOpen(true) }
                  : {})}
              >
                <feature.icon className={`w-10 h-10 mx-auto ${feature.iconColor} stroke-[1.5]`} />
                <p className="mt-4 text-base font-bold text-gray-900">
                  {feature.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Dialog open={salaryOpen} onOpenChange={setSalaryOpen}>
        <DialogContent className="!max-w-[95vw] w-[95vw] max-h-[90vh] overflow-y-auto p-8">
          <DialogTitle className="text-2xl font-bold text-center">
            Teacher Salary Calculation
          </DialogTitle>

          {/* Desktop: 2×2 grid with arrows */}
          <div className="hidden md:grid grid-cols-[1fr_auto_1fr] grid-rows-[auto_auto_auto] gap-4 items-center mt-4">
            {/* Step 1 */}
            <div className="text-center">
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 font-bold text-sm mb-3">1</span>
              <Image
                src={salarySteps[0].image}
                alt={`Step 1`}
                width={500}
                height={300}
                className="rounded-lg shadow-md w-full"
              />
              <p className="mt-3 text-base text-gray-700">{salarySteps[0].description}</p>
            </div>

            {/* Arrow Right */}
            <ArrowRight className="w-8 h-8 text-gray-400" />

            {/* Step 2 */}
            <div className="text-center">
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 font-bold text-sm mb-3">2</span>
              <Image
                src={salarySteps[1].image}
                alt={`Step 2`}
                width={500}
                height={300}
                className="rounded-lg shadow-md w-full"
              />
              <p className="mt-3 text-base text-gray-700">{salarySteps[1].description}</p>
            </div>

            {/* Arrow Down Right (below step 2) */}
            <div />
            <div />
            <div className="flex justify-center">
              <ArrowDown className="w-8 h-8 text-gray-400" />
            </div>

            {/* Step 4 */}
            <div className="text-center">
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 font-bold text-sm mb-3">4</span>
              <Image
                src={salarySteps[3].image}
                alt={`Step 4`}
                width={500}
                height={300}
                className="rounded-lg shadow-md w-full"
              />
              <p className="mt-3 text-base text-gray-700">{salarySteps[3].description}</p>
            </div>

            {/* Arrow Left (from step 4 to step 3) */}
            <ArrowRight className="w-8 h-8 text-gray-400 rotate-180" />

            {/* Step 3 */}
            <div className="text-center">
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 font-bold text-sm mb-3">3</span>
              <Image
                src={salarySteps[2].image}
                alt={`Step 3`}
                width={500}
                height={300}
                className="rounded-lg shadow-md w-full"
              />
              <p className="mt-3 text-base text-gray-700">{salarySteps[2].description}</p>
            </div>
          </div>

          {/* Mobile: vertical stack with arrows */}
          <div className="md:hidden flex flex-col items-center gap-4 mt-4">
            {salarySteps.map((s, i) => (
              <div key={s.step}>
                <div className="text-center">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 font-bold text-sm mb-3">{s.step}</span>
                  <Image
                    src={s.image}
                    alt={`Step ${s.step}`}
                    width={500}
                    height={300}
                    className="rounded-lg shadow-md w-full"
                  />
                  <p className="mt-3 text-base text-gray-700">{s.description}</p>
                </div>
                {i < salarySteps.length - 1 && (
                  <div className="flex justify-center mt-4">
                    <ArrowDown className="w-8 h-8 text-gray-400" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={courseOpen} onOpenChange={setCourseOpen}>
        <DialogContent className="!max-w-[95vw] w-[95vw] max-h-[90vh] overflow-y-auto p-8">
          <DialogTitle className="text-2xl font-bold text-center">
            Course Management
          </DialogTitle>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            {courseScreens.map((screen, i) => (
              <div key={screen.title} className={`text-center${i === 2 ? " md:col-span-2 md:max-w-[50%] md:mx-auto" : ""}`}>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{screen.title}</h3>
                <Image
                  src={screen.image}
                  alt={screen.title}
                  width={500}
                  height={300}
                  className="rounded-lg shadow-md w-full"
                />
                <p className="mt-3 text-base text-gray-700">{screen.description}</p>
              </div>
            ))}
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={leaveOpen} onOpenChange={setLeaveOpen}>
        <DialogContent className="!max-w-[95vw] w-[95vw] max-h-[90vh] overflow-y-auto p-8">
          <DialogTitle className="text-2xl font-bold text-center">
            Teacher Leave and Substitutes
          </DialogTitle>

          {/* Desktop: snake layout, max 2 per row */}
          {/* Row 1: 1→2, Row 2: 4←3, Row 3: 5 */}
          <div className="hidden md:grid grid-cols-[1fr_auto_1fr] grid-rows-[auto_auto_auto_auto_auto] gap-4 items-center mt-4">
            {/* Row 1: Step 1 → Step 2 */}
            <div className="text-center">
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-amber-100 text-amber-700 font-bold text-sm mb-3">1</span>
              <Image src={leaveSteps[0].image} alt="Step 1" width={500} height={300} className="rounded-lg shadow-md w-full" />
              <p className="mt-3 text-base text-gray-700">{leaveSteps[0].description}</p>
            </div>
            <ArrowRight className="w-8 h-8 text-gray-400" />
            <div className="text-center">
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-amber-100 text-amber-700 font-bold text-sm mb-3">2</span>
              <Image src={leaveSteps[1].image} alt="Step 2" width={500} height={300} className="rounded-lg shadow-md w-full" />
              <p className="mt-3 text-base text-gray-700">{leaveSteps[1].description}</p>
            </div>

            {/* Arrow down (below step 2, right side) */}
            <div />
            <div />
            <div className="flex justify-center">
              <ArrowDown className="w-8 h-8 text-gray-400" />
            </div>

            {/* Row 2: Step 4 ← Step 3 (right to left) */}
            <div className="text-center">
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-amber-100 text-amber-700 font-bold text-sm mb-3">4</span>
              <Image src={leaveSteps[3].image} alt="Step 4" width={500} height={300} className="rounded-lg shadow-md w-full" />
              <p className="mt-3 text-base text-gray-700">{leaveSteps[3].description}</p>
            </div>
            <ArrowRight className="w-8 h-8 text-gray-400 rotate-180" />
            <div className="text-center">
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-amber-100 text-amber-700 font-bold text-sm mb-3">3</span>
              <Image src={leaveSteps[2].image} alt="Step 3" width={500} height={300} className="rounded-lg shadow-md w-full" />
              <p className="mt-3 text-base text-gray-700">{leaveSteps[2].description}</p>
            </div>

            {/* Arrow down (below step 4, left side) */}
            <div className="flex justify-center">
              <ArrowDown className="w-8 h-8 text-gray-400" />
            </div>
            <div />
            <div />

            {/* Row 3: Step 5 (left-aligned) */}
            <div className="text-center">
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-amber-100 text-amber-700 font-bold text-sm mb-3">5</span>
              <Image src={leaveSteps[4].image} alt="Step 5" width={500} height={300} className="rounded-lg shadow-md w-full" />
              <p className="mt-3 text-base text-gray-700">{leaveSteps[4].description}</p>
            </div>
            <div />
            <div />
          </div>

          {/* Mobile: vertical stack with arrows */}
          <div className="md:hidden flex flex-col items-center gap-4 mt-4">
            {leaveSteps.map((s, i) => (
              <div key={s.step}>
                <div className="text-center">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-amber-100 text-amber-700 font-bold text-sm mb-3">{s.step}</span>
                  <Image src={s.image} alt={`Step ${s.step}`} width={500} height={300} className="rounded-lg shadow-md w-full" />
                  <p className="mt-3 text-base text-gray-700">{s.description}</p>
                </div>
                {i < leaveSteps.length - 1 && (
                  <div className="flex justify-center mt-4">
                    <ArrowDown className="w-8 h-8 text-gray-400" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={rescheduleOpen} onOpenChange={setRescheduleOpen}>
        <DialogContent className="!max-w-[95vw] w-[95vw] max-h-[90vh] overflow-y-auto p-8">
          <DialogTitle className="text-2xl font-bold text-center">
            Student Re-scheduling
          </DialogTitle>

          {/* Desktop: 2×2 snake grid */}
          <div className="hidden md:grid grid-cols-[1fr_auto_1fr] grid-rows-[auto_auto_auto] gap-4 items-center mt-4">
            {/* Step 1 */}
            <div className="text-center">
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-indigo-100 text-indigo-700 font-bold text-sm mb-3">1</span>
              <Image src={rescheduleSteps[0].image} alt="Step 1" width={500} height={300} className="rounded-lg shadow-md w-full" />
              <p className="mt-3 text-base text-gray-700">{rescheduleSteps[0].description}</p>
            </div>

            <ArrowRight className="w-8 h-8 text-gray-400" />

            {/* Step 2 */}
            <div className="text-center">
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-indigo-100 text-indigo-700 font-bold text-sm mb-3">2</span>
              <Image src={rescheduleSteps[1].image} alt="Step 2" width={500} height={300} className="rounded-lg shadow-md w-full" />
              <p className="mt-3 text-base text-gray-700">{rescheduleSteps[1].description}</p>
            </div>

            {/* Arrow down (right side) */}
            <div />
            <div />
            <div className="flex justify-center">
              <ArrowDown className="w-8 h-8 text-gray-400" />
            </div>

            {/* Step 4 */}
            <div className="text-center">
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-indigo-100 text-indigo-700 font-bold text-sm mb-3">4</span>
              <Image src={rescheduleSteps[3].image} alt="Step 4" width={500} height={300} className="rounded-lg shadow-md w-full" />
              <p className="mt-3 text-base text-gray-700">{rescheduleSteps[3].description}</p>
            </div>

            <ArrowRight className="w-8 h-8 text-gray-400 rotate-180" />

            {/* Step 3 */}
            <div className="text-center">
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-indigo-100 text-indigo-700 font-bold text-sm mb-3">3</span>
              <Image src={rescheduleSteps[2].image} alt="Step 3" width={500} height={300} className="rounded-lg shadow-md w-full" />
              <p className="mt-3 text-base text-gray-700">{rescheduleSteps[2].description}</p>
            </div>
          </div>

          {/* Mobile: vertical stack with arrows */}
          <div className="md:hidden flex flex-col items-center gap-4 mt-4">
            {rescheduleSteps.map((s, i) => (
              <div key={s.step}>
                <div className="text-center">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-indigo-100 text-indigo-700 font-bold text-sm mb-3">{s.step}</span>
                  <Image src={s.image} alt={`Step ${s.step}`} width={500} height={300} className="rounded-lg shadow-md w-full" />
                  <p className="mt-3 text-base text-gray-700">{s.description}</p>
                </div>
                {i < rescheduleSteps.length - 1 && (
                  <div className="flex justify-center mt-4">
                    <ArrowDown className="w-8 h-8 text-gray-400" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={assignmentOpen} onOpenChange={setAssignmentOpen}>
        <DialogContent className="!max-w-[95vw] w-[95vw] max-h-[90vh] overflow-y-auto p-8">
          <DialogTitle className="text-2xl font-bold text-center">
            Worksheet Assignments
          </DialogTitle>

          {/* Desktop: snake layout, 3 rows of 2 */}
          {/* Row 1: 1→2, Row 2: 4←3, Row 3: 5→6 */}
          <div className="hidden md:grid grid-cols-[1fr_auto_1fr] gap-4 items-center mt-4">
            {/* Row 1: Step 1 → Step 2 */}
            <div className="text-center">
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-rose-100 text-rose-700 font-bold text-sm mb-3">1</span>
              <Image src={assignmentSteps[0].image} alt="Step 1" width={500} height={300} className="rounded-lg shadow-md w-full" />
              <p className="mt-3 text-base text-gray-700">{assignmentSteps[0].description}</p>
            </div>
            <ArrowRight className="w-8 h-8 text-gray-400" />
            <div className="text-center">
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-rose-100 text-rose-700 font-bold text-sm mb-3">2</span>
              <Image src={assignmentSteps[1].image} alt="Step 2" width={500} height={300} className="rounded-lg shadow-md w-full" />
              <p className="mt-3 text-base text-gray-700">{assignmentSteps[1].description}</p>
            </div>

            {/* Arrow down (below step 2, right side) */}
            <div />
            <div />
            <div className="flex justify-center">
              <ArrowDown className="w-8 h-8 text-gray-400" />
            </div>

            {/* Row 2: Step 4 ← Step 3 (right to left) */}
            <div className="text-center">
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-rose-100 text-rose-700 font-bold text-sm mb-3">4</span>
              <Image src={assignmentSteps[3].image} alt="Step 4" width={500} height={300} className="rounded-lg shadow-md w-full" />
              <p className="mt-3 text-base text-gray-700">{assignmentSteps[3].description}</p>
            </div>
            <ArrowRight className="w-8 h-8 text-gray-400 rotate-180" />
            <div className="text-center">
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-rose-100 text-rose-700 font-bold text-sm mb-3">3</span>
              <Image src={assignmentSteps[2].image} alt="Step 3" width={500} height={300} className="rounded-lg shadow-md w-full" />
              <p className="mt-3 text-base text-gray-700">{assignmentSteps[2].description}</p>
            </div>

            {/* Arrow down (below step 4, left side) */}
            <div className="flex justify-center">
              <ArrowDown className="w-8 h-8 text-gray-400" />
            </div>
            <div />
            <div />

            {/* Row 3: Step 5 → Step 6 */}
            <div className="text-center">
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-rose-100 text-rose-700 font-bold text-sm mb-3">5</span>
              <Image src={assignmentSteps[4].image} alt="Step 5" width={500} height={300} className="rounded-lg shadow-md w-full" />
              <p className="mt-3 text-base text-gray-700">{assignmentSteps[4].description}</p>
            </div>
            <ArrowRight className="w-8 h-8 text-gray-400" />
            <div className="text-center">
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-rose-100 text-rose-700 font-bold text-sm mb-3">6</span>
              <Image src={assignmentSteps[5].image} alt="Step 6" width={500} height={300} className="rounded-lg shadow-md w-full" />
              <p className="mt-3 text-base text-gray-700">{assignmentSteps[5].description}</p>
            </div>
          </div>

          {/* Mobile: vertical stack with arrows */}
          <div className="md:hidden flex flex-col items-center gap-4 mt-4">
            {assignmentSteps.map((s, i) => (
              <div key={s.step}>
                <div className="text-center">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-rose-100 text-rose-700 font-bold text-sm mb-3">{s.step}</span>
                  <Image src={s.image} alt={`Step ${s.step}`} width={500} height={300} className="rounded-lg shadow-md w-full" />
                  <p className="mt-3 text-base text-gray-700">{s.description}</p>
                </div>
                {i < assignmentSteps.length - 1 && (
                  <div className="flex justify-center mt-4">
                    <ArrowDown className="w-8 h-8 text-gray-400" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={feeOpen} onOpenChange={setFeeOpen}>
        <DialogContent className="!max-w-[95vw] w-[95vw] max-h-[90vh] overflow-y-auto p-8">
          <DialogTitle className="text-2xl font-bold text-center">
            Student Fee Payment
          </DialogTitle>

          {/* Desktop: snake layout, 5 steps */}
          {/* Row 1: 1→2, Row 2: 4←3, Row 3: 5 */}
          <div className="hidden md:grid grid-cols-[1fr_auto_1fr] gap-4 items-center mt-4">
            {/* Row 1: Step 1 → Step 2 */}
            <div className="text-center">
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-purple-100 text-purple-700 font-bold text-sm mb-3">1</span>
              <Image src={feeSteps[0].image} alt="Step 1" width={500} height={300} className="rounded-lg shadow-md w-full" />
              <p className="mt-3 text-base text-gray-700">{feeSteps[0].description}</p>
            </div>
            <ArrowRight className="w-8 h-8 text-gray-400" />
            <div className="text-center">
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-purple-100 text-purple-700 font-bold text-sm mb-3">2</span>
              <Image src={feeSteps[1].image} alt="Step 2" width={500} height={300} className="rounded-lg shadow-md w-full" />
              <p className="mt-3 text-base text-gray-700">{feeSteps[1].description}</p>
            </div>

            {/* Arrow down (below step 2, right side) */}
            <div />
            <div />
            <div className="flex justify-center">
              <ArrowDown className="w-8 h-8 text-gray-400" />
            </div>

            {/* Row 2: Step 4 ← Step 3 (right to left) */}
            <div className="text-center">
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-purple-100 text-purple-700 font-bold text-sm mb-3">4</span>
              <Image src={feeSteps[3].image} alt="Step 4" width={500} height={300} className="rounded-lg shadow-md w-full" />
              <p className="mt-3 text-base text-gray-700">{feeSteps[3].description}</p>
            </div>
            <ArrowRight className="w-8 h-8 text-gray-400 rotate-180" />
            <div className="text-center">
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-purple-100 text-purple-700 font-bold text-sm mb-3">3</span>
              <Image src={feeSteps[2].image} alt="Step 3" width={500} height={300} className="rounded-lg shadow-md w-full" />
              <p className="mt-3 text-base text-gray-700">{feeSteps[2].description}</p>
            </div>

            {/* Arrow down (below step 4, left side) */}
            <div className="flex justify-center">
              <ArrowDown className="w-8 h-8 text-gray-400" />
            </div>
            <div />
            <div />

            {/* Row 3: Step 5 (left-aligned) */}
            <div className="text-center">
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-purple-100 text-purple-700 font-bold text-sm mb-3">5</span>
              <Image src={feeSteps[4].image} alt="Step 5" width={500} height={300} className="rounded-lg shadow-md w-full" />
              <p className="mt-3 text-base text-gray-700">{feeSteps[4].description}</p>
            </div>
            <div />
            <div />
          </div>

          {/* Mobile: vertical stack with arrows */}
          <div className="md:hidden flex flex-col items-center gap-4 mt-4">
            {feeSteps.map((s, i) => (
              <div key={s.step}>
                <div className="text-center">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-purple-100 text-purple-700 font-bold text-sm mb-3">{s.step}</span>
                  <Image src={s.image} alt={`Step ${s.step}`} width={500} height={300} className="rounded-lg shadow-md w-full" />
                  <p className="mt-3 text-base text-gray-700">{s.description}</p>
                </div>
                {i < feeSteps.length - 1 && (
                  <div className="flex justify-center mt-4">
                    <ArrowDown className="w-8 h-8 text-gray-400" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
