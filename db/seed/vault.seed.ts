import faker from 'faker'
import { Currency, PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export async function vaultSeed() {
  console.log('Vault seed')

  const campaign = await prisma.campaign.findFirst()

  if (!campaign) {
    throw new Error('There are no campaigns created yet!')
  }

  const insert = await prisma.vault.createMany({
    data: [
      {
        currency: Currency.BGN,
        amount: faker.datatype.number({ min: 1, max: 1000 }),
        campaignId: campaign.id,
      },
      {
        currency: Currency.BGN,
        amount: faker.datatype.number({ min: 1, max: 1000 }),
        campaignId: campaign.id,
      },
      {
        currency: Currency.BGN,
        amount: faker.datatype.number({ min: 1, max: 1000 }),
        campaignId: campaign.id,
      },
      {
        currency: Currency.BGN,
        amount: faker.datatype.number({ min: 1, max: 1000 }),
        campaignId: campaign.id,
      },
      {
        currency: Currency.BGN,
        amount: faker.datatype.number({ min: 1, max: 1000 }),
        campaignId: campaign.id,
      },
      {
        currency: Currency.BGN,
        amount: faker.datatype.number({ min: 1, max: 1000 }),
        campaignId: campaign.id,
      },
      {
        currency: Currency.BGN,
        amount: faker.datatype.number({ min: 1, max: 1000 }),
        campaignId: campaign.id,
      },
      {
        currency: Currency.BGN,
        amount: faker.datatype.number({ min: 1, max: 1000 }),
        campaignId: campaign.id,
      },
      {
        currency: Currency.BGN,
        amount: faker.datatype.number({ min: 1, max: 1000 }),
        campaignId: campaign.id,
      },
      {
        currency: Currency.BGN,
        amount: faker.datatype.number({ min: 1, max: 1000 }),
        campaignId: campaign.id,
      },
    ],
    skipDuplicates: true,
  })

  console.log({ insert })
}