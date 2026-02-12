/**
 * PHONEPE CONFIGURATION
 * Yahan apni real details daalein.
 * 
 * NOTE: Salt Key ko frontend par rakhna risky hota hai agar aap professional level par kaafi sales kar rahe hain. 
 * Humne neeche backend integration (Supabase) ka option bhi diya hai.
 */

const PHONEPE_CONFIG = {
    MERCHANT_ID: "YOUR_MERCHANT_ID_HERE", // Example: PGMDKT01
    SALT_KEY: "YOUR_SALT_KEY_HERE",       // Example: d823e...
    SALT_INDEX: "1",                     // Default is "1"
    ENV: "PRODUCTION",                   // "SANDBOX" or "PRODUCTION"
    
    // Agar aap Supabase use kar rahe hain toh uska URL yahan aayega
    SUPABASE_FUNCTION_URL: "https://your-project-id.supabase.co/functions/v1/phonepe-payment"
};

export default PHONEPE_CONFIG;
