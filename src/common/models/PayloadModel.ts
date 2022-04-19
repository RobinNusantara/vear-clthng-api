export class PayloadModel {
    private id: string;
    private email: string;
    private username: string;
    private role: string;
    private status: number;

    public set setId(value: string) {
        this.id = value;
    }

    public get getId(): string {
        return this.id;
    }

    public set setEmail(value: string) {
        this.email = value;
    }

    public get getEmail(): string {
        return this.email;
    }

    public set setUsername(value: string) {
        this.username = value;
    }

    public get getUsername(): string {
        return this.username;
    }

    public set setRole(value: string) {
        this.role = value;
    }

    public get getRole(): string {
        return this.role;
    }

    public set setStatus(value: number) {
        this.status = value;
    }

    public get getStatus(): number {
        return this.status;
    }
}
