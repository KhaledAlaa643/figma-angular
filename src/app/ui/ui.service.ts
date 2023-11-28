import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private allData= [
    {
      user: {
        avatar: "../../../assets/Images/avatar.svg",
        name: "خالد علاء",
        phone: "01110400862"
      },
      ticketNumber: "C-101",
      ticketValue: "40$",
      cinemas: ["سينما مصر", "مول العرب", "برج الأطنان", "سرايا القبة"],
      numberOfPeople: 1,
      purchaseCount: "مرة واحدة",
      ticketLink: "path/to/ticket_40.pdf"
    },
    {
      user: {
        avatar: "../../../assets/Images/avatar.svg",
        name: "خالد علاء",
        phone: "01110400862"
      },
      ticketNumber: "C-101",
      ticketValue: "40$",
      cinemas: ["سينما مصر", "مول العرب", "برج الأطنان", "سرايا القبة"],
      numberOfPeople: 1,
      purchaseCount: "مرة واحدة",
      ticketLink: "path/to/ticket_40.pdf"
    },
    {
      user: {
        avatar: "../../../assets/Images/avatar.svg",
        name: "خالد علاء",
        phone: "01110400862"
      },
      ticketNumber: "C-101",
      ticketValue: "40$",
      cinemas: ["سينما مصر", "مول العرب", "برج الأطنان", "سرايا القبة"],
      numberOfPeople: 1,
      purchaseCount: "مرة واحدة",
      ticketLink: "path/to/ticket_40.pdf"
    },
    {
      user: {
        avatar: "../../../assets/Images/avatar.svg",
        name: "خالد علاء",
        phone: "01110400862"
      },
      ticketNumber: "C-101",
      ticketValue: "40$",
      cinemas: ["سينما مصر", "مول العرب", "برج الأطنان", "سرايا القبة"],
      numberOfPeople: 1,
      purchaseCount: "مرة واحدة",
      ticketLink: "path/to/ticket_40.pdf"
    },
    {
      user: {
        avatar: "../../../assets/Images/avatar.svg",
        name: "خالد علاء",
        phone: "01110400862"
      },
      ticketNumber: "C-101",
      ticketValue: "40$",
      cinemas: ["سينما مصر", "مول العرب", "برج الأطنان", "سرايا القبة"],
      numberOfPeople: 1,
      purchaseCount: "مرة واحدة",
      ticketLink: "path/to/ticket_40.pdf"
    },
    {
      user: {
        avatar: "../../../assets/Images/avatar.svg",
        name: "خالد علاء",
        phone: "01110400862"
      },
      ticketNumber: "C-101",
      ticketValue: "40$",
      cinemas: ["سينما مصر", "مول العرب", "برج الأطنان", "سرايا القبة"],
      numberOfPeople: 1,
      purchaseCount: "مرة واحدة",
      ticketLink: "path/to/ticket_40.pdf"
    },
    {
      user: {
        avatar: "../../../assets/Images/avatar.svg",
        name: "خالد علاء",
        phone: "01110400862"
      },
      ticketNumber: "C-101",
      ticketValue: "40$",
      cinemas: ["سينما مصر", "مول العرب", "برج الأطنان", "سرايا القبة"],
      numberOfPeople: 1,
      purchaseCount: "مرة واحدة",
      ticketLink: "path/to/ticket_40.pdf"
    },
    {
      user: {
        avatar: "../../../assets/Images/avatar.svg",
        name: "خالد علاء",
        phone: "01110400862"
      },
      ticketNumber: "C-101",
      ticketValue: "40$",
      cinemas: ["سينما مصر", "مول العرب", "برج الأطنان", "سرايا القبة"],
      numberOfPeople: 1,
      purchaseCount: "مرة واحدة",
      ticketLink: "path/to/ticket_40.pdf"
    },
    {
      user: {
        avatar: "../../../assets/Images/avatar.svg",
        name: "خالد علاء",
        phone: "01110400862"
      },
      ticketNumber: "C-101",
      ticketValue: "40$",
      cinemas: ["سينما مصر", "مول العرب", "برج الأطنان", "سرايا القبة"],
      numberOfPeople: 1,
      purchaseCount: "مرة واحدة",
      ticketLink: "path/to/ticket_40.pdf"
    },
    {
      user: {
        avatar: "../../../assets/Images/avatar.svg",
        name: "خالد علاء",
        phone: "01110400862"
      },
      ticketNumber: "C-101",
      ticketValue: "40$",
      cinemas: ["سينما مصر", "مول العرب", "برج الأطنان", "سرايا القبة"],
      numberOfPeople: 1,
      purchaseCount: "مرة واحدة",
      ticketLink: "path/to/ticket_40.pdf"
    },
    {
      user: {
        avatar: "../../../assets/Images/avatar.svg",
        name: "خالد علاء",
        phone: "01110400862"
      },
      ticketNumber: "C-101",
      ticketValue: "40$",
      cinemas: ["سينما مصر", "مول العرب", "برج الأطنان", "سرايا القبة"],
      numberOfPeople: 1,
      purchaseCount: "مرة واحدة",
      ticketLink: "path/to/ticket_40.pdf"
    },
  ]; 
  
  private allDataEng= [
    {
      user: {
        avatar: "../../../assets/Images/avatar.svg",
        name: "Khaled Alaa",
        phone: "01110400862"
      },
      ticketNumber: "C-101",
      ticketValue: "40$",
      cinemas: ["Cinema Masr", "Arabic Mall", "Atnan Tower", "Saraya Quba"],
      numberOfPeople: 1,
      purchaseCount: "One Time",
      ticketLink: "path/to/ticket_40.pdf"
    },
    {
      user: {
        avatar: "../../../assets/Images/avatar.svg",
        name: "Khaled Alaa",
        phone: "01110400862"
      },
      ticketNumber: "C-101",
      ticketValue: "40$",
      cinemas: ["Cinema Masr", "Arabic Mall", "Atnan Tower", "Saraya Quba"],
      numberOfPeople: 1,
      purchaseCount: "One Time",
      ticketLink: "path/to/ticket_40.pdf"
    },
    {
      user: {
        avatar: "../../../assets/Images/avatar.svg",
        name: "Khaled Alaa",
        phone: "01110400862"
      },
      ticketNumber: "C-101",
      ticketValue: "40$",
      cinemas: ["Cinema Masr", "Arabic Mall", "Atnan Tower", "Saraya Quba"],
      numberOfPeople: 1,
      purchaseCount: "One Time",
      ticketLink: "path/to/ticket_40.pdf"
    },
    {
      user: {
        avatar: "../../../assets/Images/avatar.svg",
        name: "Khaled Alaa",
        phone: "01110400862"
      },
      ticketNumber: "C-101",
      ticketValue: "40$",
      cinemas: ["Cinema Masr", "Arabic Mall", "Atnan Tower", "Saraya Quba"],
      numberOfPeople: 1,
      purchaseCount: "One Time",
      ticketLink: "path/to/ticket_40.pdf"
    },
    {
      user: {
        avatar: "../../../assets/Images/avatar.svg",
        name: "Khaled Alaa",
        phone: "01110400862"
      },
      ticketNumber: "C-101",
      ticketValue: "40$",
      cinemas: ["Cinema Masr", "Arabic Mall", "Atnan Tower", "Saraya Quba"],
      numberOfPeople: 1,
      purchaseCount: "One Time",
      ticketLink: "path/to/ticket_40.pdf"
    },
    {
      user: {
        avatar: "../../../assets/Images/avatar.svg",
        name: "Khaled Alaa",
        phone: "01110400862"
      },
      ticketNumber: "C-101",
      ticketValue: "40$",
      cinemas: ["Cinema Masr", "Arabic Mall", "Atnan Tower", "Saraya Quba"],
      numberOfPeople: 1,
      purchaseCount: "One Time",
      ticketLink: "path/to/ticket_40.pdf"
    },
    {
      user: {
        avatar: "../../../assets/Images/avatar.svg",
        name: "Khaled Alaa",
        phone: "01110400862"
      },
      ticketNumber: "C-101",
      ticketValue: "40$",
      cinemas: ["Cinema Masr", "Arabic Mall", "Atnan Tower", "Saraya Quba"],
      numberOfPeople: 1,
      purchaseCount: "One Time",
      ticketLink: "path/to/ticket_40.pdf"
    },
    {
      user: {
        avatar: "../../../assets/Images/avatar.svg",
        name: "Khaled Alaa",
        phone: "01110400862"
      },
      ticketNumber: "C-101",
      ticketValue: "40$",
      cinemas: ["Cinema Masr", "Arabic Mall", "Atnan Tower", "Saraya Quba"],
      numberOfPeople: 1,
      purchaseCount: "One Time",
      ticketLink: "path/to/ticket_40.pdf"
    },
    {
      user: {
        avatar: "../../../assets/Images/avatar.svg",
        name: "Khaled Alaa",
        phone: "01110400862"
      },
      ticketNumber: "C-101",
      ticketValue: "40$",
      cinemas: ["Cinema Masr", "Arabic Mall", "Atnan Tower", "Saraya Quba"],
      numberOfPeople: 1,
      purchaseCount: "One Time",
      ticketLink: "path/to/ticket_40.pdf"
    },
    {
      user: {
        avatar: "../../../assets/Images/avatar.svg",
        name: "Khaled Alaa",
        phone: "01110400862"
      },
      ticketNumber: "C-101",
      ticketValue: "40$",
      cinemas: ["Cinema Masr", "Arabic Mall", "Atnan Tower", "Saraya Quba"],
      numberOfPeople: 1,
      purchaseCount: "One Time",
      ticketLink: "path/to/ticket_40.pdf"
    },
    {
      user: {
        avatar: "../../../assets/Images/avatar.svg",
        name: "Khaled Alaa",
        phone: "01110400862"
      },
      ticketNumber: "C-101",
      ticketValue: "40$",
      cinemas: ["Cinema Masr", "Arabic Mall", "Atnan Tower", "Saraya Quba"],
      numberOfPeople: 1,
      purchaseCount: "One Time",
      ticketLink: "path/to/ticket_40.pdf"
    },
    {
      user: {
        avatar: "../../../assets/Images/avatar.svg",
        name: "Khaled Alaa",
        phone: "01110400862"
      },
      ticketNumber: "C-101",
      ticketValue: "40$",
      cinemas: ["Cinema Masr", "Arabic Mall", "Atnan Tower", "Saraya Quba"],
      numberOfPeople: 1,
      purchaseCount: "One Time",
      ticketLink: "path/to/ticket_40.pdf"
    },
    {
      user: {
        avatar: "../../../assets/Images/avatar.svg",
        name: "Khaled Alaa",
        phone: "01110400862"
      },
      ticketNumber: "C-101",
      ticketValue: "40$",
      cinemas: ["Cinema Masr", "Arabic Mall", "Atnan Tower", "Saraya Quba"],
      numberOfPeople: 1,
      purchaseCount: "One Time",
      ticketLink: "path/to/ticket_40.pdf"
    },
    {
      user: {
        avatar: "../../../assets/Images/avatar.svg",
        name: "Khaled Alaa",
        phone: "01110400862"
      },
      ticketNumber: "C-101",
      ticketValue: "40$",
      cinemas: ["Cinema Masr", "Arabic Mall", "Atnan Tower", "Saraya Quba"],
      numberOfPeople: 1,
      purchaseCount: "One Time",
      ticketLink: "path/to/ticket_40.pdf"
    },
   
  ]; 
  
  constructor() { }
  
    getData() {
      return this.allData;
    }
    getDataEng() {
      return this.allDataEng;
    }
  
}
