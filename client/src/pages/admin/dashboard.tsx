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
  });

  const { data: contacts, isLoading: contactsLoading } = useQuery({
    queryKey: ["/api/admin/contacts"],
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
                  <p className="text-3xl font-bold text-primary">{allNews?.length || 0}</p>
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
                  <p className="text-3xl font-bold text-primary">{contacts?.length || 0}</p>
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
                  <p className="text-3xl font-bold text-primary">{stats?.visitors || 0}</p>
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
          <TabsList>
            <TabsTrigger value="news">News Management</TabsTrigger>
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
                    ) : allNews?.length === 0 ? (
                      <p className="text-gray-500">No news articles yet.</p>
                    ) : (
                      allNews?.map((article: any) => (
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

          <TabsContent value="contacts">
            <Card>
              <CardHeader>
                <CardTitle>Contact Submissions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {contactsLoading ? (
                    <p>Loading...</p>
                  ) : contacts?.length === 0 ? (
                    <p className="text-gray-500">No contact submissions yet.</p>
                  ) : (
                    contacts?.map((contact: any) => (
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
