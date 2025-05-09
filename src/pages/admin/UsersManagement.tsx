
import AdminLayout from "./AdminLayout";
import { useLanguage } from "@/context/LanguageContext";
import { Card } from "@/components/ui/card";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Plus, MoreVertical } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

// Mock user data
const users = [
  { id: 1, name: "Amit Kumar", email: "amit.kumar@gmail.com", role: "admin", status: "active", lastLogin: "Today, 10:30 AM" },
  { id: 2, name: "Priya Singh", email: "priya.singh@gmail.com", role: "user", status: "active", lastLogin: "Yesterday, 3:45 PM" },
  { id: 3, name: "Rahul Sharma", email: "rahul.sharma@gmail.com", role: "user", status: "inactive", lastLogin: "Jun 10, 2023" },
  { id: 4, name: "Meena Patel", email: "meena.patel@gmail.com", role: "user", status: "active", lastLogin: "Today, 9:15 AM" },
  { id: 5, name: "Vikram Joshi", email: "vikram.joshi@gmail.com", role: "user", status: "active", lastLogin: "Jun 12, 2023" }
];

const UsersManagement = () => {
  const { t } = useLanguage();
  const [searchQuery, setSearchQuery] = useState("");
  const [roleFilter, setRoleFilter] = useState<string | null>(null);
  const [statusFilter, setStatusFilter] = useState<string | null>(null);

  // Filter users based on search query and filters
  const filteredUsers = users.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         user.email.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesRole = roleFilter ? user.role === roleFilter : true;
    const matchesStatus = statusFilter ? user.status === statusFilter : true;
    
    return matchesSearch && matchesRole && matchesStatus;
  });

  // Get initials for avatar
  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <h1 className="text-2xl font-bold">{t("userManagement")}</h1>
          
          <div className="flex items-center gap-2 w-full sm:w-auto flex-wrap md:flex-nowrap">
            <div className="relative flex-grow md:w-40">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-400" />
              <Input
                type="search"
                placeholder={t("searchUsers")}
                className="pl-8"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <Select value={roleFilter || ""} onValueChange={val => setRoleFilter(val || null)}>
              <SelectTrigger className="w-28">
                <SelectValue placeholder={t("role")} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">{t("allRoles")}</SelectItem>
                <SelectItem value="admin">{t("admin")}</SelectItem>
                <SelectItem value="user">{t("user")}</SelectItem>
              </SelectContent>
            </Select>
            
            <Select value={statusFilter || ""} onValueChange={val => setStatusFilter(val || null)}>
              <SelectTrigger className="w-28">
                <SelectValue placeholder={t("status")} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">{t("allStatus")}</SelectItem>
                <SelectItem value="active">{t("active")}</SelectItem>
                <SelectItem value="inactive">{t("inactive")}</SelectItem>
              </SelectContent>
            </Select>
            
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              {t("newUser")}
            </Button>
          </div>
        </div>
        
        <Card className="overflow-hidden">
          <ScrollArea className="h-[calc(100vh-260px)]">
            <div className="p-0">
              <table className="w-full">
                <thead>
                  <tr className="bg-muted/50">
                    <th className="text-left p-3">{t("user")}</th>
                    <th className="text-left p-3">{t("email")}</th>
                    <th className="text-left p-3">{t("role")}</th>
                    <th className="text-left p-3">{t("status")}</th>
                    <th className="text-left p-3">{t("lastLogin")}</th>
                    <th className="text-right p-3">{t("actions")}</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {filteredUsers.map((user) => (
                    <tr key={user.id} className="hover:bg-muted/50">
                      <td className="p-3">
                        <div className="flex items-center gap-3">
                          <Avatar>
                            <AvatarFallback>{getInitials(user.name)}</AvatarFallback>
                          </Avatar>
                          <span className="font-medium">{user.name}</span>
                        </div>
                      </td>
                      <td className="p-3">{user.email}</td>
                      <td className="p-3">
                        <span className={`px-2 py-1 rounded-md text-xs ${
                          user.role === "admin" ? "bg-purple-100 text-purple-800" : "bg-gray-100 text-gray-800"
                        }`}>
                          {t(user.role)}
                        </span>
                      </td>
                      <td className="p-3">
                        <span className={`px-2 py-1 rounded-md text-xs ${
                          user.status === "active" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                        }`}>
                          {t(user.status)}
                        </span>
                      </td>
                      <td className="p-3 text-sm text-gray-500">{user.lastLogin}</td>
                      <td className="p-3 text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon">
                              <MoreVertical className="h-4 w-4" />
                              <span className="sr-only">{t("open")}</span>
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>{t("editUser")}</DropdownMenuItem>
                            <DropdownMenuItem>{t("resetPassword")}</DropdownMenuItem>
                            <DropdownMenuItem className="text-red-600">
                              {user.status === "active" ? t("deactivate") : t("activate")}
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ScrollArea>
        </Card>
      </div>
    </AdminLayout>
  );
};

export default UsersManagement;
