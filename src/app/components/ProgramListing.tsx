import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { Badge } from '@/app/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/app/components/ui/tabs';
import { Search, ArrowLeft, Clock, Users, Star } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

export function ProgramListing() {
  const [searchQuery, setSearchQuery] = useState('');

  const programs = [
    {
      id: 1,
      title: 'Complete Web Development Bootcamp',
      description: 'Master HTML, CSS, JavaScript, React, Node.js and more',
      image: 'https://images.unsplash.com/photo-1557324232-b8917d3c3dcb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGluZ3xlbnwxfHx8fDE3Njg4NDcxNjZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      duration: '12 weeks',
      students: 15420,
      rating: 4.8,
      level: 'Beginner',
      category: 'Development',
    },
    {
      id: 2,
      title: 'Data Science Fundamentals',
      description: 'Learn Python, statistics, machine learning and data visualization',
      image: 'https://images.unsplash.com/photo-1666875753105-c63a6f3bdc86?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwc2NpZW5jZSUyMGFuYWx5dGljc3xlbnwxfHx8fDE3Njg4OTc1Mzh8MA&ixlib=rb-4.1.0&q=80&w=1080',
      duration: '10 weeks',
      students: 12350,
      rating: 4.7,
      level: 'Intermediate',
      category: 'Data Science',
    },
    {
      id: 3,
      title: 'Mobile App Design Masterclass',
      description: 'Create beautiful iOS and Android apps with Figma and best practices',
      image: 'https://images.unsplash.com/photo-1609921212029-bb5a28e60960?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ258ZW58MXx8fHwxNzY4OTA4MzA3fDA&ixlib=rb-4.1.0&q=80&w=1080',
      duration: '8 weeks',
      students: 8920,
      rating: 4.9,
      level: 'Beginner',
      category: 'Design',
    },
    {
      id: 4,
      title: 'Digital Marketing & SEO',
      description: 'Master social media marketing, SEO, content strategy and analytics',
      image: 'https://images.unsplash.com/photo-1762330910399-95caa55acf04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbmxpbmUlMjBsZWFybmluZyUyMGVkdWNhdGlvbnxlbnwxfHx8fDE3Njg4NTkxNDd8MA&ixlib=rb-4.1.0&q=80&w=1080',
      duration: '6 weeks',
      students: 6740,
      rating: 4.6,
      level: 'Beginner',
      category: 'Marketing',
    },
    {
      id: 5,
      title: 'Advanced React & TypeScript',
      description: 'Build scalable applications with React, TypeScript, and modern tooling',
      image: 'https://images.unsplash.com/photo-1557324232-b8917d3c3dcb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGluZ3xlbnwxfHx8fDE3Njg4NDcxNjZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      duration: '10 weeks',
      students: 9850,
      rating: 4.9,
      level: 'Advanced',
      category: 'Development',
    },
    {
      id: 6,
      title: 'Cloud Computing with AWS',
      description: 'Master AWS services, cloud architecture and deployment strategies',
      image: 'https://images.unsplash.com/photo-1666875753105-c63a6f3bdc86?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwc2NpZW5jZSUyMGFuYWx5dGljc3xlbnwxfHx8fDE3Njg4OTc1Mzh8MA&ixlib=rb-4.1.0&q=80&w=1080',
      duration: '8 weeks',
      students: 7320,
      rating: 4.7,
      level: 'Intermediate',
      category: 'Development',
    },
  ];

  const filteredPrograms = programs.filter((program) =>
    program.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    program.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const categories = ['All', 'Development', 'Data Science', 'Design', 'Marketing'];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" asChild>
                <Link to="/home">
                  <ArrowLeft className="w-5 h-5" />
                </Link>
              </Button>
              <h1 className="text-2xl font-bold text-indigo-600">Browse Programs</h1>
            </div>
            <div className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center text-white">
              JD
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search */}
        <div className="mb-8">
          <div className="relative max-w-xl">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              type="text"
              placeholder="Search programs..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Categories */}
        <Tabs defaultValue="All" className="mb-8">
          <TabsList>
            {categories.map((category) => (
              <TabsTrigger key={category} value={category}>
                {category}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

        {/* Programs Grid */}
        <div className="mb-4">
          <p className="text-sm text-gray-600">
            Showing {filteredPrograms.length} program{filteredPrograms.length !== 1 ? 's' : ''}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPrograms.map((program) => (
            <Card key={program.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video w-full overflow-hidden">
                <ImageWithFallback
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <Badge variant="secondary">{program.level}</Badge>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">{program.rating}</span>
                  </div>
                </div>
                <CardTitle className="line-clamp-2">{program.title}</CardTitle>
                <CardDescription className="line-clamp-2">
                  {program.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{program.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    <span>{program.students.toLocaleString()}</span>
                  </div>
                </div>
                <Button className="w-full" asChild>
                  <Link to={`/programs/${program.id}`}>View Details</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredPrograms.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600">No programs found matching your search.</p>
          </div>
        )}
      </main>
    </div>
  );
}
