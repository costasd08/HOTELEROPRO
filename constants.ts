import { ReservationStatus, AccountingEntryType, AccountingExpenseCategory, PaymentMethod, AccountingIncomeCategory, EmployeeTransactionType, MenuItemCategory, OrderStatus, InventoryCategoryType, MaintenanceTaskStatus, MaintenanceUrgency, MaintenanceLocationType, MarketingCampaignStatus, SocialMediaPlatform, SocialMediaPostStatus, EmailCampaignStatus, RoomCleaningStatus, TargetedCampaignChannel, FeedbackType, FeedbackSource, FeedbackStatus } from './types'; // Added Feedback enums

export const APP_NAME = "Gestión Hotelera Pro"; 

export const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY; 
export const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID; 
export const GOOGLE_CALENDAR_SCOPE = "https://www.googleapis.com/auth/calendar.events"; 


export const NAVIGATION_LINKS = [
  { path: '/', label: 'Panel de Control', icon: 'home' },
  { path: '/calendar', label: 'Calendario', icon: 'calendar' },
  { path: '/reservations', label: 'Reservas', icon: 'book' },
  { path: '/properties', label: 'Propiedades', icon: 'building' }, 
  { path: '/housekeeping', label: 'Limpieza', icon: 'sparkles' }, 
  { path: '/restaurant', label: 'Restaurante', icon: 'utensils' },
  { path: '/maintenance', label: 'Mantenimiento', icon: 'wrenchScrewdriver' },
  { path: '/marketing', label: 'Marketing', icon: 'bullhorn' },
  { path: '/guest-feedback', label: 'Feedback Huéspedes', icon: 'chatBubbleLeftRight' },
  { path: '/analytics', label: 'Analíticas Avanzadas', icon: 'presentationChartLine' }, // New Analytics Link
  { path: '/customers', label: 'Clientes', icon: 'users' },
  { path: '/employees', label: 'Personal', icon: 'briefcase'}, 
  { path: '/accounting', label: 'Contabilidad', icon: 'cash' },
  { path: '/inventory', label: 'Inventarios', icon: 'clipboardList' }, 
  { path: '/payments', label: 'Pagos Reservas', icon: 'receipt' }, 
];

export const RESERVATION_STATUS_OPTIONS = Object.values(ReservationStatus).map(status => ({
  value: status,
  label: status,
}));

export const ACCOUNTING_ENTRY_TYPE_OPTIONS = Object.values(AccountingEntryType).map(type => ({
  value: type,
  label: type,
}));

export const ACCOUNTING_EXPENSE_CATEGORY_OPTIONS = Object.values(AccountingExpenseCategory).map(category => ({
  value: category,
  label: category,
}));

export const ACCOUNTING_INCOME_CATEGORY_OPTIONS = Object.values(AccountingIncomeCategory).map(category => ({
    value: category,
    label: category,
}));


export const PAYMENT_METHOD_OPTIONS = Object.values(PaymentMethod).map(method => ({
    value: method,
    label: method,
}));

export const EMPLOYEE_TRANSACTION_TYPE_OPTIONS = Object.values(EmployeeTransactionType).map(type => ({
    value: type,
    label: type,
}));

export const MENU_ITEM_CATEGORY_OPTIONS = Object.values(MenuItemCategory).map(category => ({
    value: category,
    label: category,
}));

export const ORDER_STATUS_OPTIONS = Object.values(OrderStatus).map(status => ({
    value: status,
    label: status,
}));

export const INVENTORY_CATEGORY_OPTIONS = Object.values(InventoryCategoryType).map(category => ({
    value: category,
    label: category.replace(/_/g, ' '), 
}));

export const RECIPE_UNIT_OPTIONS = [
  { value: 'g', label: 'Gramo (g)' },
  { value: 'kg', label: 'Kilogramo (kg)' },
  { value: 'ml', label: 'Mililitro (ml)' },
  { value: 'L', label: 'Litro (L)' },
  { value: 'unidad', label: 'Unidad (un.)' },
  { value: 'pieza', label: 'Pieza (pz.)' },
  { value: 'cucharada', label: 'Cucharada (cda.)' },
  { value: 'cucharadita', label: 'Cucharadita (cdta.)' },
  { value: 'taza', label: 'Taza' },
  { value: 'pizca', label: 'Pizca' },
];

export const MAINTENANCE_TASK_STATUS_OPTIONS = Object.values(MaintenanceTaskStatus).map(status => ({
    value: status,
    label: status,
}));

export const MAINTENANCE_URGENCY_OPTIONS = Object.values(MaintenanceUrgency).map(urgency => ({
    value: urgency,
    label: urgency,
}));

export const MAINTENANCE_LOCATION_TYPE_OPTIONS = Object.values(MaintenanceLocationType).map(type => ({
    value: type,
    label: type.replace(/_/g, ' '), 
}));

export const MARKETING_CAMPAIGN_STATUS_OPTIONS = Object.values(MarketingCampaignStatus).map(status => ({
    value: status,
    label: status,
}));

export const SOCIAL_MEDIA_PLATFORM_OPTIONS = Object.values(SocialMediaPlatform).map(platform => ({
    value: platform,
    label: platform,
}));

export const SOCIAL_MEDIA_POST_STATUS_OPTIONS = Object.values(SocialMediaPostStatus).map(status => ({
    value: status,
    label: status,
}));

export const EMAIL_CAMPAIGN_STATUS_OPTIONS = Object.values(EmailCampaignStatus).map(status => ({
    value: status,
    label: status,
}));

export const TARGETED_CAMPAIGN_CHANNEL_OPTIONS = Object.values(TargetedCampaignChannel).map(channel => ({
    value: channel,
    label: channel,
}));

export const ROOM_CLEANING_STATUS_OPTIONS = Object.values(RoomCleaningStatus).map(status => ({
    value: status,
    label: status.replace(/_/g, ' '),
}));

// Guest Feedback Module Enum Options
export const FEEDBACK_TYPE_OPTIONS = Object.values(FeedbackType).map(type => ({
    value: type,
    label: type,
}));

export const FEEDBACK_SOURCE_OPTIONS = Object.values(FeedbackSource).map(source => ({
    value: source,
    label: source.replace(/_/g, ' '),
}));

export const FEEDBACK_STATUS_OPTIONS = Object.values(FeedbackStatus).map(status => ({
    value: status,
    label: status.replace(/_/g, ' '),
}));


export const MOCK_PROPERTY_COLORS = [
  { name: 'Azul Primario', class: 'bg-primary text-white' },
  { name: 'Azul Acento', class: 'bg-accent text-white' },
  { name: 'Verde Esmeralda', class: 'bg-emerald-500 text-white' }, 
  { name: 'Ámbar Intenso', class: 'bg-amber-500 text-black' },   
  { name: 'Rojo Carmesí', class: 'bg-rose-600 text-white' },    
  { name: 'Gris Pizarra', class: 'bg-slate-500 text-white' },  
  { name: 'Cian Vibrante', class: 'bg-cyan-500 text-white' },    
  { name: 'Naranja Terracota', class: 'bg-orange-600 text-white' },
  { name: 'Violeta Profundo', class: 'bg-violet-600 text-white' },
  { name: 'Lima Fresco', class: 'bg-lime-500 text-black' },
];

export const AMENITY_OPTIONS = [
  'Terraza',
  'Baño Propio',
  'Área de Fogatas',
  'Hamaca',
  'Ventilador',
  'Clima', // A/C
  'Asador', // Grill
];

// Mock Data Keys
export const MOCK_CUSTOMERS_DATA_KEY = 'mockCustomersData';
export const MOCK_PROPERTIES_DATA_KEY = 'mockPropertiesData';
export const MOCK_RESERVATIONS_DATA_KEY = 'mockReservationsData';
export const MOCK_ACCOUNTING_ENTRIES_DATA_KEY = 'mockAccountingEntriesData';
export const MOCK_EMPLOYEES_DATA_KEY = 'mockEmployeesData'; 
export const MOCK_EMPLOYEE_TRANSACTIONS_DATA_KEY = 'mockEmployeeTransactionsData'; 
export const MOCK_MENU_ITEMS_DATA_KEY = 'mockMenuItemsData';
export const MOCK_ORDERS_DATA_KEY = 'mockOrdersData';
export const MOCK_INVENTORY_ITEMS_DATA_KEY = 'mockInventoryItemsData';
export const MOCK_MENU_ITEM_COST_ANALYSIS_DATA_KEY = 'mockMenuItemCostAnalysisData';
export const MOCK_MAINTENANCE_REQUESTS_DATA_KEY = 'mockMaintenanceRequestsData';
export const MOCK_MARKETING_CAMPAIGNS_DATA_KEY = 'mockMarketingCampaignsData';
export const MOCK_SOCIAL_MEDIA_POSTS_DATA_KEY = 'mockSocialMediaPostsData';
export const MOCK_EMAIL_CAMPAIGNS_DATA_KEY = 'mockEmailCampaignsData';
export const MOCK_TARGETED_CAMPAIGNS_DATA_KEY = 'mockTargetedCampaignsData'; 
export const MOCK_GUEST_FEEDBACK_DATA_KEY = 'mockGuestFeedbackData';
export const APP_SETTINGS_KEY = 'appSettings';
// No specific MOCK_DATA_KEY for Analytics as it aggregates from others.