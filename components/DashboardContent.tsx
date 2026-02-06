'use client'

import { Users, CheckCircle, AlertTriangle, Clock, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const BRAND_BLUE = "#026892";

export default function DashboardContent() {
  const [currentDate, setCurrentDate] = useState(new Date());

  const navigateMonth = (direction: 'prev' | 'next') => {
    setCurrentDate(prev => {
      const newDate = new Date(prev);
      if (direction === 'prev') {
        newDate.setMonth(prev.getMonth() - 1);
      } else {
        newDate.setMonth(prev.getMonth() + 1);
      }
      return newDate;
    });
  };
  return (
    <div className="p-3 sm:p-4 md:p-6 lg:p-8 bg-gray-50">
      <div className="mb-2 sm:mb-3 md:mb-4">
        <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-1 sm:mb-2">Dean Dashboard</h1>
        <p className="text-xs sm:text-sm text-muted-foreground font-medium">Welcome back! Here's what's happening across your school.</p>
      </div>
      
      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 mb-2 sm:mb-3 md:mb-4">
        <div className="bg-white rounded-lg p-3 sm:p-4 border border-gray-200 shadow-sm">
          <div className="flex justify-between items-start mb-2 sm:mb-3">
            <p className="text-gray-900 text-xs sm:text-sm font-semibold">Staff Members</p>
            <div className="w-7 h-7 sm:w-8 sm:h-8 bg-blue-50 rounded-lg flex items-center justify-center">
              <Users className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-600" />
            </div>
          </div>
          <div>
            <p className="text-xl sm:text-2xl font-bold text-gray-900 mb-1">45</p>
            <p className="text-green-700 text-[10px] sm:text-xs font-medium">5% Current Semester</p>
          </div>
        </div>
        
        <div className="bg-white rounded-lg p-3 sm:p-4 border border-gray-200 shadow-sm">
          <div className="flex justify-between items-start mb-2 sm:mb-3">
            <p className="text-gray-900 text-xs sm:text-sm font-semibold">Enrolled Students</p>
            <div className="w-7 h-7 sm:w-8 sm:h-8 bg-green-50 rounded-lg flex items-center justify-center">
              <CheckCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-green-600" />
            </div>
          </div>
          <div>
            <p className="text-xl sm:text-2xl font-bold text-gray-900 mb-1">1,234</p>
            <p className="text-green-700 text-[10px] sm:text-xs font-medium">3% from last academic year</p>
          </div>
        </div>
        
        <div className="bg-white rounded-lg p-3 sm:p-4 border border-gray-200 shadow-sm">
          <div className="flex justify-between items-start mb-2 sm:mb-3">
            <p className="text-gray-900 text-xs sm:text-sm font-semibold">Pending Approvals</p>
            <div className="w-7 h-7 sm:w-8 sm:h-8 bg-orange-50 rounded-lg flex items-center justify-center">
              <AlertTriangle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-orange-600" />
            </div>
          </div>
          <div>
            <p className="text-xl sm:text-2xl font-bold text-gray-900 mb-1">23</p>
            <p className="text-orange-700 text-[10px] sm:text-xs font-medium">High priority</p>
          </div>
        </div>
        
        <div className="bg-white rounded-lg p-3 sm:p-4 border border-gray-200 shadow-sm">
          <div className="flex justify-between items-start mb-2 sm:mb-3">
            <p className="text-gray-900 text-xs sm:text-sm font-semibold">Total Departments</p>
            <div className="w-7 h-7 sm:w-8 sm:h-8 bg-purple-50 rounded-lg flex items-center justify-center">
              <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-5 0H3m2 0h3M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
          </div>
          <div>
            <p className="text-xl sm:text-2xl font-bold text-gray-900 mb-1">4</p>
            <p className="text-green-700 text-[10px] sm:text-xs font-medium">Active departments</p>
          </div>
        </div>
      </div>

      {/* Bottom Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 sm:gap-3 md:gap-4 mb-2 sm:mb-3 md:mb-4">
        {/* Quick Actions */}
        <div className="bg-card rounded-lg p-3 sm:p-4 md:p-6 border border-border shadow-sm">
          <h3 className="text-sm sm:text-base md:text-lg font-bold text-foreground mb-3 sm:mb-4 md:mb-6">Quick Actions</h3>
          
          <div className="space-y-3">
            <div className="p-4 bg-blue-50 rounded-lg hover:bg-blue-100 cursor-pointer transition-colors flex items-center gap-3">
              <div className="w-5 h-5 text-[#026892]">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                  <line x1="16" y1="2" x2="16" y2="6"/>
                  <line x1="8" y1="2" x2="8" y2="6"/>
                  <line x1="3" y1="10" x2="21" y2="10"/>
                </svg>
              </div>
              <h4 className="font-semibold text-sm text-[#026892]">Approve Curriculum</h4>
            </div>
            
            <div className="p-4 bg-blue-50 rounded-lg hover:bg-blue-100 cursor-pointer transition-colors flex items-center gap-3">
              <div className="w-5 h-5 text-[#026892]">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
                </svg>
              </div>
              <h4 className="font-semibold text-sm text-[#026892]">Faculty Reports</h4>
            </div>
            
            <div className="p-4 bg-orange-50 rounded-lg hover:bg-orange-100 cursor-pointer transition-colors flex items-center gap-3">
              <div className="w-5 h-5 text-orange-600">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="12,6 12,12 16,14"/>
                </svg>
              </div>
              <h4 className="font-semibold text-sm text-orange-600">Budget Allocation</h4>
            </div>
          </div>
        </div>

        {/* Today's Schedule */}
        <div className="bg-card rounded-lg p-3 sm:p-4 md:p-6 border border-border shadow-sm">
          <h3 className="text-sm sm:text-base md:text-lg font-bold text-foreground mb-3 sm:mb-4 md:mb-6">Today's Schedule</h3>
          
          <div className="space-y-3">
            <div className="p-4 bg-blue-50 rounded-lg border border-blue-100 flex justify-between items-center">
              <div>
                <h4 className="font-semibold text-sm text-foreground">Faculty Meeting</h4>
                <p className="text-xs text-muted-foreground font-medium">Conference Room A • 09:00-11:00</p>
              </div>
              <span 
                className="px-3 py-1 text-white text-xs font-medium rounded-full"
                style={{ backgroundColor: BRAND_BLUE }}
              >
                Next
              </span>
            </div>
            
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200 flex justify-between items-center">
              <div>
                <h4 className="font-semibold text-sm text-foreground">Budget Review</h4>
                <p className="text-xs text-muted-foreground font-medium">Dean's Office • 14:00-16:00</p>
              </div>
              <span className="px-3 py-1 bg-gray-200 text-gray-700 text-xs font-medium rounded-full">
                Later
              </span>
            </div>
          </div>
        </div>

        {/* School Performance */}
        <div className="bg-card rounded-lg p-3 sm:p-4 md:p-6 border border-border shadow-sm">
          <h3 className="text-sm sm:text-base md:text-lg font-bold text-foreground mb-3 sm:mb-4 md:mb-6">School Performance</h3>
          
          <div className="space-y-3">
            <div className="p-4 bg-green-50 rounded-lg border border-green-200 flex justify-between items-center">
              <span className="text-foreground font-medium text-sm">Average Attendance</span>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="font-semibold text-sm">87%</span>
              </div>
            </div>
            
            <div className="p-4 bg-red-50 rounded-lg border border-red-200 flex justify-between items-center">
              <span className="text-foreground font-medium text-sm">Pending Grades</span>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <span className="font-semibold text-sm">12</span>
              </div>
            </div>
            
            <div className="p-4 bg-orange-50 rounded-lg border border-orange-200 flex justify-between items-center">
              <span className="text-foreground font-medium text-sm">Faculty Alerts</span>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                <span className="font-semibold text-sm">3</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Marks Submission Status and Recent Activity Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 sm:gap-3 md:gap-4">
        {/* Academic Calendar */}
        <AcademicCalendar currentDate={currentDate} navigateMonth={navigateMonth} />

        {/* Marks Submission Status */}
        <div className="bg-card rounded-lg p-3 sm:p-4 border border-border shadow-sm">
          <h3 className="text-sm sm:text-base font-bold text-foreground mb-3 sm:mb-4">Marks Submission Status</h3>
          
          <div className="relative">
            {/* Y-axis labels */}
            <div className="absolute left-0 top-0 bottom-6 flex flex-col justify-between text-[10px] text-muted-foreground w-6">
              <span>100%</span>
              <span>75%</span>
              <span>50%</span>
              <span>25%</span>
              <span>0%</span>
            </div>
            
            {/* Chart area */}
            <div className="ml-8">
              {/* Grid lines */}
              <div className="relative h-48 border-l-2 border-b-2 border-gray-300">
                <div className="absolute inset-0 flex flex-col justify-between pr-4">
                  <div className="border-t border-dashed border-gray-300 opacity-40"></div>
                  <div className="border-t border-dashed border-gray-300 opacity-40"></div>
                  <div className="border-t border-dashed border-gray-300 opacity-40"></div>
                  <div className="border-t border-dashed border-gray-300 opacity-40"></div>
                </div>
                
                {/* Bars */}
                <div className="absolute inset-0 flex items-end justify-around px-6 pb-0">
                  <div className="flex flex-col items-center justify-end group relative" style={{ width: '35px', height: '100%' }}>
                    <div 
                      className="w-full rounded-t-lg transition-all duration-500 hover:opacity-80 cursor-pointer" 
                      style={{ height: '98%', backgroundColor: BRAND_BLUE }}
                    >
                    </div>
                    <div className="absolute top-0 hidden group-hover:block bg-gray-900 text-white text-xs px-2 py-1 rounded -translate-y-8">98%</div>
                  </div>
                  
                  <div className="flex flex-col items-center justify-end group relative" style={{ width: '35px', height: '100%' }}>
                    <div 
                      className="w-full rounded-t-lg transition-all duration-500 hover:opacity-80 cursor-pointer" 
                      style={{ height: '92%', backgroundColor: BRAND_BLUE }}
                    >
                    </div>
                    <div className="absolute top-0 hidden group-hover:block bg-gray-900 text-white text-xs px-2 py-1 rounded -translate-y-8">92%</div>
                  </div>
                  
                  <div className="flex flex-col items-center justify-end group relative" style={{ width: '35px', height: '100%' }}>
                    <div 
                      className="w-full rounded-t-lg transition-all duration-500 hover:opacity-80 cursor-pointer" 
                      style={{ height: '89%', backgroundColor: BRAND_BLUE }}
                    >
                    </div>
                    <div className="absolute top-0 hidden group-hover:block bg-gray-900 text-white text-xs px-2 py-1 rounded -translate-y-8">89%</div>
                  </div>
                  
                  <div className="flex flex-col items-center justify-end group relative" style={{ width: '35px', height: '100%' }}>
                    <div 
                      className="w-full rounded-t-lg transition-all duration-500 hover:opacity-80 cursor-pointer" 
                      style={{ height: '85%', backgroundColor: BRAND_BLUE }}
                    >
                    </div>
                    <div className="absolute top-0 hidden group-hover:block bg-gray-900 text-white text-xs px-2 py-1 rounded -translate-y-8">85%</div>
                  </div>
                </div>
              </div>
              
              {/* X-axis labels */}
              <div className="flex items-start justify-around px-6 mt-1.5">
                <div style={{ width: '35px' }}>
                  <p className="text-[9px] font-medium text-foreground text-center leading-tight">Comp Sci</p>
                  <p className="text-[8px] text-muted-foreground text-center">156/159</p>
                </div>
                <div style={{ width: '35px' }}>
                  <p className="text-[9px] font-medium text-foreground text-center leading-tight">Engineer</p>
                  <p className="text-[8px] text-muted-foreground text-center">124/135</p>
                </div>
                <div style={{ width: '35px' }}>
                  <p className="text-[9px] font-medium text-foreground text-center leading-tight">Business</p>
                  <p className="text-[8px] text-muted-foreground text-center">98/110</p>
                </div>
                <div style={{ width: '35px' }}>
                  <p className="text-[9px] font-medium text-foreground text-center leading-tight">Medicine</p>
                  <p className="text-[8px] text-muted-foreground text-center">68/80</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

interface CalendarEvent {
  date: number;
  title: string;
  color: string;
}

interface AcademicCalendarProps {
  currentDate: Date;
  navigateMonth: (direction: 'prev' | 'next') => void;
}

function AcademicCalendar({ currentDate, navigateMonth }: AcademicCalendarProps) {
  const [hoveredDay, setHoveredDay] = useState<number | null>(null);

  const events: CalendarEvent[] = [
    { date: 5, title: "Faculty Meeting", color: "bg-blue-400" },
    { date: 12, title: "Exam Review", color: "bg-green-400" },
    { date: 15, title: "Grade Submission", color: "bg-amber-400" },
    { date: 20, title: "Department Seminar", color: "bg-purple-400" },
    { date: 25, title: "Christmas Holiday", color: "bg-rose-400" },
  ];

  const getDaysInMonth = (date: Date) => new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  const getFirstDayOfMonth = (date: Date) => new Date(date.getFullYear(), date.getMonth(), 1).getDay();

  const monthName = currentDate.toLocaleString("default", { month: "long", year: "numeric" });
  const daysInMonth = getDaysInMonth(currentDate);
  const firstDay = getFirstDayOfMonth(currentDate);
  const daysArray = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const emptyDays = Array.from({ length: firstDay }, (_, i) => i);
  const getEventsForDay = (day: number) => events.filter((event) => event.date === day);
  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-sm h-full flex flex-col">
      <div className="px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 md:py-2.5 flex items-center justify-between border-b border-gray-200">
        <h2 className="text-xs sm:text-sm md:text-base font-bold text-gray-900">Academic Calendar</h2>
        <div className="flex items-center gap-0.5 sm:gap-1">
          <button onClick={() => navigateMonth('prev')} className="p-1 hover:bg-gray-100 rounded-lg transition-colors">
            <ChevronLeft className="w-4 h-4 text-gray-600" />
          </button>
          <span className="text-[11px] sm:text-xs font-semibold text-gray-900 w-20 sm:w-24 md:w-28 text-center">{monthName}</span>
          <button onClick={() => navigateMonth('next')} className="p-1 hover:bg-gray-100 rounded-lg transition-colors">
            <ChevronRight className="w-4 h-4 text-gray-600" />
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-hidden flex flex-col px-1.5 sm:px-2 md:px-4 py-1.5 sm:py-2 md:py-2.5">
        <div className="grid grid-cols-7 gap-0.5 sm:gap-1 md:gap-1.5 mb-1 sm:mb-1.5">
          {dayNames.map((day) => (
            <div key={day} className="text-center text-[11px] sm:text-xs font-semibold text-gray-600 py-1 sm:py-1.5">
              <span className="hidden sm:inline">{day}</span>
              <span className="sm:hidden text-[11px] font-bold">{day.slice(0, 1)}</span>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-7 gap-0.5 sm:gap-1 md:gap-1.5 auto-rows-fr flex-1">
          {emptyDays.map((_, i) => (
            <div key={`empty-${i}`} className="bg-gray-50 rounded-lg min-h-[26px] sm:min-h-[42px] md:min-h-[52px]" />
          ))}

          {daysArray.map((day, index) => {
            const dayEvents = getEventsForDay(day);
            const isHovered = hoveredDay === day && dayEvents.length > 0;
            const col = (index + firstDay) % 7;
            const row = Math.floor((index + firstDay) / 7);

            return (
              <div key={day} className="relative min-h-[26px] sm:min-h-[42px] md:min-h-[52px]" onMouseEnter={() => setHoveredDay(day)} onMouseLeave={() => setHoveredDay(null)}>
                <div className={`border border-gray-200 rounded-lg p-1 sm:p-1.5 text-center flex flex-col transition-all duration-200 h-full ${
                  dayEvents.length > 0 ? "bg-gradient-to-br from-blue-50 to-indigo-50 hover:shadow-md cursor-pointer" : "bg-white hover:bg-gray-50"
                }`}>
                  <div className="text-xs sm:text-sm font-semibold text-gray-900 mb-0.5">{day}</div>
                  {dayEvents.length > 0 && (
                    <div className="text-[11px] font-medium text-indigo-600 truncate">{dayEvents[0].title}</div>
                  )}
                </div>

                {isHovered && dayEvents.length > 0 && (
                  <div className={`absolute z-50 bg-white border border-gray-200 rounded-lg shadow-xl p-2.5 w-52 ${
                    row < 2 ? 'top-full mt-2' : 'bottom-full mb-2'
                  } ${col >= 4 ? 'right-0' : col <= 2 ? 'left-0' : 'left-1/2 -translate-x-1/2'}`}>
                    <div className="text-xs font-bold text-gray-900 mb-2 border-b border-gray-200 pb-1.5">
                      {new Date(currentDate.getFullYear(), currentDate.getMonth(), day).toLocaleDateString("default", { weekday: "long", month: "short", day: "numeric" })}
                    </div>
                    <div className="space-y-2">
                      {dayEvents.map((event, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <div className={`w-2 h-2 rounded-full ${event.color} mt-1.5 flex-shrink-0`} />
                          <div className="text-[11px] text-gray-700">{event.title}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}