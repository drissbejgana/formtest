import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';
import { useReducer } from 'react';
import BasicTable from './Tabels';
import { Radio ,RadioGroup} from '@mui/material';



const reducer=(state,action)=>{
  switch(action.type){
    case 'changeid': return {...state , id: action.newid}
    case 'selectformation':return {...state,formation:action.formation}
    case 'changegenre':return {...state,genre:action.genre}
    case 'changedate':return {...state,dateN:action.dateN}
    case 'selectnationalite':return {...state,nationalite:action.nationalite}
    case 'changeetat':return {...state,etat:action.etat}
    case 'enfants':return {...state,enfants:action.enfants}
    case 'setskills': switch(action.skill.name){
        case 'IE' : return {...state,skills:{...state.skills,ie:action.skill.deg}}
        case 'CI' : return {...state,skills:{...state.skills,ci:action.skill.deg}}
        case 'SRP' : return {...state,skills:{...state.skills,srp:action.skill.deg}}
        case 'VD' : return {...state,skills:{...state.skills,vd:action.skill.deg}}
        case 'AO' : return {...state,skills:{...state.skills,ao:action.skill.deg}}
        case 'CD' : return {...state,skills:{...state.skills,cd:action.skill.deg}}
       default : return state

      }
    case 'certificat': return {...state,certificat:action.crt}
    case 'setlangs': switch(action.lang.name){
      case 'AR' : return {...state,langues:{...state.langues,ar:action.lang.deg}}
      case 'chinois' : return {...state,langues:{...state.langues,chinois:action.lang.deg}}
      case 'en' : return {...state,langues:{...state.langues,en:action.lang.deg}}
      case 'fr' : return {...state,langues:{...state.langues,fr:action.lang.deg}}
      case 'italien' : return {...state,langues:{...state.langues,italien:action.lang.deg}}
      case 'allemand' : return {...state,langues:{...state.langues,allemand:action.lang.deg}}
     default : return state

    }
    case 'setofficeit': switch(action.office.name){
      case 'word' : return {...state,officeit:{...state.officeit,word:action.office.deg}}
      case 'excel' : return {...state,officeit:{...state.officeit,excel:action.office.deg}}
      case 'powerpoint' : return {...state,officeit:{...state.officeit,powerpoint:action.office.deg}}
      case 'outlook' : return {...state,officeit:{...state.officeit,outlook:action.office.deg}}
      case 'access' : return {...state,officeit:{...state.officeit,access:action.office.deg}}
     default : return state

    }

    default : return state
  }

}


function createData(name,tbien, bien, satisfaisant, suffisant, insuffisant) {
  return { name,tbien, bien, satisfaisant, suffisant, insuffisant};
}




