import { ComponentFixture, TestBed } from '@angular/core/testing';
import  {FormsModule} from '@angular/forms';
import { CreateEmployeeComponent } from './create-employee.component';


describe('CreateEmployeeComponent', () => {
  let component: CreateEmployeeComponent;
  let fixture: ComponentFixture<CreateEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateEmployeeComponent,FormsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
