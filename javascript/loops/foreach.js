let data = [
  {
    name: "Lazare Cussen",
    job_role: "Paralegal",
    blood_group: "B-",
    company_name: "Brainsphere",
    dob: "6/30/2013",
  },
  {
    name: "Daile Basham",
    job_role: "Technical Writer",
    blood_group: "B+",
    company_name: "Flashpoint",
    dob: "1/25/1905",
  },
  {
    name: "Anthiathia Rivilis",
    job_role: "Quality Engineer",
    blood_group: "A+",
    company_name: "Ailane",
    dob: "9/18/2019",
  },
  {
    name: "Viviyan McQuillan",
    job_role: "Nurse",
    blood_group: "A+",
    company_name: "Livefish",
    dob: "12/8/2021",
  },
  {
    name: "Emelen Aleevy",
    job_role: "Research Assistant IV",
    blood_group: "O+",
    company_name: "Linktype",
    dob: "6/1/1976",
  },
  {
    name: "Sharlene Duncan",
    job_role: "Information Systems Manager",
    blood_group: "AB-",
    company_name: "Katz",
    dob: "3/2/1979",
  },
  {
    name: "Edsel Uc",
    job_role: "Environmental Tech",
    blood_group: "A-",
    company_name: "Meevee",
    dob: "2/16/1982",
  },
  {
    name: "Aldric Battman",
    job_role: "VP Marketing",
    blood_group: "O-",
    company_name: "Jetwire",
    dob: "6/15/2000",
  },
  {
    name: "Cobby Greenway",
    job_role: "Senior Sales Associate",
    blood_group: "B+",
    company_name: "Miboo",
    dob: "7/7/1937",
  },
  {
    name: "Westley Fergusson",
    job_role: "Senior Sales Associate",
    blood_group: "B+",
    company_name: "Voomm",
    dob: "11/29/1951",
  },
  {
    name: "Cristian Franzonello",
    job_role: "VP Product Management",
    blood_group: "B-",
    company_name: "Eire",
    dob: "12/28/1935",
  },
  {
    name: "Yvor Noe",
    job_role: "Senior Editor",
    blood_group: "AB+",
    company_name: "Tanoodle",
    dob: "2/27/1907",
  },
  {
    name: "Perle Echelle",
    job_role: "Automation Specialist II",
    blood_group: "AB-",
    company_name: "Skivee",
    dob: "7/13/1927",
  },
  {
    name: "Eldon Moggach",
    job_role: "Design Engineer",
    blood_group: "AB-",
    company_name: "Skyble",
    dob: "1/16/1983",
  },
  {
    name: "Collie Shama",
    job_role: "Help Desk Technician",
    blood_group: "A+",
    company_name: "Chatterpoint",
    dob: "8/29/1989",
  },
  {
    name: "Ida Greeveson",
    job_role: "Graphic Designer",
    blood_group: "B-",
    company_name: "Blognation",
    dob: "8/20/1955",
  },
  {
    name: "Montague Boden",
    job_role: "Registered Nurse",
    blood_group: "O-",
    company_name: "Pixonyx",
    dob: "12/27/2005",
  },
  {
    name: "Albrecht Jekel",
    job_role: "Structural Engineer",
    blood_group: "B-",
    company_name: "Quimm",
    dob: "11/4/2007",
  },
  {
    name: "Joan O Sullivan",
    job_role: "Executive Secretary",
    blood_group: "O-",
    company_name: "Avamm",
    dob: "12/31/1914",
  },
  {
    name: "Xerxes Heineke",
    job_role: "Executive Secretary",
    blood_group: "B+",
    company_name: "Yodoo",
    dob: "3/4/1911",
  },
];

let div = document.getElementById("cont");

data.forEach((ele) => {
  let childdiv = document.createElement("div");
  let h1 = document.createElement("h1");
  let h2 = document.createElement("h2");
  h1.innerText = ele.name;
  h2.innerText = ele.company_name;

  childdiv.append(h1, h2);
  div.append(childdiv);
});
