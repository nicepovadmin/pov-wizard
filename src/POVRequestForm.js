import React, { useState } from 'react';

const POVRequestForm = () => {
  const [formData, setFormData] = useState({
    isPreapproved: '',
    mndaSigned: '',
    startDate: '',
    endDate: '',
    customerName: '',
    userCount: '',
    salesforceOpp: '',
    salesforceStage: '',
    aeName: '',
    successCriteria: '',
    povType: '',
    features: [],
    competitors: [],
    techStack: '',
  });

  const featuresPlaceholder = Array.from({ length: 20 }, (_, i) => `Feature ${i + 1}`);
  const competitorsPlaceholder = ['Competitor A', 'Competitor B', 'Competitor C'];

  const handleChange = (e) => {
    const { name, value, type, checked, multiple, options } = e.target;
    
    if (type === 'checkbox' && multiple) {
      const selected = Array.from(options).filter(o => o.selected).map(o => o.value);
      setFormData({ ...formData, [name]: selected });
    } else if (type === 'checkbox') {
      setFormData({ ...formData, [name]: checked });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Later: call API, route to approval screen, send email, etc.
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Is POV Pre-approved?
        <select name="isPreapproved" onChange={handleChange}>
          <option value="">Select</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </label>
      <br />

      <label>
        MNDA Signed?
        <select name="mndaSigned" onChange={handleChange}>
          <option value="">Select</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </label>
      <br />

      <label>
        Start Date:
        <input type="date" name="startDate" onChange={handleChange} />
      </label>
      <br />

      <label>
        End Date:
        <input type="date" name="endDate" onChange={handleChange} />
      </label>
      <br />

      <label>
        Customer Name:
        <input type="text" name="customerName" onChange={handleChange} />
      </label>
      <br />

      <label>
        Opportunity User Count:
        <input type="number" name="userCount" onChange={handleChange} />
      </label>
      <br />

      <label>
        Salesforce OPP #:
        <input type="text" name="salesforceOpp" onChange={handleChange} />
      </label>
      <br />

      <label>
        Salesforce OPP Stage:
        <input type="text" name="salesforceStage" onChange={handleChange} />
      </label>
      <br />

      <label>
        AE Name:
        <input type="text" name="aeName" onChange={handleChange} />
      </label>
      <br />

      <label>
        Customer Success Criteria:
        <textarea name="successCriteria" rows={3} onChange={handleChange}></textarea>
      </label>
      <br />

      <label>
        POV Type:
        <select name="povType" onChange={handleChange}>
          <option value="">Select</option>
          <option value="Basic">Basic</option>
          <option value="Advanced">Advanced</option>
          <option value="1CX">1CX</option>
        </select>
      </label>
      <br />

      <label>
        Required Features:
        <select name="features" multiple onChange={handleChange}>
          {featuresPlaceholder.map(f => (
            <option key={f} value={f}>{f}</option>
          ))}
        </select>
      </label>
      <br />

      <label>
        Competitors:
        <select name="competitors" multiple onChange={handleChange}>
          {competitorsPlaceholder.map(c => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
      </label>
      <br />

      <label>
        Customer Tech Stack:
        <textarea name="techStack" rows={3} onChange={handleChange}></textarea>
      </label>
      <br />

      <button type="submit">Submit POV Request</button>
    </form>
  );
};

export default POVRequestForm;
