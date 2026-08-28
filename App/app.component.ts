<<<<<<< HEAD
import { Component, signal, computed, effect } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Product {
  id: number;
  name: string;
  price: number;
=======
import { Component, signal, computed } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface Member {
  id: number;
  name: string;
  age: number;
  department: string;
  available: boolean;
>>>>>>> 899975229eef7efcea140937dd9fc05ee93f581f
}

@Component({
  selector: 'app-root',
  standalone: true,
<<<<<<< HEAD
  imports: [CommonModule],
=======
  imports: [CommonModule, FormsModule],
>>>>>>> 899975229eef7efcea140937dd9fc05ee93f581f
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
<<<<<<< HEAD
  // Available products
  products: Product[] = [
    { id: 1, name: 'Laptop', price: 999.99 },
    { id: 2, name: 'Headphones', price: 49.99 },
    { id: 3, name: 'Mouse', price: 19.99 },
    { id: 4, name: 'Keyboard', price: 89.99 },
  ];

  // Cart signal
  cart = signal<Product[]>([]);

  // Computed total
  total = computed(() => this.cart().reduce((sum, p) => sum + p.price, 0));

  // Effect to log item count
  private logEffect = effect(() => {
    console.log(`Cart contains ${this.cart().length} item(s).`);
  });

  // Add product to cart
  addToCart(product: Product) {
    this.cart.update(items => [...items, product]);
  }

  // Remove product from cart
  removeFromCart(productId: number) {
    this.cart.update(items => items.filter(p => p.id !== productId));
  }

  // Clear cart
  clearCart() {
    this.cart.set([]);
=======
  // Departments
  departments = ['Development', 'Marketing', 'Design'];

  // Members state
  members = signal<Member[]>([
    { id: 1, name: 'Alice', age: 28, department: 'Development', available: true },
    { id: 2, name: 'Bob', age: 34, department: 'Marketing', available: false },
    { id: 3, name: 'Charlie', age: 25, department: 'Design', available: true },
  ]);
  private nextId = 4;

  // Filter and view
  filterDepartment = signal<string>('All');
  viewMode = signal<'card' | 'list'>('card');

  // New member form model
  newMember = {
    name: '',
    age: null as number | null,
    department: this.departments[0],
    available: true
  };

  // Computed filtered members
  filteredMembers = computed(() => {
    const filter = this.filterDepartment();
    const all = this.members();
    if (filter === 'All') return all;
    return all.filter(m => m.department === filter);
  });

  // Add member
  addMember() {
    const { name, age, department, available } = this.newMember;
    if (!name || age === null || age < 18) {
      alert('Please provide a valid name and age (min 18).');
      return;
    }
    this.members.update(list => [
      ...list,
      { id: this.nextId++, name, age, department, available }
    ]);
    // Reset form
    this.newMember = { name: '', age: null, department: this.departments[0], available: true };
  }

  // Toggle availability
  toggleAvailability(id: number) {
    this.members.update(list =>
      list.map(m => m.id === id ? { ...m, available: !m.available } : m)
    );
  }

  // Remove member (optional bonus)
  removeMember(id: number) {
    this.members.update(list => list.filter(m => m.id !== id));
>>>>>>> 899975229eef7efcea140937dd9fc05ee93f581f
  }
}