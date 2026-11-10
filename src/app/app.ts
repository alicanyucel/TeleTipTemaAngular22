import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

const translations = {
  tr: {
    workspace: 'ÇALIŞMA ALANI', overview: 'Genel Bakış', appointments: 'Randevular', patients: 'Hastalar',
    messages: 'Mesajlar', reports: 'Raporlar', management: 'YÖNETİM', payments: 'Ödemeler', settings: 'Ayarlar',
    supportTitle: 'Yardıma mı ihtiyacınız var?', supportDescription: 'Destek ekibimiz size yardımcı olmaya hazır.',
    supportLink: 'Destek merkezine git', specialty: 'Kardiyoloji Uzmanı', pages: 'Sayfalar',
    search: 'Hasta veya işlem ara...', login: 'Giriş yap', register: 'Kayıt ol', notifications: 'Bildirimler',
    today: 'SALI, 10 KASIM 2026', greeting: 'Merhaba, Dr. Ayşe', welcome: 'Bugün kliniğinizde neler olup bittiğine bir göz atın.',
    newAppointment: 'Yeni randevu', dailySummary: 'Günlük özet', todaysAppointments: 'Bugünkü randevular',
    comparedLastWeek: 'Geçen haftaya göre', totalPatients: 'Toplam hasta', thisMonth: 'Bu ay',
    newPatients: '+48 yeni hasta', pendingMessages: 'Bekleyen mesajlar', waitingReply: 'Yanıt bekliyor',
    oldestMessage: 'En eski mesaj', ago24: '24 dk önce', todaysAppointmentsHeading: 'Bugünkü randevular',
    allSee: 'Tümünü gör', inCall: 'Görüşmede', confirmed: 'Onaylandı', waiting: 'Bekliyor',
    checkup: 'Kontrol muayenesi', firstVisit: 'İlk görüşme', followup: 'Takip görüşmesi',
    resultsReview: 'Sonuç değerlendirme', nextAppointment: 'SIRADAKİ RANDEVU', minutes12: '12 dk',
    videoCall: 'Görüntülü görüşme', joinCall: 'Görüşmeye katıl', patientDetails: 'Hasta detayları',
    todaysAvailability: 'Bugünkü müsaitlik', workingHours: 'Çalışma saatleri: 09:00 – 17:00',
    full: 'dolu', booked: 'Dolu', available: 'Müsait', availableSlots: '1 boş zaman aralığı',
    planSlot: 'Boş aralığı planla', patientMeetings: 'Hasta görüşmeleri',
    weeklyMeetings: 'Bu haftaki tamamlanan çevrimiçi görüşmeler', thisWeek: 'Bu hafta',
    meetings: 'görüşme', vsLastWeek: 'geçen haftaya göre', latestPatients: 'Son hastalar',
    recentRegistrations: 'Yakın zamanda kaydolan hastalar', patientList: 'Hasta listesi',
    newPatient: 'Yeni hasta', returningPatient: 'Takip hastası', todayAt: 'Bugün, 08:42',
    yesterdayAt16: 'Dün, 16:20', yesterdayAt14: 'Dün, 14:05', secureData: 'Sağlık verileriniz güvende ve şifreli.',
    copyright: '© 2026 Ali Can Yücel. Her hakkı saklıdır.', language: 'Dil',
    darkTheme: 'Gece temasını aç', lightTheme: 'Gündüz temasını aç', dark: 'Gece', light: 'Gündüz',
    authTitleLogin: 'Hesabınıza giriş yapın', authTitleRegister: 'Hesabınızı oluşturun',
    authIntro: 'Güvenli teletıp panelinize devam edin.', authIntroRegister: 'Sağlık hizmetinizi dijitalde yönetmeye başlayın.',
    fullName: 'Ad soyad', email: 'E-posta adresi', password: 'Şifre', passwordHint: 'En az 8 karakter',
    rememberMe: 'Beni hatırla', forgotPassword: 'Şifremi unuttum', submitLogin: 'Giriş yap',
    submitRegister: 'Hesap oluştur', noAccount: 'Hesabınız yok mu?', hasAccount: 'Zaten hesabınız var mı?',
    createAccount: 'Kayıt ol', backToLogin: 'Giriş yap', close: 'Kapat',
    demoNotice: 'Bu arayüz demosudur. Kimlik doğrulama henüz sunucuya bağlı değildir.',
    loginSuccess: 'Demo giriş formu gönderildi.', registerSuccess: 'Demo kayıt formu gönderildi.',
    minutes: 'dk', hours: 'saat', brandLabel: 'MediCare ana sayfa', appointmentOptions: 'Randevu seçenekleri',
    mon: 'Pzt', tue: 'Sal', wed: 'Çar', thu: 'Per', fri: 'Cum', sat: 'Cmt', sun: 'Paz',
    weeklyChartLabel: 'Haftanın günlerine göre hasta görüşmeleri',
  },
  en: {
    workspace: 'WORKSPACE', overview: 'Overview', appointments: 'Appointments', patients: 'Patients',
    messages: 'Messages', reports: 'Reports', management: 'MANAGEMENT', payments: 'Payments', settings: 'Settings',
    supportTitle: 'Need help?', supportDescription: 'Our support team is ready to help you.',
    supportLink: 'Visit help center', specialty: 'Cardiology Specialist', pages: 'Pages',
    search: 'Search patients or actions...', login: 'Log in', register: 'Sign up', notifications: 'Notifications',
    today: 'TUESDAY, NOVEMBER 10, 2026', greeting: 'Hello, Dr. Ayşe', welcome: 'Here is what is happening at your clinic today.',
    newAppointment: 'New appointment', dailySummary: 'Daily summary', todaysAppointments: "Today's appointments",
    comparedLastWeek: 'Compared to last week', totalPatients: 'Total patients', thisMonth: 'This month',
    newPatients: '+48 new patients', pendingMessages: 'Unread messages', waitingReply: 'Awaiting reply',
    oldestMessage: 'Oldest message', ago24: '24 min ago', todaysAppointmentsHeading: "Today's appointments",
    allSee: 'View all', inCall: 'In call', confirmed: 'Confirmed', waiting: 'Waiting',
    checkup: 'Follow-up checkup', firstVisit: 'Initial consultation', followup: 'Follow-up visit',
    resultsReview: 'Results review', nextAppointment: 'NEXT APPOINTMENT', minutes12: '12 min',
    videoCall: 'Video consultation', joinCall: 'Join consultation', patientDetails: 'Patient details',
    todaysAvailability: "Today's availability", workingHours: 'Office hours: 9:00 AM – 5:00 PM',
    full: 'booked', booked: 'Booked', available: 'Available', availableSlots: '1 available time slot',
    planSlot: 'Schedule this slot', patientMeetings: 'Patient consultations',
    weeklyMeetings: 'Completed online consultations this week', thisWeek: 'This week',
    meetings: 'consultations', vsLastWeek: 'vs. last week', latestPatients: 'Recent patients',
    recentRegistrations: 'Recently registered patients', patientList: 'Patient list',
    newPatient: 'New patient', returningPatient: 'Returning patient', todayAt: 'Today, 8:42 AM',
    yesterdayAt16: 'Yesterday, 4:20 PM', yesterdayAt14: 'Yesterday, 2:05 PM', secureData: 'Your health data is secure and encrypted.',
    copyright: '© 2026 Ali Can Yücel. All rights reserved.', language: 'Language',
    darkTheme: 'Switch to dark theme', lightTheme: 'Switch to light theme', dark: 'Dark', light: 'Light',
    authTitleLogin: 'Sign in to your account', authTitleRegister: 'Create your account',
    authIntro: 'Continue to your secure telehealth dashboard.', authIntroRegister: 'Start managing your care online.',
    fullName: 'Full name', email: 'Email address', password: 'Password', passwordHint: 'At least 8 characters',
    rememberMe: 'Remember me', forgotPassword: 'Forgot password?', submitLogin: 'Log in',
    submitRegister: 'Create account', noAccount: "Don't have an account?", hasAccount: 'Already have an account?',
    createAccount: 'Sign up', backToLogin: 'Log in', close: 'Close',
    demoNotice: 'This is a UI demo. Authentication is not connected to a server yet.',
    loginSuccess: 'Demo login form submitted.', registerSuccess: 'Demo registration form submitted.',
    minutes: 'min', hours: 'hours', brandLabel: 'MediCare home', appointmentOptions: 'Appointment options',
    mon: 'Mon', tue: 'Tue', wed: 'Wed', thu: 'Thu', fri: 'Fri', sat: 'Sat', sun: 'Sun',
    weeklyChartLabel: 'Patient consultations by day of the week',
  },
} as const;

@Component({
  imports: [RouterOutlet],
  selector: 'app-root',
  templateUrl: './app.html',
})
export class App {
  protected readonly language = signal<'tr' | 'en'>('tr');
  protected readonly darkTheme = signal(false);
  protected readonly authMode = signal<'login' | 'register' | null>(null);
  protected readonly authNotice = signal('');

  protected t(key: keyof typeof translations.tr): string {
    return translations[this.language()][key];
  }

  protected toggleLanguage(): void {
    this.language.update((current) => current === 'tr' ? 'en' : 'tr');
    this.authNotice.set('');
  }

  protected toggleTheme(): void {
    this.darkTheme.update((current) => !current);
  }

  protected openAuth(mode: 'login' | 'register'): void {
    this.authNotice.set('');
    this.authMode.set(mode);
  }

  protected closeAuth(): void {
    this.authMode.set(null);
    this.authNotice.set('');
  }

  protected submitAuth(event: Event): void {
    event.preventDefault();
    this.authNotice.set(this.authMode() === 'register' ? this.t('registerSuccess') : this.t('loginSuccess'));
  }
}