const initialstate={
  id:Math.random()*10,
  name:'default',
  formation:[],
  genre:'',
  dateN:'',
  nationalite:'',
  etat:'',
  enfants:'',
  skills:{
    ie:'',
    ci:'',
    srp:'',
    vd:'',
    ao:'',
    cd:''
  },certificat:'',
  langues:{
    ar:'',
    chinois:'',
    en:'',
    fr:'',
    italien:'',
    japonais:'',
    portugais:'',
    rusee:'',
    espagnol:'',
    turc:'',
    allemand:''
  },
  officeit:{
        word:'',
        excel:'',
        powerpoint:'',
        outlook:'',
        access:'',
  },

}
export default function AddressForm() {
  const [state,dispatch]=useReducer(reducer,initialstate)
  const handleChangeskills = (e) => {
       
      dispatch({type:'setskills',skill:{name:e.target.name,deg:e.target.value}})
    };
    const rows = [
      createData('Intelligence émotionnelle', <Radio
      checked={state.skills.ie === 'TBien'}
      onChange={handleChangeskills}
      value="TBien"
      name="IE"
      inputProps={{ 'aria-label': 'TBien' }}
      />,<Radio
      checked={state.skills.ie  === 'Bien'}
      onChange={handleChangeskills}
      value="Bien"
      name="IE"
      inputProps={{ 'aria-label': 'Bien' }}
      />,
      <Radio
      checked={state.skills.ie  === 'satisfaisant'}
      onChange={handleChangeskills}
      value="satisfaisant"
      name="IE"
      inputProps={{ 'aria-label': 'satisfaisant' }}
      />,
      <Radio
      checked={state.skills.ie  === 'suffisant'}
      onChange={handleChangeskills}
      value="suffisant"
      name="IE"
      inputProps={{ 'aria-label': 'suffisant' }}
      />,
      <Radio
      checked={state.skills.ie  === 'insuffisant'}
      onChange={handleChangeskills}
      value="insuffisant"
      name="IE"
      inputProps={{ 'aria-label': 'insuffisant' }}
      />
      ),
      createData('Compétence interculturelle', <Radio
      checked={state.skills.ci  === 'TBien'}
      onChange={handleChangeskills}
      value="TBien"
      name="CI"
      inputProps={{ 'aria-label': 'TBien' }}
      />,<Radio
      checked={state.skills.ci  === 'Bien'}
      onChange={handleChangeskills}
      value="Bien"
      name="CI"
      inputProps={{ 'aria-label': 'Bien' }}
      />,
      <Radio
      checked={state.skills.ci  === 'satisfaisant'}
      onChange={handleChangeskills}
      value="satisfaisant"
      name="CI"
      inputProps={{ 'aria-label': 'satisfaisant' }}
      />,
      <Radio
      checked={state.skills.ci  === 'suffisant'}
      onChange={handleChangeskills}
      value="suffisant"
      name="CI"
      inputProps={{ 'aria-label': 'suffisant' }}
      />,
      <Radio
      checked={state.skills.ci  === 'insuffisant'}
      onChange={handleChangeskills}
      value="insuffisant"
      name="CI"
      inputProps={{ 'aria-label': 'insuffisant' }}
      />
      ),
      createData('Skills pour résplution des problémes', <Radio
      checked={state.skills.srp  === 'TBien'}
      onChange={handleChangeskills}
      value="TBien"
      name="SRP"
      inputProps={{ 'aria-label': 'TBien' }}
      />,<Radio
      checked={state.skills.srp  === 'Bien'}
      onChange={handleChangeskills}
      value="Bien"
      name="SRP"
      inputProps={{ 'aria-label': 'Bien' }}
      />,
      <Radio
      checked={state.skills.srp  === 'satisfaisant'}
      onChange={handleChangeskills}
      value="satisfaisant"
      name="SRP"
      inputProps={{ 'aria-label': 'satisfaisant' }}
      />,
      <Radio
      checked={state.skills.srp  === 'suffisant'}
      onChange={handleChangeskills}
      value="suffisant"
      name="SRP"
      inputProps={{ 'aria-label': 'suffisant' }}
      />,
      <Radio
      checked={state.skills.srp  === 'insuffisant'}
      onChange={handleChangeskills}
      value="insuffisant"
      name="SRP"
      inputProps={{ 'aria-label': 'insuffisant' }}
      />
      ),
      createData('Volonté de développer', <Radio
      checked={state.skills.vd  === 'TBien'}
      onChange={handleChangeskills}
      value="TBien"
      name="VD"
      inputProps={{ 'aria-label': 'TBien' }}
      />,<Radio
      checked={state.skills.vd  === 'Bien'}
      onChange={handleChangeskills}
      value="Bien"
      name="VD"
      inputProps={{ 'aria-label': 'Bien' }}
      />,
      <Radio
      checked={state.skills.vd  === 'satisfaisant'}
      onChange={handleChangeskills}
      value="satisfaisant"
      name="VD"
      inputProps={{ 'aria-label': 'satisfaisant' }}
      />,
      <Radio
      checked={state.skills.vd  === 'suffisant'}
      onChange={handleChangeskills}
      value="suffisant"
      name="VD"
      inputProps={{ 'aria-label': 'suffisant' }}
      />,
      <Radio
      checked={state.skills.vd  === 'insuffisant'}
      onChange={handleChangeskills}
      value="insuffisant"
      name="VD"
      inputProps={{ 'aria-label': 'insuffisant' }}
      />
      ),
      createData('Auto-organisation', <Radio
      checked={state.skills.ao  === 'TBien'}
      onChange={handleChangeskills}
      value="TBien"
      name="AO"
      inputProps={{ 'aria-label': 'TBien' }}
      />,<Radio
      checked={state.skills.ao  === 'Bien'}
      onChange={handleChangeskills}
      value="Bien"
      name="AO"
      inputProps={{ 'aria-label': 'Bien' }}
      />,
      <Radio
      checked={state.skills.ao  === 'satisfaisant'}
      onChange={handleChangeskills}
      value="satisfaisant"
      name="AO"
      inputProps={{ 'aria-label': 'satisfaisant' }}
      />,
      <Radio
      checked={state.skills.ao  === 'suffisant'}
      onChange={handleChangeskills}
      value="suffisant"
      name="AO"
      inputProps={{ 'aria-label': 'suffisant' }}
      />,
      <Radio
      checked={state.skills.ao  === 'insuffisant'}
      onChange={handleChangeskills}
      value="insuffisant"
      name="AO"
      inputProps={{ 'aria-label': 'insuffisant' }}
      />
      ),
      createData('Communication digitale', <Radio
      checked={state.skills.cd  === 'TBien'}
      onChange={handleChangeskills}
      value="TBien"
      name="CD"
      inputProps={{ 'aria-label': 'TBien' }}
      />,<Radio
      checked={state.skills.cd  === 'Bien'}
      onChange={handleChangeskills}
      value="Bien"
      name="CD"
      inputProps={{ 'aria-label': 'Bien' }}
      />,
      <Radio
      checked={state.skills.cd  === 'satisfaisant'}
      onChange={handleChangeskills}
      value="satisfaisant"
      name="CD"
      inputProps={{ 'aria-label': 'satisfaisant' }}
      />,
      <Radio
      checked={state.skills.cd  === 'suffisant'}
      onChange={handleChangeskills}
      value="suffisant"
      name="CD"
      inputProps={{ 'aria-label': 'suffisant' }}
      />,
      <Radio
      checked={state.skills.cd  === 'insuffisant'}
      onChange={handleChangeskills}
      value="insuffisant"
      name="CD"
      inputProps={{ 'aria-label': 'insuffisant' }}
      />
      ),
    ];

    const handleChangeslangues = (e) => {
       
      dispatch({type:'setlangs',lang:{name:e.target.name,deg:e.target.value}})
    };

   
    const langues = [
      createData('Arabic', <Radio
      checked={state.langues.ar === 'TBien'}
      onChange={handleChangeslangues}
      value="TBien"
      name="AR"
      inputProps={{ 'aria-label': 'TBien' }}
      />,<Radio
      checked={state.langues.ar  === 'Bien'}
      onChange={handleChangeslangues}
      value="Bien"
      name="AR"
      inputProps={{ 'aria-label': 'Bien' }}
      />,
      <Radio
      checked={state.langues.ar  === 'Moyen'}
      onChange={handleChangeslangues}
      value="Moyen"
      name="AR"
      inputProps={{ 'aria-label': 'Basique' }}
      />,
      <Radio
      checked={state.langues.ar  === 'Basique'}
      onChange={handleChangeslangues}
      value="Basique"
      name="AR"
      inputProps={{ 'aria-label': 'Basique' }}
      />),
      createData('Chinois', <Radio
      checked={state.langues.chinois  === 'TBien'}
      onChange={handleChangeslangues}
      value="TBien"
      name="chinois"
      inputProps={{ 'aria-label': 'TBien' }}
      />,<Radio
      checked={state.langues.chinois  === 'Bien'}
      onChange={handleChangeslangues}
      value="Bien"
      name="chinois"
      inputProps={{ 'aria-label': 'Bien' }}
      />,
      <Radio
      checked={state.langues.chinois  === 'Moyen'}
      onChange={handleChangeslangues}
      value="Moyen"
      name="chinois"
      inputProps={{ 'aria-label': 'Moyen' }}
      />,
      <Radio
      checked={state.langues.chinois  === 'Basique'}
      onChange={handleChangeslangues}
      value="Basique"
      name="chinois"
      inputProps={{ 'aria-label': 'Basique' }}
      />),
      createData('Allemand', <Radio
      checked={state.langues.allemand  === 'TBien'}
      onChange={handleChangeslangues}
      value="TBien"
      name="allemand"
      inputProps={{ 'aria-label': 'TBien' }}
      />,<Radio
      checked={state.langues.allemand  === 'Bien'}
      onChange={handleChangeslangues}
      value="Bien"
      name="allemand"
      inputProps={{ 'aria-label': 'Bien' }}
      />,
      <Radio
      checked={state.langues.allemand  === 'Moyen'}
      onChange={handleChangeslangues}
      value="Moyen"
      name="allemand"
      inputProps={{ 'aria-label': 'Moyen' }}
      />,
      <Radio
      checked={state.langues.allemand  === 'Basique'}
      onChange={handleChangeslangues}
      value="Basique"
      name="allemand"
      inputProps={{ 'aria-label': 'Basique' }}
      />),
      createData('Englais', <Radio
      checked={state.langues.en  === 'TBien'}
      onChange={handleChangeslangues}
      value="TBien"
      name="en"
      inputProps={{ 'aria-label': 'TBien' }}
      />,<Radio
      checked={state.langues.en  === 'Bien'}
      onChange={handleChangeslangues}
      value="Bien"
      name="en"
      inputProps={{ 'aria-label': 'Bien' }}
      />,
      <Radio
      checked={state.langues.en  === 'Moyen'}
      onChange={handleChangeslangues}
      value="Moyen"
      name="en"
      inputProps={{ 'aria-label': 'Moyen' }}
      />,
      <Radio
      checked={state.langues.en  === 'Basique'}
      onChange={handleChangeslangues}
      value="Basique"
      name="en"
      inputProps={{ 'aria-label': 'Basique' }}
      />
      ),
      createData('Francais', <Radio
      checked={state.langues.fr  === 'TBien'}
      onChange={handleChangeslangues}
      value="TBien"
      name="fr"
      inputProps={{ 'aria-label': 'TBien' }}
      />,<Radio
      checked={state.langues.fr  === 'Bien'}
      onChange={handleChangeslangues}
      value="Bien"
      name="fr"
      inputProps={{ 'aria-label': 'Bien' }}
      />,
      <Radio
      checked={state.langues.fr  === 'Moyen'}
      onChange={handleChangeslangues}
      value="Moyen"
      name="fr"
      inputProps={{ 'aria-label': 'Moyen' }}
      />,
      <Radio
      checked={state.langues.fr  === 'Basique'}
      onChange={handleChangeslangues}
      value="Basique"
      name="fr"
      inputProps={{ 'aria-label': 'Basique' }}
      />),
      createData('italien', <Radio
      checked={state.langues.italien  === 'TBien'}
      onChange={handleChangeslangues}
      value="TBien"
      name="italien"
      inputProps={{ 'aria-label': 'TBien' }}
      />,<Radio
      checked={state.langues.italien  === 'Bien'}
      onChange={handleChangeslangues}
      value="Bien"
      name="italien"
      inputProps={{ 'aria-label': 'Bien' }}
      />,
      <Radio
      checked={state.langues.italien  === 'Moyen'}
      onChange={handleChangeslangues}
      value="Moyen"
      name="italien"
      inputProps={{ 'aria-label': 'Moyen' }}
      />,
      <Radio
      checked={state.langues.italien  === 'Basique'}
      onChange={handleChangeslangues}
      value="Basique"
      name="italien"
      inputProps={{ 'aria-label': 'Basique' }}
      />
      ),
    ];

    
    const handleChangesofficeit = (e) => {
       
      dispatch({type:'setofficeit',office:{name:e.target.name,deg:e.target.value}})
    };
    const officeit = [
      createData('Word', <Radio
      checked={state.officeit.word === 'TBien'}
      onChange={handleChangesofficeit}
      value="TBien"
      name="word"
      inputProps={{ 'aria-label': 'TBien' }}
      />,<Radio
      checked={state.officeit.word  === 'Bien'}
      onChange={handleChangesofficeit}
      value="Bien"
      name="word"
      inputProps={{ 'aria-label': 'Bien' }}
      />,
      <Radio
      checked={state.officeit.word  === 'Moyen'}
      onChange={handleChangesofficeit}
      value="Moyen"
      name="word"
      inputProps={{ 'aria-label': 'Basique' }}
      />,
      <Radio
      checked={state.officeit.word  === 'Basique'}
      onChange={handleChangesofficeit}
      value="Basique"
      name="word"
      inputProps={{ 'aria-label': 'Basique' }}
      />),
      createData('Excel', <Radio
      checked={state.officeit.excel  === 'TBien'}
      onChange={handleChangesofficeit}
      value="TBien"
      name="excel"
      inputProps={{ 'aria-label': 'TBien' }}
      />,<Radio
      checked={state.officeit.excel  === 'Bien'}
      onChange={handleChangesofficeit}
      value="Bien"
      name="excel"
      inputProps={{ 'aria-label': 'Bien' }}
      />,
      <Radio
      checked={state.officeit.excel  === 'Moyen'}
      onChange={handleChangesofficeit}
      value="Moyen"
      name="excel"
      inputProps={{ 'aria-label': 'Moyen' }}
      />,
      <Radio
      checked={state.officeit.excel  === 'Basique'}
      onChange={handleChangesofficeit}
      value="Basique"
      name="excel"
      inputProps={{ 'aria-label': 'Basique' }}
      />),
      createData('powerpoint', <Radio
      checked={state.officeit.powerpoint  === 'TBien'}
      onChange={handleChangesofficeit}
      value="TBien"
      name="powerpoint"
      inputProps={{ 'aria-label': 'TBien' }}
      />,<Radio
      checked={state.officeit.powerpoint  === 'Bien'}
      onChange={handleChangesofficeit}
      value="Bien"
      name="powerpoint"
      inputProps={{ 'aria-label': 'Bien' }}
      />,
      <Radio
      checked={state.officeit.powerpoint  === 'Moyen'}
      onChange={handleChangesofficeit}
      value="Moyen"
      name="powerpoint"
      inputProps={{ 'aria-label': 'Moyen' }}
      />,
      <Radio
      checked={state.officeit.powerpoint  === 'Basique'}
      onChange={handleChangesofficeit}
      value="Basique"
      name="powerpoint"
      inputProps={{ 'aria-label': 'Basique' }}
      />),
      createData('PowerPoint', <Radio
      checked={state.officeit.outlook  === 'TBien'}
      onChange={handleChangesofficeit}
      value="TBien"
      name="outlook"
      inputProps={{ 'aria-label': 'TBien' }}
      />,<Radio
      checked={state.officeit.outlook  === 'Bien'}
      onChange={handleChangesofficeit}
      value="Bien"
      name="outlook"
      inputProps={{ 'aria-label': 'Bien' }}
      />,
      <Radio
      checked={state.officeit.en  === 'Moyen'}
      onChange={handleChangesofficeit}
      value="Moyen"
      name="en"
      inputProps={{ 'aria-label': 'Moyen' }}
      />,
      <Radio
      checked={state.officeit.outlook  === 'Basique'}
      onChange={handleChangesofficeit}
      value="Basique"
      name="outlook"
      inputProps={{ 'aria-label': 'Basique' }}
      />
      ),
      createData('access', <Radio
      checked={state.officeit.access  === 'TBien'}
      onChange={handleChangesofficeit}
      value="TBien"
      name="access"
      inputProps={{ 'aria-label': 'TBien' }}
      />,<Radio
      checked={state.officeit.access  === 'Bien'}
      onChange={handleChangesofficeit}
      value="Bien"
      name="access"
      inputProps={{ 'aria-label': 'Bien' }}
      />,
      <Radio
      checked={state.officeit.access  === 'Moyen'}
      onChange={handleChangesofficeit}
      value="Moyen"
      name="access"
      inputProps={{ 'aria-label': 'Moyen' }}
      />,
      <Radio
      checked={state.officeit.access  === 'Basique'}
      onChange={handleChangesofficeit}
      value="Basique"
      name="access"
      inputProps={{ 'aria-label': 'Basique' }}
      />),
    ];


 function handleformationchange(e){
  let listofchecked=[...state.formation]
  const index = listofchecked.indexOf(e.target.value);
   
  if(e.target.checked){ 
    if(index === -1){
       listofchecked.push(e.target.value)   
    }
}
else{
    listofchecked.splice(index, 1);
}
  dispatch({type:'selectformation',formation:listofchecked})

 }



 const handleDateChange = (date) => { 
  const options = { day: 'numeric', month: 'short', year: 'numeric' };
  const locale = 'fr-FR'; 
  const formatter = new Intl.DateTimeFormat(locale, options);
  const formattedDate = formatter.format(new Date(date));
  dispatch({type:"changedate",dateN:formattedDate})
};




  return (
    <>
      <Typography variant="h5" gutterBottom>
      Données personnelles
      </Typography>
      <Grid container spacing={3}>
     
        <Grid item xs={12}>
        <Typography>
           Veuillez saisir votre ID comme suit : "NOM (lettres majuscules)-Date de naissance (JJMMAA)" par exemple : NOM-011286
        </Typography>
          <TextField
            required
            id="id"
            name="id"
            label="ID"
            fullWidth
            variant="standard"
            onChange={(e)=>{dispatch({type:'changeid',newid:e.target.value})}}
          />
        </Grid>

        <Grid item xs={12}>
        <Typography>
          Postuler à un poste professionnel en tant que ...
        </Typography>
          <FormControlLabel
            control={<Checkbox onChange={handleformationchange} color="secondary" name="doctorat" value="doctorat" />}
            label="Doctorat"
          />
           <FormControlLabel
            control={<Checkbox onChange={handleformationchange} color="secondary" name="Professionnel" value="Professionnel" />}
            label="Professionnel"
          />
           <FormControlLabel
            control={<Checkbox onChange={handleformationchange} color="secondary" name="Formation Professionelle" value="Formation Professionelle" />}
            label="Formation Professionelle"
          />
        </Grid>


        <Grid item xs={12}>
        <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Genre*</InputLabel>
        <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Genre"
            value={state.genre}
            onChange={(e)=>dispatch({type:'changegenre',genre:e.target.value})}
        >
            <MenuItem value='M'>Masuclin</MenuItem>
            <MenuItem value='F'>Femelle</MenuItem>
        </Select>
        </FormControl>
        </Grid>

        <Grid item xs={12} >
        <Typography>
         Date Naissance
        </Typography>
             <DatePicker onChange={handleDateChange} />
        </Grid>
       
        <Grid item xs={12}>
        <Typography>
            Nationalité
        </Typography>
          <TextField
            required
            id="nat"
            name="nat"
            label="Nationalité*"
            fullWidth
            variant="standard"
            onChange={(e)=>{dispatch({type:'selectnationalite',nationalite:e.target.value})}}
          />
        </Grid>
  
        <Grid item xs={12}>
        <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">État civil*</InputLabel>
        <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="État civil*"
            value={state.etat}
            onChange={(e)=>dispatch({type:'changeetat',etat:e.target.value})}
        >
            <MenuItem value='Marié'>Marié</MenuItem>
            <MenuItem value='Célibataire'>Célibataire</MenuItem>
            <MenuItem value='Autre'>Autre</MenuItem>
        </Select>
        </FormControl>
        {(state.etat !== "Marié" && state.etat !== "Célibataire" &&  state.etat !== "") ?     <TextField
            required
            id="etat"
            name="etat"
            label="Etat*"
            fullWidth
            variant="standard"
            onChange={(e)=>dispatch({type:'changeetat',etat:e.target.value})
          }
          />:null}
        </Grid>


        <Grid item xs={12}>
        <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Enfants*</InputLabel>
        <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Enfants*"
            value={state.enfants}
            onChange={(e)=>dispatch({type:'enfants',enfants:e.target.value})}
        >
            <MenuItem value='Oui'>Oui</MenuItem>
            <MenuItem value='Non'>Non</MenuItem>
        </Select>
        </FormControl>
         </Grid>




      </Grid>

      <Typography variant="h6"  gutterBottom>
        Top Skills
      </Typography>
      <Grid container spacing={3}>
         <Grid item xs={12} >
           <BasicTable title='Skills' rows={rows} titles={['Trés Bien','Bien','satisfaisant','suffisant','Insuffisant']} />
        </Grid>
        <Grid item xs={12}>
        <Typography>
           Avez-vous un certificat de compétence en langue allemande ?
        </Typography>
        <FormControl>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="Non"
                name="radio-buttons-group"
                onChange={(e)=>dispatch({type:'certificat',crt:e.target.value})}
              >
                <FormControlLabel value="Non" control={<Radio />} label="Non" />
                <FormControlLabel value="A1" control={<Radio />} label="A1" />
                <FormControlLabel value="A2" control={<Radio />} label="A2" />
                <FormControlLabel value="B1" control={<Radio />} label="B1" />
                <FormControlLabel value="B2" control={<Radio />} label="B2" />
              </RadioGroup>
         </FormControl>

        </Grid>
         
        <Grid item xs={12} >
        <Typography>
           Niveau de la langue
        </Typography>
           <BasicTable title='Langues' rows={langues} titles={['Trés Bien','Bien','Moyen','Basique']} />
        </Grid>
        
      </Grid>





      <Typography variant="h6"  gutterBottom>
        IT-Skills (Office IT)
      </Typography>
      <Grid container spacing={3}>
         <Grid item xs={12} >
           <BasicTable title='IT-Skills' rows={officeit} titles={['Trés Bien','Bien','Moyen','Basique']} />
        </Grid>    
      </Grid>
      
    </>
  );
}

