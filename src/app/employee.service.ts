import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Service()
export class EmployeeService {

    private http = inject(HttpClient);
    private apiServerUrl = '';

    public getEmployees(): Observable<Employee[]>{
        return this.http.get<Employee[]>(`${this.apiServerUrl}/api/v1/employee`);
    }

    public addEmployee(employee: Employee): Observable<Employee>{
        return this.http.post<Employee>(`${this.apiServerUrl}/api/v1/employee`, employee);
    }

    public updateEmployee(employee: Employee): Observable<Employee>{
        return this.http.put<Employee>(`${this.apiServerUrl}/api/v1/employee`, employee);
    }

    public deleteEmployee(employeeId: number): Observable<void>{
        return this.http.delete<void>(`${this.apiServerUrl}/api/v1/employee/${employeeId}`);
    }

    public getEmployeeById(employeeId: number): Observable<Employee>{
        return this.http.get<Employee>(`${this.apiServerUrl}/api/v1/employee/find-by-id/${employeeId}`);
    }
}
