// Get main block
const main = document.querySelector('main');
// Create team block
const teamBlock = document.createElement('div');
teamBlock.classList.add('team');
// Make request
axios.get('http://bekey.io/testwork/test.ashx')
  .then(response => {
    response.data.forEach(element => {
      // Create block for each member
      const teamMember = document.createElement('div');
      teamMember.classList.add('team-member');

      // Create block with member's photo
      const teamMemberPhoto = document.createElement('img');
      teamMemberPhoto.classList.add('team-member__photo');
      teamMemberPhoto.src = `${element.thumbnail}`;
      teamMemberPhoto.alt = `${element.title}`;

      // Append block with photo to member block
      teamMember.appendChild(teamMemberPhoto);

      // Create member's title block
      const teamMemberName = document.createElement('h3');
      teamMemberName.classList.add('team-member__name');
      teamMemberName.textContent = `${element.title}`;

      // Append member's title block to member block
      teamMember.appendChild(teamMemberName);

      // Create member's description block
      const teamMemberInfo = document.createElement('p');
      teamMemberInfo.classList.add('team-member__info');
      teamMemberInfo.textContent = `${element.desc.slice(0, 200)}...`;

      // Append member's description block to member block
      teamMember.appendChild(teamMemberInfo);

      // Append member's block to team block
      teamBlock.appendChild(teamMember);
    });

    // After append team block to DOM
    main.appendChild(teamBlock);
  })
  .catch(error => {
    console.log(error.response);
  });