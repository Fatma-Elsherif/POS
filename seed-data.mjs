import { drizzle } from 'drizzle-orm/mysql2';
import { suppliers, products, customers, expenseCategories } from './drizzle/schema.js';

const db = drizzle(process.env.DATABASE_URL);

async function seed() {
  console.log('🌱 Seeding database...');

  // Seed Suppliers
  const supplier1 = await db.insert(suppliers).values({
    supplierName: 'شركة التوريدات الأولى',
    contactName: 'أحمد محمد',
    phone: '0501234567',
    email: 'ahmed@supplier1.com',
    address: 'الرياض، المملكة العربية السعودية',
    isActive: 1,
  });

  const supplier2 = await db.insert(suppliers).values({
    supplierName: 'مؤسسة الجودة التجارية',
    contactName: 'فاطمة علي',
    phone: '0507654321',
    email: 'fatima@quality.com',
    address: 'جدة، المملكة العربية السعودية',
    isActive: 1,
  });

  console.log('✅ Suppliers seeded');

  // Seed Products
  await db.insert(products).values([
    {
      productName: 'شامبو للشعر الجاف',
      barcodeId: '6223000680759',
      supplierId: 1,
      retailPrice: 4500, // 45.00 SAR
      costPrice: 3000, // 30.00 SAR
      stockQuantity: 50,
      reorderLevel: 10,
      isActive: 1,
    },
    {
      productName: 'معجون أسنان',
      barcodeId: '8809264090664',
      supplierId: 1,
      retailPrice: 1500, // 15.00 SAR
      costPrice: 1000, // 10.00 SAR
      stockQuantity: 100,
      reorderLevel: 20,
      isActive: 1,
    },
    {
      productName: 'صابون سائل',
      barcodeId: '4564564564',
      supplierId: 2,
      retailPrice: 2500, // 25.00 SAR
      costPrice: 1800, // 18.00 SAR
      stockQuantity: 75,
      reorderLevel: 15,
      isActive: 1,
    },
    {
      productName: 'مناديل ورقية',
      barcodeId: '7891234567890',
      supplierId: 2,
      retailPrice: 800, // 8.00 SAR
      costPrice: 500, // 5.00 SAR
      stockQuantity: 200,
      reorderLevel: 50,
      isActive: 1,
    },
    {
      productName: 'فرشاة أسنان',
      barcodeId: '9876543210123',
      supplierId: 1,
      retailPrice: 1200, // 12.00 SAR
      costPrice: 800, // 8.00 SAR
      stockQuantity: 5, // Low stock for testing
      reorderLevel: 20,
      isActive: 1,
    },
  ]);

  console.log('✅ Products seeded');

  // Seed Customers
  await db.insert(customers).values([
    {
      customerName: 'محمد عبدالله',
      phone: '0551234567',
      email: 'mohammed@example.com',
      address: 'الرياض، حي النخيل',
      isActive: 1,
    },
    {
      customerName: 'سارة أحمد',
      phone: '0559876543',
      email: 'sara@example.com',
      address: 'جدة، حي الروضة',
      isActive: 1,
    },
    {
      customerName: 'خالد سعيد',
      phone: '0554567890',
      isActive: 1,
    },
  ]);

  console.log('✅ Customers seeded');

  // Seed Expense Categories
  await db.insert(expenseCategories).values([
    { categoryName: 'إيجار' },
    { categoryName: 'رواتب' },
    { categoryName: 'كهرباء وماء' },
    { categoryName: 'صيانة' },
    { categoryName: 'تسويق' },
    { categoryName: 'مصاريف إدارية' },
  ]);

  console.log('✅ Expense categories seeded');
  console.log('🎉 Database seeding completed!');
}

seed()
  .catch((error) => {
    console.error('❌ Seeding failed:', error);
    process.exit(1);
  })
  .then(() => {
    process.exit(0);
  });
