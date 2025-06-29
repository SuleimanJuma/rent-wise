
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Receipt, Bell, Shield, Calendar, FileText, MessageSquare, FolderOpen, Plus } from "lucide-react";

const Index = () => {
  const [activeRole, setActiveRole] = useState<'tenant' | 'landlord' | 'caretaker'>('tenant');

  const properties = [
    { id: 1, name: "Sunrise Apartments", unit: "A-12", rent: 25000, status: "paid", dueDate: "2024-01-01" },
    { id: 2, name: "Green Valley Estate", unit: "B-05", rent: 18000, status: "pending", dueDate: "2024-01-05" },
    { id: 3, name: "City Heights", unit: "C-08", rent: 32000, status: "overdue", dueDate: "2023-12-28" },
  ];

  const receipts = [
    { id: 1, property: "Sunrise Apartments", amount: 25000, date: "2023-12-01", method: "M-Pesa" },
    { id: 2, property: "Green Valley Estate", amount: 18000, date: "2023-11-28", method: "Bank Transfer" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-blue-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-green-600 rounded-xl flex items-center justify-center">
              <Receipt className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              RentWise
            </h1>
          </div>
          <div className="flex space-x-2">
            <Button variant="outline" size="sm">Login</Button>
            <Button size="sm" className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700">
              Get Started
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent">
            Revolutionize Rent Management
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            No more receipt piles, missed payments, or unauthorized fees. RentWise brings transparency, 
            efficiency, and trust to landlords, tenants, and caretakers across Africa.
          </p>
          
          {/* User Type Cards */}
          <div className="grid md:grid-cols-3 gap-8 mt-16 max-w-6xl mx-auto">
            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 bg-gradient-to-br from-blue-50 to-blue-100">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Receipt className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl text-blue-800">For Tenants</CardTitle>
                <CardDescription className="text-blue-600">Digital receipts & payment tracking</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3 text-left">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-sm">Digital rent receipts for every payment</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-sm">SMS/WhatsApp payment reminders</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-sm">Balance tracker & payment history</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-sm">In-app complaints & disputes</span>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 bg-gradient-to-br from-green-50 to-green-100">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl text-green-800">For Landlords</CardTitle>
                <CardDescription className="text-green-600">Complete property oversight</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3 text-left">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm">Dashboard of all units & rent status</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm">Real-time tenant payment records</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm">PDF reports for accounting</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm">Block unauthorized caretaker fees</span>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 bg-gradient-to-br from-purple-50 to-purple-100">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Bell className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl text-purple-800">For Caretakers</CardTitle>
                <CardDescription className="text-purple-600">Controlled access & transparency</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3 text-left">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-sm">Mark payments with M-Pesa proof</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-sm">Log maintenance issues</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-sm">No unauthorized fee setting</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-sm">Landlord-approved permissions only</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Dashboard Preview */}
      <section className="py-20 px-4 bg-white/50">
        <div className="container mx-auto">
          <h3 className="text-4xl font-bold text-center mb-4">Experience the Dashboard</h3>
          <p className="text-gray-600 text-center mb-12 text-lg">See how each user role interacts with RentWise</p>
          
          <Tabs value={activeRole} onValueChange={(value) => setActiveRole(value as any)} className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-3 mb-8 bg-gray-100 p-1 rounded-xl">
              <TabsTrigger value="tenant" className="data-[state=active]:bg-blue-500 data-[state=active]:text-white rounded-lg">
                Tenant View
              </TabsTrigger>
              <TabsTrigger value="landlord" className="data-[state=active]:bg-green-500 data-[state=active]:text-white rounded-lg">
                Landlord View
              </TabsTrigger>
              <TabsTrigger value="caretaker" className="data-[state=active]:bg-purple-500 data-[state=active]:text-white rounded-lg">
                Caretaker View
              </TabsTrigger>
            </TabsList>

            <TabsContent value="tenant" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Payment Status */}
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Calendar className="w-5 h-5 text-blue-500" />
                      <span>Payment Status</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {properties.slice(0, 2).map((property) => (
                      <div key={property.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                        <div>
                          <p className="font-medium">{property.name}</p>
                          <p className="text-sm text-gray-600">Unit {property.unit}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-bold">KSh {property.rent.toLocaleString()}</p>
                          <Badge variant={property.status === 'paid' ? 'default' : 'destructive'}>
                            {property.status}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                {/* Recent Receipts */}
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Receipt className="w-5 h-5 text-green-500" />
                      <span>Recent Receipts</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {receipts.map((receipt) => (
                      <div key={receipt.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                        <div>
                          <p className="font-medium">{receipt.property}</p>
                          <p className="text-sm text-gray-600">{receipt.date}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-bold">KSh {receipt.amount.toLocaleString()}</p>
                          <p className="text-sm text-gray-600">{receipt.method}</p>
                        </div>
                      </div>
                    ))}
                    <Button variant="outline" className="w-full">
                      <FolderOpen className="w-4 h-4 mr-2" />
                      View All Receipts
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="landlord" className="space-y-6">
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="bg-gradient-to-r from-green-500 to-green-600 text-white">
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-bold mb-2">12</h3>
                    <p>Total Properties</p>
                  </CardContent>
                </Card>
                <Card className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-bold mb-2">KSh 2.4M</h3>
                    <p>Monthly Revenue</p>
                  </CardContent>
                </Card>
                <Card className="bg-gradient-to-r from-orange-500 to-orange-600 text-white">
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-bold mb-2">3</h3>
                    <p>Pending Payments</p>
                  </CardContent>
                </Card>
              </div>
              
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span className="flex items-center space-x-2">
                      <Shield className="w-5 h-5 text-green-500" />
                      <span>Property Overview</span>
                    </span>
                    <Button size="sm">
                      <Plus className="w-4 h-4 mr-2" />
                      Add Property
                    </Button>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {properties.map((property) => (
                      <div key={property.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                        <div>
                          <p className="font-medium">{property.name}</p>
                          <p className="text-sm text-gray-600">Unit {property.unit}</p>
                        </div>
                        <div className="flex items-center space-x-4">
                          <div className="text-right">
                            <p className="font-bold">KSh {property.rent.toLocaleString()}</p>
                            <p className="text-sm text-gray-600">Due: {property.dueDate}</p>
                          </div>
                          <Badge variant={property.status === 'paid' ? 'default' : property.status === 'pending' ? 'secondary' : 'destructive'}>
                            {property.status}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="caretaker" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Bell className="w-5 h-5 text-purple-500" />
                      <span>Payment Verification</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                      <p className="font-medium text-yellow-800">Pending Verification</p>
                      <p className="text-sm text-yellow-700">Sunrise Apartments - Unit A-12</p>
                      <p className="text-sm text-yellow-700">Amount: KSh 25,000</p>
                      <div className="mt-3 space-x-2">
                        <Button size="sm" variant="outline">Request M-Pesa Code</Button>
                        <Button size="sm">Mark as Paid</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <MessageSquare className="w-5 h-5 text-purple-500" />
                      <span>Maintenance Log</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <p className="font-medium">Water pump repair</p>
                      <p className="text-sm text-gray-600">City Heights - Block C</p>
                      <Badge variant="secondary" className="mt-2">In Progress</Badge>
                    </div>
                    <Button variant="outline" className="w-full">
                      <Plus className="w-4 h-4 mr-2" />
                      Report New Issue
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 via-purple-600 to-green-600">
        <div className="container mx-auto text-center text-white">
          <h3 className="text-4xl font-bold mb-6">Ready to Transform Your Rent Management?</h3>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join thousands of landlords, tenants, and caretakers who trust RentWise for transparent, 
            efficient rent management across Africa.
          </p>
          <div className="space-x-4">
            <Button size="lg" variant="secondary" className="hover:scale-105 transition-transform">
              Start Free Trial
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 hover:scale-105 transition-all">
              Book Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="flex items-center justify-center space-x-2 mb-8">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-green-500 rounded-lg flex items-center justify-center">
              <Receipt className="w-5 h-5 text-white" />
            </div>
            <h4 className="text-xl font-bold">RentWise</h4>
          </div>
          <p className="text-center text-gray-400">
            © 2024 RentWise. Revolutionizing rent management across Africa.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
