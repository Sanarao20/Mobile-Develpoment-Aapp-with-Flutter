import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';
import { Badge } from '@/app/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/app/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/app/components/ui/accordion';
import { Progress } from '@/app/components/ui/progress';
import { ArrowLeft, Clock, Users, Star, Award, CheckCircle2, PlayCircle, FileText, Download } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

export function ProgramDetails() {
  const { id } = useParams();
  const [isEnrolled, setIsEnrolled] = useState(id === '1' || id === '2');

  const programData: Record<string, any> = {
    '1': {
      title: 'Complete Web Development Bootcamp',
      description: 'Master modern web development from scratch. Learn HTML, CSS, JavaScript, React, Node.js, MongoDB and deploy full-stack applications.',
      image: 'https://images.unsplash.com/photo-1557324232-b8917d3c3dcb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGluZ3xlbnwxfHx8fDE3Njg4NDcxNjZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      duration: '12 weeks',
      students: 15420,
      rating: 4.8,
      level: 'Beginner',
      instructor: 'Sarah Johnson',
      progress: 65,
    },
    '2': {
      title: 'Data Science Fundamentals',
      description: 'Learn Python programming, statistics, machine learning algorithms, and data visualization techniques to become a data scientist.',
      image: 'https://images.unsplash.com/photo-1666875753105-c63a6f3bdc86?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwc2NpZW5jZSUyMGFuYWx5dGljc3xlbnwxfHx8fDE3Njg4OTc1Mzh8MA&ixlib=rb-4.1.0&q=80&w=1080',
      duration: '10 weeks',
      students: 12350,
      rating: 4.7,
      level: 'Intermediate',
      instructor: 'Dr. Michael Chen',
      progress: 30,
    },
    '3': {
      title: 'Mobile App Design Masterclass',
      description: 'Create beautiful iOS and Android apps with Figma. Learn UI/UX principles, prototyping, and design systems.',
      image: 'https://images.unsplash.com/photo-1609921212029-bb5a28e60960?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ258ZW58MXx8fHwxNzY4OTA4MzA3fDA&ixlib=rb-4.1.0&q=80&w=1080',
      duration: '8 weeks',
      students: 8920,
      rating: 4.9,
      level: 'Beginner',
      instructor: 'Emily Rodriguez',
      progress: 0,
    },
  };

  const program = programData[id || '1'] || programData['1'];

  const modules = [
    {
      title: 'Introduction & Setup',
      lessons: [
        { title: 'Welcome to the Course', duration: '5 min', completed: true },
        { title: 'Setting Up Your Development Environment', duration: '15 min', completed: true },
        { title: 'Course Overview & Roadmap', duration: '10 min', completed: true },
      ],
    },
    {
      title: 'HTML Fundamentals',
      lessons: [
        { title: 'HTML Basics & Structure', duration: '20 min', completed: true },
        { title: 'Working with Text & Links', duration: '25 min', completed: true },
        { title: 'Forms & Input Elements', duration: '30 min', completed: false },
        { title: 'Semantic HTML', duration: '20 min', completed: false },
      ],
    },
    {
      title: 'CSS Styling',
      lessons: [
        { title: 'CSS Selectors & Properties', duration: '25 min', completed: false },
        { title: 'Box Model & Layout', duration: '30 min', completed: false },
        { title: 'Flexbox & Grid', duration: '35 min', completed: false },
        { title: 'Responsive Design', duration: '40 min', completed: false },
      ],
    },
    {
      title: 'JavaScript Basics',
      lessons: [
        { title: 'Variables & Data Types', duration: '20 min', completed: false },
        { title: 'Functions & Scope', duration: '25 min', completed: false },
        { title: 'DOM Manipulation', duration: '30 min', completed: false },
        { title: 'Events & Event Handling', duration: '25 min', completed: false },
      ],
    },
  ];

  const features = [
    'Lifetime access to course materials',
    'Certificate of completion',
    'Interactive coding exercises',
    'Real-world projects',
    'Community forum access',
    'Downloadable resources',
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" asChild>
                <Link to="/programs">
                  <ArrowLeft className="w-5 h-5" />
                </Link>
              </Button>
              <h1 className="text-2xl font-bold text-indigo-600">Program Details</h1>
            </div>
            <div className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center text-white">
              JD
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Hero Image */}
            <div className="aspect-video w-full overflow-hidden rounded-lg">
              <ImageWithFallback
                src={program.image}
                alt={program.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Title & Meta */}
            <div>
              <div className="flex items-center gap-3 mb-3">
                <Badge>{program.level}</Badge>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="font-medium">{program.rating}</span>
                  <span className="text-gray-600">({program.students.toLocaleString()} students)</span>
                </div>
              </div>
              <h1 className="text-3xl font-bold mb-3">{program.title}</h1>
              <p className="text-lg text-gray-700 mb-4">{program.description}</p>
              <div className="flex items-center gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>{program.duration}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Users className="w-4 h-4" />
                  <span>{program.students.toLocaleString()} enrolled</span>
                </div>
              </div>
            </div>

            {/* Progress (if enrolled) */}
            {isEnrolled && (
              <Card>
                <CardHeader>
                  <CardTitle>Your Progress</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Overall Completion</span>
                      <span className="font-medium">{program.progress}%</span>
                    </div>
                    <Progress value={program.progress} />
                  </div>
                  <Button className="w-full">
                    <PlayCircle className="w-4 h-4 mr-2" />
                    Continue Learning
                  </Button>
                </CardContent>
              </Card>
            )}

            {/* Tabs */}
            <Tabs defaultValue="curriculum" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
                <TabsTrigger value="about">About</TabsTrigger>
                <TabsTrigger value="instructor">Instructor</TabsTrigger>
              </TabsList>

              <TabsContent value="curriculum" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Course Curriculum</CardTitle>
                    <CardDescription>
                      {modules.length} modules • {modules.reduce((acc, m) => acc + m.lessons.length, 0)} lessons
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Accordion type="single" collapsible className="w-full">
                      {modules.map((module, index) => (
                        <AccordionItem key={index} value={`module-${index}`}>
                          <AccordionTrigger>
                            <div className="flex items-center gap-2">
                              <span className="font-medium">{module.title}</span>
                              <Badge variant="outline">{module.lessons.length} lessons</Badge>
                            </div>
                          </AccordionTrigger>
                          <AccordionContent>
                            <div className="space-y-2 pt-2">
                              {module.lessons.map((lesson, lessonIndex) => (
                                <div
                                  key={lessonIndex}
                                  className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg"
                                >
                                  <div className="flex items-center gap-3">
                                    {lesson.completed ? (
                                      <CheckCircle2 className="w-5 h-5 text-green-500" />
                                    ) : (
                                      <PlayCircle className="w-5 h-5 text-gray-400" />
                                    )}
                                    <span className={lesson.completed ? 'text-gray-600' : ''}>
                                      {lesson.title}
                                    </span>
                                  </div>
                                  <span className="text-sm text-gray-500">{lesson.duration}</span>
                                </div>
                              ))}
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="about" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>About This Program</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">What You'll Learn</h4>
                      <ul className="space-y-2">
                        {features.map((feature, index) => (
                          <li key={index} className="flex items-center gap-2">
                            <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Requirements</h4>
                      <p className="text-gray-700">
                        No prior programming experience required. A computer with internet access and enthusiasm to learn!
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="instructor" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Your Instructor</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-start gap-4">
                      <div className="w-20 h-20 bg-gradient-to-br from-indigo-400 to-purple-400 rounded-full flex items-center justify-center text-white text-2xl">
                        {program.instructor.split(' ').map((n: string) => n[0]).join('')}
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg mb-1">{program.instructor}</h4>
                        <p className="text-sm text-gray-600 mb-3">Senior Software Engineer & Educator</p>
                        <p className="text-gray-700">
                          With over 10 years of industry experience and thousands of students taught,
                          {program.instructor.split(' ')[0]} brings real-world expertise to every lesson.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card className="sticky top-4">
              <CardContent className="p-6 space-y-4">
                {!isEnrolled ? (
                  <>
                    <Button
                      className="w-full"
                      size="lg"
                      onClick={() => setIsEnrolled(true)}
                    >
                      Enroll Now
                    </Button>
                    <p className="text-center text-sm text-gray-600">
                      Free to enroll • Start learning today
                    </p>
                  </>
                ) : (
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-green-600">
                      <CheckCircle2 className="w-5 h-5" />
                      <span className="font-medium">You're enrolled!</span>
                    </div>
                    <Button className="w-full" asChild>
                      <Link to="/home">Go to Dashboard</Link>
                    </Button>
                  </div>
                )}

                <div className="border-t pt-4 space-y-3">
                  <h4 className="font-semibold">This program includes:</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <PlayCircle className="w-4 h-4 text-indigo-600" />
                      <span>40+ hours of video content</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <FileText className="w-4 h-4 text-indigo-600" />
                      <span>50+ coding exercises</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Download className="w-4 h-4 text-indigo-600" />
                      <span>Downloadable resources</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Award className="w-4 h-4 text-indigo-600" />
                      <span>Certificate of completion</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
