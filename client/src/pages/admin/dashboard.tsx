import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/hooks/use-auth";
import { apiRequest } from "@/lib/queryClient";
import { insertNewsItemSchema } from "@shared/schema";
import { 
  University, 
  LogOut, 
  Plus, 
  Edit, 
  Trash2, 
  Eye, 
  EyeOff,
  Users,
  FileText,
  MessageSquare,
  BarChart3,
  Calendar
} from "lucide-react";
import type { z } from "zod";

type NewsFormData = z.infer<typeof insertNewsItemSchema>;

export default function AdminDashboard() {
  const [, setLocation] = useLocation();
  const { user, logout, isAuthenticated, isLoading } = useAuth();
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [selectedNews, setSelectedNews] = useState<any>(null);
  const [isEditing, setIsEditing] = useState(false);

  // Redirect if not authenticated using useEffect
  useEffect(() => {
    if (!isAuthenticated && !isLoading) {
      setLocation("/admin/login");
    }
  }, [isAuthenticated, isLoading, setLocation]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
    watch,
  } = useForm<NewsFormData>({
    resolver: zodResolver(insertNewsItemSchema),
    defaultValues: {
      published: false,
    },
  });

  // Queries
  const { data: allNews, isLoading: newsLoading } = useQuery({
    queryKey: ["/api/admin/news"],
    enabled: isAuthenticated,
  });

  const { data: contacts, isLoading: contactsLoading } = useQuery({
    queryKey: ["/api/admin/contacts"],
    enabled: isAuthenticated,
  });

  const { data: stats } = useQuery({
    queryKey: ["/api/stats"],
  });

  // Mutations
  const createNewsMutation = useMutation({
    mutationFn: async (data: NewsFormData) => {
      return await apiRequest("POST", "/api/admin/news", data);
    },
    onSuccess: () => {
      toast({
        title: "Success",
        description: "News article created successfully!",
      });
      reset();
      queryClient.invalidateQueries({ queryKey: ["/api/admin/news"] });
      queryClient.invalidateQueries({ queryKey: ["/api/news"] });
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error.message || "Failed to create news article",
        variant: "destructive",
      });
    },
  });

  const updateNewsMutation = useMutation({
    mutationFn: async ({ id, data }: { id: number; data: Partial<NewsFormData> }) => {
      return await apiRequest("PATCH", `/api/admin/news/${id}`, data);
    },
    onSuccess: () => {
      toast({
        title: "Success",
        description: "News article updated successfully!",
      });
      setIsEditing(false);
      setSelectedNews(null);
      reset();
      queryClient.invalidateQueries({ queryKey: ["/api/admin/news"] });
      queryClient.invalidateQueries({ queryKey: ["/api/news"] });
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error.message || "Failed to update news article",
        variant: "destructive",
      });
    },
  });

  const deleteNewsMutation = useMutation({
    mutationFn: async (id: number) => {
      return await apiRequest("DELETE", `/api/admin/news/${id}`);
    },
    onSuccess: () => {
      toast({
        title: "Success",
        description: "News article deleted successfully!",
      });
      queryClient.invalidateQueries({ queryKey: ["/api/admin/news"] });
      queryClient.invalidateQueries({ queryKey: ["/api/news"] });
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error.message || "Failed to delete news article",
        variant: "destructive",
      });
    },
  });

  const updateContactStatusMutation = useMutation({
    mutationFn: async ({ id, status }: { id: number; status: string }) => {
      return await apiRequest("PATCH", `/api/admin/contacts/${id}`, { status });
    },
    onSuccess: () => {
      toast({
        title: "Success",
        description: "Contact status updated successfully!",
      });
      queryClient.invalidateQueries({ queryKey: ["/api/admin/contacts"] });
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error.message || "Failed to update contact status",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: NewsFormData) => {
    if (isEditing && selectedNews) {
      updateNewsMutation.mutate({ id: selectedNews.id, data });
    } else {
      createNewsMutation.mutate(data);
    }
  };

  const handleEdit = (news: any) => {
    setSelectedNews(news);
    setIsEditing(true);
    reset({
      title: news.title,
      content: news.content,
      excerpt: news.excerpt,
      category: news.category,
      imageUrl: news.imageUrl,
      published: news.published,
    });
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setSelectedNews(null);
    reset({
      title: "",
      content: "",
      excerpt: "",
      category: "",
      imageUrl: "",
      published: false,
    });
  };

  const handleLogout = () => {
    logout();
    setLocation("/admin/login");
  };

  const published = watch("published");

  // Show loading while checking authentication
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="bg-primary text-white w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4">
            <University className="h-8 w-8" />
          </div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  // Return null if not authenticated (will redirect via useEffect)
  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="bg-primary text-white w-10 h-10 rounded-lg flex items-center justify-center">
                <University className="h-5 w-5" />
              </div>
              <div>
                <h1 className="text-lg font-semibold text-primary">Admin Dashboard</h1>
                <p className="text-xs text-gray-600">JSS Polytechnic</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">Welcome, {user?.username}</span>
              <Button variant="outline" onClick={handleLogout} size="sm">
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Overview */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total News</p>
                  <p className="text-3xl font-bold text-primary">{Array.isArray(allNews) ? allNews.length : 0}</p>
                </div>
                <FileText className="h-8 w-8 text-accent" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Contact Submissions</p>
                  <p className="text-3xl font-bold text-primary">{Array.isArray(contacts) ? contacts.length : 0}</p>
                </div>
                <MessageSquare className="h-8 w-8 text-accent" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Visitors</p>
                  <p className="text-3xl font-bold text-primary">{(stats as any)?.visitors || 0}</p>
                </div>
                <BarChart3 className="h-8 w-8 text-accent" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Active Users</p>
                  <p className="text-3xl font-bold text-primary">1</p>
                </div>
                <Users className="h-8 w-8 text-accent" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="news" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="news">News Management</TabsTrigger>
            <TabsTrigger value="hero">Hero Section</TabsTrigger>
            <TabsTrigger value="pages">Page Content</TabsTrigger>
            <TabsTrigger value="contacts">Contact Submissions</TabsTrigger>
          </TabsList>

          <TabsContent value="news">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* News Form */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Plus className="h-5 w-5" />
                    <span>{isEditing ? "Edit News Article" : "Create News Article"}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div>
                      <Label htmlFor="title">Title *</Label>
                      <Input
                        id="title"
                        {...register("title")}
                        placeholder="Enter news title"
                      />
                      {errors.title && (
                        <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="category">Category *</Label>
                      <Select onValueChange={(value) => setValue("category", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Achievements">Achievements</SelectItem>
                          <SelectItem value="Research">Research</SelectItem>
                          <SelectItem value="Events">Events</SelectItem>
                          <SelectItem value="Global">Global</SelectItem>
                          <SelectItem value="Academic">Academic</SelectItem>
                        </SelectContent>
                      </Select>
                      {errors.category && (
                        <p className="text-red-500 text-sm mt-1">{errors.category.message}</p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="excerpt">Excerpt</Label>
                      <Textarea
                        id="excerpt"
                        rows={3}
                        {...register("excerpt")}
                        placeholder="Brief summary of the news"
                      />
                    </div>

                    <div>
                      <Label htmlFor="content">Content *</Label>
                      <Textarea
                        id="content"
                        rows={6}
                        {...register("content")}
                        placeholder="Full news content"
                      />
                      {errors.content && (
                        <p className="text-red-500 text-sm mt-1">{errors.content.message}</p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="imageUrl">Image URL</Label>
                      <Input
                        id="imageUrl"
                        {...register("imageUrl")}
                        placeholder="https://example.com/image.jpg"
                      />
                    </div>

                    <div>
                      <Label htmlFor="imageFile">Upload Image (JPG, PNG)</Label>
                      <Input
                        id="imageFile"
                        type="file"
                        accept=".jpg,.jpeg,.png"
                        className="file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary file:text-white hover:file:bg-primary/90"
                      />
                      <p className="text-xs text-gray-500 mt-1">Upload an image for the news article</p>
                    </div>

                    <div>
                      <Label htmlFor="attachmentFile">Upload Document (PDF)</Label>
                      <Input
                        id="attachmentFile"
                        type="file"
                        accept=".pdf"
                        className="file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-accent file:text-white hover:file:bg-accent/90"
                      />
                      <p className="text-xs text-gray-500 mt-1">Optional: Attach a PDF document</p>
                    </div>

                    <div>
                      <Label htmlFor="link">External Link</Label>
                      <Input
                        id="link"
                        {...register("link")}
                        placeholder="https://example.com (opens in new tab when clicked)"
                      />
                      <p className="text-xs text-gray-500 mt-1">Link to open when news item is clicked</p>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Switch
                        id="published"
                        checked={published}
                        onCheckedChange={(checked) => setValue("published", checked)}
                      />
                      <Label htmlFor="published">Publish immediately</Label>
                    </div>

                    <div className="flex space-x-2">
                      <Button
                        type="submit"
                        disabled={createNewsMutation.isPending || updateNewsMutation.isPending}
                      >
                        {isEditing ? "Update Article" : "Create Article"}
                      </Button>
                      {isEditing && (
                        <Button type="button" variant="outline" onClick={handleCancelEdit}>
                          Cancel
                        </Button>
                      )}
                    </div>
                  </form>
                </CardContent>
              </Card>

              {/* News List */}
              <Card>
                <CardHeader>
                  <CardTitle>Published Articles</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4 max-h-96 overflow-y-auto">
                    {newsLoading ? (
                      <p>Loading...</p>
                    ) : !Array.isArray(allNews) || allNews.length === 0 ? (
                      <p className="text-gray-500">No news articles yet.</p>
                    ) : (
                      allNews.map((article: any) => (
                        <div key={article.id} className="border rounded-lg p-4">
                          <div className="flex justify-between items-start mb-2">
                            <h3 className="font-semibold text-sm">{article.title}</h3>
                            <div className="flex space-x-1">
                              <Button
                                size="sm"
                                variant="ghost"
                                onClick={() => handleEdit(article)}
                              >
                                <Edit className="h-4 w-4" />
                              </Button>
                              <Button
                                size="sm"
                                variant="ghost"
                                onClick={() => deleteNewsMutation.mutate(article.id)}
                              >
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2 mb-2">
                            <Badge variant="outline">{article.category}</Badge>
                            {article.published ? (
                              <Badge className="bg-green-100 text-green-800">
                                <Eye className="h-3 w-3 mr-1" />
                                Published
                              </Badge>
                            ) : (
                              <Badge variant="secondary">
                                <EyeOff className="h-3 w-3 mr-1" />
                                Draft
                              </Badge>
                            )}
                          </div>
                          <p className="text-xs text-gray-600">
                            {new Date(article.createdAt).toLocaleDateString()}
                          </p>
                        </div>
                      ))
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="hero">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Edit className="h-5 w-5" />
                  <span>Hero Section Management</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="heroTitle">Main Title</Label>
                      <Input
                        id="heroTitle"
                        placeholder="JSS Polytechnic"
                        className="text-lg"
                      />
                    </div>
                    <div>
                      <Label htmlFor="heroSubtitle">Subtitle</Label>
                      <Input
                        id="heroSubtitle"
                        placeholder="Excellence in Technical Education"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="heroDescription">Description</Label>
                    <Textarea
                      id="heroDescription"
                      rows={4}
                      placeholder="Empowering students through innovative technical education and comprehensive skill development..."
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="primaryButtonText">Primary Button Text</Label>
                      <Input
                        id="primaryButtonText"
                        placeholder="Explore Programs"
                      />
                    </div>
                    <div>
                      <Label htmlFor="primaryButtonLink">Primary Button Link</Label>
                      <Input
                        id="primaryButtonLink"
                        placeholder="/programs"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="secondaryButtonText">Secondary Button Text</Label>
                      <Input
                        id="secondaryButtonText"
                        placeholder="Virtual Tour"
                      />
                    </div>
                    <div>
                      <Label htmlFor="secondaryButtonLink">Secondary Button Link</Label>
                      <Input
                        id="secondaryButtonLink"
                        placeholder="/virtual-tour"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="heroBackgroundImage">Background Image</Label>
                    <Input
                      id="heroBackgroundImage"
                      type="file"
                      accept=".jpg,.jpeg,.png"
                      className="file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary file:text-white hover:file:bg-primary/90"
                    />
                    <p className="text-xs text-gray-500 mt-1">Upload a high-quality background image (1920x1080 recommended)</p>
                  </div>

                  <div>
                    <Label htmlFor="heroVideo">Background Video URL</Label>
                    <Input
                      id="heroVideo"
                      placeholder="https://example.com/video.mp4"
                    />
                    <p className="text-xs text-gray-500 mt-1">Optional: Video background instead of image</p>
                  </div>

                  <Button className="w-full bg-primary hover:bg-primary/90">
                    Update Hero Section
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="pages">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <FileText className="h-5 w-5" />
                    <span>Page Content Management</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="pageSelect">Select Page to Edit</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Choose a page to edit" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="home">Home Page</SelectItem>
                          <SelectItem value="about">About JSS</SelectItem>
                          <SelectItem value="computer-science">Computer Science Engineering</SelectItem>
                          <SelectItem value="mechanical">Mechanical Engineering</SelectItem>
                          <SelectItem value="civil">Civil Engineering</SelectItem>
                          <SelectItem value="electronics">Electronics & Communication</SelectItem>
                          <SelectItem value="electrical">Electrical & Electronics</SelectItem>
                          <SelectItem value="information-science">Information Science</SelectItem>
                          <SelectItem value="contact">Contact Page</SelectItem>
                          <SelectItem value="facilities">Facilities</SelectItem>
                          <SelectItem value="admissions">Admissions</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="pageTitle">Page Title</Label>
                      <Input
                        id="pageTitle"
                        placeholder="Enter page title"
                      />
                    </div>

                    <div>
                      <Label htmlFor="pageMetaDescription">Meta Description (SEO)</Label>
                      <Textarea
                        id="pageMetaDescription"
                        rows={2}
                        placeholder="Brief description for search engines (150-160 characters)"
                      />
                    </div>

                    <div>
                      <Label htmlFor="pageContent">Page Content</Label>
                      <Textarea
                        id="pageContent"
                        rows={12}
                        placeholder="Enter the main content for this page..."
                      />
                      <p className="text-xs text-gray-500 mt-1">Use HTML formatting if needed</p>
                    </div>

                    <div>
                      <Label htmlFor="pageImages">Upload Images for Page</Label>
                      <Input
                        id="pageImages"
                        type="file"
                        multiple
                        accept=".jpg,.jpeg,.png"
                        className="file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-accent file:text-white hover:file:bg-accent/90"
                      />
                      <p className="text-xs text-gray-500 mt-1">Select multiple images to upload for this page</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <Button className="bg-primary hover:bg-primary/90">
                        Save Page Content
                      </Button>
                      <Button variant="outline">
                        Preview Changes
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Industrial Visit Integration</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="departmentSelect">Select Department</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Choose department for industrial visit content" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="computer-science">Computer Science Engineering</SelectItem>
                          <SelectItem value="mechanical">Mechanical Engineering</SelectItem>
                          <SelectItem value="civil">Civil Engineering</SelectItem>
                          <SelectItem value="electronics">Electronics & Communication</SelectItem>
                          <SelectItem value="electrical">Electrical & Electronics</SelectItem>
                          <SelectItem value="information-science">Information Science</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="visitTitle">Industrial Visit Title</Label>
                      <Input
                        id="visitTitle"
                        placeholder="Industry Visit to XYZ Company"
                      />
                    </div>

                    <div>
                      <Label htmlFor="visitDescription">Visit Description</Label>
                      <Textarea
                        id="visitDescription"
                        rows={4}
                        placeholder="Describe the industrial visit, learning outcomes, and student experiences..."
                      />
                    </div>

                    <div>
                      <Label htmlFor="visitImages">Upload Visit Images</Label>
                      <Input
                        id="visitImages"
                        type="file"
                        multiple
                        accept=".jpg,.jpeg,.png"
                        className="file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary file:text-white hover:file:bg-primary/90"
                      />
                    </div>

                    <Button className="w-full bg-accent hover:bg-accent/90">
                      Add Industrial Visit Content
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="contacts">
            <Card>
              <CardHeader>
                <CardTitle>Contact Submissions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {contactsLoading ? (
                    <p>Loading...</p>
                  ) : !Array.isArray(contacts) || contacts.length === 0 ? (
                    <p className="text-gray-500">No contact submissions yet.</p>
                  ) : (
                    contacts.map((contact: any) => (
                      <div key={contact.id} className="border rounded-lg p-4">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h3 className="font-semibold">
                              {contact.firstName} {contact.lastName}
                            </h3>
                            <p className="text-sm text-gray-600">{contact.email}</p>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Select
                              value={contact.status}
                              onValueChange={(status) =>
                                updateContactStatusMutation.mutate({ id: contact.id, status })
                              }
                            >
                              <SelectTrigger className="w-32">
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="pending">Pending</SelectItem>
                                <SelectItem value="reviewing">Reviewing</SelectItem>
                                <SelectItem value="resolved">Resolved</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                        <div className="mb-2">
                          <span className="text-sm font-medium">Subject: </span>
                          <span className="text-sm">{contact.subject}</span>
                        </div>
                        <p className="text-sm text-gray-700 mb-2">{contact.message}</p>
                        <p className="text-xs text-gray-500">
                          {new Date(contact.createdAt).toLocaleString()}
                        </p>
                      </div>
                    ))
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
