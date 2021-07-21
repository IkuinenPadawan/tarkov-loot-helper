import React from 'react'

const QuestPicker = ({ quests, checkQuests }) => {
  const handleChange = (e) => {
    checkQuests(parseInt(e.target.id))
  }

    return (
      <div className='quest-picker'>
        <h4>Quests completed</h4>
        <ul className='quest-list'>
          {quests.map((quest) => (
            <li>
              <div className='quest-list-item'>
                <input
                  type='checkbox'
                  id={quest.id}
                  name={quest.questName}
                  value={quest.questName}
                  onChange={handleChange}
                />
                <label htmlFor={quest.questName}> {quest.questName} </label>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );

  // return (
  //   <div>
  //     <h4>Quests completed</h4>
  //     <div className='quest-picker'>
  //       {quests.map((quest) => (
  //         <div>
  //           <input
  //             type='checkbox'
  //             id={quest.id}
  //             name={quest.questName}
  //             value={quest.questName}
  //             onChange={handleChange}
  //           />
  //           <label htmlFor={quest.questName}> {quest.questName} </label>
  //         </div>
  //       ))}
  //     </div>
  //   </div>
  // );
}

export default QuestPicker
