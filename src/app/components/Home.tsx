import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';
import { Progress } from '@/app/components/ui/progress';
import { BookOpen, Clock, Award, TrendingUp, Search } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

export function Home() {
  const enrolledCourses = [
    {
      id: 1,
      title: 'Complete Web Development Bootcamp',
      progress: 65,
      nextLesson: 'JavaScript Advanced Concepts',
      image: 'https://images.unsplash.com/photo-1557324232-b8917d3c3dcb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGluZ3xlbnwxfHx8fDE3Njg4NDcxNjZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 2,
      title: 'Data Science Fundamentals',
      progress: 30,
      nextLesson: 'Data Visualization with Python',
      image: 'https://images.unsplash.com/photo-1666875753105-c63a6f3bdc86?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwc2NpZW5jZSUyMGFuYWx5dGljc3xlbnwxfHx8fDE3Njg4OTc1Mzh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ];

  const stats = [
    { icon: BookOpen, label: 'Courses Enrolled', value: '3' },
    { icon: Clock, label: 'Hours Learned', value: '42' },
    { icon: Award, label: 'Certificates', value: '2' },
    { icon: TrendingUp, label: 'Streak Days', value: '7' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-indigo-600">LearnHub</h1>
            <div className="flex gap-4">
              <Button variant="ghost" asChild>
                <Link to="/programs">
                  <Search className="w-4 h-4 mr-2" />
                  Browse Programs
                </Link>
              </Button>
              <div className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center text-white">
                JD
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-3xl mb-2">Welcome back, John!</h2>
          <p className="text-gray-600">Continue your learning journey</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {stats.map((stat) => (
            <Card key={stat.label}>
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
                    <stat.icon className="w-6 h-6 text-indigo-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">{stat.value}</p>
                    <p className="text-sm text-gray-600">{stat.label}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Continue Learning */}
        <div className="mb-8">
          <h3 className="text-xl mb-4">Continue Learning</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {enrolledCourses.map((course) => (
              <Card key={course.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video w-full overflow-hidden">
                  <ImageWithFallback
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{course.title}</CardTitle>
                  <CardDescription>Next: {course.nextLesson}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Progress</span>
                      <span className="font-medium">{course.progress}%</span>
                    </div>
                    <Progress value={course.progress} />
                  </div>
                  <Button className="w-full" asChild>
                    <Link to={`/programs/${course.id}`}>Continue Learning</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Recommended Programs */}
        <div>
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl">Recommended for You</h3>
            <Button variant="ghost" asChild>
              <Link to="/programs">View All</Link>
            </Button>
          </div>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-pink-400 rounded-lg flex items-center justify-center">
                  <Award className="w-10 h-10 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold mb-1">Mobile App Design Masterclass</h4>
                  <p className="text-sm text-gray-600 mb-2">
                    Learn UI/UX design principles and create stunning mobile apps
                  </p>
                  <div className="flex gap-2 text-sm text-gray-500">
                    <span>• 8 weeks</span>
                    <span>• Beginner</span>
                  </div>
                </div>
                <Button asChild>
                  <Link to="/programs/3">Enroll Now</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
