import { PrismaClient } from '@prisma/client'
import {faker} from '@faker-js/faker';

const prisma = new PrismaClient()

async function main() {

  await prisma.todo.createMany({
    data: Array.from({length:25}, ()=>{

      return {
        title: faker.lorem.text(),
        body: faker.lorem.paragraph(),
      }
      
    }),
  })

  // await prisma.user.createMany({
  //   data: Array.from({length:25}, ()=>{

  //     return {
  //       name: faker.internet.userName(),
  //       email: faker.internet.email(),
  //       address:{
  //         street:faker.location.street(),
  //         city:faker.location.city(),
  //         state:faker.location.state(),
  //         zip:faker.location.zipCode(),
  
  //       }
        
  //     }

  //   }),
  // })

}

main()
  // for discover errors 
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })