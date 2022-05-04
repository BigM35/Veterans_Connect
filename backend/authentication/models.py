from sre_constants import BRANCH
from django.db import models
from django.contrib.auth.models import AbstractUser
from django.utils import timezone
from status.models import MilitaryStatus
from tkinter import CASCADE

class User(AbstractUser):
    branches = [
        ('USMC', 'U.S. Marine Corps'),
        ('USA', 'U.S. Army'),
        ('USN', 'U.S. Navy'),
        ('USAF', 'U.S. Air Force'),
        ('USCG', 'U.S. Army'),
        ('Other', 'Other Service')
    ]

    Enlisted = 'E'
    Officer = 'O'
    Warrant_Officer = 'W'

    grades = [
        (Enlisted, 'Enlisted'),
        (Officer, 'Officer'),
        (Warrant_Officer, 'Warrant Officer')
    ]

    statuses = [
        ('ACT', 'Active'),
        ('RES', 'Reserve'),
        ('VET', 'Veteran')
    ]


    # branch_ranks = [
    #     ('Enlisted', (
    #         (Enlisted+'1', "Enlisted 1"), (Enlisted+'2', 'Enlisted 2'),  (Enlisted+'3', 'Enlisted 3'), (Enlisted+'4', 'Enlisted 4'),(Enlisted+'5', 'Enlisted 5'),
    #         (Enlisted+'6', 'Enlisted 6'), (Enlisted+'7', 'Enlisted 7'),  (Enlisted+'8', 'Enlisted 8'),  (Enlisted+'9', 'Enlisted 9')   
    #     ) )
    #     ('Officer'(
    #         (Officer+'1', 'Officer 1'),  (Officer+'2', 'Officer 2'), (Officer+'3', 'Officer 3'), (Officer+'4', 'Officer 4'), (Officer+'5', 'Officer 5'),
    #         (Officer+'6', 'Officer 6'), (Officer+'7', 'Officer 7'), (Officer+'8', 'Officer 8'), (Officer+'9', 'Officer 9'), (Officer+'10', 'Officer 10')
    #     ))
    #     ('Warrant Officer'(
    #         (Warrent_Officer+1, 'Warrant Officer 1'),  (Warrent_Officer+2, 'Warrant Officer 2'), (Warrent_Officer+3, 'Warrant Officer 3'),
    #          (Warrent_Officer+4, 'Warrant Officer 4'), (Warrent_Officer+5, 'Warrant Officer 5')
    #     ))
    # ]

    # usmc_enlisted_ranks = [
    #     ('Pvt', 'Private'), ('PFC', 'Private First Class'), ('LCpl', 'Lance Corporal'), ('Cpl', 'Corporal'),  ('Sgt', 'Sergeant'), ('SSgt', 'Staff Sergeant'),
    #      ('GySgt', 'Gunnery Sergeant'),  ('MSgt', 'Master Sergeant'),  ('1Sgt', 'First Sergeant'), ('MGySgt', 'Master Gunnery Sergeant'),  ('SgtMaj', 'Sergeant Major')
    # ]
    # usmc_usn_coast_guard_warrant_officer_ranks = [
    #     ('WO1', 'Warrant Officer 1'), ('CWO2', ' Chief Warrant Officer 2'), ('CWO3', 'Chief Warrant Officer 3'), ('CWO4', 'Chief Warrant Officer 4'),  ('CWO5', 'Chief Warrant Officer 5')
    # ]
    # usmc_usa_usaf_officer_ranks = [
    #     ('2ndLt', 'Second Lieutenant'), ('1stLt', 'First Lieutenant'), ('Capt', 'Captain'), ('Maj', 'Major'),  ('LtCol', ' Lieutenant Colonel'), ('Col', 'Colonel'),
    #      ('BGen', 'Brigadier General'),  ('MajGen', 'Major General'),  ('LtGen', ' Lieutenant General'), ('Gen', 'General')
    # ]

    # usa_enlisted_ranks = [
    #     ('PV1', 'Private'), ('PV2', 'Private 2nd Class'), ('PFC', 'Private first classes'), ('SPC', 'Army Specialist'), ('CPL','Corporal'), ('Sgt', 'Sergeant'), 
    #      ('SSG', 'Staff Sergeant'), ('SFC', 'Sergeant first class'),  ('MSG', 'Master Sergeant'),  ('1SG', 'First Sergeant'), ('SGM', 'Sergeant Major')
    # ]
    # usa_warrant_officer_ranks = [
    #     ('WO1', 'Warrant Officer 1'), ('CW2', ' Chief Warrant Officer 2'), ('CW3', 'Chief Warrant Officer 3'), ('CW4', 'Chief Warrant Officer 4'),  ('CW5', 'Chief Warrant Officer 5')
    # ]
   
    # usn_coast_guard_enlisted_ranks = [
    #     ('SR', 'Seaman Recruit'), ('SA', 'Seaman Apprentices'), ('SN', 'Seaman'), ('PO3', 'Petty Officer Third Class'),  ('PO2', '	Petty Officer Second Class'), 
    #      ('PO1', 'Petty Officer First Class'), ('CPO', '	Chief Petty Officer'),  ('SCPO', 'Senior Chief Petty Officer'),  ('MCPO', '	Master Chief Petty Officer')
    # ]
    # usn_coast_guard_officer_ranks = [
    #     ('Ensign', 'Ensign'), ('Junior Grade', '	Lieutenant, Junior Grade'), ('Lieutenant', 'Lieutenant'), ('Lieutenant Commander', 'Lieutenant Commander'),  ('Commander', ' Commander'), ('Captain', 'Captain'),
    #      ('Commodore', '	Rear Admiral, Commodore'),  ('Rear Admiral', 'Rear Admiral, Upper Half'),  ('Vice Admiral', ' Vice Admiral'), ('Admiral', 'Chief of Naval Operations Commandant of the Coast Guard Admiral')
    # ]

    # usaf_enlisted_ranks = [
    #     ('AB', 'Airman Basic'), ('Amn', 'Airman'), ('A1C', 'Airman First Class'), ('SrA', 'Senior Airman'),  ('SSgt', 'Staff Sergeant'), ('TSgt', 'Technical Sergeant'),
    #      ('MSgt', 'Master Sergeant'),  ('SMSgt', 'Senior Master Sergeant'), ('CMSgt', 'Chief Master Sergeant')
    # ]
    
    


    mos: models.CharField(max_length=50)
    current_status: models.CharField(max_length=10, choices=statuses)
    start_date: models.DateTimeField(default=timezone.now)
    branch: models.CharField(max_length=5, choices=branches)
    grade: models.CharField(max_length=2, choices=grades)
    rank: models.CharField(max_length=50, blank=True)

    # def determainRankTitle(self):
    #     if self.branch == 'USMC':
    #         if self.grade == "E1":
    #             self.rank = 
                

    # pass
    '''
    This is a custom version of the built in User class
    It contains all of the built in fields and functionality of the standard User
    You can add fields here for any additional properties you want a User to have
    This is useful for adding roles (Customer and Employee, for example)
    For just a few roles, adding boolean fields is advised
    '''
    # Example (note import of models above that is commented out)
    # this will add a column to the user table
    # is_student = models.BooleanField('student status', default=False)
