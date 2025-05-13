import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { contactFormSchema } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import {
  FaDiscord,
  FaFacebook,
  FaInstagram,
  FaTiktok,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import BCT_IMG from "../image/bct.jpg";

// Type for the contact form
type ContactFormValues = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Initialize form
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  // Setup mutation
  const mutation = useMutation({
    mutationFn: (data: ContactFormValues) =>
      apiRequest("POST", "/api/contact", data),
    onSuccess: async (response) => {
      const data = await response.json();
      if (data.success) {
        toast({
          title: "Thành công!",
          description:
            "Thông tin của bạn đã được gửi thành công. Chúng tôi sẽ liên hệ lại trong thời gian sớm nhất!",
          variant: "default",
        });
        setIsSubmitted(true);
      } else {
        toast({
          title: "Có lỗi xảy ra!",
          description:
            data.message || "Không thể gửi biểu mẫu. Vui lòng thử lại sau.",
          variant: "destructive",
        });
      }
    },
    onError: (error) => {
      toast({
        title: "Có lỗi xảy ra!",
        description: "Không thể gửi biểu mẫu. Vui lòng thử lại sau.",
        variant: "destructive",
      });
    },
  });

  // Form submission handler
  const onSubmit = (data: ContactFormValues) => {
    mutation.mutate(data);
  };

  return (
    <section id="contact" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-roboto text-[#004d99] mb-4">
            Liên Hệ Với Chúng Tôi
          </h2>
          <div className="w-24 h-1 bg-[#f7a100] mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-lg">
            Hãy liên hệ với chúng tôi để được tư vấn và báo giá miễn phí cho dự
            án của bạn.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
              <h3 className="text-2xl font-bold font-roboto text-[#004d99] mb-6">
                Thông Tin Liên Hệ
              </h3>

              <div className="flex items-start mb-6">
                <div className="bg-[#004d99] text-white p-3 rounded-lg mr-4">
                  <MapPin />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Địa Chỉ</h4>
                  <p>123 Nguyễn Văn Linh, Quận 7, TP. Hồ Chí Minh</p>
                </div>
              </div>

              <div className="flex items-start mb-6">
                <div className="bg-[#004d99] text-white p-3 rounded-lg mr-4">
                  <Phone />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Điện Thoại</h4>
                  <p>+84 28 1234 5678</p>
                  <p>+84 909 123 456</p>
                </div>
              </div>

              <div className="flex items-start mb-6">
                <div className="bg-[#004d99] text-white p-3 rounded-lg mr-4">
                  <Mail />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Email</h4>
                  <p>info@hoanglong.com</p>
                  <p>contact@hoanglong.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-[#004d99] text-white p-3 rounded-lg mr-4">
                  <Clock />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Giờ Làm Việc</h4>
                  <p>Thứ Hai - Thứ Sáu: 8:00 - 17:30</p>
                  <p>Thứ Bảy: 8:00 - 12:00</p>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <div className="w-full h-64 bg-gray-200 rounded">
                <div className="w-full h-full flex items-center justify-center bg-gray-100 border border-gray-300">
                  <iframe
                    src="https://www.google.com/maps?q=20.940672,106.271153&z=15&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Google Maps Location"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold font-roboto text-[#004d99] mb-6">
              Gửi Thông Tin Liên Hệ
            </h3>

            {isSubmitted ? (
              <div className="p-4 bg-green-100 text-green-700 rounded-md">
                <div className="flex items-center">
                  <div className="mr-2">✓</div>
                  <div>
                    Thông tin của bạn đã được gửi thành công. Chúng tôi sẽ liên
                    hệ lại trong thời gian sớm nhất!
                  </div>
                </div>
              </div>
            ) : (
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Họ và tên</FormLabel>
                          <FormControl>
                            <Input placeholder="Nhập họ và tên" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input placeholder="Nhập email" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Số điện thoại</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Nhập số điện thoại"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Chủ đề</FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="-- Chọn chủ đề --" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="Tư vấn dự án">
                                Tư vấn dự án
                              </SelectItem>
                              <SelectItem value="Báo giá xây dựng">
                                Báo giá xây dựng
                              </SelectItem>
                              <SelectItem value="Thiết kế kiến trúc">
                                Thiết kế kiến trúc
                              </SelectItem>
                              <SelectItem value="Hợp tác kinh doanh">
                                Hợp tác kinh doanh
                              </SelectItem>
                              <SelectItem value="Khác">Khác</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nội dung</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Nhập nội dung liên hệ"
                            rows={5}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    className="w-full bg-[#004d99] hover:bg-opacity-90"
                    disabled={mutation.isPending}
                  >
                    {mutation.isPending ? "Đang gửi..." : "Gửi Thông Tin"}
                  </Button>
                </form>
              </Form>
            )}

            <div className="flex flex-wrap gap-2">
              <div className="w-10 h-10 bg-[#1877f2] text-white flex items-center justify-center rounded-md hover:opacity-90 transition-opacity">
                <FaFacebook size={20} />
              </div>
              <div className="w-10 h-10 bg-[#ff0000] text-white flex items-center justify-center rounded-md hover:opacity-90 transition-opacity">
                <FaYoutube size={20} />
              </div>
              <div className="w-10 h-10 bg-black text-white flex items-center justify-center rounded-md hover:opacity-90 transition-opacity">
                <FaTiktok size={18} />
              </div>
              <div className="w-10 h-10 bg-gradient-to-r from-[#fd5949] to-[#d6249f] text-white flex items-center justify-center rounded-md hover:opacity-90 transition-opacity">
                <FaInstagram size={20} />
              </div>
              <div className="w-10 h-10 bg-[#5865F2] text-white flex items-center justify-center rounded-md hover:opacity-90 transition-opacity">
                <FaDiscord size={20} />
              </div>
              <div className="w-10 h-10 bg-[#1DA1F2] text-white flex items-center justify-center rounded-md hover:opacity-90 transition-opacity">
                <FaTwitter size={20} />
              </div>
            </div>

            {/* Certificate */}
            <div className="mt-6">
              <img src={BCT_IMG} alt="Bộ Công Thương" className="h-20" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
