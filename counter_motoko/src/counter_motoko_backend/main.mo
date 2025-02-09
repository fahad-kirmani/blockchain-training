actor Counter {
    stable var counter : Nat = 0;

    public query func get() : async Nat {
        return counter;
    };

    public func inc() : async Nat {
        counter += 1;
        return counter;
    };

    public func dec() : async Nat {
        if (counter > 0) {
            counter -= 1;
        };
        return counter;
    };
};