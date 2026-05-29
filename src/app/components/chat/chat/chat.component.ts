import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ChatMessage, ChatService } from '../../../services/chat.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: 'chat.component.html',
  styleUrls: ['chat.component.scss']
})
export class ChatComponent implements OnInit, OnDestroy {
  username = '';
  isConnected = false;
  newMessage = '';
  messages: ChatMessage[] = [];
  privateMessages: ChatMessage[] = [];
  users: string[] = [];
  privateChatWith: string | null = null;
  
  private subscriptions: Subscription[] = [];

  constructor(private chatService: ChatService) {}

  ngOnInit() {
    this.subscriptions.push(
      this.chatService.messages$.subscribe(msg => {
        this.messages.push(msg);
      }),
      this.chatService.privateMessages$.subscribe(msg => {
        this.privateMessages.push(msg);
      }),
      this.chatService.users$.subscribe(users => {
        this.users = users;
      }),
      this.chatService.userConnected$.subscribe(user => {
        this.messages.push({
          user: 'System',
          message: `${user} joined the chat`,
          timestamp: new Date()
        });
      }),
      this.chatService.userDisconnected$.subscribe(user => {
        this.messages.push({
          user: 'System',
          message: `${user} left the chat`,
          timestamp: new Date()
        });
      })
    );
  }

  async connect() {
    if (!this.username.trim()) return;
    
    try {
      await this.chatService.startConnection(this.username);
      this.isConnected = true;
    } catch (error) {
      console.error('Connection failed:', error);
      alert('Failed to connect to chat server');
    }
  }

  sendMessage() {
    if (!this.newMessage.trim()) return;
    
    if (this.privateChatWith) {
      this.chatService.sendPrivateMessage(this.privateChatWith, this.newMessage);
    } else {
      this.chatService.sendMessage(this.username, this.newMessage);
    }
    this.newMessage = '';
  }

  setPrivateChat(user: string) {
    this.privateChatWith = user;
  }

  clearPrivateChat() {
    this.privateChatWith = null;
  }

  ngOnDestroy() {
    this.chatService.stopConnection();
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
}