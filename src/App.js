// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
function App () {

	const emailsArr = ["testыыыыыыыыыыыыыыыыыыыыыыы", "2", "3"];
	const users = [{ name: 'test5', surname: "test55", email: "testmail" },
	{ name: 'Андрей', surname: "Андреев", email: "and.andr2013@yфффффффффandex.ru" },
	{ name: 'test5', surname: "test55", email: "testmail" },];
	const [emails, setEmails] = useState(emailsArr);
	const [email, setEmail] = useState('');
	const [editableEmail, setEditableEmail] = useState(null);

	function deleteEmail (name) {
		setEmails(emails.filter(email => email !== name));
	}
	function addEmail () {
		if (emails.find((e) => email === e)) {
			alert('Email ' + email + ' уже добавлен в список для рассылки.')
		} else if (email === '') {
			alert('Вы не ввели email.')
		}
		else {
			setEmails([...emails, email]);
		}
	}
	function addUserEmail (user) {
		setEmail(user.email)
		addEmail()
	}
	function inputEmail (e) {
		setEmail(e.target.value)
	}
	return pug`div test`;
	return (
		<form className style={{ margin: '0 0em', fontSize: '18px', overflow: 'scroll' }} method="POST" action="/submit-form">
			<div>
				<div style={{ minWidth: '50%', margin: '0 1em' }}>
					<div className="mb-3">
						<label htmlFor="title" className="form-label">Заголовок письма</label>
						<input type="text" className="form-control" id="title" />
					</div>
					<div className="mb-3">
						<label htmlFor="title" className="form-label">Текст письма</label>
						<textarea rows={10} className="form-control" id="title" defaultValue={" "} />
					</div>
				</div>
				<div className='row m-2'>
					<div className='col '>
						<b>Пользователи сайта:</b>
						<div className="form-check bg-light rounded border px-3  py-2" style={{ overflowY: 'scroll', margin: '', height: "300px", width: "" }}>
							<table>
								{emails.length > 0 ? users.map((user, index) => {
									return <tr>
										<td className='pe-3'>{index}.</td>
										<td className='pe-3'>{user.surname}</td>
										<td className='pe-3'>{user.name}</td>
										<td className='pe-3'>{user.email}</td>
										<td>
											<button type="button" className="py-1 px-3 btn btn-success" style={{ minWidth: "350px", fontSize: "18px" }} onClick={() => addUserEmail(user)}>Добавить Email в список рассылки</button>
										</td>
									</tr>
								})
									:
									<div className='alert'>Список введенных Email пуст.</div>}
							</table>
						</div>
					</div>
					<div className='col' style={{ minWidth: '40%' }}>
						{editableEmail !== null ?
							<div className=" d-flex flex-column" >
								<div className="mb-2" >
									<label htmlFor="title" className="form-label">Измените введенный Email</label>
									<input type="text" className="form-control" id="title"
										onChange={inputEmail}
										value={editableEmail} />
								</div>
								<div className="mb-3 flex-row " style={{ minWidth: '40%' }}>
									<button type='button' onClick={addEmail} className="btn btn-success btn-fluid " >Изменить Email</button>
									<div className="mx1em"></div>
									<button type='button' onClick={() => setEditableEmail(null)}
										className="btn btn-secondary btn-fluid " >Отменить изменения</button>
								</div>
							</div>
							:
							<div className="col d-flex flex-column" style={{}}>
								<div className="mb-3" style={{ minWidth: '50%' }}>
									<label htmlFor="title" className="form-label">Введите Email</label>
									<input type="text" className="form-control" id="title"
										onChange={inputEmail}
										value={email} />
								</div>
								<div className="mb-3" style={{ minWidth: '40%', margin: '0 0' }}>
									<button type='button' onClick={addEmail} className="btn btn-success container-fluid"
										style={{ minWidth: '100%', fontSize: '18px' }}>Добавить Email для рассылки</button>
								</div>
								<button type='button' onClick={addEmail} className="btn btn-success   px-5"
									style={{ minWidth: "100 %", minHeight: '180px', fontSize: '28px' }}>Разослать письмо по почтам</button>

							</div>
						}
					</div>


					<div className="col  ">
						<b>Список Email для рассылки писем:</b>
						<div className="rounded bg-light border ps-3 py-2" style={{ overflowY: 'scroll', height: '300px' }}>
							<table>
								{emails.length > 0 ? emails.map((email, index) => {
									return <tr className='my5px' key={email}>
										<td className='pe-3'>{index + 1}.</td>
										<td className='pe-3'>{email}</td>
										<td className=''><button type="button" className="btn btn-success" onClick={() => setEditableEmail(email)}>
											<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-pencil" viewBox="0 0 16 16">
												<path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
											</svg>
										</button>
										</td>
										<td><button type="button" className="btn btn-danger mx1em" onClick={() => deleteEmail(email)}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
											<path fill-rule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z" />
											<path fill-rule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z" />
										</svg></button>
										</td>
									</tr>
								})
									:
									<div className='alert'>Список введенных Email пуст.</div>
								}
							</table>
						</div>

					</div>

				</div>
			</div>
		</form >


	);
}

export default App;
