
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

 
CREATE TABLE IF NOT EXISTS users (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL
);

  
CREATE TABLE IF NOT EXISTS newsletter_subscribers (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    email VARCHAR(255) NOT NULL,
    created_at DATE NOT NULL
);
 
CREATE TABLE IF NOT EXISTS testimonials (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    comment TEXT NOT NULL,
    username VARCHAR(255) NOT NULL,
    image_url VARCHAR(255) NOT NULL
);

  
CREATE TABLE IF NOT EXISTS cars (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    slug VARCHAR(255) NOT NULL UNIQUE,
    name VARCHAR(255) NOT NULL,
    body_style VARCHAR(255) NOT NULL,
    engine_type VARCHAR(255) NOT NULL,
    transmission VARCHAR(255) NOT NULL,
    seats INT NOT NULL,
    descriptions TEXT[] NOT NULL,
    features VARCHAR(255)[] NOT NULL,
    rating NUMERIC(2, 1) CHECK (rating >= 0 AND rating <= 5) NOT NULL,
    reviews INT NOT NULL,
    unlimited_mileage BOOLEAN,
    image_url VARCHAR(255) NOT NULL,
    retail_price_per_day INT NOT NULL,
    retail_price_currency VARCHAR(255) NOT NULL,
    discounted_price_per_day INT,
    discounted_price_currency VARCHAR(255)
);

 
 
CREATE TABLE IF NOT EXISTS locations (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    slug VARCHAR(255) NOT NULL UNIQUE,
    latitude VARCHAR(255) NOT NULL,
    longitude VARCHAR(255) NOT NULL,
    featured BOOLEAN DEFAULT false NOT NULL,
    image_url VARCHAR(255)
);

 
 
CREATE TABLE IF NOT EXISTS rental_reservations (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    car_id UUID NOT NULL,
    user_id UUID NOT NULL,
    location_id UUID NOT NULL,
    check_in DATE NOT NULL,
    check_out DATE NOT NULL,
    created_at DATE NOT NULL
);
