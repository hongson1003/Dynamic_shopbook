import config from '../../config';

export const BASE_URL = config.BASE_URL;

const combine = (...params: string[]) => `${BASE_URL}/api/${params.join('/')}`;

// Authentication
const AUTH_URL = `${BASE_URL}/auth/app`;
export const SIGN_IN_URL = combine('auth/zalo/signin');
export const SIGN_OUT_URL = `${AUTH_URL}/signout`;

//USER
export const CUSTOMER_URL = combine('customer');
export const CUSTOMER_PROFILE_URL = `${CUSTOMER_URL}/info`;

//CUSTOMER HISTORY

// ZALO
export const ZALO_PHONE_NUMBER_URL = `${BASE_URL}/api/customer/zalo-phone-number`;
//USER
export const USER_URL = combine('user');
export const USER_PROFILE_URL = `${USER_URL}/info`;

//CUSTOMER HISTORY
export const CUSTOMER_HISTORY_URL = `${BASE_URL}/api/customer-history`;

// ORDER
export const ORDER_URL = combine('customer/orders');
export const REORDER_ORDER_URL = combine('customer/orders/reorder');

export const EXECUTE_ORDER_URL = combine('customer/orders/execute');
export const ORDER_USER_URL = `${ORDER_URL}`;

// SALE-PACKAGE
export const SALE_PACKAGE_URL = `${BASE_URL}/api/sale-package`;

//SUBSCRIPTION
export const SUBSCRIPTION_URL = `${BASE_URL}/api/subscription`;

//CART
export const CART_URL = combine('customer/carts');
export const CART_SEARCH_URL = combine('customer/carts/search');
export const UPDATE_CART_UNIT_PRICE_URL = combine(
  'customer/carts/update-unit-price',
);

// Product
export const PRODUCT_URL = combine('product');
export const PRODUCT_SEARCH_URL = combine('product/search');

// Category
export const CATEGORY_SEARCH_URL = combine('product/categories/search');
export const CATEGORY_URL = combine('product/categories');

// Home Config
export const HOME_CONFIG_URL = combine('zapp/home-configs/s');

// Location
export const SHIPPING_LOCATION_URL = `${BASE_URL}/api/shipping/location`;

// Store Information
export const STORE_INFORMATION_URL = `${BASE_URL}/api/store-informations`;

//bank account
export const BANK_ACCOUNT_URL = `${BASE_URL}/api/bank-account`;

// delivery
export const DELIVERY_ADDRESS_URL = `${BASE_URL}/api/customer/delivery-addresses`;

// FAQS
export const FAQS_URL = `${BASE_URL}/api/cms/categories/s`;

export const CMS_CATEGORY_SLUG_URL = `${BASE_URL}/api/cms/categories/s`;

//Upload
export const UPLOAD_URL = `${BASE_URL}/upload/media`;
export const UPLOAD_ZALO_URL = `${BASE_URL}/api/zalo/upload/media`;

//sale
export const SALE_URL = `${BASE_URL}/api/sale`;

//promotion
export const PROMOTION_URL = `${BASE_URL}/api/promotion`;

// PROMOTION CAN USE
export const PROMOTION_CAN_USE_URL = combine('promotion/can-use');

//banner
export const BANNER_URL = `${BASE_URL}/api/banners`;

// Location
export const SHIPPING_LOCATION = `${BASE_URL}/api/shipping/location`;

//membership-rank
export const MEMBERSHIP_RANK_URL = `${BASE_URL}/api/organization/membership-configs`;

// membership-history
export const MEMBERSHIP_HISTORY = `${BASE_URL}/api/customer/points-history`;

// membership-history
export const MEMBERSHIP_RANK_HISTORY = `${BASE_URL}/api/customer/membership/history`;

// Search Products
export const SEARCH_PRODUCT_URL = `${BASE_URL}/api/product-config/search`;

// notification
export const NOTIFICATION_URL = `${BASE_URL}/api/notifications`;

// notification read all
export const NOTIFICATION_URL_READ_ALL = `${BASE_URL}/api/notifications/read-all`;

export const NOTIFICATION_UN_READ = `${BASE_URL}/${NOTIFICATION_URL}/total-unread`;

// Introduce url
export const INTRODUCE_WEB_URL = 'https://suongtuyet.com/gioi-thieu';

//Post url
export const POST_URL = `${BASE_URL}/api/cms`;

// Organization url
export const ORGANIZATION_APP_URL = `${BASE_URL}/api/organization`;

// Organization Config URL
export const ORGANIZATION_URL = `${BASE_URL}/api/organization/options`;

// Store config url
export const STORE_CONFIG_URL = combine('organization/options/search');

export const ALL_STORE_URL = combine('organization/get-all-store');

// app url
export const ZAPP_URL = combine('zapp');

// Store config url
export const SEARCH_COUPON_URL = combine('promotion/coupon/items/search');

//System Config
export const SYSTEM_CONFIG_URL = `${BASE_URL}/api`;

// service url
export const ORDER_SERVICE_URL = combine('service');

export const ANDROID_BANK_DEEPLINK =
  'https://api.vietqr.io/v2/android-app-deeplinks';

export const IOS_BANK_DEEPLINK = 'https://api.vietqr.io/v2/ios-app-deeplinks';

export const ZALO_POST_URL = `${BASE_URL}/api/zalo/article`;
