import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const submodules = await prisma.submodule.findMany({
    where: {
      module: {
        name: 'Matemática',
      },
    },
  });

  if (!submodules.length) {
    throw new Error('Nenhum submódulo de Matemática encontrado.');
  }

  const contentTypes = [
    'dragAndDropAssociation',
    'dragAndDropFill',
    'dragAndDropOrder',
    'multipleChoice',
    'award',
    'performance',
  ] as const;

  await Promise.all(
    submodules.map(async (submodule) => {
      await prisma.item.createMany({
        data: contentTypes.map((type) => ({
          type,
          difficulty: 'medium',
          questionQty: 5, 
          points: 100, 
          submoduleId: submodule.id,
        })),
      });
    }),
  );

  console.log('Items inseridos com sucesso para todos os submódulos de Matemática!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
