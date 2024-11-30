const path = require('path');
const AdmZip = require('adm-zip');

// تحديد مسار ملف BOT.zip
const zipFilePath = './BOT.zip';

// إنشاء كائن لفتح الملف
const zip = new AdmZip(zipFilePath);

// تحديد مجلد الاستخراج (يمكنك تغييره)
const outputFolder = path.join(__dirname, 'BOT_extracted');

// استخراج محتويات ملف zip
zip.extractAllTo(outputFolder, true);
console.log(`تم استخراج محتويات BOT.zip بنجاح إلى المجلد: ${outputFolder}`);
