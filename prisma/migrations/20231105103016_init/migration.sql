-- CreateEnum
CREATE TYPE "difficulty_enum" AS ENUM ('easy', 'medium', 'difficult');

-- CreateEnum
CREATE TYPE "geo_json_enum" AS ENUM ('point');

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "email" TEXT,
    "email_verified" TIMESTAMP(3),
    "image" TEXT,
    "tour_id" TEXT,

    CONSTRAINT "PK_User" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "accounts" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "provider" TEXT NOT NULL,
    "provider_account_id" TEXT NOT NULL,
    "refresh_token" TEXT,
    "access_token" TEXT,
    "expires_at" BIGINT,
    "refresh_token_expires_in" BIGINT,
    "token_type" TEXT,
    "scope" TEXT,
    "id_token" TEXT,
    "session_state" TEXT,

    CONSTRAINT "PK_Account" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "sessions" (
    "id" TEXT NOT NULL,
    "session_token" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PK_Session" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "verification_tokens" (
    "identifier" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PK_VerificationToken" PRIMARY KEY ("identifier","token")
);

-- CreateTable
CREATE TABLE "tours" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT,
    "duration" DOUBLE PRECISION NOT NULL,
    "max_group_size" INTEGER NOT NULL,
    "difficulty" "difficulty_enum" NOT NULL,
    "ratings_average" DOUBLE PRECISION NOT NULL DEFAULT 4.5,
    "ratings_quantity" INTEGER NOT NULL DEFAULT 0,
    "price" DOUBLE PRECISION NOT NULL,
    "price_discount" DOUBLE PRECISION,
    "summary" TEXT NOT NULL,
    "description" TEXT,
    "image_cover" TEXT NOT NULL,
    "images" TEXT[],
    "start_dates" TIMESTAMP(3)[],
    "secret_tour" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deleted_at" TIMESTAMP(3),
    "start_location_id" TEXT NOT NULL,

    CONSTRAINT "PK_Organization" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "start_locations" (
    "id" TEXT NOT NULL,
    "type" "geo_json_enum" NOT NULL DEFAULT 'point',
    "coordinates" DOUBLE PRECISION[],
    "address" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "PK_StartLocation" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "locations" (
    "id" TEXT NOT NULL,
    "type" "geo_json_enum" NOT NULL DEFAULT 'point',
    "coordinates" DOUBLE PRECISION[],
    "address" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "day" INTEGER NOT NULL,
    "tour_id" TEXT NOT NULL,

    CONSTRAINT "PK_Location" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "reviews" (
    "id" TEXT NOT NULL,
    "review" TEXT NOT NULL,
    "rating" DOUBLE PRECISION NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deleted_at" TIMESTAMP(3),
    "tour_id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,

    CONSTRAINT "PK_Review" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "bookings" (
    "id" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "paid" BOOLEAN NOT NULL DEFAULT true,
    "tour_id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "PK_Booking" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "UQ_User_email" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "UQ_Account_provider" ON "accounts"("provider", "provider_account_id");

-- CreateIndex
CREATE UNIQUE INDEX "UQ_Session_token" ON "sessions"("session_token");

-- CreateIndex
CREATE UNIQUE INDEX "UQ_VerificationToken_token" ON "verification_tokens"("token");

-- CreateIndex
CREATE INDEX "IDX_VerificationToken_identifier" ON "verification_tokens"("identifier");

-- CreateIndex
CREATE INDEX "IDX_VerificationToken_token" ON "verification_tokens"("token");

-- CreateIndex
CREATE UNIQUE INDEX "UQ_Tour_name" ON "tours"("name");

-- CreateIndex
CREATE UNIQUE INDEX "tours_start_location_id_key" ON "tours"("start_location_id");

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "FK_User_Tour" FOREIGN KEY ("tour_id") REFERENCES "tours"("id") ON DELETE SET NULL ON UPDATE SET NULL;

-- AddForeignKey
ALTER TABLE "accounts" ADD CONSTRAINT "FK_Account_User" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sessions" ADD CONSTRAINT "FK_Session_User" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tours" ADD CONSTRAINT "FK_Tour_StartLocation" FOREIGN KEY ("start_location_id") REFERENCES "start_locations"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "locations" ADD CONSTRAINT "FK_Location_Tour" FOREIGN KEY ("tour_id") REFERENCES "tours"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "reviews" ADD CONSTRAINT "FK_Review_Tour" FOREIGN KEY ("tour_id") REFERENCES "tours"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "reviews" ADD CONSTRAINT "FK_Review_User" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "bookings" ADD CONSTRAINT "FK_Booking_Tour" FOREIGN KEY ("tour_id") REFERENCES "tours"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "bookings" ADD CONSTRAINT "FK_Booking_User" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
