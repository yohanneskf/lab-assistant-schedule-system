import prisma from '@prisma/client'

async function main() {
  console.log("Seeding database with default data...")

  const adminUser = await prisma.user.create({
    data: {
      email: "admin@lab.edu",
      password: "admin123",
      role: "admin",
    },
  })

  const timeSlotsData = [
    { dayOfWeek: "Monday", startTime: "08:00", endTime: "09:00" },
    { dayOfWeek: "Monday", startTime: "09:00", endTime: "10:00" },
    // Add all 24 time slots
    { dayOfWeek: "Thursday", startTime: "14:00", endTime: "15:00" },
  ]
  await prisma.timeSlot.createMany({ data: timeSlotsData })

  const labRoomsData = [
    { name: "Computer Lab A", capacity: 30, location: "Building 1, Floor 2", equipment: ["Computers", "Projector"] },
    { name: "Computer Lab B", capacity: 25, location: "Building 1, Floor 3", equipment: ["Computers", "Projector"] },
  ]
  await prisma.labRoom.createMany({ data: labRoomsData })

  const labAssistant = await prisma.labAssistant.create({
    data: {
      labAssistantId: "LA001",
      username: "john_doe",
      firstName: "John",
      lastName: "Doe",
      email: "john.doe@lab.edu",
      password: "assistant123",
      department: "Computer Science",
    },
  })
  
  // Add other seed data as needed
  
  console.log("Seeding complete.")
}

main()
  .catch(e => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })