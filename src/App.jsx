import './App.css';
import Header from './components/Header/Header';
import JournalAddButton from './components/JournalAddButton/JournalAddButton';
import JournalList from './components/JournalList/JournalList';
import JournalItem from './components/Button/JournalItem/JournalItem';
import CardButton from './components/CardButton/CardButton';
import JournalForm from './components/JournalForm/JournalForm';
import LeftPanel from './layouts/LeftPanel/LeftPanel';
import Body from './layouts/Body/Body';

function App() {
  const data = [
    {
      title: 'Подготовка к обновлению курсов',
      date: new Date(),
      text: 'Горные походы открывают удивительные природные ландшафты, испытывают туристов физически и морально, дают возможность почувствовать себя первопроходцем',
    },
    {
      title: 'Подготовка к обновлению курсов',
      date: new Date(),
      text: 'Горные походы открывают удивительные природные ландшафты, испытывают туристов физически и морально, дают возможность почувствовать себя первопроходцем',
    },
    {
      title: 'Подготовка к обновлению курсов',
      date: new Date(),
      text: 'Горные походы открывают удивительные природные ландшафты, испытывают туристов физически и морально, дают возможность почувствовать себя первопроходцем',
    },
  ];

  return (
    <div className="app">
      <LeftPanel>
        <Header />
        <JournalAddButton />
        <JournalList>
          {data.map((item, index) => (
            <CardButton key={index}>
              <JournalItem key={index} {...item} />
            </CardButton>
          ))}
        </JournalList>
      </LeftPanel>
      <Body>
        <JournalForm />
      </Body>
    </div>
  );
}

export default App;
