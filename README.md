# Pet Veterinary App

## Overview

<p>This project is the final assignment for the Full Stack .NET Academy. It is a .NET 8 Web API backend with a React & TypeScript frontend for a veterinary client to track pets, owners, and vaccines.</p>

## Features

<ul>
  <li>Owners, Pets, and Vaccines Management (CRUD operations)</li>
  <li>Authentication & Authorization (Admin and Regular Users)</li>
  <li>Entity Relationship Mapping with Entity Framework Core</li>
  <li>Caching for Performance Optimization</li>
  <li>Unit Testing for Business Logic</li>
  <li>Clean Code Principles & Separation of Concerns</li>
</ul>

## Entity Relationship Diagram

<p>Below is a diagram representing the relationships between Owners, Pets, and Vaccines</p>
<img src="https://github.com/BobanMoshevski/petVeterinaryApp/blob/main/img/diagram.png" />

## Requirements

### Owner:

<ul>
  <li>Name, Surname, Age (18-100 years old)</li>
  <li>An owner can have multiple pets</li>
</ul>

### Pet:

<ul>
  <li>Name, Age (0-50 years old)</li>
  <li>A pet belongs to one owner</li>
  <li>A pet can have multiple vaccines</li>
</ul>

### Vaccine:

<ul>
  <li>Name</li>
  <li>A vaccine can be associated with multiple pets</li>
</ul>

## Performance & Security
<ul>
  <li>Caching with absolute & sliding expiration</li>
  <li>Authentication & Authorization using individual accounts and roles</li>
  <li>Unit Testing for model logic</li>
</ul>
