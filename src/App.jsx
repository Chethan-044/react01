import React from 'react'

import Card from './card'

const App = () => {
  const jobOpenings = [ 
    {
        brandLogo: "https://placehold.co/50x50/4285F4/ffffff?text=G",
        nameOfCompany: "Google",
        datePosted: "5 days ago",
        post: "Software Engineer III (Search Infrastructure)",
        tag1: "Full-Time",
        tag2: "Senior Level",
        pay: 78.50, // ~$157,000/year
        location: "Bengaluru, India"
    },
    {
        brandLogo: "https://placehold.co/50x50/007AFF/ffffff?text=A",
        nameOfCompany: "Apple",
        datePosted: "1 week ago",
        post: "Embedded Systems Engineer (WatchOS)",
        tag1: "Full-Time",
        tag2: "Senior Level",
        pay: 115.00, // ~$230,000/year
        location: "Cupertino, USA"
    },
    {
        brandLogo: "https://placehold.co/50x50/00A4EF/ffffff?text=M",
        nameOfCompany: "Meta",
        datePosted: "10 days ago",
        post: "Data Scientist (Instagram Reels)",
        tag1: "Full-Time",
        tag2: "Mid Level",
        pay: 92.75, // ~$185,500/year
        location: "Menlo Park, USA"
    },
    {
        brandLogo: "https://placehold.co/50x50/FF9900/ffffff?text=A",
        nameOfCompany: "Amazon",
        datePosted: "3 weeks ago",
        post: "Cloud Support Associate (AWS)",
        tag1: "Part-Time",
        tag2: "Junior Level",
        pay: 35.00, // ~$70,000/year (Part-time rates can vary)
        location: "Hyderabad, India"
    },
    {
        brandLogo: "https://placehold.co/50x50/E50914/ffffff?text=N",
        nameOfCompany: "Netflix",
        datePosted: "1 month ago",
        post: "Streaming Backend Developer (Golang)",
        tag1: "Full-Time",
        tag2: "Senior Level",
        pay: 130.25, // ~$260,500/year
        location: "Los Gatos, USA"
    },
    {
        brandLogo: "https://placehold.co/50x50/0078D4/ffffff?text=MS",
        nameOfCompany: "Microsoft",
        datePosted: "2 weeks ago",
        post: "UX/UI Design Lead (Azure Services)",
        tag1: "Full-Time",
        tag2: "Senior Level",
        pay: 98.00, // ~$196,000/year
        location: "Seattle, USA"
    },
    {
        brandLogo: "https://placehold.co/50x50/CC0000/ffffff?text=T",
        nameOfCompany: "Tesla",
        datePosted: "4 days ago",
        post: "Vehicle Diagnostics Technician",
        tag1: "Full-Time",
        tag2: "Junior Level",
        pay: 32.50, // ~$65,000/year
        location: "Fremont, USA"
    },
    {
        brandLogo: "https://placehold.co/50x50/006DFF/ffffff?text=IBM",
        nameOfCompany: "IBM",
        datePosted: "8 days ago",
        post: "Cognitive AI Consultant (Watson)",
        tag1: "Full-Time",
        tag2: "Mid Level",
        pay: 68.00, // ~$136,000/year
        location: "Mumbai, India"
    },
    {
        brandLogo: "https://placehold.co/50x50/1798C1/ffffff?text=SF",
        nameOfCompany: "Salesforce",
        datePosted: "6 weeks ago",
        post: "Platform Developer (Remote)",
        tag1: "Full-Time",
        tag2: "Mid Level",
        pay: 72.00, // ~$144,000/year
        location: "Dublin, Ireland"
    },
    {
        brandLogo: "https://placehold.co/50x50/000000/ffffff?text=UBER",
        nameOfCompany: "Uber",
        datePosted: "2 months ago",
        post: "Senior Mobile Developer (Android)",
        tag1: "Full-Time",
        tag2: "Senior Level",
        pay: 105.50, // ~$211,000/year
        location: "San Francisco, USA"
    }
];
  return (
  <div>
    <div className='parent'>
      {jobOpenings.map(function(elem,idx){
        return <div key={idx}>
          <Card logo={elem.brandLogo} company={elem.nameOfCompany} post={elem.post} date={elem.datePosted} price={elem.pay} location={elem.location} tag1={elem.tag1} tag2={elem.tag2} />
        </div>
      })}
    </div>
    

    
    
    
  </div>
  )
}

export default App