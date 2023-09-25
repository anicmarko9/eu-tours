-- CreateEnum
CREATE TYPE "difficulty" AS ENUM ('easy', 'medium', 'difficult');

-- CreateEnum
CREATE TYPE "geojson" AS ENUM ('point');

-- AlterTable
ALTER TABLE "user" ADD COLUMN     "tourId" TEXT;

-- CreateTable
CREATE TABLE "tour" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT,
    "duration" DOUBLE PRECISION NOT NULL,
    "maxGroupSize" INTEGER NOT NULL,
    "difficulty" "difficulty" NOT NULL,
    "ratingsAverage" DOUBLE PRECISION NOT NULL DEFAULT 4.5,
    "ratingsQuantity" INTEGER NOT NULL DEFAULT 0,
    "price" DOUBLE PRECISION NOT NULL,
    "priceDiscount" DOUBLE PRECISION,
    "summary" TEXT NOT NULL,
    "description" TEXT,
    "imageCover" TEXT NOT NULL,
    "images" TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "startDates" TIMESTAMP(3)[],
    "secretTour" BOOLEAN NOT NULL DEFAULT false,
    "startLocationId" TEXT NOT NULL,

    CONSTRAINT "tour_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "startLocation" (
    "id" TEXT NOT NULL,
    "type" "geojson" NOT NULL DEFAULT 'point',
    "coordinates" DOUBLE PRECISION[],
    "address" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "startLocation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "location" (
    "id" TEXT NOT NULL,
    "type" "geojson" NOT NULL DEFAULT 'point',
    "coordinates" DOUBLE PRECISION[],
    "address" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "day" INTEGER NOT NULL,
    "tourId" TEXT NOT NULL,

    CONSTRAINT "location_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "review" (
    "id" TEXT NOT NULL,
    "review" TEXT NOT NULL,
    "rating" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "tourId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "review_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Booking" (
    "id" TEXT NOT NULL,
    "tourId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "paid" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "Booking_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "tour_name_key" ON "tour"("name");

-- CreateIndex
CREATE UNIQUE INDEX "tour_startLocationId_key" ON "tour"("startLocationId");

-- CreateIndex
CREATE UNIQUE INDEX "location_tourId_key" ON "location"("tourId");

-- CreateIndex
CREATE UNIQUE INDEX "review_tourId_key" ON "review"("tourId");

-- CreateIndex
CREATE UNIQUE INDEX "review_userId_key" ON "review"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Booking_tourId_key" ON "Booking"("tourId");

-- CreateIndex
CREATE UNIQUE INDEX "Booking_userId_key" ON "Booking"("userId");

-- AddForeignKey
ALTER TABLE "user" ADD CONSTRAINT "user_tourId_fkey" FOREIGN KEY ("tourId") REFERENCES "tour"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tour" ADD CONSTRAINT "tour_startLocationId_fkey" FOREIGN KEY ("startLocationId") REFERENCES "startLocation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "location" ADD CONSTRAINT "location_tourId_fkey" FOREIGN KEY ("tourId") REFERENCES "tour"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "review" ADD CONSTRAINT "review_tourId_fkey" FOREIGN KEY ("tourId") REFERENCES "tour"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "review" ADD CONSTRAINT "review_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Booking" ADD CONSTRAINT "Booking_tourId_fkey" FOREIGN KEY ("tourId") REFERENCES "tour"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Booking" ADD CONSTRAINT "Booking_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
