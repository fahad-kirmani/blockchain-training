use std::cell::RefCell;
use candid::types::number::Nat;
use ic_cdk::{query , update};

thread_local!{
    static COUNTER: RefCell<Nat> = RefCell::new(Nat::from(0 as u32));
}

#[query]
fn get() -> Nat {
    COUNTER.with(|counter: &RefCell<Nat>| counter.borrow().clone())
}

#[update]
fn inc() -> Nat {
    COUNTER.with(|counter| *counter.borrow_mut() += Nat::from(1 as u32));
    get()
}

#[update]
fn dec() -> Nat {
    COUNTER.with(|counter| *counter.borrow_mut() -= Nat::from(1 as u32));
    get()
}